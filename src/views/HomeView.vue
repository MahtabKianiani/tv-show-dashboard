<template>
  <header>
    <navbarComponent />
  </header>
  <body>
    <div class="hala">
      <div v-for="(genre, index) in uniqueGenres" :key="index" class="list">
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
      const shows = await getShows();
      return shows.map((movie) => {
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
body {
  background-color: #222831 !important;
}
.hala {
  background-color: #222831 !important;
}
.list {
  background-color: #222831 !important;
}
</style>
