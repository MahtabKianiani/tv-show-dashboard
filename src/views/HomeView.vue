<template>
  <div class="container">
    <div class="feature-card">
    </div>
    <showComponent :movie="show"></showComponent>
  </div>
</template>

<script>
import { getSearchShows } from "@/tvMazeService";
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
    async searchShow() {
      const x = await getSearchShows("sun");
      console.log(x);
      return { name: x[1].show.name, image: x[1].show.image.original ,rating: x[1].show.rating.average, genre:x[1].show.genres};
    },
  },

  async created() {
    this.show = await this.searchShow();
  },
};
</script>
