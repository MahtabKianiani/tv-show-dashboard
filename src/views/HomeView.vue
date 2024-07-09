<template>
  <div class="home">
    Home sweet home
    <button
      @click="
        {
          {
            testing();
          }
        }
      "
    >
      Hello
    </button>
  </div>
</template>

<script>
import { getSearchShows } from "@/tvMazeService";
export default {
  methods: {
    async testing() {
      const x = await getSearchShows("The Godfather");
      console.log(x.map((i) => i.show.name));
    },
  },
};
</script>
