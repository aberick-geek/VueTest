<script setup>
    const props = defineProps(['formVals']);
</script>
<template>  
    <div id="etape1" class="my-4">
      <input type="text" name="nom" @change="setNom($event.target.value)" v-model="props.formVals.nom" placeholder="Nom">
      <input type="text" name="prenom" v-model="props.formVals.prenom" placeholder="Prenom">
      <input type="text" name="age" v-model="props.formVals.age" placeholder="Age">
      <input type="email" name="email" v-model="props.formVals.email" placeholder="Email">
      <input type="password" name="mdp" v-model="props.formVals.mdp" placeholder="Mot de passe">
      <input type="password" name="mdpRepeat" v-model="props.formVals.mdpRepeat" placeholder="Repeter le Mot de passe">
    </div>
</template>

<!--
    <form class="flex flex-col space-y-3">
        <div>
            <label for="firstname" class="block text-sm font-semibold text-gray-900">Prénom</label>
            <div class="mt-1 relative rounded-sm shadow-sm">
                <input type="text" name="firstname" id="firstname"
                class="focus:ring-indigo-500 focus:border-indigo-500
                block w-full sm:text-sm border-gray-300 rounded-md pl-2"
                placeholder="Jean" v-model="props.formVals.firstname">
            </div>
        </div>
        <div>
            <label for="Lastname" class="block text-sm font-semibold text-gray-900">Nom</label>
            <div class="mt-1 relative rounded-sm shadow-sm">
                <input type="text" name="lastname" id="lastname"
                class="focus:ring-indigo-500 focus:border-indigo-500
                block w-full sm:text-sm border-gray-300 rounded-md pl-2"
                placeholder="Paul" v-model="props.formVals.lastname">
            </div>
        </div>
    </form>
-->  