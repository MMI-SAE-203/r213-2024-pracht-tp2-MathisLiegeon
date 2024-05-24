<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { MaisonResponse } from '@/pocketbase-types'
import MaisonCard from '@/components/MaisonCard.vue'
import { allMaisonFavori } from '@/backend'
const maisonsListe = await allMaisonFavori()
console.log(maisonsListe)

</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>

  <MaisonCard v-for="uneMaison in maisonsListe" :key="uneMaison.id" v-bind="uneMaison"/>
</template> 