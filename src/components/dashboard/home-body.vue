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

</script>
<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div id="poste" v-for="poste in postes"
            class="overflow-hidden bg-gradient-to-bl to-blue-200 from-blue-300 rounded-md h-[250px] duration-500 shadow-md hover:scale-110 pointer">
            <div id="image" class="h-[80%] w-full bg-center"
                v-bind:style="{ backgroundImage: 'url(' + poste.image + ')' }">
            </div>
            <div id="description-poste" class="h-[20%] p-2 flex flex-row justify-between">
                <div class="flex flex-row">
                    <div id="post-user-profil"
                        class="h-[40px] w-[40px] mx-2 rounded-full bg-[url('/images/image-form3.jpg')] bg-center">
                    </div>
                    <div id="post-user-details" class="flex flex-col items-center justify-start">
                        <div id="post-name" class="text-xl">
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
</template>