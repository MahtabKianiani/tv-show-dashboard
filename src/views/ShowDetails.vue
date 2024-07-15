<template>
  <div class="main">
    <div class="movie-header">
      <img :src="photo" :alt="show.name" class="movie-poster" />
      <div class="movie-info">
        <h1 class="movie-title">{{ show.name }}</h1>
        <div class="movie-rating"><b>Rate: </b> {{ show.rating }}</div>
        <div class="movie-genres">
          <b>Genres: </b>
          <span v-for="genre in show.genres" :key="genre"
            >{{ genre }} &nbsp;</span
          >
        </div>
        <div class="movie-language"><b>Language: </b> {{ show.language }}</div>
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
          <castComponent :cast="member" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getShowById } from "@/tvMazeService";
import castComponent from "@/components/cast-component";

export default {
  components: {
    castComponent,
  },
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
    async getShow(id) {
      const show = await getShowById(id);
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
  computed: {
    photo() {
      if (this.show.image !== undefined) {
        return this.show.image;
      } else {
        return "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
      }
    },
  },

  async mounted() {
    this.show = await this.getShow(this.$route.params.id);
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
  flex-wrap: wrap;

  border-radius: 10px;
  background-color: #222831;
}

.movie-poster {
  flex-grow: 2;
  width: 150px;
  height: auto;
  border-radius: 10px;
  margin-right: 20px;
  margin-bottom: 0; /* Add margin for spacing on small screens */
}

.movie-info {
  border-radius: 10px;
  padding: 16px;
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
  padding: 16px;
  margin-top: 16px;
  border-radius: 8px;
}

.movie-summary h2,
.movie-cast h2 {
  font-size: 2em;
  color: #e74c3c;
  margin-bottom: 10px;
}

.movie-summary p {
  font-size: 1em;
  line-height: 1.6;
}

.movie-cast ul {
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0;
  /* display: flex;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap; */
  list-style-type: none;
}

.movie-cast li {
  
  font-size: 1.2em;
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

  .movie-info {
    flex-grow: 1;
    display: inline;
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
