<template>
  <body>
    <div class="container">
      <navbarComponent />

      <div v-for="(genre, index) in uniqueGenres" :key="index">
        <showListComponent :shows="shows" :genre="genre" />
      </div>
    </div>
  </body>
</template>

<script>
import { getShows } from "@/tvMazeService";
import showListComponent from "@/components/show-list-component";
import navbarComponent from "@/components/navbar-component";

export default {
  components: {
    showListComponent,
    navbarComponent,
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
          id: movie.id,
          name: movie.name,
          image: movie.image?.medium,
          rating: movie.rating?.average,
          genres: movie?.genres,
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
<style>
* {
  font-family: Arial, sans-serif;
  background-color: #2c3e50;
  color: #ecf0f1;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 100%;
  margin: 20px auto;
  padding: 20px;
  background-color: #34495e;
  border-radius: 10px;
}
</style>
