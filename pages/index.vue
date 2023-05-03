<template lang="">
  <div>
    <NuxtLayout>
      <div class="main_wrapper">
        <div class="main-left-and-right">
          <div class="home_left">
            <h1 class="primary-heading">
              Welcome to <span class="metric">Flavor Swap</span>
            </h1>
            <div class="main-options-cell">
              <div class="main-option">
                <Icon name="material-symbols:food-bank-outline-rounded" />
                <p>My Recipes</p>
              </div>
              <div class="main-option">
                <Icon name="material-symbols:menu-book" />
                <p>My Cookbooks</p>
              </div>
              <div class="main-option" @click="navToSurpriseMe">
                <Icon name="material-symbols:question-mark" />
                <p>Surpise Me</p>
              </div>
            </div>
            <div class="featured-recipe-cell">
              <h2>Featured Recipe</h2>
              <div class="recipe-details">
                <p class="featured-title">Recipe Title</p>
                <div class="featured-tags">
                  <recipe-tag-badge :tag="'Vegetarian'" />
                  <recipe-tag-badge :tag="'Easy'" />
                  <recipe-tag-badge :tag="'Protein Plus'" />
                  <recipe-tag-badge :tag="'Meal Prep'" />
                </div>
                <p class="featured-description">
                  This is an example recipe description of the featured recipe
                  of the day.
                </p>
              </div>
              <button>View Recipe</button>
            </div>
            <div class="recently-viewed-cell">
              <h2>Recently Viewed</h2>
              <div class="recently-viewed-list">
                <div class="recently-viewed-recipe">
                  <p>Recipe Title</p>
                  <div class="rv-recipe-img"></div>
                  <button>View</button>
                </div>
                <div class="recently-viewed-recipe">
                  <p>Recipe Title</p>
                  <div class="rv-recipe-img"></div>
                  <button>View</button>
                </div>
                <div class="recently-viewed-recipe">
                  <p>Recipe Title</p>
                  <div class="rv-recipe-img"></div>
                  <button>View</button>
                </div>
                <div class="recently-viewed-recipe">
                  <p>Recipe Title</p>
                  <div class="rv-recipe-img"></div>
                  <button>View</button>
                </div>
              </div>
            </div>
            <div class="secondary-options-cell">
              <div class="secondary-option">
                <Icon name="material-symbols:menu-book" />
                <p>Options</p>
              </div>
              <div class="secondary-option">
                <Icon name="material-symbols:menu-book" />
                <p>Options</p>
              </div>
              <div class="secondary-option">
                <Icon name="material-symbols:menu-book" />
                <p>Options</p>
              </div>
              <div class="secondary-option">
                <Icon name="material-symbols:menu-book" />
                <p>Options</p>
              </div>
            </div>
          </div>
          <div class="home_right">
            <div class="follow-metrics">
              <p>Following: <span class="metric">100</span></p>
              <p>Followers: <span class="metric">100</span></p>
            </div>
            <div class="follow-feed">
              <h2>Feed</h2>
              <div class="feed-entry" v-for="item in mostRecentFeed">
                <div class="feed-entry-prof">
                  <Icon name="ic:baseline-person" />
                </div>
                <!-- <div -->
                <div class="feed-entry-details">
                  <p class="entry-title">{{ item.title }}</p>
                  <p class="entry-text">{{ item.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cooking-tip-cell">
          <p class="tip-wrapper">{{ currentJoke }}</p>
        </div>

        <!-- NECESSARY SECTIONS
        1. My Recipes
        2. Recently Viewed
        3. Following & Followers
        4. Recipes recently uploaded by people you follow
        5. Cooking Tips (could be snackbar or permanent section)
        
        -->
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});

let currentJoke = ref("");

function navToSurpriseMe() {
  console.log("ping");
  return navigateTo({
    path: "/surpriseme",
  }).then(() => {
    this.$router.go();
  });
}

const getRandomTip = async () => {
  const getJoke = await useFetch(
    () => `https://api.spoonacular.com/food/jokes/random`,
    {
      headers: {
        "x-api-key": "c66733ebd8fc4f81ac6847dacc677070",
      },
    }
  );
  currentJoke.value = getJoke.data.value.text;
  console.log(getJoke.data.value.text);
};
getRandomTip();

const mostRecentFeed = ref([]);
const recentlyViewed = ref([{}, {}]);

const populateMostRecentFeed = () => {
  mostRecentFeed.value.push(
    {
      title: "Testing Title 1",
      text: "This User just uploaded a new recipe!",
    },
    {
      title: "Testing Title 2",
      text: "This User just uploaded a new recipe! This is a longer message for example.",
    },
    {
      title: "Testing Title 3",
      text: "This User just uploaded a new recipe! This is a longer message for example.",
    },
    {
      title: "Testing Title 4",
      text: "This User just uploaded a new recipe!",
    },
    {
      title: "Testing Title 5",
      text: "This User just uploaded a new recipe!",
    },
    {
      title: "Testing Title 6",
      text: "This User just uploaded a new recipe!",
    },
    {
      title: "Testing Title 7",
      text: "This User just uploaded a new recipe!",
    },
    {
      title: "Testing Title 8",
      text: "This User just uploaded a new recipe!",
    },
    {
      title: "Testing Title 9",
      text: "This User just uploaded a new recipe!",
    },
    {
      title: "Testing Title 10",
      text: "This User just uploaded a new recipe!",
    }
  );
};

