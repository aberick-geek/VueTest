<script setup>
    import {postes} from '../../données/postes'
    import $cookies from 'vue-cookies'
    
    const favoris = defineProps(['saveFavoris'])


    const saveFavoris = () => {
        console.log('rien ne marche en realité');
        document.addEventListener('input',() => {
            setTimeout(() => {
                console.log('setTimeOut marche');
                $cookies.set('favoris', JSON.stringify(this.favoris))
            }, 300);
        })
        
    }
    const salut = () => {
        console.log('salut');
    }

</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div id="poste" v-for="poste in postes" v-on:mouseenter="salut()"
            class="overflow-hidden bg-gradient-to-bl to-blue-200 from-blue-300 rounded-t-md h-[250px] duration-500 shadow-md hover:scale-110 pointer">
            <div class="relative">
                <div id="image" class="h-[250px] w-full absolute flex blur-[.9px]">
                    <img :src="poste.image" alt="profil de l'utilisateur" class="w-full h-full">
                </div>
                <div id="description-poste" class="w-full absolute p-2 flex flex-row items-end justify-between">
                    <div class="flex flex-row">
                        <div id="post-user-profil" class="h-[40px] w-[40px] mx-2 rounded-full overflow-hidden">
                            <img src="../../../images/user.png" alt="profil de l'utilisateur" class="w-full h-full">
                        </div>
                        <div id="post-user-details" class="flex flex-col items-center justify-start">
                            <div id="post-name" class="text-xl text-white">
                                {{ poste.nom }}
                            </div>
                        </div>
                    </div>
                    <div id="favorite" class="cursor-pointer hover:text-red-500">
                        <input type="checkbox" hidden name="favorite" :value="poste" @click="saveFavoris" v-model="favoris" :id="poste.id">
                        <label class="cursor-pointer" :for="poste.id">
                            <i class="fa fa-heart text-2xl" aria-hidden="true"></i>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>