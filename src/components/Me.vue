<template>
  <div class="row justify-content-md-center">
    <div class="col-sm-12 d-md-none" id="principal">
      <h2 v-html='$t("me.description.draVega")'/>
    </div>

    <div class="col-lg-5 col-md-6 col-12" >
      <div style="background-color: #dbdbdb; height: 100%">
      <img id="img-me" src="/images/me1.png" />
      </div>
    </div>
    <div class="col-lg-6 col-md-6 col-12">
      <div
        id="principal"
        class="d-none d-lg-block d-md-block"
      ><h1 v-html='$t("me.description.draVega")'/></div>
      <div id="principal" v-html='$t("me.description.principal")'></div>
    </div>
    <div class="col-lg-1"></div>
  </div>
</template>
<script>
/*import { FluxParallax } from "vue-flux";

export defau lt {
  name: "Me",
  components: {
    FluxParallax
  }
};*/
</script>

<style scoped>
img#img-me {
  max-width: 100%;
  max-height: 100%;
}
div#principal {
  margin: 1.2em;
  margin-top: 1.5em;
  font-size: 14px;
  text-align: justify;
}
.custom-file-label {
  overflow: hidden;
}
</style>