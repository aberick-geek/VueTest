<script setup>
    import etapeFirst from './etapes/etapeFirst.vue'
    import etapeSecond from './etapes/etapeSecond.vue'
    import etapeThird from './etapes/etapeThird.vue'
    import etapeLast from './etapes/etapeLast.vue'
    import formVals from "../fonctions/stockForm"
    import { ref } from 'vue'

    import onPush from '../fonctions/save'

    const inscription = ref(false)
    const pointer = ref(3)
    const valeurs = formVals()
    valeurs.photo = '../../images/user.png'
    /*const props = defineProps(['formError'])
    props.formError='oui'*/
    const etapes = [
        etapeFirst,
        etapeSecond,
        etapeThird,
        etapeLast,
    ]
    
</script>

<script>
  import useVuelidate from '@vuelidate/core'
  import { required, email, minLength, maxLength, minValue, maxValue } from '@vuelidate/validators'
export default {
  data() {
    return {
      age: 0,
      nom: '',
      prenom: '',
      mail: '',
      mdp: '',
      sexe: '',
      country: '',
      town: '',
      photo: '',
      v$: useVuelidate(),
    }
  },
  methods: {

    form (){
      return this.v$
    },
    etapeSui (){
      if (this.pointer == 0) {
        this.age = this.valeurs.age
        this.nom = this.valeurs.nom
        this.prenom = this.valeurs.prenom
        this.mail = this.valeurs.email
        this.v$.age.$validate()
        this.v$.nom.$validate()
        this.v$.prenom.$validate()
        this.v$.mail.$validate()
        if(this.v$.$errors.length == 0){
          this.pointer++
        }
      } else if(this.pointer > 0){
        this.sexe = this.valeurs.sexe
        this.mdp = this.valeurs.mdp
        this.country = this.valeurs.country
        this.town = this.valeurs.town
        this.photo = this.valeurs.photo
        this.v$.sexe.$validate()
        this.v$.mdp.$validate()
        this.v$.country.$validate()
        this.v$.town.$validate()
        if(this.v$.$errors.length == 0){
          this.pointer++
        }
      }
    },

    

    etapePre (){
        if(this.v$.$errors.length == 0){
          this.pointer--
        }
    },
    
  },
  validations: {
    nom: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(25)
    },
    prenom: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(25)
    },
    age: {
      required,
      minValue: minValue(18),
      maxValue: maxValue(70)
    },
    sexe: {
      required
    },
    mail: {
      required,email,
      maxLength: maxLength(40)
    },
    country: {
      required
    },
    town: {
      required
    },
    mdp: {
      required,
      minLength: minLength(8),
    },
  }
}


</script>

