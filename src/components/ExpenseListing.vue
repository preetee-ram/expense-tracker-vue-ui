<script setup>
import { defineProps, ref, computed } from "vue";

const props = defineProps({
  expense: Object,
});

const showFullDescription = ref(false);
const toggleFullDescription = () => {
  showFullDescription.value = !showFullDescription.value;
};
const truncatedDescription = computed(() => {
  let description = props.expense.description;
  if (!showFullDescription.value) {
    description = description?.substring(0, 90) + "...";
  }
  return description;
});
</script>
<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 font-bold my-2 text-xl">
          {{ expense.category }}
        </div>
        <h3 class="text-gray-500">{{ expense.paymentMode }}</h3>
      </div>

      <div class="mb-5">
        <div>{{ truncatedDescription }}...</div>
        <button
          @click="toggleFullDescription"
          class="text-green-500 hover:text-green-600 mb-5"
        >
          {{ showFullDescription ? "Less" : "More" }}
        </button>
      </div>

      <h3 class="text-green-500 mb-2">
        <i class="pi pi-indian-rupee text-green-700 text-sm"></i
        >{{ expense.amount }}
      </h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-700 mb-3">
          <i class="pi pi-calendar-clock text-orange-700"></i>
          {{ expense.date }}
        </div>
        <a
          :href="'/expense/' + expense.id"
          class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </a>
      </div>
    </div>
  </div>
</template>
