<template>
  <div class="languages-selection">
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'languages-selection',
  data () {
    return { langs: ['es', 'en'] }
  }
}
</script>