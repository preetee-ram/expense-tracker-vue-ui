<script setup>
import router from "@/router";
import { useRoute } from "vue-router";
import { reactive, onMounted } from "vue";
import axios from "axios";
import { useToast } from "vue-toastification";

const route = useRoute();
const expenseId = route.params.id;

const form = reactive({
  category: "",
  paymentMode: "",
  description: "",
  date: "",
  amount: "",
});

const state = reactive({
  expense: {},
  isLoading: true,
});

const toast = useToast();
const handleSubmit = async () => {
  const updatedExpense = {
    category: form.category,
    paymentMode: form.paymentMode,
    description: form.description,
    date: form.date,
    amount: form.amount,
  };

  try {
    const response = await axios.put(
      `/api/expenses/${expenseId}`,
      updatedExpense
    );
    toast.success("Expense Updated Successfully!");
    router.push(`/expenses/${response.data.id}`);
  } catch (error) {
    console.log("Error fetching expense", error);
    toast.error("Expense was not Updated");
  }
};

onMounted(async () => {
  try {
    const response = await axios.get(`/api/expenses/${expenseId}`);
    state.expense = response.data;

    (form.category = state.expense.category),
      (form.paymentMode = state.expense.paymentMode);
    (form.description = state.expense.description),
      (form.date = state.expense.date),
      (form.amount = state.expense.amount);
  } catch (error) {
    console.error("Error fetching expenses", error);
  } finally {
    state.isLoading = false;
  }
});
</script>
<template>
  <section class="bg-green-50">
    <div class="container m-auto max-w-2xl py-24">
      <div
        class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
      >
        <form @submit.prevent="handleSubmit">
          <h2 class="text-3xl text-center font-semibold mb-6">
            Update Expense
          </h2>

          <div class="mb-4">
            <label for="category" class="block text-gray-700 font-bold mb-2"
              >Expense Category</label
            >
            <select
              v-model="form.category"
              id="category"
              name="category"
              class="border rounded w-full py-2 px-3"
              required
            >
              <option value="FOOD">FOOD</option>
              <option value="TRANSPORT">TRANSPORT</option>
              <option value="UTILITIES">UTILITIES</option>
              <option value="MISCELLENEOUS">MISCELLENEOUS</option>
            </select>
          </div>

          <div class="mb-4">
            <label for="paymentMode" class="block text-gray-700 font-bold mb-2"
              >Mode of Payment</label
            >
            <select
              v-model="form.paymentMode"
              id="paymentMode"
              name="paymentMode"
              class="border rounded w-full py-2 px-3"
              required
            >
              <option value="CASH">CASH</option>
              <option value="CREDITCARD">CREDIT CARD</option>
              <option value="DEBITCARD">DEBIT CARD</option>
              <option value="UPI">UPI</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Amount</label>
            <input
              v-model="form.amount"
              type="number"
              id="amount"
              name="amount"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="Add amount you spent.."
              required
            />
          </div>
          <div class="mb-4">
            <label for="description" class="block text-gray-700 font-bold mb-2"
              >Description</label
            >
            <textarea
              v-model="form.description"
              id="description"
              name="description"
              class="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="Add where and why you made that expense.."
            ></textarea>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2"> Date </label>
            <input
              v-model="form.date"
              type="date"
              id="date"
              name="date"
              class="border rounded w-full py-2 px-3 mb-2"
              placeholder="Date of this spending"
              required
            />
          </div>

          <div>
            <button
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
