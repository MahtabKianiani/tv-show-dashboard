<template>
  <div class="list-head">
    <h3>Results for: {{ searchResult }}</h3>
  </div>
  <div class="search-movie-list">
    <showComponent v-for="show in shows" :movie="show" :key="show.id" />
  </div>
</template>

<script>
import showComponent from "@/components/show-component";

export default {
  components: {
    showComponent,
  },
  props: {
    shows: {
      type: Array,
      required: true,
    },
    searchResult: {
      type: String,
      required: true,
    },
  },
};
</script>
<style>
.search-movie-list {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  padding-left: 20px;
  padding-right: 20px;
  align-items: start;
  background-color: #222831 !important;
}
</style>
