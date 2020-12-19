const Koa = require("koa");
const router = require("koa-router")();
const bodyParser = require("koa-bodyparser");
const app = new Koa();
const cors = require('@koa/cors');

let translations = require("../translations")

app.use(bodyParser());
app.use(router.routes()); // route middleware
app.use(cors())
// a simple car object that we can serve


// Route to handle GET request
router.get("/helloWorld", async (ctx, next) => {
  ctx.response.body = 'hello world';
  await next();
});

// Route to handle POST request
router.post("/helloWorld", async (ctx, next) => {
  console.log('payload in POST ', ctx.request.body)
  ctx.response.body = 'hello world ';
  await next();
});


router.get("/getLanguages", async (ctx, next) => {
  ctx.response.body = Object.keys(translations)
  ctx.response.headers['Access-Control-Allow-Origin'] = "*"
  await next();
});

router.get("/getTranslation/:language", async (ctx, next) => {
  let requestLanguage = ctx.params.language
  // console.log("translations ", translations)
  ctx.response.body = translations[requestLanguage]
  await next();
});

router.put("/translation", async (ctx, next) => {
  console.log('payload in POST ', ctx.request.body)

  console.log("original Translations",translations )
  translations = ctx.request.body
  console.log("new Translations",translations )

  ctx.response.body = translations;
  await next();
});

router.get("/getTranslation/", async (ctx, next) => {
  // console.log("translations ", translations)
  ctx.response.body = translations
  await next();
});







module.exports = app;
