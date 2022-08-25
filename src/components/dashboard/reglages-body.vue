<script setup>
    import { compte } from '../../données/compte'
    import axios from 'axios'
    import { onMounted,reactive } from 'vue'

    var user = reactive({
        prenom:'',
        nom:'',
        age:0,
        mail:'',
        mdp:'',
        sexe:'',
        photo:'',
        country:'',
        town:'',
    })

    onMounted(() => {
        axios
        .post("http://localhost:5174",{
            data: compte.id,
            title: 'enregistré les modifications'
        })
        .then((reponse) => {
        user.nom =reponse.data.nom
        user.prenom =reponse.data.prenom
        user.age =reponse.data.age
        user.email =reponse.data.email
        user.mdp =reponse.data.mdp
        user.country =reponse.data.country
        user.town =reponse.data.town
        user.sexe =reponse.data.sexe
        user.photo =reponse.data.photo
        console.log(user, "requetes post envoyer avec ");
        })
        .catch((erreur) => {
        throw erreur;
        });
    })

    const save = (user) => {
        axios
        .post("http://localhost:5174",{
            data: compte.id,
            title: 'enregistré les modifications'
        })
        .then((reponse) => {
        console.log(reponse.data, "requetes post envoyer avec ");
        })
        .catch((erreur) => {
        throw erreur;
        });
    }
</script>
<template>
    <div class="grid grid-cols-1 grid-rows-[40%_40%_15%] px-20">
        <div id="change-profil" class="flex p-5 justify-center items-center w-full">
            <div>
                <div class="mb-2 flex relative">
                    <div class="overflow-hidden flex justify-center items-center rounded-full border-2 border-gray-300">
                        <img :src=user.photo class="h-[250px] w-[250px]" alt="profil">
                    </div>
                    <button class="absolute border-2 active:scale-[.9] duration-200 border-gray-200 bg-red-500 px-4 py-2 rounded-full right-5 bottom-3">
                        <i class="fa fa-trash-o text-2xl"></i>
                    </button>
                </div>
                <input id="import-photo" name="import-photo" type="file" accept="image/png, image/jpg, image/jpeg" class="hidden">
                <button class="active:scale-[.9] duration-200">
                    <label for="import-photo" class="cursor-pointer">
                        <div class="bg-green-400 rounded-full overflow-hidden p-2 border-2 border-gray-400">
                            <i class="fa fa-edit text-3xl"> Editer votre profil</i>
                        </div>
                    </label>
                </button>
            </div>
        </div>
        <div class="mb-5">
            <div>
                <h1>Parametres de connexion</h1>
            </div>
            <input type="text" name="nom" placeholder="Nom" v-model="user.nom">
            <input type="text" name="prenom" placeholder="Prenom" v-model="user.prenom">
            <input type="text" name="age" placeholder="Age" v-model="user.age">
            <input type="email" name="email" placeholder="Email" v-model="user.email">
            <div id="localisation">
            <div class="flex flex-wrap">
                <label class="self-end" for="ville">-- votre pays --</label>
                <select name="pays" v-model="user.country" id="country">
                    <option value="CM">Cameroun</option>
                    <option value="US">United State</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Allemagne</option>
                    <option value="HK">Angleterre</option>
                </select>
            </div>
            <div class="flex flex-wrap">
                <label for="ville">-- votre ville --</label>
                <select name="ville" v-model="user.town" id="town">
                    <option value="bonaberi">Bonaberi</option>
                    <option value="bessengue">Bessengue</option>
                    <option value="bonanjo">Bonanjo</option>
                    <option value="akwa">Akwa</option>
                    <option value="bali">Bali</option>
                    <option value="yaounde">Yaounde</option>
                </select>
            </div>
        </div>
        </div>
        <div>
            <div>
                <h1>Parametres d'authentification</h1>
            </div>

            <input type="password" name="mdp" placeholder="Mot de passe" v-model="user.mdp">
            <input type="password" name="mdpRepeat" placeholder="Repeter le Mot de passe">
            <div class="w-full pt-4 items-center justify-center flex">
                <button @click="save(user)" class="button active:scale-[.9] focus:outline-none text-2xl bg-green-400">Enregistré</button>
            </div>
        </div>
    </div>
</template>