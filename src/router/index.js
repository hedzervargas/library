import { createRouter, createWebHistory } from "vue-router";
import BooksList from "../pages/BooksList.vue";
import AuthorsList from "../pages/AuthorsList.vue";
import BookDetails from "../pages/BookDetails.vue";
import BorrowingsList from "../pages/BorrowingsList.vue";
import ClientsList from "../pages/ClientsList.vue";

// import BookDetails from "../pages/BookDetails.vue";
import AuthorDetails from "../pages/AuthorDetails.vue";
import AddBook from "../pages/AddBook.vue";
// import BorrowingsList from "../pages/BorrowingsList.vue";
// import ClientsList from "../pages/ClientsList.vue";
// import ClientDetails from "../pages/ClientDetails.vue";

const routes = [
  {
    path: "/",
    redirect: "/books",
  },
  {
    path: "/books",
    name: "books",
    component: BooksList,
  },
  {
    path: "/authors",
    name: "authors",
    component: AuthorsList,
  },
  {
    path: "/books/:id",
    name: "book_details",
    component: BookDetails,
    props: true,
    // component: null,
  },
  {
    path: "/books/add",
    name: "add_book",
    component: AddBook,
  },
  {
    path: "/authors/:id",
    name: "author_details",
    component: AuthorDetails,
    props: true,
  },
  {
    path: "/borrowings",
    name: "borrowings_list",
    component: BorrowingsList,
  },
  {
    path: "/clients",
    name: "clients_list",
    component: ClientsList,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
