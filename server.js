const express = require("express");
const fs = require("fs")
const lineReader = require('line-reader');
const cors = require("cors")
const bodyParser = require("body-parser")
const CSVToJSON = require("csvtojson")
//const csv = require("csv-parser")

function ConvertToCSV(obj) {
  var line = '';
  var str = '';
  for (var index in obj) {
      if (line != '') line += ','

      line += obj[index];
  }

  str += line;

return str;
}


const host = 'localhost';
const port = 5174;
let id = 0

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
server.use(express.json())

server.post('/',(req,res) => {
  console.log(req.body.title)
  console.log(req.body.data)
  if (req.body.title === 'soumission de donnée'){
    req.body.data.id = id
    id++
    const user = ConvertToCSV(req.body.data)
    fs.appendFile('./src/données/base.csv', user +'\n',(err) => {
      if (err) throw err
      console.log('successfull wirte');
    })
  res.end(`save`+ req.body);
  }
  if (req.body.title === 'enregistré les modifications') {
      const id = req.body.data
      CSVToJSON().fromFile('./src/données/base.csv').
      then(data => {
        for (let i = 0; i < data.length; i++) {
          if(id==data[i].id){
            res.send(data[i])
          }
        }
      }).catch(err => {
        console.log(err);
      })
  }
  if (req.body.title === 'verification de donnée') {
    const user = req.body.data
    CSVToJSON().fromFile('./src/données/base.csv').
    then(data => {
      for (let i = 0; i < data.length; i++) {
        if(user.email===data[i].email){
          if(user.password===data[i].mdp){
            const Token = {
              id: data[i].id,
              state: "validé"
            }
            res.send(Token)
            break
          }else{
            const Token = {
              state: "mot de passe invalide"
            }
            res.send(Token)
            break
          }
        }else{
          if (i == data.length-1) {
            const Token = {
              state: "adresse mail incorrect"
            }
            res.send(Token)
          }
        }
      }
    }).catch(err => {
      console.log(err);
    })
  }
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