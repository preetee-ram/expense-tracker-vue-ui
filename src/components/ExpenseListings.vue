<script setup>
import expenseData from "@/expenses.json";
import { ref, defineProps } from "vue";
import ExpenseListing from "./ExpenseListing.vue";
import { RouterLink } from "vue-router";
defineProps({
  limit: {
    type: Number,
    defualt: 5,
  },
  showButton: {
    type: Boolean,
    default: false,
  },
});

const expenses = ref(expenseData);
</script>
<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Expenses
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ExpenseListing
          v-for="expense in expenses.slice(0, limit || expenses.length)"
          :key="expense.id"
          :expense="expense"
        />
      </div>
    </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
    <RouterLink
      to="/expenses"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Expenses</RouterLink
    >
  </section>
</template>
