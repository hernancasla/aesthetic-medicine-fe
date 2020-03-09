<template>
  <footer>
    <SocialNetworksLinks />
  </footer>
</template>
<script>
import SocialNetworksLinks from "./SocialNetworksLinks";

export default {
  name: "Footer",

  components:{
    SocialNetworksLinks
  }

};
</script>
<style scoped>
/* footer social icons */
footer {
  background-color:rgb(226, 179, 161);
  padding: 20px 0;
  text-align: center;
}
</style>