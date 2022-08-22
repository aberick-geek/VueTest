<script setup>
    const props = defineProps(['formVals','ereure']);
    /*
    const $emit = defineEmits(['mdp','country','town','sexe'])
     @change="$emit('mdp', props.formVals.mdp)"
    */

</script>
<template>
    <div>
        <input type="password" name="mdp" v-model="props.formVals.mdp" placeholder="Mot de passe">
        <small class="text-red-400" v-if="props.ereure.mdp.$errors[0]">{{ props.ereure.mdp.$errors[0].$message }}</small>
        <div id="localisation">
            <div class="flex flex-wrap">
                <label class="self-end" for="ville">-- votre pays --</label>
                <select name="pays" v-model="props.formVals.country" id="country">
                    <option value="CM">Cameroun</option>
                    <option value="US">United State</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Allemagne</option>
                    <option value="HK">Angleterre</option>
                </select>
                <div class="w-full">
                    <small class="text-red-400" v-if="props.ereure.country.$errors[0]">{{ props.ereure.country.$errors[0].$message }}</small>
                </div>
                
            </div>
            <div class="flex flex-wrap">
                <label for="ville">-- votre ville --</label>
                <select name="ville" v-model="props.formVals.town" id="town">
                    <option value="bonaberi">Bonaberi</option>
                    <option value="bessengue">Bessengue</option>
                    <option value="bonanjo">Bonanjo</option>
                    <option value="akwa">Akwa</option>
                    <option value="bali">Bali</option>
                    <option value="yaounde">Yaounde</option>
                </select>
                <div class="w-full">
                    <small class="text-red-400" v-if="props.ereure.town.$errors[0]">{{ props.ereure.town.$errors[0].$message }}</small>
                </div>
            </div>
        </div>
        <div id="genre" class="flex flex-wrap">
            <div class="w-full">
                <div class="mx-5">
                    <label for="homme" value="homme">Homme </label>
                    <input type="radio" v-model="props.formVals.sexe" value="homme" name="sexe" id="homme">
                </div>
                <div class="mx-5">
                    <label for="femme" value="femme">Femme </label>
                    <input type="radio" v-model="props.formVals.sexe" value="femme" name="sexe" id="femme">
                </div>
            </div>
            <div class="w-full">
                <small class="text-red-400" v-if="props.ereure.sexe.$errors[0]">{{ props.ereure.sexe.$errors[0].$message }}</small>
            </div>
        </div>
    </div>

</template>

<!--
    <label for="age" class="block text-sm font-semibold text-gray-900">Age</label>
    <div class="mt-1 relative rounded-sm shadow-sm">
    <input type="number" name="age" id="age"
    class="focus:ring-indigo-500 focus:border-indigo-500
    block w-full sm:text-sm border-gray-300 rounded-md pl-2"
    placeholder="20" v-model="props.formVals.age">
    </div>
-->