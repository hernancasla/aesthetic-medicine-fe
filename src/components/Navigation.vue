<template>
  <div id="nav">
    <div class="row">
      <div class="col-lg-2 col-md-4 col-sm-12 offset-lg-5">
        <img
          src="/images/logocin2.png"
          width="200"
          id="logo"
          class="img rounded"
          alt="Responsive image"
        />
      </div>
      <div class="col-lg-5 col-md-8 col-sm-12">
        <div class="row">
          <div class="col-12 d-none d-lg-block d-md-block rigth">
            <b>{{ $t('me.telephonNumber') }}</b>
          </div>
        </div>
        <div class="row">
          <div class="col-12 d-none d-lg-block d-md-block rigth">
            <b>{{ $t('me.mail') }}</b>
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
              <b-nav-item href="/#">{{ $t('nav.home') }}</b-nav-item>
              <b-nav-item href="/upload">{{ $t('me.name') }}</b-nav-item>
              <b-nav-item-dropdown
                id="my-nav-dropdown"
                :text="$t('nav.facials.title')"
                toggle-class="nav-link-custom"
                right
              >
                <b-dropdown-item href="/upload">{{ $t('nav.facials.rinomodelacion') }}</b-dropdown-item>
                <b-dropdown-item>{{ $t('nav.facials.lips') }}</b-dropdown-item>
                <b-dropdown-item>{{ $t('nav.facials.botox') }}</b-dropdown-item>
                <b-dropdown-item>{{ $t('nav.facials.plateletRichPlasma') }}</b-dropdown-item>
                <b-dropdown-item>{{ $t('nav.facials.laserFacialRejuvenation') }}</b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item-dropdown
                id="my-nav-dropdown"
                :text="$t('nav.bodyTreatments.title')"
                toggle-class="nav-link-custom"
                right
              >
                <b-dropdown-item>{{ $t('nav.bodyTreatments.mela') }}</b-dropdown-item>
                <b-dropdown-item>{{ $t('nav.bodyTreatments.laserMela') }}</b-dropdown-item>
                <b-dropdown-item>{{ $t('nav.bodyTreatments.carboxiterapia') }}</b-dropdown-item>
                <b-dropdown-item>{{ $t('nav.bodyTreatments.eboestetica') }}</b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item href="/upload">{{ $t('nav.contact') }}</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav>
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
div#nav #links {
  margin: auto !important;
}
div#nav #links a {
  padding-right: 2em;
}
div#nav img#logo {
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin: 20px auto;
}
div#nav .bg-info {
  background-color: rgb(204, 153, 134) !important;
}
div#nav #links a:hover {
  color: rgba(255, 255, 255, 0.6);
}

div#nav ul.social-network li {
  display: inline;
  margin: 0 5px;
}
div#nav .dropdown-menu {
  font-size: 0.75rem;
}
@media screen and (max-width: 768px) {
  div#nav .dropdown-item {
    display: block;
    margin: 0;
    background-color: rgb(204, 153, 134);
    border: 0px;
  }
  div#nav .navbar-nav .dropdown-menu {
    background-color: rgb(204, 153, 134);
    border: 0px;
  }
  div#nav .b-nav-dropdown li > a:hover {
    background-color: rgba(255, 255, 255, 0.4);
    color: rgba(255, 255, 255, 1) !important;
  }
}
@media screen and (min-width: 769px) {
  div#nav .dropdown:hover .dropdown-menu,
  div#nav .btn-group:hover .dropdown-menu {
    display: block;
  }
  div#nav .dropdown-menu {
    margin-top: 0;
    background-color: #cc9986;
    border: 0px;
  }
  div#nav .dropdown-toggle {
    margin-bottom: 2px;
  }
  div#nav .navbar .dropdown-toggle,
  div#nav .nav-tabs .dropdown-toggle {
    margin-bottom: 0;
  }

  div#nav .b-nav-dropdown li > a:hover {
    background-color: rgba(255, 255, 255, 0.4);
    color: rgba(255, 255, 255, 1) !important;
  }
  /*.navbar-nav li:hover > .dropdown-menu {
    display: block;
    margin: 0;
    background-color: rgb(204, 153, 134);
    border: 0;
    font-size: 0.75rem;
  }}
  .dropdown-item:hover,
  .dropdown-item:focus {
    background-color: #f8f9fa2e;
    color: rgba(255, 255, 255, 1);
  } */
}
</style>