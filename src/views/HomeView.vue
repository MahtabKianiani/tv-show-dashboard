<template>
  <div class="home">
    Home sweet home
    <button
      @click="
        {
          {
            getPopularShows();
          }
        }
      "
    >
      Hello
    </button>
    <div class="feature-card">
      <router-link to="#">
        <div class="card" style="width: 18rem">
          <img
            class="card-img-top"
            src="https://as1.ftcdn.net/v2/jpg/02/49/81/82/1000_F_249818226_PXYKFn0w9MIAddfSPS1mxJ3eRgMHxFCC.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <p class="card-text">babae</p>
          </div>
        </div>
      </router-link>
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
      },
    };
  },
  methods: {
    async searchFilm() {
      const x = await getSearchShows("The Godfather");
      console.log(x);
      return { name: x[0].show.name, image: x[0].show.image.original };
    },
  },

  async created() {
    this.show = await this.searchFilm();
  },
};
</script>