<template>
    <div class="flex justify-center items-center m-10 h-[100%]">
    <div id="container" class="relative w-[768px] h-[480px] rounded-lg 
      md:overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.2)] bg-gradient-to-b from-[#efefef] to-[#ccc]"
      :class="{'inscription-active' : inscription}">
      <div id="overlay-container" class="absolute top-0 left-0 w-100% h-[100%] md:left-[50%] md:w-[50%] overflow-hidden z-[100] 
      transition-transform duration-300 ease-in-out" :class="{'translate-x-[-100%]' : inscription}">
        <div id="overlay" class="relative left-[-100%] h-[100%] w-[200%]
        bg-[url('../images/image-form7.jpg')] bg-center bg-no-repeat bg-cover text-white translate-x-0
        transition-transform duration-300 ease-in-out flex items-center justify-between">
          <div id="overlay-left" class="absolute py-[70px] px-[40px] top-0 flex flex-col items-center
            justify-around w-[50%] h-[100%] text-center
            translate-x-0 transition-transform duration-100 ease-in-out" :class="{'translate-x-[100%]' : inscription}">
            <h1>Page de connexion</h1>
            <p>Veuillez entrez vos données de connexion</p>
            <button class="button active:scale-[.9] focus:outline-none bg-transparent border-white" @click="inscription = !inscription">Se connecté</button>
          </div>
          <div id="overlay-right" class="absolute py-[70px] px-[40px] top-0 flex flex-col items-center
            justify-around  right-0 w-[50%] h-[100%] text-center
            translate-x-0 transition-transform duration-100 ease-in-out" :class="{'translate-x-[100%]' : inscription}">
            <h1>Inscription</h1>
            <p>Si vous n'avez pas de compte.<br> cliquez ici pour creer un compte</p>
            <button class="button active:scale-[.9] focus:outline-none bg-transparent border-white" @click="inscription = !inscription">S'inscrire</button>
          </div>
        </div>
      </div>
      <section id="inscription" class="md:w-[50%] w-[100%] h-[100%] left-0 z-[1] opacity-1" :class="{'md:translate-x-[100%]' : inscription}">
        <h1 class="mt-2 mb-2">Creer un Compte</h1>
        <div class="mt-0 mb-10 relative flex justify-between" v-if="pointer<3">
          <ol class="flex">
              <li 
                  class="relative lg:w-[150px] w-[100px] text-center text-sm font-light
                          after:content[''] after:absolute after:top-[200%] after:left-[50%] after:w-5 after:h-5
                          after:rounded-full after:bg-indigo-500 after:z-20"
                  >
              etape 1
              </li>
              <li 
                  class="relative lg:w-[150px] w-[100px] text-center text-sm font-light
                          before:content[''] before:absolute before:left-[-50%] before:w-full before:h-1 before:top-[calc(200%+0.5rem)]
                          after:bg-gray-300 before:bg-gray-300
                          after:content[''] after:absolute after:top-[200%] after:left-[50%] after:w-5 after:h-5
                          after:rounded-full after:z-20" :class="{'etaperempli':pointer>=1}"
                  >
              etape 2
              </li>
              <li 
                  class="relative lg:w-[150px] w-[100px] text-center text-sm font-light
                          before:content[''] before:absolute before:left-[-50%] before:w-full before:h-1 before:top-[calc(200%+0.5rem)]
                          after:bg-gray-300 before:bg-gray-300
                          after:content[''] after:absolute after:top-[200%] after:left-[50%] after:w-5 after:h-5
                          after:rounded-full after:z-20" :class="{'etaperempli':pointer>=2}"
                  >
              etape 3
              </li>
          </ol>
        </div>
        <!--<div></div>-->
        <div>
          <component 
          v-bind:is="etapes[pointer]"
          v-bind:formVals="valeurs"
          :key="ereure" :ereure="form()"
          >
          </component>
        </div>
          <div>
            <button  v-if="pointer>0" class="button self-start bg-[#252ed6] mr-1 text-white active:scale-[.9] focus:outline-none bg-transparent border-white" @click="etapePre">précédent</button>
            <button v-if="pointer<=2" class="button self-end bg-[#252ed6] ml-1 text-white active:scale-[.9] focus:outline-none bg-transparent border-white" @click="etapeSui">suivant</button>
            <button v-if="pointer>2" class="button bg-[#252ed6] text-white active:scale-[.9] focus:outline-none bg-transparent border-white" @click="onPush">terminer</button>
          </div>
          <div class="absolute md:hidden right-[5%] top-[90%]"><button class="border-[1px] px-2 rounded-[5px] text-[#252ed6]" @click="inscription = !inscription"><i class="fa fa-sign-in text-xl" aria-hidden="true"></i></button></div>
      </section>
      <section id="connexion" class="md:w-[50%] w-[100%] h-[100%] left-0 z-[2]" :class="{'md:translate-x-[100%] translate-x-[-120%] opacity-1 z-[0]' : inscription}">
        <h1>Entrez vos identifiants</h1>
        <input type="text" placeholder="Nom d'utilisateur">
        <input type="password" placeholder="Mot de passe">
        <button class="button bg-[#252ed6] text-white active:scale-[.9] focus:outline-none bg-transparent border-white">Se connecté</button>
        <div class="absolute md:hidden left-[10%] top-[90%]"><button class="border-[1px] px-2 rounded-[5px] text-[#252ed6]" @click="inscription = !inscription"><i class="fa fa-sign-in text-xl" aria-hidden="true"></i></button></div>
      </section>
    </div>
  </div>
</template>