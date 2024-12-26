<script setup>
import Title from "../components/Title.vue";
import HomeCards from "../components/HomeCards.vue";
import ExpenseListings from "../components/ExpenseListings.vue";
</script>
<template>
  <Title
    title="Expense Tracker"
    subtitle="Track your daily expenses and know yourself better!!"
  />
  <HomeCards />
  <ExpenseListings :limit="3" :showButton="true" />
</template>
