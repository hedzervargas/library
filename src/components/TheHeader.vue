<template>
  <div class="content">
    <div class="header">
      <li>
        <RouterLink to="/">
          <img src="../assets/logo_3alex_trans_bg.svg" alt="" />
        </RouterLink>
        <!-- <h1><RouterLink to="/">Our Library</RouterLink></h1> -->
      </li>
      <li>
        <ul class="inner">
          <li><RouterLink to="/books">Books</RouterLink></li>
          <li><RouterLink to="/authors">Authors</RouterLink></li>
          <li><RouterLink to="/clients">Clients</RouterLink></li>
          <li><RouterLink to="/borrowings">Borrowings</RouterLink></li>
        </ul>
      </li>
    </div>
  </div>
</template>

<style scoped>
.content {
  margin: 0.5rem 3rem 0 3rem;
  max-width: var(--max-width);
}
.header {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  align-items: center;
}
ul {
  display: flex;
}
ul li {
  margin-left: 3rem;
}
/* nav ul li {
  display: inline-block;
} */

/* 
nav {
  display: flex;
  justify-content: center;
  max-width: var(--max-width);
}
ul {
  display: flex;
} */
img {
  max-width: 7rem;
  /* image-rendering: -webkit-optimize-contrast;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges; */
}
@media screen and (min-width: 1200px) {
  .content {
    margin: 0.5rem auto 0 auto;
  }
  img {
    max-width: 10rem;
  }
}
</style>
