<template>
  <body>
    <div class="container">
      <h4>Search result for: {{ $route.params.query }}</h4>
      <searchResultComponent :shows="shows" />
    </div>
  </body>
</template>

<script>
import { getSearchShows } from "@/tvMazeService";
import searchResultComponent from "@/components/search-result-component";

export default {
  components: {
    searchResultComponent,
  },
  data() {
    return {
      shows: [],
    };
  },
  methods: {
    async getShowsWithQuery(query) {
      const shows = await getSearchShows(query);
      return shows.map((movie) => {
        return {
          id: movie.show.id,
          name: movie.show.name,
          image: movie.show.image?.medium,
          rating: movie.show.rating?.average,
          genres: movie.show?.genres,
        };
      });
    },
  },

  async created() {
    this.shows = await this.getShowsWithQuery(this.$route.params.query);
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
