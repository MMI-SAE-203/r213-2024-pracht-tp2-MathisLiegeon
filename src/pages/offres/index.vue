<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { MaisonResponse } from '@/pocketbase-types'
import MaisonCard from '@/components/MaisonCard.vue'
import { pb } from '@/backend'
const maisonsListe: MaisonResponse[] = await pb.collection('maison').getFullList()
console.log(maisonsListe)

</script>

<template>
  <h1 class="text-2xl">Toutes les offres</h1>

  <ul>
  <li v-for="uneMaison of maisonsListe" :v-key="uneMaison.id">
    <RouterLink
      :to="{
        name: '/offres/[id]',
        params: {
          id: uneMaison.id
        }
      }"
      class="text-red-400 hover:text-red-600"
    >
      {{ uneMaison.nomMaison }}
    </RouterLink>
  </li>
</ul>
</template>