<script setup>
    //import { onMounted } from 'vue'
    /*import formError from '../../fonctions/formError'
    import { onMounted } from 'vue'
    const error = formError()

    onMounted(() => {
        console.log(error.error.nomErr);
    })
    */
    const props = defineProps(['formVals','ereure']);
    /*onMounted(() => {
        console.log(props.ereure);
        const $emit= defineEmits(['nom','prenom'...])
    })*/
</script>
<template>  
    <div id="etape1" class="my-4">
      <input type="text" name="nome" v-model="props.formVals.nom" placeholder="Nom">
      <small class="text-red-400" v-if="props.ereure.nom.$errors[0]">{{ props.ereure.nom.$errors[0].$message }}</small>
      <input type="text" name="prenom" v-model="props.formVals.prenom" placeholder="Prenom">
      <small class="text-red-400"  v-if="props.ereure.prenom.$errors[0]">{{ props.ereure.prenom.$errors[0].$message }}</small>
      <input type="number" name="age" v-model="props.formVals.age" placeholder="Age">
      <small class="text-red-400" v-if="props.ereure.age.$errors[0]">{{ props.ereure.age.$errors[0].$message }}</small>
      <input type="email" name="email" v-model="props.formVals.mail" placeholder="Email">
      <small class="text-red-400" v-if="props.ereure.mail.$errors[0]">{{ props.ereure.mail.$errors[0].$message }}</small>
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