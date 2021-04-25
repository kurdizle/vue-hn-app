<template>
  <header>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand><b-link to="/">Vue Hacker News</b-link></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/newest">Newest</b-nav-item>
          <b-nav-item to="/news">News</b-nav-item>
          <b-nav-item to="/show">Show</b-nav-item>
          <b-nav-item to="/ask">Ask</b-nav-item>
          <b-nav-item to="/jobs">Jobs</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {};
</script>

<style>
.navbar-brand a,
.navbar-brand a:link,
.navbar-brand a:active,
.navbar-brand a:hover {
  text-decoration: none;
  color: rgba(255, 255, 255, 1);
}
.navbar-dark .navbar-nav .nav-link.router-link-active,
.navbar-dark .navbar-nav .nav-link.router-link-exact-active,
.navbar-dark .navbar-nav .nav-link.router-link-exact-active:link,
.navbar-dark .navbar-nav .nav-link.router-link-exact-active:active,
.navbar-dark .navbar-nav .nav-link.router-link-exact-active:hover {
  color: rgba(255, 255, 255, 1);
}
</style>
