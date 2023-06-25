<template>
  <div class="content">
    <h1>Books</h1>
    <form @submit.prevent="">
      <div class="search-bar">
        <input
          v-model="searchInput"
          class="search-input"
          type="text"
          placeholder="Search by title..."
        />
      </div>
    </form>
    <div class="container">
      <table v-if="books && books.length > 0">
        <tr class="book-attributes">
          <div class="book-attribute">title</div>
          <div class="book-attribute">author(s)</div>
          <div class="book-attribute">publication date</div>
          <div class="book-attribute">copies</div>
        </tr>
        <tr v-for="book in filteredBooks" :key="book.book_id">
          <router-link :to="`/books/${book.book_id}`" class="single-book">
            <p class="book-attribute">{{ book.title }}</p>
            <p class="book-attribute">{{ book.authors.join(", ") }}</p>
            <p class="book-attribute">{{ book.publication_date }}</p>
            <p class="book-attribute">{{ book.copies }}</p>
          </router-link>
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
    };
  },
  computed: {
    ...mapState(["books"]),
    filteredBooks() {
      if (this.searchInput) {
        return this.books.filter((book) =>
          book.title.toLowerCase().includes(this.searchInput.toLowerCase())
        );
      } else {
        return this.books;
      }
    },
  },
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
/* .boo; */
</style>
