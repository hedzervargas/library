<template>
  <div class="content">
    <header>
      <h1>Add a book</h1>
    </header>
    <form @submit.prevent="postListing">
      <div class="form-input">
        <label for="title">Title*</label>
        <input
          type="text"
          id="title"
          placeholder="Enter the book title"
          v-model="bookInfo.title"
        />
      </div>
      <div class="form-input">
        <label for="author">Author*</label>
        <input
          type="text"
          id="author"
          placeholder="Enter the name of the author"
          v-model="bookInfo.author"
        />
      </div>
      <div class="form-input">
        <label for="publisher">Publisher*</label>
        <input
          type="text"
          id="publisher"
          placeholder="Enter the name of the publisher"
          v-model="bookInfo.publisher"
        />
      </div>
      <div class="form-input">
        <label for="genre">Genre*</label>
        <input
          type="text"
          id="genre"
          placeholder="Enter the Genre"
          v-model="bookInfo.genre"
        />
      </div>
      <div class="form-input">
        <label for="publication_date">Publication Date*</label>
        <input
          type="text"
          id="publication_date"
          placeholder="e.g. 5th century"
          v-model="bookInfo.publication_date"
        />
      </div>
      <p v-if="!formIsValid" class="invalid-message">Required fields missing</p>
      <button type="submit">ADD</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["houseId"],
  data() {
    return {
      bookInfo: {
        title: "",
        author: "",
        publisher: "",
        genre: "",
        publication_date: "",
      },
      pictureURL: "",
      formIsValid: true,
      isEditing: false,
      changesUnsaved: false,
      unsavedWarning: false,
      error: null,
      mounted: false,
    };
  },
  methods: {
    async postListing() {
      // checking form validity
      this.validateForm();

      if (this.formIsValid) {
        try {
          await this.$store.dispatch("addBook", this.bookInfo);
          this.$router.push(`/books`);
        } catch (error) {
          this.error = error.message || "Something went wrong!";
        }
      }
    },
    validateForm() {
      // validating form
      if (
        Object.keys(this.bookInfo).every((key) => this.bookInfo[key] !== "")
      ) {
        this.formIsValid = true;
      } else {
        this.formIsValid = false;
      }
    },
    invalidateForm() {
      // invalidating form
    },
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
  margin-right: 50%;
  margin-bottom: 0;
  transform: translateX(50%);
  white-space: nowrap;
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
</style>
