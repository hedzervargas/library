<template>
  <div class="content">
    <div class="container">
      <h1>{{ book.title }}</h1>
      <table v-if="book && book.length != 0">
        <tr class="book-attributes">
          <!-- <p class="book-attribute">title</p> -->
          <p class="book-attribute">author(s)</p>
          <p class="book-attribute">publication date</p>
          <p class="book-attribute">publisher</p>
          <p class="book-attribute">genre</p>
          <p class="book-attribute">edition(s)</p>
          <p class="book-attribute">copies</p>
        </tr>
        <tr class="single-book">
          <!-- <p class="book-attribute">{{ book.title }}</p> -->
          <p class="book-attribute">{{ book.authors.join(", ") }}</p>
          <p class="book-attribute">{{ book.publication_date }}</p>
          <p class="book-attribute">{{ book.publisher }}</p>
          <p class="book-attribute">{{ book.genre }}</p>
          <p class="book-attribute">{{ book.editions.join(", ") }}</p>
          <p class="book-attribute">{{ book.copies }}</p>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      searchInput: "",
      book: {},
    };
  },
  computed: {},
  methods: {},
  created() {
    const books = this.$store.getters.books;
    const book = books.find((book) => {
      return book.book_id == this.id;
    });
    // const book = this.$store.getters.book(this.id);
    this.book = book;
  },
};
</script>

<style scoped>
.content {
  margin: 3rem;
  max-width: var(--max-width);
}

@media screen and (min-width: 1200px) {
  .content {
    margin: 3rem auto 3rem auto;
  }
}

form {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

table {
  display: flex;
  width: 100%;
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
  flex-direction: column;
  margin-right: 3rem;

  /* justify-content: space-between; */
}
.book-attribute {
  flex: 1 1 0;
}
.single-book {
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
}
/* .boo; */
</style>
