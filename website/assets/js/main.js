document.addEventListener("mouseover", function(e){

    if(e.target.classList.contains("coffee-btn")){
        e.target.style.transform = "scale(1.08)";
        e.target.style.backgroundColor = "#a67c52";
    }
});

document.addEventListener("mouseout", function(e){

    if(e.target.classList.contains("coffee-btn")){
        e.target.style.transform = "scale(1)";
        e.target.style.backgroundColor = "#c8a27a";
    }
});

document.addEventListener("click", function(e){

    if(e.target.classList.contains("coffee-btn")){

        if(e.target.innerText === "Order your Coffee"){
            e.target.innerText = "Coffee on the way... ☕";
            e.target.style.color = "black";
        } 
        else{
            e.target.innerText = "Order your Coffee";
            e.target.style.color = "white";
        }
    }
});

document.addEventListener("mouseover", function(e){

if(e.target.classList.contains("nav-btn")){
    e.target.style.color = "#a67c52";
}
});

document.addEventListener("mouseout", function(e){

if(e.target.classList.contains("nav-btn")){
    e.target.style.color = "#333";
}
});

document.addEventListener("click", function(e){

if(e.target.classList.contains("search-icon")){
    alert("Search feature coming soon 🔍");
}
});

