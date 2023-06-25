<template>
  <div class="content">
    <h1>My borrowings</h1>
    <div class="container">
      <table>
        <tr class="book-attributes">
          <div class="book-attribute">book title</div>
          <div class="book-attribute">copy id</div>
          <div class="book-attribute">date</div>
          <div class="book-attribute">return before</div>
          <div class="book-attribute">is extended</div>
          <div class="book-attribute">is returned</div>
        </tr>
        <tr
          v-for="borrowing in borrowings"
          :key="borrowing.id"
          class="single-book"
        >
          <p class="book-attribute">{{ borrowing.book }}</p>
          <p class="book-attribute">{{ borrowing.copy_id }}</p>
          <p class="book-attribute">{{ borrowing.borrowing_date }}</p>
          <p class="book-attribute">{{ borrowing.return_date }}</p>
          <p class="book-attribute">
            {{ borrowing.isExtended == "y" ? "yes" : "no" }}
          </p>
          <p class="book-attribute">
            {{ borrowing.return_id ? "yes" : "no" }}
          </p>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      searchInput: "",
      // borrowings: [
      //   {
      //     id: 1,
      //     date: "2022-08-01",
      //     returnBefore: "2022-08-07",
      //     isExtended: false,
      //     bookTitle: "1984",
      //     copyId: 3,
      //     isReturned: false,
      //   },
      //   {
      //     id: 2,
      //     date: "2022-09-05",
      //     returnBefore: "2022-09-19",
      //     isExtended: true,
      //     bookTitle: "The Power of Now",
      //     copyId: 4,
      //     isReturned: true,
      //   },
      //   {
      //     id: 3,
      //     date: "2022-11-16",
      //     returnBefore: "2022-11-23",
      //     isExtended: false,
      //     bookTitle: "Crazy Rich Asians",
      //     copyId: 2,
      //     isReturned: false,
      //   },
      // ],
    };
  },
  computed: {
    ...mapState(["borrowings"]),
  },
  methods: {},
};
</script>

<style scoped>
.content {
  margin: 3rem;
}

form {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

table {
  width: 100%;
}

table tr {
  border-style: none none solid none;
  border-width: 1px;
  border-color: #ececec;
}

.search-input {
  height: 40px;
}

.filtering {
  display: flex;
  border-radius: 15px;
}

.filtering button {
  height: 40px;
  border-radius: 0;
  background: var(--quaternary-color);
}

.filtering :first-child {
  border-radius: 0.5rem 0 0 0.5rem;
}
.filtering :last-child {
  border-radius: 0 0.5rem 0.5rem 0;
}
.filtering button:hover,
.filtering .active {
  background: var(--primary-color);
}

table {
  margin: 0;
  padding: 0;
}
.book-attributes {
  display: flex;
  justify-content: space-between;
}
.book-attribute {
  flex: 1 1 0;
}
.single-book {
  display: flex;
  justify-content: space-between;
}

/* .return-button {
  height: auto;
  padding: auto;
  margin: auto;
  
} */
/* .boo; */
</style>
