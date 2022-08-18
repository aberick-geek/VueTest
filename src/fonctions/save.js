  import axios  from 'axios'
    export default async function onPush (){
      const mesDonnees = "test"
      axios({
          method: 'post',
          url: 'localhost:5173',
          data: mesDonnees
      })
      .then(function (reponse) {
          //On traite la suite une fois la réponse obtenue 
          console.log(reponse);
      })
      .catch(function (erreur) {
          //On traite ici les erreurs éventuellement survenues
          console.log(erreur);
      });
    }