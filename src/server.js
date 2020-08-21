//Server
const express = require('express');
const server = express();

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

//nunjucks config
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
});

server
  //
  .use(express.urlencoded({ extended: true }))
  //configuring static archives (styles, scripts)
  .use(express.static("public"))                //public content
  //application routes
  .get("/", pageLanding)
  .get("/mechanic", pageStudy)
  .get("/repair", pageGiveClasses)
  .post("/save-classes", saveClasses)
  //Start server
  .listen(5000);