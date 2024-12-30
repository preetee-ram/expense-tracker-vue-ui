<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <section>
    <div class="container m-auto py-6 px-6">
      <RouterLink
        to="/expenses"
        class="text-blue-600 hover:text-blue-800 flex items-center"
      >
        <i
          class="pi pi-arrow-circle-left mr-2 text-blue-600 hover:text-blue-800"
        ></i>
        Back to Expense Listings
      </RouterLink>
    </div>
  </section>
</template>
