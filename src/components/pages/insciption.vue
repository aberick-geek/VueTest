<script setup>
import etapeFirst from "../etapes/etapeFirst.vue";
import etapeSecond from "../etapes/etapeSecond.vue";
import etapeThird from "../etapes/etapeThird.vue";
import etapeLast from "../etapes/etapeLast.vue";
import { ref, reactive } from "vue";
import router from "../../router";
import useVuelidate from "@vuelidate/core";
import axios from "axios";
import {
  required,
  email,
  minLength,
  maxLength,
  minValue,
  maxValue,
} from "@vuelidate/validators";

/*
    let nom = ref('')
    let prenom = ref('')
    let age = ref('')
    let mail = ref('')
    let mdp = ref('')
    let sexe = ref('')
    let country = ref('')
    let town = ref('')
*/
const inscription = ref(false);
let pointer = ref(0);

const user = reactive({
  email: "",
  password: ""
})

const Token = reactive({
  id: "",
  state: "",
})

const valeurs = reactive({
  id: 0,
  nom: "",
  prenom: "",
  age: "",
  mail: "",
  mdp: "",
  country: "",
  town: "",
  sexe: "",
  photo: "",
});

const rules = {
  nom: {
    required,
    minLength: minLength(3),
    maxLength: maxLength(25),
  },
  prenom: {
    required,
    minLength: minLength(3),
    maxLength: maxLength(25),
  },
  age: {
    required,
    minValue: minValue(18),
    maxValue: maxValue(70),
  },
  sexe: {
    required,
  },
  mail: {
    required,
    email,
    maxLength: maxLength(40),
  },
  country: {
    required,
  },
  town: {
    required,
  },
  mdp: {
    required,
    minLength: minLength(8),
  },
};

const v$ = useVuelidate(rules, valeurs);

const etapeSui = async () => {
  if (pointer.value == 0) {
    v$.value.nom.$validate();
    v$.value.prenom.$validate();
    v$.value.age.$validate();
    v$.value.mail.$validate();
    ///console.log(v$.value,formVals(),valeurs,v$.value.$errors.length,nom,prenom);
    if (v$.value.$errors.length == 0) {
      pointer.value++;
      //console.log(pointer.value);
    }
  } else if (pointer.value > 0) {
    v$.value.sexe.$validate();
    v$.value.mdp.$validate();
    v$.value.country.$validate();
    v$.value.town.$validate();
    if (v$.value.$errors.length == 0) {
      pointer.value++;
    }
  }
};
const etapePre = () => {
  if (v$.value.$errors.length == 0) {
    pointer.value--;
  }
};

const ereure = {};

const etapes = [etapeFirst, etapeSecond, etapeThird, etapeLast];
function onPush(register) {
  console.log(register);

  axios
    .post("http://localhost:5174", {
      data: register,
      title: 'soumission de donn??e'
    })
    .then((reponse) => {
      router.push({ path: "/dashboard" });
      console.log(reponse, "requetes post envoyer avec ");
    })
    .catch((erreur) => {
      throw erreur;
    });
}
function sign_in(user){
  axios
    .post("http://localhost:5174", {
      data: user,
      title: 'verification de donn??e'
    })
    .then((reponse) => {
      console.log(reponse.data, "requetes post envoyer avec ");
      Token.state = reponse.data.state
      if(reponse.data.id){
        Token.id = reponse.data.id
        Session["id"]=Token.id
        router.push({ path: "/dashboard" });
      }
    })
    .catch((erreur) => {
      throw erreur;
    });
}
</script>

<!--
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
-->

