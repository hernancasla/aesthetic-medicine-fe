<template>
  <div>
    <vue-flux :options="vfOptions" :images="vfImages" :transitions="vfTransitions" ref="slider">
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
  FluxPreloader
} from "vue-flux";

export default {
  components: {
    VueFlux,
    FluxCaption,
    FluxControls,
    FluxIndex,
    FluxPreloader
  },

  data: () => ({
    vfOptions: {
      autoplay: true,
      delay: 500
    },
    vfImages: [
      "/slides/slide1.jpg",
      "/slides/slide2.jpg",
      "/slides/slide3.jpg"
    ],
    vfTransitions: [
      {
        name: "kenburn",
        options: {
          totalDuration: 2000,
          easing: "ease-in"
        }
      },
      {
        name: "round2",
        options: {
          rows: 0,
          cols: 13,
          rotateX: -540,
          tileDuration: 800,
          tileDelay: 100,
          easing: "ease-out"
        }
      },
      {
        name: "zip",
        options: {
          cols: 10,
          tileDuration: 600,
          tileDelay: 80,
          easing: "ease-in"
        }
      }
    ],
    vfCaptions: [
      "I hear and I forget, I see and I remember, I do and I understand",
      "Caption for image 2",
      "Caption for image 3"
    ]
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vue-flux {
  width: 100%;
  height: 400px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
