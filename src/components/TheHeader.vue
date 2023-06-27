<template>
  <header>
    <nav>
      <ul>
        <li>
          <h1><RouterLink to="/">Our Library</RouterLink></h1>
        </li>
        <li>
          <ul>
            <li><RouterLink to="/books">Books</RouterLink></li>
            <li><RouterLink to="/authors">Authors</RouterLink></li>
            <li><RouterLink to="/clients">Clients</RouterLink></li>
            <li><RouterLink to="/borrowings">Borrowings</RouterLink></li>
          </ul>
        </li>
        <li>
          <button>Log Out</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
nav ul li {
  display: inline-block;
}

nav ul li a {
  display: block;
  padding: 15px 25px;
  text-decoration: none;
}
button {
  margin-left: 40px;
  padding: 10px;
}
</style>
