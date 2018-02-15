# Git Collabotarive

Use this project to practice your students skills in GIT while developing a porfolio website.

Each working works on a different file, for a different part of the website and the teacher can run the entire website. The PHP code will take care of putting all the pieces together.

## Instructions

1. As a teacher, please create a new repository in github.com and invite your students.

2. Then, clone this repository and change the remote to your new repository
```sh
$ git clone git@bitbucket.org:codingacademy/git-collaboration-vanilla-js.git
$ git remote set-url <the new repository>
```
3. Push everything to the new respository you have just created.
```sh
$ git push origin master
```

## Now your students can download your repository and collaborate with you

1. Pick what website you want to build with your students.

2. Each student will have to clone your new repository and develop one piece of the website you have chosee, each project is divided in pieces inside its **templates/** directory.

3. When students finish, they have to commit and push to your repository.


## Addional complementary info

Inside each website, there is a **pieces** variable that contains all the pieces to be loaded, for example:

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
