<script setup lang="ts">
  import AgentCard from '@/components/AgentCard.vue'
  import MaisonCard from '@/components/MaisonCard.vue';

  import { useRoute } from 'vue-router/auto'
  import { pb } from '@/backend'

  const route = useRoute('/agents/[id]')
  console.log('id :', route.params.id)

  const unAgent = await pb.collection('agent').getOne(route.params.id)

  const maisonsListe = await pb.collection('maison').getFullList({
    filter: 
      `agentId='${route.params.id}'`
    
  })
</script>

<template>
  <div>
    <h1 class="text-xl">Un agent</h1>
    <RouterLink to="/agents" class="text-indigo-500 ml-10 mt-4 font-bold">Retour</RouterLink>
    <AgentCard v-bind="unAgent" />

    <section>
        <h1>Maisons liées à l'agent</h1>
        <div class="flex">
            <MaisonCard v-for="uneMaison in maisonsListe" :key="uneMaison.id" v-bind="uneMaison"/>
        </div>
    </section>
  </div>
</template>