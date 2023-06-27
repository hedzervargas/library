<template>
  <div class="content">
    <div class="container">
      <h1>{{ author.name }}</h1>
      <table v-if="author && author.length != 0">
        <tr class="book-attributes">
          <p class="book-attribute">nationality</p>
          <p class="book-attribute">books</p>
        </tr>
        <tr class="single-book">
          <p class="book-attribute">{{ author.nationality }}</p>
          <p class="book-attribute">{{ author.books.join(", ") }}</p>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      searchInput: "",
      author: {},
    };
  },
  computed: {},
  methods: {},
  created() {
    const authors = this.$store.getters.authors;
    const author = authors.find((author) => {
      return author.author_id == this.id;
    });
    this.author = author;
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
