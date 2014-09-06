# GreenRuby JS Frontend

This is a prototype for the new frontend of GreenRuby, done with Angular JS.

I have tried to keep it as bare as possible to have a clear understanding of what is responsible of what.

## Starting The Prototype

### Install node.js

- Through [nvm](https://github.com/creationix/nvm) (Recommanded by @tubaxenor and @mose)
- Directly download from [nodejs.org](http://nodejs.org/download/)

It's better to install/use nodejs >= v0.8

```
$ npm install
```

### Launching prototype server

Just do

```
grunt server
```

It should auto launch the site on your default browser, if not, go to `http://localhost:8000/index.html`

## Next Steps

Before the transition into the real templates, there is a few steps that need to be done :

- Handling the route to be able to have persistent link to specific editions, like http://greenruby.org/grn-081.html
  - a possible way would be to use rewrite rules on server, to transform `/grn-081.html` into `/#issue-81` behind the scene
- Handling the splitting between categories (look, use, etc)
- and more that we will discuss together !
- ~~Add jslint for some basic js convention (@tubaxenor)~~

