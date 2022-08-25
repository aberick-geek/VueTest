<script setup>
import { ref } from "vue";

const iconName = ref("menu-outline");

const menu = () => {
  iconName.value = iconName.value === "menu-outline" ? "close-outline" : "menu-outline";
  console.log(iconName.value);
};
</script>

<template>
<div class="relative h-[70px]">
  <nav
    class="p-5 fixed w-full z-[1000] top-0 bg-white shadow md:flex md:items-center md:justify-between"
  >
    <div class="flex justify-between items-center">
      <span class="text-2xl cursor-pointer"> Web Site Design </span>
      <span class="text-3xl cursor-pointer md:hidden block mx-2">
        <ion-icon
          v-if="iconName === 'menu-outline'"
          name="menu-outline"
          v-on:click="menu"
        ></ion-icon>
        <ion-icon v-else name="close-outline" v-on:click="menu"></ion-icon>
      </span>
    </div>
    <ul
      class="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full right-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-480px] transition-all ease-in duration-300"
      :class="{ apparait: iconName == 'close-outline' }"
    >
      <li class="mx-4 my-6 md:my-0">
        <a href="#" class="text-xl hover:text-cyan-500 duration-300">Acceuil</a>
      </li>
    </ul>
  </nav>
</div>
  <transition
    enter-active-class="duration-300 ease-out"
    enter-from-class="transform opacity-0 scale-75"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="duration-200 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="transform opacity-0 scale-75"
  >
    <router-view></router-view>
  </transition>
</template>
<!--
  <nav class="p-5 bg-white shadow md:flex md:items-center md:justify-between">
    <div class="flex justify-between items-center">
      <span class="text-2xl font-[Poppins] cursor-pointer">
        Web Site Design
      </span>
      <span class="text-3xl cursor-pointer md:hidden block mx-2">
        <ion-icon v-if="iconName === 'menu-outline'" name="menu-outline" v-on:click="menu" ></ion-icon>
        <ion-icon v-else name="close-outline" v-on:click="menu" ></ion-icon>
      </span>
    </div> 
    <ul class="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white 
    w-full right-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-480px]
    transition-all ease-in duration-100"
      :class="{'apparait': iconName == 'close-outline'}"
    >
      <li class="mx-4 my-6 md:my-0">
        <a href="#" class="text-xl hover:text-cyan-500 duration-100">Acceuil</a>
      </li>
      <li class="mx-4 my-6 md:my-0">
        <a href="#" class="text-xl hover:text-cyan-500 duration-100">Description</a>    
      </li>
      <li class="mx-4 my-6 md:my-0">
        <a href="#" class="text-xl hover:text-cyan-500 duration-100">A Propos</a>
      </li>
      <li class="mx-4 my-6 md:my-0">
        <a href="#" class="text-xl hover:text-cyan-500 duration-100">Contacter</a>
      </li>
    </ul>
  </nav>


  <div class="flex items-center justify-center">
    <div class="flex mt-14 flex-col shadow-md shadow-gray-400 items-center justify-center
     container w-4/5 sm:w-3/5 lg:w-2/5 p-10 bg-[url('../images/image-form5.jpg')] rounded-xl">
      <div class="mb-20 flex justify-between" v-if="pointer<3">
        <ol class="flex">
            <li 
                class="relative lg:w-[150px] w-[100px] text-center text-sm font-light italic 
                        after:content[''] after:absolute after:top-[200%] after:left-[50%] after:w-5 after:h-5
                        after:rounded-full after:bg-indigo-500 after:z-20"
                >
            etape 1
            </li>
            <li 
                class="relative lg:w-[150px] w-[100px] text-center text-sm font-light italic 
                        before:content[''] before:absolute before:left-[-50%] before:w-full before:h-1 before:top-[calc(200%+0.5rem)]
                        after:bg-gray-300 before:bg-gray-300
                        after:content[''] after:absolute after:top-[200%] after:left-[50%] after:w-5 after:h-5
                        after:rounded-full after:z-20"
                :class="{'etaperempli':pointer>=1}"
                >
            etape 2
            </li>
            <li 
                class="relative lg:w-[150px] w-[100px] text-center text-sm font-light italic 
                        before:content[''] before:absolute before:left-[-50%] before:w-full before:h-1 before:top-[calc(200%+0.5rem)]
                        after:bg-gray-300 before:bg-gray-300
                        after:content[''] after:absolute after:top-[200%] after:left-[50%] after:w-5 after:h-5
                        after:rounded-full after:z-20"
                :class="{'etaperempli':pointer>=2}"
                >
            etape 3
            </li>
        </ol>
      </div>

      <component 
        v-bind:is="etapes[pointer]"
        v-bind:formVals="values" 
        >
      </component>
      <div class="flex items-center mt-5 w-full" :class="{'justify-end':pointer==0, 'justify-between':pointer>0}" v-if="pointer<3">
        <button
          type="submit"
          class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-meduim rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          v-on:click="etapePre" v-if="pointer>0"
          >
          &lt; précédent
        </button>
        <button
          type="submit"
          class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-meduim rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          v-on:click="etapeSui"
          >
          suivant &gt;
        </button>
      </div>
    </div>
  </div>
-->
