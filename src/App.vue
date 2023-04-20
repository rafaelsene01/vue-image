<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()

const gg = () =>
  mobile.value
    ? new URL(`@/assets/img/farm1_0.png`, import.meta.url).href
    : new URL(`@/assets/img/farm2_0.png`, import.meta.url).href

const url = computed(() => ({
  lazy: gg(),
  src: mobile.value
    ? new URL(`@/assets/img/farm1.png`, import.meta.url).href
    : new URL(`@/assets/img/farm2.png`, import.meta.url).href,
  srcset: mobile.value
    ? new URL(`@/assets/img/farm1.webp`, import.meta.url).href
    : new URL(`@/assets/img/farm2.webp`, import.meta.url).href
}))
</script>

<template>
  <main>
    <!-- https://www.compress2go.com/pt/compactar-png -->
    <!-- https://imageoptim.com/online -->
    <!-- https://anyconv.com/pt/conversor-de-png-para-webp/ -->
    <v-img alt="Imagem de teste" cover width="100%" :lazy-src="url.lazy" :src="url.src">
      <template #sources>
        <source :srcset="url.srcset" />
      </template>
    </v-img>
  </main>
</template>

<style scoped></style>
