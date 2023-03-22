<template lang="">
  <div class="login_wrapper">
    <div class="login-left">
      <div class="app-logo">
        <Icon name="uil:shopping-cart" />
        Grocery App
      </div>
      <div class="left-column-form-group">
        <div class="header">
          <h1 v-if="createAccountMode" class="text-4xl">Create an account!</h1>
          <h1 v-else class="text-4xl">Welcome back!</h1>
          <h2 v-if="createAccountMode">Let's start saving you money today!</h2>
        </div>
        <createAccountForm v-if="createAccountMode" />
        <signInForm v-else />
        <div class="buttons">
          <button class="google-bttn" @click="signInWithGoogle">
            <Icon name="logos:google-icon" />
            <p>Continue with Google</p>
          </button>
          <!-- <button class="apple-bttn">
            <Icon name="uil:apple" />
            <p>Continue with Apple</p>
          </button> -->
        </div>
      </div>
    </div>
    <div class="login-right">
      <div
        @click="switchFormMode()"
        v-if="createAccountMode"
        class="switch-form-mode"
      >
        Log In
      </div>
      <div @click="switchFormMode()" v-else class="switch-form-mode">
        Create Account
      </div>
      <img class="spiral-img" src="../assets/images/spiral.svg" />
    </div>
  </div>
</template>

<script setup>
const user = useSupabaseUser();
const { auth } = useSupabaseClient();
const router = useRouter();
const createAccountMode = ref(true);

watchEffect(async () => {
  if (user.value) {
    await router.push("/");
    // return navigateTo("/");
  }
});

async function signInWithGoogle() {
  const { data, error } = await auth.signInWithOAuth({
    provider: "google",
  });
}

const switchFormMode = () => {
  createAccountMode.value = !createAccountMode.value;
};
</script>

<style lang="scss" scoped>
.login_wrapper {
  min-height: 100vh;
  width: 100%;
  padding: 1em;
  display: flex;
  .login-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    min-width: 500px;
    .app-logo {
      margin-bottom: 2em;
      display: flex;
      align-items: center;
      color: #0f084b;
      font-size: 1.25em;
      font-weight: bold;
      align-self: flex-start;
      svg {
        font-size: 1.25em;
      }
    }
    .left-column-form-group {
      padding: 4em 4em 0 4em;
      width: 100%;
      .header {
        margin-bottom: 2em;
      }
      .buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        .create-account-bttn,
        .google-bttn,
        .apple-bttn {
          height: 60px;
          width: 100%;
          border-radius: 48px;
          background-color: #baff29;
          display: flex;
          margin: 0.5em 0;
          font-weight: bold;
          display: flex;
          justify-content: center;
          align-items: center;
          p {
            font-size: 16px;
          }
          svg {
            font-size: 1.5em;
            margin-right: 0.25em;
          }
        }
        .google-bttn {
          background-color: #fff;
          border: solid 1px #888;
          font-weight: normal;
        }
        .apple-bttn {
          background-color: #000;
          color: #fff;
          font-weight: normal;
        }
      }
    }
  }
  .login-right {
    width: 100%;
    background-color: #0f084b;
    border-radius: 48px;
    margin-left: auto;
    padding: 1em;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    .switch-form-mode {
      background-color: #baff29;
      border-radius: 48px;
      width: fit-content;
      padding: 0.75em 1.5em;
      margin: 0 0 auto auto;
      font-weight: bold;
      cursor: pointer;
      position: relative;
      z-index: 2;
      &:hover {
        background-color: #9ee011;
        transition: 0.1s ease-in;
      }
    }
    .spiral-img {
      position: absolute;
      width: 100%;
      animation: rotate 5s normal linear infinite;
    }
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .login-left {
      min-width: auto;
      .left-column-form-group {
        padding: 2em;
      }
      .create-account-group {
        padding: 1em;
      }
    }
    .login-right {
      width: 100%;
      height: fit-content;
      align-items: center;
      justify-content: center;
      .switch-form-mode {
        width: 100%;
        text-align: center;
        padding: 1em;
      }
    }
  }
}

@keyframes rotate {
  0% {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
  25% {
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
  }
  50% {
    -webkit-transform: rotate3d(0, 0, 1, 180deg);
    transform: rotate3d(0, 0, 1, 180deg);
  }
  75% {
    -webkit-transform: rotate3d(0, 0, 1, 270deg);
    transform: rotate3d(0, 0, 1, 270deg);
  }
  100% {
    -webkit-transform: rotate3d(0, 0, 1, 360deg);
    transform: rotate3d(0, 0, 1, 360deg);
  }
}
</style>
