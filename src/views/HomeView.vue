<template>
  
  <header>
    <nav class="navbar navbar-dark bg-dark">
  <a class="navbar-brand">TVMAZE</a>
  <form class="form-inline input-group mb-3">
    <input class="form-control mr-sm-3" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
</header>
<body>
    <div v-for="(genre, index) in uniqueGenres" :key="index">
      <showListComponent :shows="shows" :genre="genre" />
    </div>
 </body>
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
<style>
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: 'Fira Sans' , sans-serif;
}
.navbar-brand{
  font-weight: bold;
  padding-left: 15px;
}

</style>
