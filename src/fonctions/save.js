  import axios  from 'axios'
  function ConvertToCSV(obj) {
        var line = '';
        var str = '';
        for (var index in obj) {
            if (line != '') line += ','

            line += obj[index];
        }

        str += line + '\r\n';

    return str;
}
    export default async function onPush (obj){
      //var user = JSON.stringify(obj)
      const user = ConvertToCSV(obj)
      console.log(user);
      const mesDonnees = user
      axios({
        headers:{
            'Content-Type':'application/json'
        },
          method: 'get',
          url: 'http://localhost:5173',
          body: { 
            nom : 'mesDonnees' 
          }
      })
      .then(function (reponse) {
          //On traite la suite une fois la réponse obtenue 
          console.log(reponse);
      })
      .catch(function (erreur) {
          //On traite ici les erreurs éventuellement survenues
          console.log(erreur,'bonjour les erreures');
      });
    }