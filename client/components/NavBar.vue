<!-- eslint-disable -->
<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <h1 class="navbar-item">
          AgileEngine
        </h1>
      </div>
    </nav>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'NavBar',
};
</script>

<style scoped>
  .nuxt-link-active {
    background-color: #3f51b5 !important;
    color: white !important;
  }
  .hover-link:hover {
    background-color: #33418e !important;
    color: white !important;
  }
  .navbar-menu {
    background-color: #3f51b5;
  }
  .navbar {
    background: #3f51b5;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 2px 9px 1px rgba(0, 0, 0, 0.12), 0 4px 2px -2px rgba(0, 0, 0, 0.2);
    color: #fff;
  }
  .navbar-burger {
    color: #fff;
  }
  .navbar-item {
    color: #fff;
  }
  .navbar-dropdown {
    background: #3f51b5;
  }
  .navbar-item.has-dropdown:focus .navbar-link, .navbar-item.has-dropdown:hover .navbar-link, .navbar-item.has-dropdown.is-active .navbar-link {
  background-color: #33418e !important;
  }
  .navbar-link:not(.is-arrowless)::after {
    border-color: #fff;
    margin-top: -0.375em;
    right: 1.125em;
  }
</style>
