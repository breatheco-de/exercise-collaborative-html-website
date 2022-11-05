let TM = (function(){
    
    var theObject = {};
    theObject.settings = {
        basePath: '',
        selector: 'span[require-file]',
        logRequests: false,
        windowExport: false,
        loadProperty: function(property,fromObject){
            let value = null;
            if(typeof(fromObject) !== 'undefined'){
                value = fromObject[property];
            } 
            else value = property;
            
            if(value === "false") value = false;
            if(typeof(value)!==undefined && value) this[property] = value;
        }
    };
    
    
    function loadSettings(newSettings){
        theObject.settings.loadProperty('basePath',newSettings);
        theObject.settings.loadProperty('logRequests',newSettings);
        theObject.settings.loadProperty('windowExport',newSettings);
    }

    function getPieces(cssSelector, parent){
        
        if(typeof parent === 'undefined') parent = document;
        
        let pieces = parent.querySelectorAll(cssSelector);
        let newPieces = [];
        pieces.forEach(function(elm){
           newPieces.push({ element: elm, filePath: elm.getAttribute('require-file')});
        });
        return newPieces;
    }
    
    theObject.loadPieces = function(pieces, newSettings){
        
        if(!Array.isArray(pieces) && typeof pieces === 'object') pieces = [pieces];
        
        if(typeof newSettings !== 'undefined') loadSettings(newSettings);
        
        pieces.forEach((piece)=>{
            getTemplate(piece.filePath, function(fileContent){
                if(typeof(piece.elementId) !== 'undefined'){
                    let element = document.querySelector(piece.elementId);
                    element.innerHTML = fileContent;
                    let nestedPieces = getPieces(theObject.settings.selector, element);
                    theObject.loadPieces(nestedPieces);
                } 
                else if(typeof(piece.element) !== 'undefined'){
                    piece.element.innerHTML = fileContent;
                    let nestedPieces = getPieces(theObject.settings.selector, piece.element);
                    theObject.loadPieces(nestedPieces);
                }
                else console.error('Error loading the template part: ', piece);
            });
        });
    }
    
    function getTemplate(path, successCallback){
        
        path = theObject.settings.basePath+path;
        var ajax = new XMLHttpRequest();
        ajax.open("GET", path, true);
        ajax.addEventListener('load',(response) => {
            if (ajax.readyState == 4 && ajax.status == 200) {
                if(theObject.settings.logRequests) console.log('The following path was successfully loaded: '+path);
                successCallback(ajax.responseText);
            }
            else if(ajax.status == 404) console.error('The following template path was not found: '+path);
            else if(ajax.status != 200) console.warn('There was an issue loading the following template path: '+path);
        });
        ajax.addEventListener('error',() => {
             console.error('The following template path was imposible to load: '+path);
        });
        ajax.send();
    }
    
    theObject.start = function(){
        
        const body = document.querySelector('body');
        const settings = {
            selector: 'span[require-file]',
            basePath: body.getAttribute('base-template-path'),
            logRequests: body.getAttribute('log-template-requests')
        }
        
        let newPieces = getPieces(settings.selector);
        
        if(settings.logRequests && newPieces.length === 0) 
            console.warn("No template parts were found or loaded, make sure you are using <span> tags with the 'require-file' attribute");
        
        theObject.loadPieces(newPieces, settings);
    }
    
    
    return theObject;
})();

var needsAutoload = function() {
    var scripts = document.querySelectorAll('script');
    var autoload = false;
    var includedViaScriptTag = false;
    scripts.forEach(function(elm){
        if(elm.src.indexOf('html-template-engine') !== -1){
            includedViaScriptTag = true;
            if(elm.src.indexOf('?autoload') !== -1) autoload = true;
        } 
    });
    return { autoload: autoload, includedViaScriptTag: includedViaScriptTag };
};

const context = needsAutoload();
if(context.autoload) window.onload = TM.start;
else if(context.includedViaScriptTag) console.warn("Include ?autoload at the end of the script url if you want to autoload the template parts without using any javascript \n For example: <script type=\"text/javascript\" src=\"html-template-engine.js?autoload\"></script>");
module.exports = TM;