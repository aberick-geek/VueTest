<script setup>
    const props = defineProps(['formVals'])

    function valideTypeFile(file) {
    const typeFile = [
        'image/jpg',
        'image/jpeg',
        'image/png'
    ]
    for (let i = 0; i < typeFile.length; i++) {
        if (file.type == typeFile[i]) {
            return true
        }
        
    }
    return false
}
    props.formVals.photo = '../../images/user.png'

    const uploadFile = () => {
        const inputFile = document.querySelector('input')
        const file = inputFile.files
        const divUpload = document.querySelector('#uploadFile')
        divUpload.removeChild(divUpload.firstChild)
        if (valideTypeFile(file[0])) {
            var image = document.createElement('img')
            const link = window.URL.createObjectURL(file[0])
            props.formVals.photo = link
            image.src = props.formVals.photo
            image.classList.add('rounded-full','border-2','border-gray-200')
            divUpload.appendChild(image)
        }else {
            console.log(file[0]);
            console.log('sa marche bien');
            console.log(file[0].type);
            console.log(valideTypeFile());
            var para = document.createElement('p')
            para.textContent = "le type de fichier sélectionné n'est pas pris en compte"
            divUpload.appendChild(para)
        }
        
    }
</script>

<template>
    <div id="uploadFile" class="flex justify-center items-center w-full">
        <label for="import-photo" class="flex my-5 flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-100">
            <div class="flex flex-col justify-center items-center pt-5 pb-6">
                <i class="fa fa-cloud-upload text-5xl"></i>                
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Cliquez pour choisir une photo</span> ou bien glisser une photo ici</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">(taille max 800x400 px)</p>
            </div>
            <input id="import-photo" v-on:change="uploadFile" name="import-photo" type="file" accept="image/png, image/jpg, image/jpeg" class="hidden">
        </label>
    </div> 
</template>
<!--
    <form class="flex flex-col space-y-3">
        <div>
            <label for="description" class="block text-lg font-semibold text-gray-900">Votre Description</label>
            <div class="mt-1 relative rounded-sm shadow-sm">
                <textarea name="description" id="description"
                class="focus:ring-indigo-500 focus:border-indigo-500
                block w-full sm:text-sm border-gray-300 rounded-md px-2"
                placeholder="Je préfere vue js3 ..." v-model="props.formVals.description">
                </textarea>
            </div>
        </div>
    </form>
-->