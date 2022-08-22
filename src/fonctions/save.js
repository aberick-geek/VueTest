  import axios  from 'axios'
/*  function ConvertToCSV(obj) {
        var line = '';
        var str = '';
        for (var index in obj) {
            if (line != '') line += ','

            line += obj[index];
        }

        str += line;

    return str;
    //var user = JSON.stringify(obj)
}*/
export default async function onPush (register){
  console.log(register);
  
  axios.post('http://localhost:5174',register)
  .then((reponse)=>{
    console.log(reponse,'requetes post envoyer');
  })
  .catch((erreur) => {throw erreur})
}