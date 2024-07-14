<template>
  <h3>{{ genre }}</h3>

  <div class="movie-list">
    <showComponent
      :movie="show"
      v-for="show in filterSortShows(genre)"
      :key="show.id"
    ></showComponent>
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
  padding-left: 20px;
  padding-right: 20px;
  align-items: start;
  background-color: #222831 !important;
}
h3 {
  background-color: #222831;
  padding-bottom: 16px;
  padding-left: 20px;
  font-weight: bolder;
}
h3:first-child {
  padding-top: 16px;
}
</style>
