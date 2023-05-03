<template lang="">
  <div>
    <NuxtLayout>
      <div class="surpriseme_wrapper">
        <div class="surpriseme-heading">
          <h1 class="primary-heading">
            <span class="metric">Surprise Me</span>
          </h1>
          <h2 class="metric">2 ways to search</h2>
        </div>
        <div class="surpriseme-main">
          <div class="surprise-meal-type">
            <h3 class="option-header">Random By Recipe Type</h3>
            <div class="meal-types">
              <div
                class="type"
                v-for="mealType in mealTypes"
                @click="searchRecipes(mealType)"
              >
                {{ mealType }}
              </div>
            </div>
          </div>
          <div class="surprise-groceries">
            <h3 class="option-header">Random By Pantry Ingredients</h3>
            <button
              class="surprise-search-bttn"
              @click="searchRecipesByIngredient()"
            >
              Search
            </button>
            <div class="staple-ingredients">
              <div
                class="ingredient"
                v-for="ingredient in stapleIngredients"
                :class="{ active: isStapleIngredientActive(ingredient) }"
                @click="toggleStapleIngredient(ingredient)"
              >
                {{ ingredient }}
              </div>
            </div>
            <div class="addIngredientBar">
              <input type="text" v-model="activeInput" />
              <button @click="addIngredient">
                <Icon name="material-symbols:add" />
              </button>
            </div>
            <div class="currentIngredients">
              <div
                class="currentIngredient"
                v-for="ingredient in includedIngredients"
                @click="removeIngredient(ingredient)"
              >
                {{ ingredient }}
              </div>
            </div>
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
      mealTypes: [
        "Main Course",
        "Side Dish",
        "Dessert",
        "Appetizer",
        "Salad",
        "Bread",
        "Breakfast",
        "Soup",
        "Beverage",
        "Sauce",
        "Marinade",
        "Fingerfood",
        "Snack",
        "Drink",
      ],
      stapleIngredients: [
        "Flour",
        "Butter",
        "Egg",
        "Vinegar",
        "Pasta",
        "Garlic",
        "Honey",
        "Baking Powder",
        "Rice",
        "Sugar",
        "Beans",
        "Milk",
        "Tomato Sauce",
        "Onions",
        "Olive Oil",
      ],
      activeInput: "",
      includedIngredients: [],
    };
  },
  methods: {
    async searchRecipes(type) {
      const recipeInfo = await useFetch(
        () =>
          `https://api.spoonacular.com/recipes/random?number=1&tags=${type.toLowerCase()}`,
        {
          headers: {
            "x-api-key": "c66733ebd8fc4f81ac6847dacc677070",
          },
        }
      );
      this.loadRecipe(recipeInfo.data.value.recipes[0].id);
    },
    async searchRecipesByIngredient() {
      let queryArray = [...this.includedIngredients].join(",+");
      const recipeInfo = await useFetch(
        () =>
          `https://api.spoonacular.com/recipes/findByIngredients?number=1&ingredients=${queryArray}`,
        {
          headers: {
            "x-api-key": "c66733ebd8fc4f81ac6847dacc677070",
          },
        }
      );
      this.loadRecipe(recipeInfo.data.value[0].id);
    },
    loadRecipe(id) {
      return navigateTo({
        path: "/recipeDetails",
        query: {
          recipeId: id,
        },
      }).then(() => {
        this.$router.go();
      });
    },
    addIngredient() {
      this.includedIngredients.push(this.activeInput.toLowerCase());
      this.activeInput = "";
    },
    removeIngredient(item) {
      const index = this.includedIngredients.indexOf(item);
      if (index > -1) {
        this.includedIngredients.splice(index, 1);
      }
    },
    toggleStapleIngredient(item) {
      if (!this.includedIngredients.includes(item.toLowerCase())) {
        this.includedIngredients.push(item.toLowerCase());
      } else {
        this.removeIngredient(item);
      }
    },
    isStapleIngredientActive(item) {
      if (this.includedIngredients.includes(item.toLowerCase())) {
        return true;
      }
      return false;
    },
  },
};
</script>
<style lang="scss">
.surpriseme_wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .surpriseme-heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1em;
    .metric {
      font-size: 1.25em;
    }
    .primary-heading {
      font-size: 1.75em;
      letter-spacing: 4px;
      font-weight: 900;
    }
  }
  .surpriseme-main {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-grow: 1;
    & > * {
      border: solid 2px black;
      border-radius: 12px;
      height: 100%;
      width: 100%;
      margin: 0.5em;
      padding: 1em;
      display: flex;
      flex-direction: column;
      align-items: center;
      &:nth-child(odd) {
        border: solid 6px #0f084b;
        background-color: #baff29;
        color: #0f084b;
      }
      &:nth-child(even) {
        border: solid 6px #baff29;
        background-color: #0f084b;
        color: #fff;
      }
      .option-header {
        font-size: 1.25em;
        text-align: center;
        font-weight: 900;
        margin-bottom: 1em;
      }
      .meal-types {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .type {
          background-color: #0f084b;
          border: solid 2px #fff;
          border-radius: 12px;
          color: #fff;
          font-size: 1.25em;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.75em 1.5em;
          width: 32%;
          margin-bottom: 8px;
          &:hover {
            background-color: #160b7b;
            cursor: pointer;
            transform: scale(1.05);
            transition: 0.1s ease-in-out;
          }
        }
      }
      .surprise-search-bttn {
        background-color: #baff29;
        width: 100%;
        margin: 1em;
        border-radius: 4px;
        color: #0f084b;
        font-weight: 900;
        padding: 0.25em;
      }
      .staple-ingredients {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .ingredient {
          background-color: #fff;
          border: solid 2px #baff29;
          border-radius: 12px;
          color: #0f084b;
          font-size: 1em;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32%;
          margin-bottom: 8px;
          text-transform: capitalize;
          &:hover {
            background-color: #baff29;
            cursor: pointer;
            transform: scale(1.01);
            transition: 0.1s ease-in-out;
          }
          &.active {
            background-color: #baff29;
            font-weight: 900;
            color: #0f084b;
          }
        }
      }
      .addIngredientBar {
        margin: 1em 0;
        display: flex;
        align-items: center;
        justify-content: center;
        input {
          height: 2em;
          width: 75%;
          font-size: 22px;
          border-radius: 8px;
          border: solid 2px red;
          color: #0f084b;
          padding: 0 0.5em;
        }
        svg {
          font-size: 2em;
        }
      }
      .currentIngredients {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        .currentIngredient {
          background-color: #baff29;
          border-radius: 12px;
          color: #0f084b;
          font-size: 1em;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.25em 1.5em;
          width: 32%;
          font-weight: 900;
          color: #0f084b;
          margin: 2px;
          text-transform: capitalize;
          &:hover {
            background-color: #baff29;
            cursor: pointer;
            transform: scale(1.05);
            transition: 0.1s ease-in-out;
          }
        }
      }
    }
  }
}
</style>
