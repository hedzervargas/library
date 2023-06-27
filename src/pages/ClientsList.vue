<template>
  <div class="content">
    <div class="header">
      <h1>Clients</h1>
      <button v-if="showOverdue" @click="toggleOverdue">Overdue</button>
      <button v-else @click="toggleOverdue" class="bggrey">Overdue</button>
    </div>
    <div class="container">
      <table>
        <tr class="book-attributes">
          <div class="book-attribute">client id</div>
          <div class="book-attribute">name</div>
          <div class="book-attribute">phone</div>
          <div class="book-attribute">address</div>
          <div class="book-attribute">email</div>
        </tr>
        <tr
          v-for="client in filteredClients"
          :key="client.id"
          class="single-book"
        >
          <p class="book-attribute">{{ client.client_id }}</p>
          <p class="book-attribute">{{ client.name }}</p>
          <p class="book-attribute">{{ client.phone_number }}</p>
          <p class="book-attribute">{{ client.address }}</p>
          <p class="book-attribute">{{ client.email_address }}</p>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: "",
      clients: {},
      showOverdue: false,
    };
  },
  computed: {
    filteredClients() {
      if (this.showOverdue) {
        return this.clients.filter(
          (client) => client.has_overdue_borrowings == "y"
        );
      } else {
        return this.clients;
      }
    },
  },
  methods: {
    toggleOverdue() {
      if (this.showOverdue) {
        this.showOverdue = false;
      } else {
        this.showOverdue = true;
      }
      //   console.log(this.showOverdue);
      console.log(this.filteredClients);
    },
  },
  created() {
    this.clients = this.$store.getters.clients;
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
