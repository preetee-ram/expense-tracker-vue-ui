<script setup>
import { reactive, onMounted } from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { useRoute, RouterLink, useRouter } from "vue-router";
import axios from "axios";
import BackButton from "@/components/BackButton.vue";
import { useToast } from "vue-toastification";

const route = useRoute();
const expenseId = route.params.id;

const state = reactive({
  expense: {},
  isLoading: true,
});

const router = useRouter();
const toast = useToast();

const deleteExpense = async () => {
  try {
    const confirm = window.confirm(
      "Are you sure you want ot delete this Expense"
    );
    if (confirm) {
      await axios.delete(`/api/expenses/${expenseId}`);
      toast.success("Expense Deleted Successfully!");
      router.push("/expenses");
    }
  } catch (error) {
    console.log("Error deleting Expense", error);
    toast.error("Expense Not Deleted!");
  }
};
onMounted(async () => {
  try {
    const response = await axios.get(`/api/expenses/${expenseId}`);
    state.expense = response.data;
  } catch (error) {
    console.log("Error fetching expense", error);
  } finally {
    state.isLoading = false;
  }
});
</script>
<template>
  <BackButton />
  <section v-if="!state.isLoading" class="bg-blue-50">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div
            class="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
          >
            <h3 class="text-xl font-bold mb-3">Expense Category</h3>
            <div class="text-gray-500 mb-4">{{ state.expense.category }}</div>
            <h3 class="text-xl font-bold mb-3">Mode of Payment</h3>
            <div class="text-gray-500 mb-4">
              {{ state.expense.paymentMode }}
            </div>
            <div
              class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
            >
              <i class="pi pi-calendar-clock text-lg text-orange-700 mr-2"></i>
              <p class="text-orange-700">{{ state.expense.date }}</p>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-green-800 text-lg font-bold mb-6">
              Expense Description
            </h3>

            <p class="mb-4">
              {{ state.expense.description }}
            </p>

            <h3 class="text-green-800 text-lg font-bold mb-2">
              <i class="pi pi-indian-rupee text-sm text-green-700 mr-2"></i>
              {{ state.expense.amount }}
            </h3>
          </div>
        </main>

        <!-- Sidebar -->
        <aside>
          <!-- Manage -->
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-bold mb-6">Manage Expense</h3>
            <RouterLink
              :to="`/expenses/edit/${state.expense.id}`"
              class="bg-green-500 hover:bg-green-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >Edit Expense
            </RouterLink>
            <button
              @click="deleteExpense"
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
            >
              Delete Expense
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>
  <div v-else class="text-center text-gray-500 py-6">
    <PulseLoader />
  </div>
</template>
