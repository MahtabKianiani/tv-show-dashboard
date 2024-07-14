<template>
  <body>
    <searchResultComponent :shows="shows" :searchResult="$route.params.query" />
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
  margin: 0;
  padding: 0;
}
</style>
