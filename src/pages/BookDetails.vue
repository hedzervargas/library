<template>
  <div class="content">
    <div class="container">
      <table v-if="book && book.length != 0">
        <tr class="book-attributes">
          <p class="book-attribute">title</p>
          <p class="book-attribute">author(s)</p>
          <p class="book-attribute">publication date</p>
          <p class="book-attribute">publisher</p>
          <p class="book-attribute">genre</p>
          <p class="book-attribute">edition(s)</p>
          <p class="book-attribute">available copies</p>
        </tr>
        <tr class="single-book">
          <p class="book-attribute">{{ book.title }}</p>
          <p class="book-attribute">{{ book.authors.join(", ") }}</p>
          <p class="book-attribute">{{ book.publication_date }}</p>
          <p class="book-attribute">{{ book.publisher }}</p>
          <p class="book-attribute">{{ book.genre }}</p>
          <!-- <p class="book-attribute">{{ book.editions.join(", ") }}</p> -->
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
      // book: {
      //   id: 10001,
      //   title: "1984",
      //   authors: ["George Orwell"],
      //   publicationDate: "2021",
      //   publisher: "Animal Farm",
      //   genre: "Science Fiction, Dystopian",
      //   editions: ["First Edition", "Second Edition"],
      //   copies: 3,
      // },
    };
  },
  computed: {
    book() {
      return this.$store.getters.book(this.id);
    },
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
