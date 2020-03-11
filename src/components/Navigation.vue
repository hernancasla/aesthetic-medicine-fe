<template>
  <div id="nav">
    <div class="row">
      <div class="col-lg-2 col-md-4 col-sm-12 offset-lg-5">
        <img
          src="/images/logo.png"
          width="200"
          id="logo"
          class="img rounded"
          alt="Responsive image"
        />
      </div>
      <div class="col-lg-5 col-md-8 col-sm-12">
        <div class="row">
          <div class="col-12 d-none d-lg-block d-md-block rigth">
            <b>(011) 230922716</b>
          </div>
        </div>
        <div class="row">
          <div class="col-12 d-lg-block d-md-block rigth">
            <b>HERNAN.CASLA@GMAIL.COM</b>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-12">
            <SocialNetworksLinks />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <b-navbar toggleable="lg" type="dark" variant="info">
          <!-- <b-navbar-brand href="#">Dra Vega</b-navbar-brand> -->

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav id="links">
              <b-nav-item href="/#">HOME</b-nav-item>
              <b-nav-item href="/upload">{{ $t('menu.me.name') }}</b-nav-item>
              <b-nav-item-dropdown
                id="my-nav-dropdown"
                :text="$t('menu.facials.title')"
                toggle-class="nav-link-custom"
                right
              >
                <b-dropdown-item>{{ $t('menu.facials.rinomodelacion') }}</b-dropdown-item>
                <b-dropdown-item>{{ $t('menu.facials.lips') }}</b-dropdown-item>
                <b-dropdown-item>{{ $t('menu.facials.botox') }}</b-dropdown-item>
                <b-dropdown-item>{{ $t('menu.facials.plateletRichPlasma') }}</b-dropdown-item>
                <b-dropdown-item>{{ $t('menu.facials.laserFacialRejuvenation') }}</b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item-dropdown
                id="my-nav-dropdown"
                :text="$t('menu.bodyTreatments.title')"
                toggle-class="nav-link-custom"
                right
              >
                <b-dropdown-item>{{ $t('menu.bodyTreatments.mela') }}</b-dropdown-item>
                <b-dropdown-item>{{ $t('menu.bodyTreatments.laserMela') }}</b-dropdown-item>
                <b-dropdown-item>{{ $t('menu.bodyTreatments.carboxiterapia') }}</b-dropdown-item>
                <b-dropdown-item>{{ $t('menu.bodyTreatments.eboestetica') }}</b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item href="/upload">{{ $t('menu.contact') }}</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
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
.navbar-nav li:hover > .dropdown-menu {
  display: block;
  margin: 0;
  background-color: rgb(204, 153, 134);
  border: 0;
  font-size: 0.75rem;
}
div#nav {
  background-color: rgb(212, 162, 144);
  margin-left: auto;
  margin-right: auto;
  color: rgba(255, 255, 255, 1);
  font-size: 0.75rem;
}
div#nav a {
  color: rgba(255, 255, 255, 1);
}
div#nav .rigth {
  text-align: right;
  padding-right: 2em;
}
#links {
  margin: auto !important;
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
  background-color: rgb(204, 153, 134) !important;
}
#links a:hover {
  color: rgba(255, 255, 255, 0.5);
}
</style>