const populateRecentlyViewed = async () =>
  recentlyViewed.value.push(
    await useFetch(
      () => `https://api.spoonacular.com/recipes/random?number=15`,
      {
        headers: {
          "x-api-key": "c66733ebd8fc4f81ac6847dacc677070",
        },
      }
    )
  );

populateMostRecentFeed();
populateRecentlyViewed();
</script>
<style lang="scss">
.main_wrapper {
  // height: 1000px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .main-left-and-right {
    width: 100%;
    display: flex;
  }
  .home_left {
    width: 80%;
    padding: 1em;
    display: grid;
    grid-template-rows: 80px 1fr 1fr 1fr;
    grid-template-columns: repeat(10, 1fr);
    grid-gap: 12px;
    & > * {
      padding: 12px;
    }
    .primary-heading {
      font-size: 1.5em;
      letter-spacing: 4px;
      font-weight: 900;
      grid-row: 1/2;
      grid-column: 1/11;
      .metric {
        font-size: 1.75em;
      }
    }
    .main-options-cell {
      grid-row: 2/4;
      grid-column: 1/4;
      display: flex;
      flex-direction: column;
      align-items: center;
      .main-option {
        height: 50%;
        width: 100%;
        border: solid 2px #baff29;
        margin: 4px 0;
        border-radius: 12px;
        background-color: #0f084b;
        color: #fff;
        font-size: 2em;
        display: flex;
        align-items: center;
        padding: 0.5em;
        svg {
          font-size: 1.25em;
          margin-right: 8px;
        }
        p {
          font-size: 0.75em;
        }
        &:hover {
          background-color: #332898;
          transition: 0.3s ease-in-out;
          cursor: pointer;
        }
      }
    }
    .featured-recipe-cell {
      grid-row: 2/4;
      grid-column: 4/9;
      display: flex;
      flex-direction: column;
      align-content: flex-start;
      color: #0f084b;
      border: solid 2px #0f084b;
      border-radius: 8px;
      h2 {
        margin-bottom: 1em;
        font-weight: 900;
        color: #0f084b;
        text-shadow: 1px 1px #baff29;
      }
      .featured-title {
        font-size: 3em;
        font-weight: 900;
        text-shadow: 1px 1px #baff29;
      }
      .featured-tags {
        display: flex;
        margin-bottom: 4px;
      }
      .featured-description {
        font-weight: bold;
      }
      button {
        background: #0f084b;
        color: #fff;
        font-size: 1.25em;
        padding: 8px 16px;
        border-radius: 4px;
        align-self: center;
        margin-top: auto;
      }
    }
    .recently-viewed-cell {
      grid-row: 2/5;
      grid-column: 9/11;
      h2 {
        margin-bottom: 1em;
        font-weight: 900;
        color: #0f084b;
        text-shadow: 1px 1px #baff29;
      }
      .recently-viewed-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow-y: scroll;
        height: 80vh;
        .recently-viewed-recipe {
          // height: 200px;
          width: 100%;
          border: solid 2px purple;
          border-radius: 4px;
          background-color: #bbff29;
          margin-bottom: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 4px;
          p {
            font-size: 16px;
            font-weight: bold;
          }
          .rv-recipe-img {
            height: 125px;
            width: 100%;
            border: solid 2px black;
            margin: 8px 0;
            border-radius: 4px;
          }
          button {
            background-color: #0f084b;
            border-radius: 4px;
            color: white;
            text-align: center;
            padding: 4px 16px;
          }
        }
      }
    }
    .secondary-options-cell {
      grid-row: 4/5;
      grid-column: 1/9;
      display: flex;
      .secondary-option {
        flex-grow: 1;
        background-color: #0f084b;
        border: solid 2px #baff29;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 4px;
        border-radius: 8px;
        font-size: 1em;
        svg {
          font-size: 1.5em;
        }
        p {
          font-size: 1.25em;
        }
      }
    }
  }
  .home_right {
    width: 20%;
    height: 75%;
    padding: 1em;
    display: flex;
    flex-direction: column;
    .follow-metrics {
      display: flex;
      justify-content: space-between;
      p {
        font-size: 12px;
        font-weight: bold;
      }
    }
    .follow-feed {
      display: flex;
      flex-direction: column;
      margin-top: 0.5em;
      width: 100%;
      height: 100%;
      padding: 0.25em;
      overflow-y: scroll;
      h2 {
        margin-bottom: 1em;
        font-weight: 900;
        color: #0f084b;
        text-shadow: 1px 1px #baff29;
      }
      .feed-entry {
        width: 100%;
        border: solid 2px #baff29;
        background-color: #0f084b;
        color: #fff;
        margin-bottom: 0.5em;
        border-radius: 8px;
        display: flex;
        align-items: center;
        padding: 0.5em;
        .feed-entry-prof {
          height: 1.5em;
          aspect-ratio: 1;
          margin-right: 0.5em;
          border-radius: 50%;
          background-color: #baff29;
          display: flex;
          svg {
            font-size: 1.5em;
            color: #0f084b;
            margin: auto;
          }
        }
        .feed-entry-details {
          margin-bottom: 8px 0;
          .entry-title {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 4px;
          }
          .entry-text {
            font-size: 10px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
      }
    }
  }
  .cooking-tip-cell {
    display: flex;
    align-items: center;
    .tip-wrapper {
      background-color: #0f084b;
      border: solid 2px #baff29;
      height: 100%;
      width: 100%;
      margin: 12px;
      border-radius: 8px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      padding: 4px 8px;
      svg {
        font-size: 1.5em;
        margin-right: 8px;
      }
    }
  }
}
</style>
