<template >
  <flux-parallax src="/images/paris1.jpg" id="parallax-intro">
    <div class="row" id="intro">
      <div class="col-lg-5 col-md-6 col-12">
        <h1>
          BELLEZA REAL
          <br />PACIENTES REALES
        </h1>
      </div>
      <div class="col-lg-6 col-md-6 col-12" id="intro">
        Las etiquetas, no creo en las definiciones. Mi objetivo como medica es
        poder ayudar a mis pacientes a alcanzar su potencial al romper las
        definiciones que nos limitan. Nos limitan las tendencias. Nos limitan los
        estereotipos. Me baso en “ BELLEZA REAL, PACIENTES REALES” ,
        porque más allá de la estética, lo que intento es crear un espacio para
        fomentar la belleza real y autentica.
        <br />
        <br />La belleza es amar y abrazar a la persona que te saluda en el espejo.
        Medicina estética y belleza significa para mi empoderar a las mujeres
        para que se enamoren de su reflejo, pero no cambiando su esencia o
        duplicando falsos ideales.
        <br />
        <br />Lo que busco en mis pacientes es que celebren su belleza única. Que
        eleven su confianza sin limites para que puedan amar su cuerpo y su
        apariencia de una manera positiva y satisfactoria.
        ¨Me siento honrada de poder ofrecer tratamientos para mujeres que se
        parecen a mí, MUJERES REALES¨
        <br />
        <br />
        <b>La belleza no tiene edad, tamaño o apariencia determinada. No creo en</b>
      </div>
      <div class="col-lg-1"></div>
    </div>
  </flux-parallax>
</template>

<script>
import { FluxParallax } from "vue-flux";

export default {
  name: "Intro",
  data: () => ({
    show: false
  }),
  components: {
    FluxParallax
  }
};
</script>
<style scoped>
@media screen and (min-width: 769px) {
  div#parallax-intro {
    height: 28rem;
  }
}
@media screen and (max-width: 768px) {
  div#parallax-intro {
    height: 45rem;
  }
}

div#intro {
  padding: 1.2em;
  font-size: 14px;
  color: white;
  text-align: justify;
}
</style>