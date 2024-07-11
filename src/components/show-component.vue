<template>
  <div class="home">
    <div class="feature-card">
      <router-link to="#">
        <div class="card" style="width: 18rem">
          <img class="card-img-top" :src=" movie.image " alt="Card image cap" />
          <div class="card-body">
            <p class="card-text ">{{ movie.name }} <span class="rating">{{ movie.rating }}</span><br><span>{{ movie.genre }}</span></p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: {
        name: String,
        image: String,
        rating: String, genre: String
      },
      required: true,
    },
  },
};
</script>




<style>
.rating{
  color:red;
  float: right;
}
</style>
