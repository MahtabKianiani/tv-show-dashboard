<template>
  <div class="container">
    <div class="feature-card">
    </div>
    <showComponent :movie="show" v-for="show in show" :key="show.id"></showComponent>
  </div>
</template>

<script>
import { getShows } from "@/tvMazeService";
import showComponent from "@/components/show-component";

export default {
  components: {
    showComponent,
  },
  data() {
    return {
      show: {
        name: String,
        image: String,
        rating: String
        , genre: String
      },
    };
  },
  methods: {
    async getAllShow() {
      const x = await getShows();
      console.log(x);
      return x.map(movie => {
        return {
          name: movie.name,
          image: movie.image.medium,
          rating: movie.rating.average
        };
      });
    },
  },

  async created() {
    this.show = await this.getAllShow();
  },
};
</script>