<template>
  <div class="flex justify-center items-center m-10 h-[100%]">
    <div
      id="container"
      class="relative w-[768px] h-[480px] rounded-lg md:overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.2)] bg-gradient-to-b from-[#efefef] to-[#ccc]"
      :class="{ 'inscription-active': inscription }"
    >
      <div
        id="overlay-container"
        class="absolute top-0 left-0 w-100% h-[100%] md:left-[50%] md:w-[50%] overflow-hidden z-[100] transition-transform duration-300 ease-in-out"
        :class="{ 'translate-x-[-100%]': inscription }"
      >
        <div
          id="overlay"
          class="relative left-[-100%] h-[100%] w-[200%] bg-[url('../images/image-form7.jpg')] bg-center bg-no-repeat bg-cover text-white translate-x-0 transition-transform duration-300 ease-in-out flex items-center justify-between"
        >
          <div
            id="overlay-left"
            class="absolute py-[70px] px-[40px] top-0 flex flex-col items-center justify-around w-[50%] h-[100%] text-center translate-x-0 transition-transform duration-100 ease-in-out"
            :class="{ 'translate-x-[100%]': inscription }"
          >
            <h1>Page de connexion</h1>
            <p>Veuillez entrez vos donn??es de connexion</p>
            <button
              class="button active:scale-[.9] focus:outline-none bg-transparent border-white"
              @click="inscription = !inscription"
            >
              Se connect??
            </button>
          </div>
          <div
            id="overlay-right"
            class="absolute py-[70px] px-[40px] top-0 flex flex-col items-center justify-around right-0 w-[50%] h-[100%] text-center translate-x-0 transition-transform duration-100 ease-in-out"
            :class="{ 'translate-x-[100%]': inscription }"
          >
            <h1>Inscription</h1>
            <p>
              Si vous n'avez pas de compte.<br />
              cliquez ici pour creer un compte
            </p>
            <button
              class="button active:scale-[.9] focus:outline-none bg-transparent border-white"
              @click="inscription = !inscription"
            >
              S'inscrire
            </button>
          </div>
        </div>
      </div>
      <section
        id="inscription"
        class="md:w-[50%] w-[100%] h-[100%] left-0 z-[1] opacity-1"
        :class="{ 'md:translate-x-[100%]': inscription }"
      >
        <h1 class="mt-2 mb-2">Creer un Compte</h1>
        <div class="mt-0 mb-10 relative flex justify-between" v-if="pointer < 3">
          <ol class="flex">
            <li
              class="relative lg:w-[150px] w-[100px] text-center text-sm font-light after:content[''] after:absolute after:top-[200%] after:left-[50%] after:w-5 after:h-5 after:rounded-full after:bg-indigo-500 after:z-20"
            >
              etape 1
            </li>
            <li
              class="relative lg:w-[150px] w-[100px] text-center text-sm font-light before:content[''] before:absolute before:left-[-50%] before:w-full before:h-1 before:top-[calc(200%+0.5rem)] after:bg-gray-300 before:bg-gray-300 after:content[''] after:absolute after:top-[200%] after:left-[50%] after:w-5 after:h-5 after:rounded-full after:z-20"
              :class="{ etaperempli: pointer >= 1 }"
            >
              etape 2
            </li>
            <li
              class="relative lg:w-[150px] w-[100px] text-center text-sm font-light before:content[''] before:absolute before:left-[-50%] before:w-full before:h-1 before:top-[calc(200%+0.5rem)] after:bg-gray-300 before:bg-gray-300 after:content[''] after:absolute after:top-[200%] after:left-[50%] after:w-5 after:h-5 after:rounded-full after:z-20"
              :class="{ etaperempli: pointer >= 2 }"
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
              :key="ereure"
              :ereure="v$"
            >
            </component>
        </div>
        <div>
          <button
            v-if="pointer > 0"
            class="button self-start bg-[#252ed6] mr-1 text-white active:scale-[.9] focus:outline-none bg-transparent border-white"
            @click="etapePre"
          >
            pr??c??dent
          </button>
          <button
            v-if="pointer <= 2"
            class="button self-end bg-[#252ed6] ml-1 text-white active:scale-[.9] focus:outline-none bg-transparent border-white"
            @click="etapeSui"
          >
            suivant
          </button>
          <button
            v-if="pointer > 2"
            class="button bg-[#252ed6] text-white active:scale-[.9] focus:outline-none bg-transparent border-white"
            @click="onPush(valeurs)"
          >
            terminer
          </button>
        </div>
        <div class="absolute md:hidden right-[5%] top-[90%]">
          <button
            class="border-[1px] px-2 rounded-[5px] text-[#252ed6]"
            @click="inscription = !inscription"
          >
            <i class="fa fa-sign-in text-xl" aria-hidden="true"></i>
          </button>
        </div>
      </section>
      <section
        id="connexion"
        class="md:w-[50%] w-[100%] h-[100%] left-0 z-[2]"
        :class="{
          'md:translate-x-[100%] translate-x-[-120%] opacity-1 z-[0]': inscription,
        }"
      >
        <h1>Entrez vos identifiants</h1>
        <input type="email" placeholder="Email" v-model="user.email"/>
        <small class="text-red-400" v-if="Token.state === 'adresse mail incorrect'">{{ Token.state }}</small>
        <input type="password" placeholder="Mot de passe" v-model="user.password"/>
        <small class="text-red-400" v-if="Token.state === 'mot de passe invalide'">{{ Token.state }}</small>
        <button
          class="button bg-[#252ed6] text-white active:scale-[.9] focus:outline-none
           bg-transparent border-white" @click="sign_in(user)"
        >
          Se connect??
        </button>
        <div class="absolute md:hidden left-[10%] top-[90%]">
          <button
            class="border-[1px] px-2 rounded-[5px] text-[#252ed6]"
            @click="inscription = !inscription"
          >
            <i class="fa fa-sign-in text-xl" aria-hidden="true"></i>
          </button>
        </div>
      </section>
    </div>
  </div>
</template>
