<template>
  <div id="nav">
    <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 offset-lg-4">
        <img
          src="/images/logo.png"
          width="200"
          id="logo"
          class="img rounded"
          alt="Responsive image"
        />
      </div>
        <div class="col-lg-4 col-md-8 col-sm-12">
        <SocialNetworksLinks />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <b-navbar toggleable="lg" type="dark" variant="info">
          <!-- <b-navbar-brand href="#">Dra Vega</b-navbar-brand> -->

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav id="links" small>
              <b-nav-item href="/#">HOME</b-nav-item>
              <b-nav-item href="/upload">TRATAMIENTOS</b-nav-item>
              <b-nav-item href="/upload">APARATOLOGIA</b-nav-item>
              <b-nav-item href="/upload">LASERS</b-nav-item>
              <b-nav-item href="/upload">CURSOS</b-nav-item>
              <b-nav-item href="/upload">NOSOTROS</b-nav-item>
              <b-nav-item href="/upload">CONTACTO</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto" small>
              <b-nav-item-dropdown text="LANG" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import SocialNetworksLinks from "./SocialNetworksLinks";

export default {
  name: "Navigation",
  computed: {
    ...mapState("account", ["status"]),
    ...mapState({
      alert: state => state.alert
    })
  },
  methods: {
    ...mapActions("account", ["login", "logout"])
  },
  components: {
    SocialNetworksLinks
  }
};
</script>
<style>
div#nav {
  background-color: rgba(243, 223, 216, 0.808);
  margin-left: auto;
  margin-right: auto;
  color: rgba(255, 255, 255, 1);
}
div#nav a {
  color: rgba(255, 255, 255, 1);
}
#links {
  margin-left: auto !important;
}
#links a {
  padding-right: 2em;
}
img#logo {
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin: 20px auto;
}
.bg-info {
  background-color: rgba(241, 207, 194, 0.808) !important;
}
</style>