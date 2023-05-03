<template lang="">
  <div>
    <NuxtLayout>
      <div class="details_wrapper">
        <div class="details-header">
          <div class="back-group" @click="goBack()">
            <Icon
              class="exit-details-page-icon"
              name="material-symbols:arrow-back-ios"
            />
            <p>Back</p>
          </div>
        </div>
        <div class="details-main">
          <div class="details-left">
            <div class="title-group">
              <h1 class="recipe-title">
                {{ recipeDetails.title }}
                <!-- When you add the ability to like and unlike recipes, change the icon name from 'favorite' to 'favorite-outline' by default. Also consider making either the icon or the background of it the bright green color.-->
                <span class="recipe-likes"
                  ><Icon name="material-symbols:favorite" />{{
                    recipeDetails.aggregateLikes
                  }}</span
                >
              </h1>
              <small
                >Time: {{ recipeDetails.readyInMinutes }} minutes | Servings:
                {{ recipeDetails.servings }}</small
              >
            </div>
            <div class="recipe-tags">
              <recipe-tag-badge :recipe="recipeDetails" />
            </div>
            <img class="recipe-img" :src="recipeDetails.image" />
            <h2>Summary</h2>
            <div class="recipe-summary" v-html="recipeDetails.summary"></div>
            <h2 v-if="recipeDetails.winePairing !== null">Wine Pairings</h2>
            <div
              class="recipe-wine-info"
              v-if="recipeDetails.winePairing !== null"
            >
              <div class="recipe-wine-tags">
                <recipe-tag-badge
                  v-for="wine in recipeDetails.winePairing.pairedWines"
                  :tag="wine"
                />
              </div>
              <p class="recipe-wine-pairings">
                {{ recipeDetails.winePairing.pairingText }}
              </p>
            </div>
            <a
              class="recipe-source"
              :href="recipeDetails.sourceUrl"
              target="_blank"
              ><p>
                Full recipe can be found at {{ recipeDetails.sourceName }}.
              </p></a
            >
          </div>
          <div class="details-right">
            <h2>Ingredients</h2>
            <ul class="ingredients">
              <li v-for="ingredient in recipeDetails.extendedIngredients">
                {{ ingredient.name }}
              </li>
            </ul>
            <h2>Instructions</h2>
            <ul class="instructions">
              <li v-for="step in recipeDetails.analyzedInstructions[0].steps">
                <span class="step-number">{{ step.number }}.</span>
                {{ step.step }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      recipeDetails: {},
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  async created() {
    const route = useRoute();
    let queryDetails = route.query;
    let id = queryDetails.recipeId;
    const recipeInfo = await useFetch(
      () => `https://api.spoonacular.com/recipes/${id}/information`,
      {
        headers: {
          "x-api-key": "c66733ebd8fc4f81ac6847dacc677070",
        },
      }
    );
    console.log(recipeInfo.data.value);
    this.recipeDetails = recipeInfo.data.value;
  },
};
</script>
<style lang="scss">
.details_wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1em;
  .details-header {
    .back-group {
      display: inline-flex;
      align-items: center;
      background: #0f084b;
      color: #fff;
      border: solid 2px #baff29;
      padding: 4px 8px;
      border-radius: 8px;
      &:hover {
        cursor: pointer;
        color: #7a28cb;
      }
      .exit-details-page-icon {
        font-size: 1.25em;
      }
    }
  }
  .details-main {
    flex-grow: 1;
    padding: 1em;
    display: flex;
    justify-content: space-around;
    .details-left {
      width: 50%;
      display: flex;
      flex-direction: column;
      .title-group {
        margin-bottom: 1em;
        .recipe-title {
          font-size: 2em;
          font-weight: 900;
          color: #0f084b;
          text-shadow: 1px 1px #baff29;
        }
        .recipe-likes {
          background-color: #7a28cb;
          padding: 4px 8px;
          border-radius: 4px;
          color: #fff;
          text-shadow: none;
          display: inline-flex;
          align-items: center;
          font-size: 14px;
          svg {
            font-size: 14px;
            margin-right: 4px;
          }
        }

        small {
          position: relative;
          top: -8px;
          color: rgb(64, 63, 63);
        }
      }
      .recipe-tags {
        display: flex;
        margin-bottom: 8px;
      }
      .recipe-img {
        border: solid 8px #7a28cb;

        border-radius: 12px;
        margin-bottom: 1em;
      }
      h2 {
        font-weight: 900;
        color: #0f084b;
        text-shadow: 1px 1px #baff29;
        margin: 0.75em 0 0.25em 0;
        font-size: 1.25em;
      }
      .recipe-summary {
      }
      .recipe-wine-info {
        .recipe-wine-tags {
          display: flex;
          margin-bottom: 4px;
          & > * {
            text-transform: capitalize;
          }
        }
        .recipe-wine-pairings {
        }
      }
      .recipe-source {
        color: #7a28cb;
        text-decoration: underline;
        margin-top: 4em;
      }
    }
    .details-right {
      width: 40%;
      h2 {
        font-weight: 900;
        color: #0f084b;
        text-shadow: 1px 1px #baff29;
        margin: 0.75em 0 0.25em 0;
        font-size: 1.25em;
      }
      .ingredients {
        font-weight: bold;
        text-transform: capitalize;
        list-style-type: disc;
      }
      .instructions {
        li {
          margin-bottom: 4px;
          .step-number {
            font-size: 1.25em;
            color: #7a28cb;
            font-weight: bold;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1150px) {
  .details-main {
    flex-direction: column;
    align-items: center;
    .details-left,
    .details-right {
      width: 80% !important;
    }
  }
}
</style>
