import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ExpensesView from "@/views/ExpensesView.vue";
import ExpenseView from "@/views/ExpenseView.vue";
import AddExpenseView from "@/views/AddExpenseView.vue";
import EditExpenseView from "@/views/EditExpenseView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/expenses",
      name: "expenses",
      component: ExpensesView,
    },
    {
      path: "/expenses/:id",
      name: "expense",
      component: ExpenseView,
    },
    {
      path: "/expenses/add",
      name: "add-expense",
      component: AddExpenseView,
    },
    {
      path: "/expenses/edit/:id",
      name: "edit-expense",
      component: EditExpenseView,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});
export default router;
