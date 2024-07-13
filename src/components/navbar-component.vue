<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="navbar-contents">
      <a class="navbar-brand">TV Maze</a>
      <form class="d-flex align-items-center flex-nowrap" id="search-bar">
        <input
          class="form-control mr-sm-3"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="searchQuery"
          required
        />

        <button
          class="btn btn-success my-2 my-sm-0"
          type="submit"
          @click="submitSearch($event)"
        >
          Search
        </button>
      </form>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    submitSearch(e) {
      console.log(e);
      this.$router.push("/search/" + this.searchQuery);
    },
  },
};
</script>
<style>
.navbar-contents {
  padding: 0px 30px;
}
.navbar-brand {
  font-weight: bolder;
}
#search-bar {
  float: right;
  right: 0;
}
</style>
