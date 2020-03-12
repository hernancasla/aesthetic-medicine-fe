<template>
  <div>
    <vue-flux
      :options="vfOptions"
      :images="vfImages"
      :transitions="vfTransitions"
      :captions="vfCaptions"
      ref="slider"
    >
      <template v-slot:preloader>
        <flux-preloader />
      </template>

      <template v-slot:caption>
        <flux-caption />
      </template>

      <template v-slot:controls>
        <flux-controls />
      </template>



      <template v-slot:index>
        <flux-index />
      </template>
    </vue-flux>
  </div>
</template>

<script>
import {
  VueFlux,
  FluxCaption,
  FluxControls,
  FluxIndex,
  FluxPagination,
  FluxPreloader
} from "vue-flux";

export default {
  components: {
    VueFlux,
    FluxCaption,
    FluxControls,
    FluxIndex,
    FluxPagination,
    FluxPreloader
  },

  data: () => ({
    vfOptions: {
      autoplay: true,
      delay: 800
    },
    vfImages: [
      "/slides/slide1.jpg",
      "/slides/slide2.jpg",
      "/slides/slide3.jpg"
    ],
    vfTransitions: ["kenburn", "blocks1"]
    /*vfCaptions: [
      "Caption for image 1",
      "Caption for image 2",
      "Caption for image 3"
    ]*/
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vue-flux {
  width: 100%;
  height: 400px;
}
</style>



