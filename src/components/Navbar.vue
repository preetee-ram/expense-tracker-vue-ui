<script setup>
import logo from "../assets/img/logo.png";
import { RouterLink, useRoute } from "vue-router";

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <nav class="bg-blue-800 border-b border-blue-500">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div
          class="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
        >
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-10 w-auto" :src="logo" alt="Vue Expenses" />
            <span class="hidden md:block text-white text-2xl font-bold ml-2"
              >ExTraSy</span
            >
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink
                to="/"
                :class="[
                  isActiveLink('/')
                    ? 'bg-blue-900'
                    : 'hover:bg-gray-900 hover:text-white',
                  'rounded-md',
                  'text-white',
                  'px-3',
                  'py-2',
                ]"
                >Home</RouterLink
              >
              <RouterLink
                to="/expenses"
                :class="[
                  isActiveLink('/expenses')
                    ? 'bg-blue-900'
                    : 'hover:bg-gray-900 hover:text-white',
                  'rounded-md',
                  'text-white',
                  'px-3',
                  'py-2',
                ]"
                >Expenses</RouterLink
              >
              <RouterLink
                to="/expenses/add"
                :class="[
                  isActiveLink('/expenses/add')
                    ? 'bg-blue-900'
                    : 'hover:bg-gray-900 hover:text-white',
                  'rounded-md',
                  'text-white',
                  'px-3',
                  'py-2',
                ]"
                >Add Expense</RouterLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
