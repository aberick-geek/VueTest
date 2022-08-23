<script setup>
    import { compte } from '../../données/compte'
</script>
<template>
    <div class="grid grid-cols-1 grid-rows-[40%_35%_15%]">
        <div id="change-profil" class="flex p-5 justify-center items-center w-full">
            <div>
                <div class="mb-2 flex relative">
                    <div class="overflow-hidden flex justify-center items-center rounded-full border-2 border-gray-300">
                        <img :src=compte.image class="h-[250px] w-[270px]" alt="profil">
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
            <input type="text" name="nom" placeholder="Nom">
            <input type="text" name="prenom" placeholder="Prenom">
            <input type="text" name="age" placeholder="Age">
            <input type="email" name="email" placeholder="Email">
        </div>
        <div>
            <div>
                <h1>Parametres d'authentification</h1>
            </div>

            <input type="password" name="mdp" placeholder="Mot de passe">
            <input type="password" name="mdpRepeat" placeholder="Repeter le Mot de passe">
        </div>
    </div>
</template>