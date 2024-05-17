<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { maisonRecord } from '@/types'
import MaisonCard from '@/components/MaisonCard.vue'
import { allMaison, pb } from '@/backend'
const maisonsListe: maisonRecord[] = await pb.collection('maison').getFullList()
console.log(maisonsListe)

</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
  
  <MaisonCard v-for="uneMaison in maisonsListe" :key="uneMaison.id" v-bind="uneMaison"/>
</template>