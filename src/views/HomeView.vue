<template>
  <div class="container">
    <div v-for="(genre, index) in uniqueGenres" :key="index">
      <showListComponent :shows="shows" :genre="genre" />
    </div>
  </div>
</template>

<script>
import { getShows } from "@/tvMazeService";
import showListComponent from "@/components/show-list-component";

export default {
  components: {
    showListComponent,
  },
  data() {
    return {
      shows: [],
      uniqueGenres: [],
    };
  },
  methods: {
    async getAllShow() {
      const x = await getShows();
      return x.map((movie) => {
        return {
          name: movie.name,
          image: movie.image.medium,
          rating: movie.rating.average,
          genres: movie.genres,
        };
      });
    },
  },

  async created() {
    this.shows = await this.getAllShow();
    this.uniqueGenres = new Set(this.shows.map((show) => show.genres).flat());
  },
};
</script>
