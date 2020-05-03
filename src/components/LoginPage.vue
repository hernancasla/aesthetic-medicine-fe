<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div class="row justify-content-md-center">
        <div class="col-lg-6 col-md-9 col-12">
          <h2>Sign In</h2>
          <div class="form-group">
            <div class="full-input">
              <label for="Email" class="floatLabel">Email</label>
              <input
                type="text"
                v-model="username"
                name="username"
                class="form-control"
                :class="{ 'is-invalid': submitted && !username}"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="password" class="floatLabel">Password</label>
            <input
              type="password"
              v-model="password"
              name="password"
              class="form-control"
              :class="{ 'is-invalid': submitted && !password }"
            />
          </div>
          <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>

          <div class="form-group ">
            <button class="btn btn-primary button button1" :disabled="status.loggingIn">Login</button>
            <img v-show="status.loggingIn" src />
            <router-link to="/register" class="btn btn-link button button2">Register</router-link>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      username: "",
      password: "",
      submitted: false,
      errorMessage: ""
    };
  },
  computed: {
    ...mapState("account", ["status"]),
    ...mapState({
      alert: state => state.alert
    })
  },
  created() {
    // reset login status
    this.logout();
  },
  methods: {
    ...mapActions("account", ["login", "logout"]),
    handleSubmit(/*e*/) {
      this.submitted = true;
      const { username, password } = this;
      if (username && password) {
        this.login({ username, password });
      }
    }
  }
};
</script>
<style scoped>
/* form p {
  margin: 0 0 3em 0;
  position: relative;
}
form input {
  display: block;
  box-sizing: border-box;
  width: 100%;
  outline: none;
  margin: 0;
}
form input[type="text"],
form input[type="password"] {
  background: #fff;
  border: 1px solid #dbdbdb;
  font-size: 1.6em;
  padding: 0.8em 0.5em;
  border-radius: 2px;
}
form input[type="text"]:focus,
form input[type="password"]:focus {
  background: #fff;
}
form span {
  display: block;
  background: #f9a5a5;
  padding: 2px 5px;
  color: #666;
}
form input[type="submit"] {
  background: rgba(148, 186, 101, 0.7);
  box-shadow: 0 3px 0 0 rgba(123, 163, 73, 0.7);
  border-radius: 2px;
  border: none;
  color: #fff;
  cursor: pointer;
  display: block;
  font-size: 2em;
  line-height: 1.6em;
  margin: 2em 0 0;
  outline: none;
  padding: 0.8em 0;
  text-shadow: 0 1px #68b25b;
}
form input[type="submit"]:hover {
  background: #94af65;
  text-shadow: 0 1px 3px rgba(70, 93, 41, 0.7);
}
form label.floatLabel {
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 14px !important;
}
.button {
  background-color: #4caf50; 
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  -webkit-transition-duration: 0.4s; 
  transition-duration: 0.4s;
  cursor: pointer;
}

.button1 {
  background-color: white;
  color: black;
  border: 2px solid #5970f0;
}

.button1:hover {
  background-color: #5970f0;
  color: white;
}

.button2 {
  background-color: white;
  color: black;
  border: 2px solid #5970f0;
}

.button2:hover {
  background-color: #5970f0;
  color: white;
} */
</style>
