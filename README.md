# Git Collabotarive

Use this project to practice your students skills in GIT while developing a porfolio website.

Each working works on a different file, for a different part of the website and the teacher can run the entire website. The PHP code will take care of putting all the pieces together.

## Instructions

1. Create a new repository that you will be using for this exercise.
2. Clone this repository and change the remote to your own repository
```sh
$ git clone git@bitbucket.org:codingacademy/git-collaboration-vanilla-js.git
$ git remote set-url <your new repository>
```
3. Push to your new repository to upload the files.

4. Each student will have to clone your new repository and develop one piece of the website, all the parts are divided in the the **templates/** directory.

5. Students push their changes and you pull into your computer.

6. At the end of the index.html you will finde an array describing each piece to be loadad and from what path to loaded it, for example:

```js
    let pieces = [
        { elementId: '#navbar', filePath: 'navbar.html'},
        { elementId: '#tagline', filePath: 'tagline.html'},
        { elementId: '#first_heading', filePath: 'first_heading.html'},
        { elementId: '#services', filePath: 'services.html'},
        { elementId: '#portfolio', filePath: 'portfolio.html'},
        { elementId: '#contact', filePath: 'contact.html'},
    ];
```
