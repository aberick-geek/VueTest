<script setup>

</script>
<template>
    <div>
        <div id="addPost" class="grid grid-cols-1 grid-rows-[60%_40%]">
            <div id="ploadPhotoPost">
                <div>
                    <h1>Poster une photo</h1>
                </div>
                <label for="import-photo" class="flex my-5 flex-col justify-center items-center w-full h-80 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-100">
                    <div class="flex flex-col justify-center items-center pt-5 pb-6">
                        <i class="fa fa-cloud-upload text-5xl"></i>                
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Cliquez pour choisir une photo</span> ou bien glisser une photo ici</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">(taille max 800x400 px)</p>
                    </div>
                    <input id="import-photo" v-on:change="uploadFile" name="import-photo" type="file" accept="image/png, image/jpg, image/jpeg" class="hidden">
                </label>
                <div class="flex flex-2 justify-around items-center">
                    <button class="button active:scale-[.9] focus:outline-none bg-blue-400">modifier</button><button class="button active:scale-[.9] focus:outline-none bg-red-400">supprimer</button>
                </div>
            </div>
            <div id="descriptionPost">
                <div>
                    <h1>Ajouter une description</h1>
                </div>
                <div class="flex justify-start items-center">
                    <textarea class="text-2xl p-2 focus:outline-slate-500" rows="5" cols="65"></textarea>
                </div>
                <div class="flex justify-end items-center my-5 pr-10">
                    <button class="button active:scale-[.9] focus:outline-none text-2xl bg-yellow-200">publier &gt;</button>
                </div>
            </div>
        </div>
    </div>
</template>