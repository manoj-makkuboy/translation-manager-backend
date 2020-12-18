const Koa = require("koa");
const router = require("koa-router")();
const bodyParser = require("koa-bodyparser");
const app = new Koa();

app.use(bodyParser());
app.use(router.routes()); // route middleware
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
  ctx.response.body = [
    {languageId: "english", displayText: "English"},
    {languageId: "Hindi", displayText: "Hindi"},
    {languageId: "French", displayText: "French"},
  ]
  await next();
});

router.get("/getTranslation/:language", async (ctx, next) => {
  let queryParams = ctx.params
  console.log("queryParams", queryParams)
  ctx.response.body = {
    "HELLO_WORLD": "hello world",
    "CANCEL": "cancel"
  }
  await next();
});







module.exports = app;
