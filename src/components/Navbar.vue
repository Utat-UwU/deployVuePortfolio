<template>

    <!-- <nav class=" fixed navbar bg-[#353537] top-0 z-50">
        <div class=" flex-none px-5">
            <h1 class=" text-3xl font-bold text-white"> Portfolio</h1>
        </div>
        <div class=" flex-1 navbar-end">
            <ul class=" menu menu-horizontal p-2 text-white">
                <li class="p-2">
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li class="p-2">
                    <RouterLink to="/about">About</RouterLink>
                </li>
                <li class="p-2">
                    <RouterLink to="/portofolio">Portfolio</RouterLink>
                </li>
                <li class="p-2">
                    <RouterLink to="/experience">Experiences</RouterLink>
                </li>
            </ul>

        </div>

    </nav> -->


    <div class="fixed navbar bg-[#353537] top-0 z-50">
        <div class="navbar-start">
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="white">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul tabindex="0"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li class="p-2">
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li class="p-2">
                    <RouterLink to="/about">About</RouterLink>
                </li>
                <li class="p-2">
                    <RouterLink to="/portofolio">Portfolio</RouterLink>
                </li>
                <li class="p-2">
                    <RouterLink to="/experience">Experiences</RouterLink>
                </li>
            </ul>
            </div>
            <h1 class=" text-3xl font-bold text-white ml-4">Portfolio</h1>
        </div>
        <div class="navbar-end hidden lg:flex">
            <ul class=" menu menu-horizontal p-2 text-white">
                <li class="p-2">
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li class="p-2">
                    <RouterLink to="/about">About</RouterLink>
                </li>
                <li class="p-2">
                    <RouterLink to="/portofolio">Portfolio</RouterLink>
                </li>
                <li class="p-2">
                    <RouterLink to="/experience">Experiences</RouterLink>
                </li>
            </ul>
            
        </div>
    </div>



</template>
<script>
import { RouterLink } from 'vue-router';

</script>