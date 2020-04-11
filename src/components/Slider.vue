<template>
  <div class="row">
    <div class="col-12">
      <vue-flux :options="vfOptions" :images="vfImages()" :transitions="vfTransitions" ref="slider">
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
      delay: 1000
    },
    vfImages: () => {
      if (document.body.clientWidth >= 768)
        return [
          "/slides/slide1.jpg",
          "/slides/slide2.png",
          "/slides/slide3.png",
          "/slides/slide4.png"
        ];
      else
        return [
          "/slides/slide1_sm.jpg",
          "/slides/slide2_sm.jpg",
          "/slides/slide3_sm.jpg",
          "/slides/slide4_sm.jpg",
          "/slides/slide5_sm.pnjpgg"
        ];
    },
    vfTransitions: ["round2", "blocks2", "blocks1", "round1"]
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



