<template>
  <h1>{{ show.name }}</h1>
  <p>
    {{ show }}
  </p>
</template>

<script>
import { getShow } from "@/tvMazeService";

export default {
  data() {
    return {
      show: {
        name: String,
        image: String,
        rating: Number,
        genres: Array,
        language: String,
        summary: String,
        cast: Array,
      },
    };
  },
  methods: {
    async getShowById(id) {
      const show = await getShow(id);
      return {
        name: show.name,
        image: show.image.original,
        rating: show.rating.average,
        genres: show.genres,
        language: show.language,
        summary: show.summary,
        cast: show._embedded.cast.map((person) => {
          return {
            name: person.person.name,
            image: person.person.image.original,
          };
        }),
      };
    },
  },

  async created() {
    this.show = await this.getShowById(this.$route.params.id);
  },
};
</script>
