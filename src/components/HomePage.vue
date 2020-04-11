<template>
  <div>
    <Slider />
    <Me id="me"/>
    <Intro/>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Slider from "./Slider";
import Me from "./Me";
import Intro from "./Intro";


export default {
  computed: {
    ...mapState({
      account: state => state.account,
      files: state => state.files.all
    })
  },
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
    Intro
  }
};
</script>