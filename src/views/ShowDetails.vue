<template>
  <div class="main">
    <div class="movie-header">
      <img :src="show.image" alt="show.name" class="movie-poster" />
      <div class="movie-info">
        <h1 class="movie-title">{{ show.name }}</h1>
        <div class="movie-rating">Rate: {{ show.rating }}</div>
        <div class="movie-genres">
          Genres:
          <span v-for="genre in show.genres" :key="genre"
            >{{ genre }} &nbsp;</span
          >
        </div>
        <div class="movie-language">Language: {{ show.language }}</div>
      </div>
    </div>
    <div class="movie-summary">
      <h2>Summary</h2>
      <p class="text-justify" v-html="show.summary"></p>
    </div>
    <div class="movie-cast">
      <h2>Cast</h2>
      <ul>
        <li v-for="member in show.cast" :key="member.name">
          <img
            :src="member.image"
            :alt="member.name"
            class="cast-image"
          /><br />
          <span class="member-name">{{ member.name }}</span>
        </li>
      </ul>
    </div>
  </div>
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
        image: show.image?.original,
        rating: show.rating?.average,
        genres: show.genres,
        language: show.language,
        summary: show.summary,
        cast: show._embedded.cast.map((person) => {
          return {
            name: person.person.name,
            image: person.person.image?.original,
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
<style>
* {
  font-family: Arial, sans-serif;
  background-color: #222831;
  color: #ecf0f1;
  margin: 0;
  padding: 0;
}

.main {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #31363f;
  border-radius: 10px;
}

.movie-header {
  display: flex;
  flex-wrap: wrap; /* Allow wrapping for smaller screens */
  align-items: flex-start;
  border-radius: 10px;
  background-color: #31363f;
}

.movie-poster,
.cast-image {
  width: 150px;
  height: auto;
  border-radius: 10px;
  margin-right: 20px;
  margin-bottom: 20px; /* Add margin for spacing on small screens */
}

.movie-info {
    background-color: #31363f;

  flex-grow: 1;
}

.movie-title {
  font-size: 2.5em;
  margin: 0 0 10px;
}

.movie-rating,
.movie-genres,
.movie-language {
  font-size: 1.2em;
  margin: 5px 0;
}

.movie-summary,
.movie-cast {
  margin-top: 20px;
}

.movie-summary h2,
.movie-cast h2 {
  font-size: 2em;
  color: #e74c3c;
  margin-bottom: 10px;
}

.movie-summary p {
  font-size: 1.2em;
  line-height: 1.6;
}

.movie-cast ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

.movie-cast li {
  font-size: 1.2em;
  margin: 5px 0;
  text-align: center;
}
.member-name {
  text-align: center;
}

/* Responsive Styles */
@media (max-width: 600px) {
  .container {
    padding: 10px;
  }

  .movie-title {
    font-size: 1.8em;
  }

  .movie-rating,
  .movie-genres,
  .movie-language {
    font-size: 1em;
  }

  .movie-summary p,
  .movie-cast li {
    font-size: 1em;
  }

  .movie-poster {
    width: 100%; /* Make the poster full width on small screens */
    margin-right: 0;
  }
  .cast-image {
    width: 50%;
  }

  .movie-info {
    width: 100%; /* Make the info full width on small screens */
    text-align: center;
  }

  .movie-summary,
  .movie-cast {
    margin-top: 10px;
  }

  .movie-summary h2,
  .movie-cast h2 {
    font-size: 1.5em;
  }
}
</style>
