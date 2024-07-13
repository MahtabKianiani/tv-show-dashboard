<template>
  <div class="home">
    <div class="feature-card">
      <router-link
        :to="{ name: 'details', params: { id: movie.id, movie: movie } }"
      >
        <div class="card" style="width: 18rem">
          <img class="card-img-top" :src="movie.image" alt="movie.name" />
          <div class="card-body">
            <p class="card-text">
              {{ movie.name }} <span class="rating">{{ movie.rating }}</span
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
};
</script>

<style>
.rating {
  color: #ff4545;
  float: right;
  background-color: #ffe234;
  border-radius: 50%;
  padding: 5px;
}
.feature-card {
  transition: transform 2s;
}
.feature-card :hover {
  transform: scale(1.03);
}
</style>
