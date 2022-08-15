<script setup>
    const props = defineProps(['formVals'])
</script>
<template>
    <div>
        
        <div id="localisation">
            <div>
                <select name="pays" v-model="props.formVals.country" id="country">
                    <option value="choix">-- votre pays --</option>
                    <option value="CM">Cameroun</option>
                    <option value="US">United State</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Allemagne</option>
                    <option value="HK">Angleterre</option>
                </select>
            </div>
            <div>
                <select name="ville" v-model="props.formVals.town" id="town">
                    <option value="choix">-- votre ville --</option>
                    <option value="bonaberi">Bonaberi</option>
                    <option value="bessengue">Bessengue</option>
                    <option value="bonanjo">Bonanjo</option>
                    <option value="akwa">Akwa</option>
                    <option value="bali">Bali</option>
                    <option value="yaounde">Yaounde</option>
                </select>
            </div>
        </div>
        <div id="genre" class="flex flex-row mt-5">
            <div class="mx-5">
                <label for="homme" value="homme">Homme </label>
                <input type="radio" v-model="props.formVals.sexe" value="homme" name="sexe" id="homme">
            </div>
            <div class="mx-5">
                <label for="femme" value="femme">Femme </label>
                <input type="radio" v-model="props.formVals.sexe" value="femme" name="sexe" id="femme">
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