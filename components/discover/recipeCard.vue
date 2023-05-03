<template lang="">
  <div class="card_wrapper" @click="viewRecipeDetails()">
    <div class="recipe-image">
      <img :src="recipe.image" />
    </div>
    <div class="recipe-details">
      <!-- <p class="recipe-rating"><Icon name="ic:baseline-star" />4.7</p> -->
      <p class="recipe-title">
        {{ recipe.title }}
      </p>
      <a class="recipe-source" href="google.com" target="_blank"
        >Spoonacular Recipe Repository</a
      >
    </div>
  </div>
</template>
<script>
export default {
  props: ["recipe"],
  data() {
    return {};
  },
  methods: {
    viewRecipeDetails(path) {
      return navigateTo({
        path: "/recipeDetails",
        query: {
          recipeId: this.recipe.id,
        },
      }).then(() => {
        this.$router.go();
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.card_wrapper {
  height: 300px;
  width: 250px;
  min-width: 250px;
  border: solid 4px #7a28cb;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    .recipe-details {
      background-color: #530c9a;
      transition: 0.1s ease-in;
    }
  }
  .recipe-image {
    flex-grow: 1;
    display: flex;
    img {
      height: 100%;
      margin: auto;
    }
  }
  .recipe-details {
    width: 100%;
    background-color: #7a28cb;
    color: #fff;
    font-weight: bold;
    margin-top: auto;
    padding: 0.5em;
    position: relative;
    .recipe-rating {
      svg {
        color: gold;
        margin-right: 4px;
      }
    }
    .recipe-title {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .recipe-source {
      font-weight: thin;
      font-size: 0.75em;
      color: #baff29;
    }
  }
}
</style>
