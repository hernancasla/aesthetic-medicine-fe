<template>
  <div>
    <Slider />
    <Me id="me" />
    <div v-if="isSm">
      <Intro />
    </div>
    <div v-else>
      <IntroSm />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Slider from "./Slider";
import Me from "./Me";
import Intro from "./Intro";
import IntroSm from "./IntroSm";

export default {
  computed: {
    ...mapState({
      account: state => state.account,
      files: state => state.files.all
    })
  },
  data: () => ({
    isSm: document.body.clientWidth >= 768
  }),
  created() {
    this.getAllFiles();
  },
  methods: {
    ...mapActions("files", {
      getAllFiles: "getAll",
      deleteFile: "delete"
    })
  },
  components: {
    Slider,
    Me,
    Intro,
    IntroSm
  }
};
</script>