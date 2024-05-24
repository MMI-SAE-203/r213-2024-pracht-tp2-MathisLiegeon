<script setup lang="ts">
  import AgentCard from '@/components/AgentCard.vue'

  import { useRoute } from 'vue-router/auto'
  import { pb } from '@/backend'

  const route = useRoute('/agents/[id]')
  console.log('id :', route.params.id)

  const uneMaison = await pb.collection('agent').getOne(route.params.id)
</script>
<template>
  <div>
    <h1 class="text-xl">Un agent</h1>
    <RouterLink to="/agents" class="text-indigo-500 ml-10 mt-4 font-bold">Retour</RouterLink>
    <AgentCard v-bind="uneMaison" />
  </div>
</template>