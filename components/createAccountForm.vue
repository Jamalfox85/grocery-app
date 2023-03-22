<template lang="">
  <FormKit
    type="form"
    id="createAccountForm"
    @submit="registerNewUser"
    submit-label="Create Account"
    :submit-attrs="{
      inputClass: 'create-account-form-submit',
    }"
  >
    <Icon
      v-if="loading"
      name="svg-spinners:12-dots-scale-rotate"
      class="loading-spinner"
    />
    <div class="form_wrapper">
      <FormKit
        type="text"
        name="first_name"
        id="first_name"
        validation="required"
        label="First Name"
        outer-class="form-input-wrapper half-row-input-group"
        inner-class="input-wrapper"
        label-class="label-text"
        help-class="help-text"
      />
      <FormKit
        type="text"
        name="last_name"
        id="last_name"
        validation="required"
        label="Last Name"
        outer-class="form-input-wrapper half-row-input-group"
        inner-class="input-wrapper"
        label-class="label-text"
        help-class="help-text"
      />
      <FormKit
        type="text"
        name="email"
        id="email"
        validation="required|email"
        label="Email address"
        inner-class="input-wrapper"
        label-class="label-text"
        help-class="help-text"
      />
      <FormKit
        type="password"
        name="password"
        id="password"
        validation="?length:8|required"
        label="Password"
        outer-class="form-input-wrapper half-row-input-group"
        inner-class="input-wrapper"
        label-class="label-text"
        help-class="help-text"
      />
      <FormKit
        type="password"
        name="password_confirm"
        id="password_confirm"
        validation="required|confirm"
        label="Confirm Password"
        outer-class="form-input-wrapper half-row-input-group"
        inner-class="input-wrapper"
        label-class="label-text"
        help-class="help-text"
      />
    </div>
  </FormKit>
</template>

<script>
export default {
  setup() {
    const user = useSupabaseUser();
    const { auth } = useSupabaseClient();
    return {
      user,
      auth,
    };
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    async registerNewUser(formValues) {
      this.loading = true;
      try {
        const { error } = await this.auth.signUp({
          email: formValues.email,
          password: formValues.password,
          options: {
            data: {
              first_name: formValues.first_name,
              last_name: formValues.last_name,
            },
          },
        });
        this.loading = false;
        if (error) throw error;
        else {
          this.$formkit.reset("createAccountForm");
          const { data, error } = await this.auth.signInWithPassword({
            email: formValues.email,
            password: formValues.password,
          });
          return navigateTo({ path: "/" });
        }
      } catch (error) {
        this.$formkit.setErrors("createAccountForm", [error.message]);
      }
    },
  },
};
</script>

<style lang="scss">
.loading-spinner {
  font-size: 2em;
  margin-bottom: 1em;
}
/* Wrappers */
.form_wrapper {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2em;
}
.formkit-outer {
  width: 100%;
  &.half-row-input-group {
    width: 50%;
    @media screen and (max-width: 550px) {
      width: 100%;
    }
  }
}
.formkit-inner {
  width: 100%;
  padding: 1em;
  .formkit-input {
    border-bottom: solid 2px rgb(200, 198, 198);
    width: 100%;
    &:focus {
      border-bottom: solid 2px #000;
      outline: none;
    }
  }
}

.create-account-form-submit {
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
  &:hover {
    background-color: #9ee011;
    transition: 0.1s ease-in;
  }
}

/* Text */
.label-text {
  font-size: 16px;
  font-weight: bold;
}

/* Error State */
.formkit-message {
  color: red;
  font-size: 10px;
  margin-bottom: 12px;
}
[data-invalid] .label-text {
  color: red;
}
</style>
