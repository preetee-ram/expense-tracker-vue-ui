<script setup>
import { reactive, defineProps, onMounted } from "vue";
import ExpenseListing from "./ExpenseListing.vue";
import { RouterLink } from "vue-router";
import axios from "axios";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
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

const state = reactive({
  expenses: [],
  isLoading: true,
});

onMounted(async () => {
  try {
    const response = await axios.get("/api/expenses");
    state.expenses = response.data;
  } catch (error) {
    console.log(error.response.data);
    console.error("Error Fetching expenses", error);
  } finally {
    state.isLoading = false;
  }
});
</script>
<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Expenses
      </h2>
      <!--Show loading spinner while loading is true-->
      <div v-if="state.isLoading" class="text-center text-gray-500 py-6">
        <PulseLoader />
      </div>
      <!--Show expense Listings when loading is done-->
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ExpenseListing
          v-for="expense in state.expenses.slice(
            0,
            limit || state.expenses.length
          )"
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
