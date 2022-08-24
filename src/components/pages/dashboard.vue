<script setup>
    import {abonnés} from '../../données/abonnés'
    /*window.addEventListener('load', () => {
        statut = navigator.onLine ? true : false
        alert(statut)
    })*/
    window.addEventListener('online', () => {
        const states = document.getElementById('status')
        states.classList.remove('hidden')
    })
    window.addEventListener('offline', () => {
        const states = document.getElementById('status')
        states.classList.add('hidden')
    })

    const scrollTop = () => {
        var liste = document.querySelector('#friend-list-content');
        liste.scrollTo({
            top: liste.scrollTop += 88,
            behavior: 'smooth',
        });
        console.log(liste.scrollTop);
    }
    const scrollBottom = () => {
        var liste = document.querySelector('#friend-list-content');
        liste.scrollTo({
            top: liste.scrollTop -= 88,
            behavior: 'smooth',
        });
        console.log(liste.scrollTop,statut,navigator.onLine);
    }
    
</script>

<template>
    <div id="globale" class="flex justify-center items-center w-full h-[100vh]">
        <div id="contenu" class="grid grid-cols-[15%_85%_0%] lg:grid-cols-[10%_75%_15%]  w-full h-[100vh]">
            <div id="nav-bar-left" class="">
                <div id="nav-menu-bar" class="fixed top-[72px] w-[15%] md:w-[10%] h-[100%] py-2 bg-[#dfe0fb]">
                    <div id="nav-menu-bar-content" class="h-[90%]">
                        <div id="profil" class="flex justify-around flex-col mx-0 md:m-5 items-center">
                            <div class="mb-2 flex relative">
                                <div class="overflow-hidden flex justify-center items-center rounded-full border-2 border-gray-300">
                                    <img src='/images/image-form3.jpg' class="md:h-[60px] h-[40px] w-[40px] md:w-[60px]" alt="profil">
                                </div>
                                <button id="status" class="absolute border-2 active:scale-[.9] p-1 md:p-2 border-gray-200 bg-green-500 rounded-full right-0 bottom-0">
                                </button>
                            </div>
                            <div id="username" class="justify-center items-center hidden lg:block text-xl">
                                patrick
                            </div>
                        </div>
                        <div id="Home" class="button-zone">
                            <button class="w-full focus:bg-gray-500">
                                <router-link to="/dashboard/">
                                    <div id="home-icone">
                                        <i class="fa fa-home text-2xl" aria-hidden="true"></i>
                                    </div>
                                    <div id="home-text" class="hidden lg:block">
                                        Menu
                                    </div>
                                </router-link>
                            </button>
                        </div>
                        <div id="Home" class=" button-zone">
                            <button class="w-full focus:bg-gray-500">
                                <router-link to="/dashboard/notification">
                                    <div id="home-icone">
                                        <i class="fa fa-picture-o text-2xl" aria-hidden="true"></i>
                                    </div>
                                    <div id="home-text" class="hidden lg:block">
                                        Poster
                                    </div>
                                </router-link>
                            </button>
                        </div>
                        <div id="Home" class="button-zone">
                            <button class="w-full focus:bg-gray-500">
                                <router-link to="/dashboard/favoris">
                                    <div id="home-icone">
                                        <i class="fa fa-heart text-2xl" aria-hidden="true"></i>
                                    </div>
                                    <div id="home-text" class="hidden lg:block">
                                        Favories
                                    </div>
                                </router-link>
                            </button>
                        </div>
                        <div id="Reglage" class="button-zone">
                            <button class="w-full focus:bg-gray-500">
                                <router-link to="/dashboard/reglages">
                                    <div id="reglage-icone">
                                        <i class="fa fa-sliders text-2xl" aria-hidden="true"></i>
                                    </div>
                                    <div id="home-text" class="hidden lg:block">
                                        Reglages
                                    </div>
                                </router-link>
                            </button>
                        </div>
                        <div id="Home" class="button-zone">
                            <button class="w-full focus:bg-gray-500">
                                <router-link to="/dashboard/aides">
                                    <div id="home-icone">
                                        <i class="fa fa-question-circle text-2xl" aria-hidden="true"></i>
                                    </div>
                                    <div id="home-text" class="hidden lg:block">
                                        aide
                                    </div>
                                </router-link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="body" class="bg-[#f5f6fa] p-10">
                <transition 
                    enter-active-class="duration-300 ease-out"
                    enter-from-class="transform opacity-0 scale-75"
                    enter-to-class="opacity-100 scale-100"
                    leave-active-class="duration-200 ease-in"
                    leave-from-class="opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-75">
                    <router-view/>
                </transition>
            </div>
            <div id="nav-bar-right" class="h-full">
                <div id="friend-list" class="relative h-full">
                    <div id="friend-list-content" class="flex sticky top-[80px] overflow-hidden flex-col h-[60%] m-5">
                        <button class="top-0 bg-[#fffc] rounded-sm sticky" @click="scrollTop()"><i class="fa fa-chevron-circle-up text-2xl"></i></button>
                        <div id="friend" v-for="abonné in abonnés" class="flex flex-row m-2 border-2 justify-start bg-gradient-to-bl to-blue-200 from-blue-300 rounded-md p-2 items-center">
                            <div id="friend-profil" class="mx-2 flex relative">
                                <div class="flex overflow-hidden justify-center items-center rounded-full border-2 border-gray-300">
                                    <img src='/images/user.png' class="h-[40px] w-[40px]" alt="profil">
                                    <button id="status" class="absolute border-2 active:scale-[.9] p-1 border-gray-200 bg-green-500 rounded-full right-0 bottom-0">
                                    </button>
                                </div>
                            </div>
                            <div id="friend-name">
                                {{ abonné.nom }}
                            </div>
                        </div>
                        <button class="bottom-0 bg-[#fffc] rounded-sm sticky" @click="scrollBottom"><i class="fa fa-chevron-circle-down text-2xl"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>