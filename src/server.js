// require packages
const Koa = require("koa");
const router = require("koa-router")();
const mount = require("koa-mount");
var sqlite3 = require('sqlite3').verbose();
// var db = new sqlite3.Database('./helloWorld.sqlite');
console.log('Database helloWorld.sqlite created in project home directory')
// create an instance of the Koa object
const app = new Koa();
// mount the route
app.use(mount(require("./router/helloWorld.js")));
app.use(router.routes()); // route middleware
if (require.main === module) {
  app.listen(3000); // default
  console.log('Access sample endpoint by http://localhost:3000/helloWorld');
}

// db.serialize(function() {
//   db.run("CREATE TABLE lorem (info TEXT)");
 
//   var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//   for (var i = 0; i < 10; i++) {
//       stmt.run("Ipsum " + i);
//   }
//   stmt.finalize();
 
//   db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
//       console.log(row.id + ": " + row.info);
//   });
// });
 
// db.close();
