import Vue from "vue";
import Router from "vue-router";
import AddCustomer from "./components/AddCustomer.vue";
import SearchCustomers from "./components/SearchCustomers.vue";
import CalculationGenerator from "./components/CalculationGenerator.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "generator",
            alias: "/generator",
            component: CalculationGenerator
        },
        {
            path: "/add",
            name: "add",
            component: AddCustomer
        },
        {
            path: "/search",
            name: "search",
            component: SearchCustomers
        },
        {
            path: "/generator",
            name: "generator",
            component: CalculationGenerator
        }
    ]
});