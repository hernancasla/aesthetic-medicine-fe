<template>
  <div id="nav">
    <div class="row justify-content-md-center">
      <div class="col-12">
        <img src="/images/logo.png" id="logo" class="img rounded" alt="Responsive image" />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="/files">Files</b-nav-item>
              <b-nav-item href="/upload">Upload</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                  <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="/" @click="logout()">Sign Out</b-dropdown-item>
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
  }
};
</script>
<style>
div#nav {
  background-color: rgba(58, 169, 184, 0.808);
}
img#logo {
  margin-left: auto;
  margin-right: auto;
  display: block;
}
</style>