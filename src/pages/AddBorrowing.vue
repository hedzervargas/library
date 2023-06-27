<template>
  <section>
    <header>
      <h1>Add a borrowing</h1>
    </header>
    <form @submit.prevent="postBorrowing">
      <div class="form-input">
        <label for="client_id">Client ID*</label>
        <select
          id="client_id"
          name="client_id"
          :class="{ 'filled-in': clientFilledIn }"
          @input="setClientId"
        >
          <option value="select" selected disabled>Select</option>
          <option v-for="id in client_ids" :key="id" :value="id">
            {{ id }}
          </option>
        </select>
      </div>
      <div class="form-input">
        <label for="copy_id">Copy ID*</label>
        <select
          id="copy_id"
          name="copy_id"
          :class="{ 'filled-in': copyFilledIn }"
          @input="setCopyId"
        >
          <option value="select" selected disabled>Select</option>
          <option v-for="id in copy_ids" :key="id" :value="id">{{ id }}</option>
        </select>
      </div>
      <p v-if="!formIsValid" class="invalid-message">Required fields missing</p>
      <button type="submit">ADD</button>
    </form>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["houseId"],
  data() {
    return {
      borrowingInfo: {
        client_id: null,
        copy_id: null,
      },
      formIsValid: true,
      error: null,
      client_ids: [],
      copy_ids: [],
      clientFilledIn: false,
      copyFilledIn: false,
    };
  },
  methods: {
    ...mapActions([
      "fetchBooks",
      "fetchAuthors",
      "fetchBorrowings",
      "fetchClients",
      "fetchAvailableCopies",
    ]),
    async postBorrowing() {
      // checking form validity
      this.validateForm();

      if (this.formIsValid) {
        try {
          await this.$store.dispatch("addBorrowing", this.borrowingInfo);
          this.$router.push(`/borrowings`);
        } catch (error) {
          this.error = error.message || "Something went wrong!";
        }
      }
    },
    validateForm() {
      // validating form
      if (
        Object.keys(this.borrowingInfo).every(
          (key) => this.bookInfo[key] != null
        )
      ) {
        this.formIsValid = true;
      } else {
        this.formIsValid = false;
      }
    },
    invalidateForm() {
      // invalidating form
    },
    setClientId(event) {
      this.clientFilledIn = true;
      this.borrowingInfo.client_id = event.target.value;
    },
    setCopyId(event) {
      this.copyFilledIn = true;
      this.borrowingInfo.copy_id = event.target.value;
    },
  },
  async created() {
    await this.fetchBooks();
    await this.fetchAuthors();
    await this.fetchBorrowings();
    await this.fetchClients();
    await this.fetchAvailableCopies();
    this.client_ids = this.$store.getters.clients.map(
      (client) => client.client_id
    );
    this.copy_ids = this.$store.getters.availableCopies;
    console.log(this.client_ids);
    console.log(this.copy_ids);
  },
};
</script>

<style scoped>
section {
  max-width: 30rem;
}
header {
  display: flex;
  justify-content: center;
  position: relative;
}
.back {
  margin: 0;
  padding: 0;
  display: inline;
  cursor: pointer;
  position: absolute;
  top: 3px;
  left: 0;
}
h1 {
  margin-bottom: 0;
  white-space: nowrap;
  text-align: center;
}
form {
  width: 100%;
  max-width: 30rem;
  margin-top: 2rem;
}
form .form-input {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
form input,
form select,
form textarea {
  width: 100%;
  border: none;
  background: var(--background-color-2);
  padding: 1em 1rem;
  border-radius: var(--border-radius);
  resize: none;
}
form select {
  color: var(--tertiary-color);
  /* width: 185px; */
  height: 39px;
  /* height: ; */
}
form select.filled-in {
  color: var(--primary-text-color);
}
form select option {
  color: var(--primary-text-color);
}
form input::placeholder,
form textarea::placeholder {
  color: var(--tertiary-color);
}
form label {
  margin-bottom: 0.5rem;
  font-weight: 700;
  color: var(--secondary-text-color);
}
form .small-inputs {
  display: flex;
  justify-content: space-between;
}
form .small-inputs .form-input {
  flex-shrink: 0;
  margin-right: 1rem;
  width: calc(50% - 0.5rem);
}
form.small-inputs .form-input:first-child {
  margin-right: 1rem;
}
.form-input.picture button {
  width: 7rem;
  height: 7rem;
  background: none;
  border-radius: initial;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23C3C3C3FF' stroke-width='4' stroke-dasharray='6%2c15' stroke-dashoffset='14' stroke-linecap='square'/%3e%3c/svg%3e");
}
.form-input.picture button.invalid {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23FF0000FF' stroke-width='4' stroke-dasharray='6%2c15' stroke-dashoffset='14' stroke-linecap='square'/%3e%3c/svg%3e");
  outline: none;
}
.preview-picture-container {
  margin: 1rem 0;
  position: relative;
  height: 7rem;
  width: 7rem;
}
.preview-picture {
  object-fit: cover;
  height: 7rem;
  width: 7rem;
  border-radius: var(--border-radius);
}
.clear-picture {
  position: absolute;
  top: -0.7rem;
  right: -0.7rem;
  cursor: pointer;
}
button {
  margin: 1rem 0;
}
.invalid {
  outline: red 1px solid;
}
.invalid::placeholder {
  color: red;
}
.invalid {
  color: red;
}
.invalid-message {
  font-style: italic;
  color: red;
}

/* dialog styles */
h1.dialog,
p.dialog {
  text-align: center;
}
h1.dialog {
  margin-bottom: 1rem;
}
p.dialog {
  margin-top: 0;
  margin-bottom: 0;
}
button.dialog {
  margin-top: 1rem;
  margin-bottom: 0;
}
button.dialog.flat {
  background: var(--secondary-color);
}
@media screen and (min-width: 1000px) {
  form {
    margin-top: 3rem;
  }
  form select {
    height: 46px;
  }
  section {
    margin-top: 5rem;
  }
}
</style>
