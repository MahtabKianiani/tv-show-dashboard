<template>
  <div class="main">
    <div class="list-head">
      <h3>{{ genre }}</h3>
    </div>
    <div class="movie-list">
      <showComponent
        :movie="show"
        v-for="show in filterSortShows(genre)"
        :key="show.id"
      ></showComponent>
    </div>
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
    genre: {
      type: String,
      required: true,
    },
  },
  methods: {
    filterSortShows(genre) {
      return this.shows
        .filter((show) => show.genres.includes(genre))
        .sort((first, second) => second.rating - first.rating);
    },
  },
};
</script>
<style>
.movie-list {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  align-items: start;
}
h3 {
  padding-bottom: 15px;
}
h3:first-child {
  padding-top: 15px;
}
.main {
  max-width: 100%;
  margin: 20px auto;
  padding: 20px;
  background-color: #34495e;
  border-radius: 10px;
}
</style>
