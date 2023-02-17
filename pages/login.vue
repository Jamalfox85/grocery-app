<template lang="">
  <div class="login_wrapper">
    <div class="login-left">
      <div class="app-logo">
        <Icon name="uil:shopping-cart" />
        Grocery App
      </div>
      <!--Create Account Side -->
      <div class="create-account-group">
        <div class="header">
          <h1 class="text-4xl">Create an account</h1>
          <h2>Let's start saving you money today!</h2>
        </div>
        <createAccountForm />
        <div class="buttons">
          <!-- <button class="create-account-bttn">
            <p>Create Account</p>
          </button> -->
          <button class="google-bttn">
            <Icon name="logos:google-icon" />
            <p>Continue with Google</p>
          </button>
          <button class="apple-bttn">
            <Icon name="uil:apple" />
            <p>Continue with Apple</p>
          </button>
        </div>
      </div>
    </div>
    <div class="login-right">
      <div class="switch-to-login-bttn">Log In</div>
      <img class="spiral-img" src="../assets/images/spiral.svg" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.login_wrapper {
  height: 100vh;
  width: 100%;
  padding: 1em;
  display: flex;
  .login-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
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
    .create-account-group {
      padding: 4em;
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
    height: 100%;
    min-width: 60%;
    background-color: #0f084b;
    border-radius: 48px;
    margin-left: auto;
    padding: 1em;
    display: flex;
    position: relative;
    overflow: hidden;
    .switch-to-login-bttn {
      background-color: #baff29;
      border-radius: 48px;
      width: fit-content;
      padding: 0.75em 1.5em;
      margin: 0 0 auto auto;
      font-weight: bold;
    }
    .spiral-img {
      position: absolute;
      width: 100%;
      animation: rotate 5s normal linear infinite;
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
