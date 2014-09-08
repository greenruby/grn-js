# GreenRuby JS Frontend

This is a prototype for a frontend of GreenRuby, done with Angular JS.

We have a trello board to keep track of what we want and what is done:
https://trello.com/b/6QXa4Jdk/grn-v2

It is still an early stage of development. If you want to contribute, just send a mail to mose@greenruby.org or joni us on freenode irc channel #greenruby

## Development setup

Install node.js

- Through [nvm](https://github.com/creationix/nvm) (Recommanded by @tubaxenor and @mose)
- Directly download from [nodejs.org](http://nodejs.org/download/)

It's better to install/use nodejs >= v0.8

    git clone git@github.com:greenruby/grn-js.git
    cd grn-js
    npm install -g grunt-cli
    npm install
    npm install --save-dev
    bundle
    grunt server

It should auto launch the site on your default browser, if not, go to `http://localhost:8000/index.html`

## Done

* We have some persistent link working now : `http://localhost:8000/#/34` will redirect to issue number 34
* I have prepared a split between the issue and the search views. It will allow us to have cleaner templates and persistent search links like `http://localhost:8000/#/search/ruby`

## Next Steps

Before the transition into the real templates, there is a few steps that need to be done :

- Handling the route to be able to have persistent link to specific editions, like http://greenruby.org/grn-081.html
- Handling the splitting between categories (look, use, etc)
- and more that we will discuss together !
- ~~Add jslint for some basic js convention (@tubaxenor)~~

