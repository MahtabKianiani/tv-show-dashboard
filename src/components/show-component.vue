<template>
  <div class="home">
    <div class="feature-card">
      <router-link
        :to="{ name: 'details', params: { id: movie.id, movie: movie } }"
      >
        <div class="card" style="width: 15rem">
          <img class="card-img-top poster" :src="photo" :alt="movie.name" />
          <div class="card-body">
            <p class="card-text">
              {{ movie.name }}
              <span class="rating" v-if="movie.rating !== null">{{
                parseFloat(movie.rating).toFixed(1)
              }}</span
              ><br />
            </p>
          </div>
        </div>
      </router-link>
      <RouterView />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: {
        id: String,
        name: String,
        image: String,
        rating: Number,
        genre: String,
      },
      required: true,
    },
  },
  computed: {
    photo() {
      if (this.movie.image !== undefined) {
        return this.movie.image;
      } else {
        console.log("Here");
        return "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
      }
    },
  },
};
</script>

<style>
.rating {
  color: #ff4545;
  float: right;
  background-color: #222831;
  border-radius: 50%;
  padding: 7px;
}

.poster {
  width: 150px;
  height: 350px;
  object-fit: cover;
}

.card-body,
.card-text {
  background-color: #31363f;
}
</style>
