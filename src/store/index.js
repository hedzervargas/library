import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    authors: [],
    books: [],
    borrowings: [],
    clients: [],
    availableCopies: [],
    publishers: [],
    returns: [],
  },
  getters: {
    books: (state) => state.books,
    // book: (state) => (id) => {
    //   return state.books.find((book) => book.book_id === id);
    // },
    authors: (state) => state.authors,
    // author: (state) => (id) => {
    //   return state.authors.find((author) => author.author_id === id);
    // },
    borrowings: (state) => state.borrowings,
    clients: (state) => state.clients,
    availableCopies: (state) => state.availableCopies,
  },
  mutations: {
    setBooks(state, books) {
      state.books = books;
    },
    setAuthors(state, authors) {
      state.authors = authors;
    },
    setBorrowings(state, borrowings) {
      borrowings.sort(
        (a, b) => new Date(b.borrowing_date) - new Date(a.borrowing_date)
      );
      state.borrowings = borrowings;
    },
    setClients(state, clients) {
      state.clients = clients;
    },
    setAvailableCopies(state, copies) {
      state.availableCopies = copies;
    },
  },
  actions: {
    async fetchBooks({ commit }) {
      try {
        const response = await axios.get("http://127.0.0.1:8000/books");
        commit("setBooks", response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    },
    async fetchAuthors({ commit }) {
      try {
        const response = await axios.get("http://127.0.0.1:8000/authors");
        commit("setAuthors", response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    },
    async fetchBorrowings({ commit }) {
      try {
        const response = await axios.get("http://127.0.0.1:8000/borrowings");
        // console.log(response.data);
        commit("setBorrowings", response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    },
    async fetchClients({ commit }) {
      try {
        const response = await axios.get("http://127.0.0.1:8000/clients");
        // console.log(response.data);
        commit("setClients", response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    },
    async fetchAvailableCopies({ commit }) {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/available_copies"
        );
        // console.log(response.data);
        commit("setAvailableCopies", response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    },
    async extendBorrowing({ dispatch }, borrowingId) {
      try {
        const response = await axios.patch(
          `http://127.0.0.1:8000/borrowings/${borrowingId}`,
          { is_extended: "y" }
        );
        console.log(response.data);
        dispatch("fetchBorrowings");
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    },
    async addBorrowing({ commit, dispatch }, borrowingInfo) {
      console.log(borrowingInfo);
      const highestBorrowingId = Math.max(
        ...this.state.borrowings.map((borrowing) => borrowing.borrowing_id)
      );
      const borrowingId = highestBorrowingId + 1;
      borrowingInfo.borrowing_id = borrowingId;
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/borrowings",
          borrowingInfo
        );
        // console.log(response.data);
        dispatch("fetchBorrowings");
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    },
  },
});
