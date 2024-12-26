<script setup>
import Card from "./Card.vue";
import { RouterLink } from "vue-router";
</script>
<template>
  <section class="py-4">
    <div class="container-xl lg:container m-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        <Card>
          <h2 class="text-2xl font-bold">For Users</h2>
          <p class="mt-2 mb-4">
            Browse your expenses list and know your spendings
          </p>
          <RouterLink
            to="/expenses"
            class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            Browse Expenses
          </RouterLink>
        </Card>
        <Card bg="bg-blue-200">
          <h2 class="text-2xl font-bold">For System Admins</h2>
          <p class="mt-2 mb-4">Add a new user to the app</p>
          <RouterLink
            to="/users/add"
            class="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-green-600"
          >
            Add User
          </RouterLink>
        </Card>
      </div>
    </div>
  </section>
</template>
