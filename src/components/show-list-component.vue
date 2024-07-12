<template>
  <div class="container">
    <div>
      <h5>{{ genre }}</h5>
    </div>
    <div class="movie-list">
      <div class="feature-card"></div>
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
  display: grid;
  grid-auto-flow: column; /* Ensures items are placed in columns */
  grid-gap: 20px; /* Space between the items */
  overflow-x: auto; /* Allows horizontal scrolling if needed */
}
</style>
