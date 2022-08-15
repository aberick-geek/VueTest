<script setup>
    const props = defineProps(['formVals'])
</script>
<template>
    <div class="max-w-sm w-full justify-center lg:max-w-full lg:flex">
        <div class="border-r border-b border-l border-t border-gray-400 rounded-b 
        lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="flex items-center">
                <div class="w-70 h-70 rounded-full overflow-hidden mr-1 border-2 border-gray-300">
                    <img :src="props.formVals.photo" alt="profil de l'utilisateur" class="w-70 h-70">                    
                </div>
                <div class="text-sm">
                    <p v-text="props.formVals.email"></p>
                    <p class="text-gray-900 leading-5 text-xl"><strong v-text="props.formVals.nom+' '"></strong><strong v-text="props.formVals.prenom"></strong></p>
                    <p class="text-gray-600" v-text="props.formVals.age + 'ans'"></p>
                </div>
            </div>
        </div>
    </div>
</template>