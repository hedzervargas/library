<template>
  <div class="content">
    <div class="header">
      <h1>Borrowings</h1>
      <button v-if="showOverdue" @click="toggleOverdue">Overdue</button>
      <button v-else @click="toggleOverdue" class="bggrey">Overdue</button>
    </div>
    <div class="container">
      <table>
        <tr class="book-attributes">
          <div class="book-attribute">book title</div>
          <div class="book-attribute">copy id</div>
          <div class="book-attribute">client id</div>
          <div class="book-attribute">borrow date</div>
          <div class="book-attribute">due date</div>
          <div class="book-attribute">is extended</div>
          <div class="book-attribute">is returned</div>
          <div
            v-if="
              filteredBorrowings.some(
                (borrowing) => borrowing.can_be_extended == 'y'
              )
            "
            class="book-attribute"
          ></div>
        </tr>
        <tr
          v-for="borrowing in filteredBorrowings"
          :key="borrowing.id"
          class="single-book"
        >
          <p class="book-attribute">{{ borrowing.book }}</p>
          <p class="book-attribute">{{ borrowing.copy_id }}</p>
          <p class="book-attribute">{{ borrowing.client_id }}</p>
          <p class="book-attribute">{{ borrowing.borrowing_date }}</p>
          <p class="book-attribute">{{ borrowing.due_date }}</p>
          <p class="book-attribute">
            {{ borrowing.isExtended == "y" ? "yes" : "no" }}
          </p>
          <p class="book-attribute">
            {{ borrowing.return_id ? "yes" : "no" }}
          </p>
          <p
            v-if="
              filteredBorrowings.some(
                (borrowing) => borrowing.can_be_extended == 'y'
              )
            "
            class="book-attribute"
          >
            <button
              v-if="borrowing.can_be_extended == 'y'"
              @click="extendBorrowing(borrowing.borrowing_id)"
              class="extend-button"
            >
              extend
            </button>
          </p>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      searchInput: "",
      borrowings: {},
      showOverdue: false,
    };
  },
  computed: {
    filteredBorrowings() {
      if (this.showOverdue) {
        return this.borrowings.filter(
          (borrowing) => borrowing.is_overdue == "y"
        );
      } else {
        return this.borrowings;
      }
    },
  },
  methods: {
    extendBorrowing(id) {
      console.log(id);
      // axios
      //   .post("http://127.0.0.1:8000/extended-borrowing", { id })
      //   .then((response) => {
      //     console.log("Data sent successfully", response);
      //     this.$store.commit("extendBorrowing", id);
      //   })
      //   .catch((error) => {
      //     console.error("Error sending data", error);
      //   });
    },
    toggleOverdue() {
      if (this.showOverdue) {
        this.showOverdue = false;
      } else {
        this.showOverdue = true;
      }
    },
  },
  created() {
    this.borrowings = this.$store.getters.borrowings;
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

.header {
  display: flex;
  width: 20rem;
}
.header button {
  margin-left: 3rem;
  width: 5.5rem;
  height: 2rem;
  /* font-size: 0.75rem; */
  padding: 0.3rem;
  /* background-color: grey; */
  font-weight: 400;
}

.bggrey {
  background-color: gray;
}

.header button .active {
  background-color: var(--primary-color);
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

.extend-button {
  height: 3.25rem;
}
/* .return-button {
  height: auto;
  padding: auto;
  margin: auto;

} */
/* .boo; */
</style>
