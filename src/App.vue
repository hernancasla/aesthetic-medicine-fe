
<template>
  <div >
    <div class="row">
      <div class="col-12">
        <Navigation/>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <router-view id="main"></router-view>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <Footer/>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "app",
  computed: {
    ...mapState({
      alert: state => state.alert
    })
  },
  methods: {
    ...mapActions({
      clearAlert: "alert/clear"
    })
  },
  watch: {
    $route(/*to, from*/) {
      // clear alert on location change
      this.clearAlert();
    }
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  }
};
</script>

<style>


body {
  /* background-image: url("/images/background.jpg");
  background-repeat: no-repeat; Do not repeat the image */
   overflow-x: hidden;

  background-size: cover;
  font-family: sans-serif;
  font-size: 10px;
}

.alert {
  background-color: rgba(255, 0, 0, 0.5);
  padding: 10px 10px;
  /* margin-top: -10px; */
  color: white;
  text-align: center;
  width: 100%;
  font-size: 15px;
}

div#main {
  background: #fff;
  /* width: 75%; 

  padding: 1em 1em 1em;
  border-radius: 2px;*/
}
form h2,
div h2 {
  /*margin: 0 0 50px 0;
  padding: 10px;*/
  text-align: center;
  font-size: 30px;
  color: #666666;
}
form p {
  margin: 0 0 3em 0;
  position: relative;
}
</style>