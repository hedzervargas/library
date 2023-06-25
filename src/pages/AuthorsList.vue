<template>
  <div class="content">
    <h1>Authors</h1>
    <form @submit.prevent="">
      <div class="search-bar">
        <input
          v-model="searchInput"
          class="search-input"
          type="text"
          placeholder="Search name..."
        />
      </div>
    </form>
    <div class="container">
      <table>
        <tr class="book-attributes">
          <div class="book-attribute">name</div>
          <div class="book-attribute">nationality</div>
          <div class="book-attribute">books</div>
        </tr>
        <tr
          v-for="author in filteredAuthors"
          :key="author.author_id"
          class="single-book"
        >
          <p class="book-attribute">{{ author.name }}</p>
          <p class="book-attribute">{{ author.nationality }}</p>
          <p class="book-attribute">{{ author.books.length }}</p>
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
      // authors: [
      //   {
      //     id: 70001,
      //     name: "Adam Johnson",
      //     nationality: "American",
      //   },
      //   {
      //     id: 70002,
      //     name: "Aldous Huxley",
      //     nationality: "British",
      //   },
      //   {
      //     id: 70003,
      //     name: "Alice Sebold",
      //     nationality: "Spanish",
      //   },
      // ],
    };
  },
  computed: {
    ...mapState(["authors"]),
    filteredAuthors() {
      if (this.searchInput) {
        return this.authors.filter((author) =>
          author.name.toLowerCase().includes(this.searchInput.toLowerCase())
        );
      } else {
        return this.authors;
      }
    },
  },
  methods: {},
  // created(){
  //   this.
  // }
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
