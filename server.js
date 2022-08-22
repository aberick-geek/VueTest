const express = require("express");
//const fs = require("fs")
const cors = require("cors")
const bodyParser = require("body-parser")

const host = 'localhost';
const port = 5174;

/*
  const requestListener = function (req, res) {
    fs.appendFile('../base.csv','bonjour,tonton,mr,keiver\n',(err) => {
        if (err) throw err
        console.log('successfull wirte');
    })
    res.end(`save`);
};
*/

const server = express()
server.use(
  cors({
    origin: "http://localhost:5173"
  })
)
server.use(bodyParser.urlencoded({
  extended:true
}))

server.get('/',(req, res) => {
  console.log("controle z");
  console.log(req.body)
  console.log("controle zoozo");
  res.json(req.body)
})
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
/*
const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser")

var corsConfig = {
  origin: 'http://localhost:5174',
  optionsSuccessStatus: 200
}
  
// New app using express module
const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}));
  
app.get("/", cors(corsConfig), function(req, res) {
  res.setHeader('Content-type', 'text/html')
});
  
app.post("/", function(req, res) {
  console.log(req.body)
  return res.json({
    message: 'Up and running!'
  })
});

app.listen(5174, function(){
  console.log("server is running on port 5174");
})
*/