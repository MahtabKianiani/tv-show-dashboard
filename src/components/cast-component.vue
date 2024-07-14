<template>
  <div class="movie-cast">
    <img :src="cast.image" :alt="cast.name" class="cast-image" />
    <br />
    <span class="cast-name">{{ cast.name }}</span>
  </div>
</template>

<script>
export default {
  props: {
    cast: {
      type: {
        name: String,
        image: String,
      },
      required: true,
    },
  },
};
</script>

<style>
.movie-cast {
  padding: 0;
  margin: 0;
  margin-top: 20px;
}
.cast-image {
  width: 150px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}
.cast-name {
  text-align: center;
  width: 80%;
  display: inline-block;
}
</style>
