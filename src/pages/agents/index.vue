<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { AgentResponse} from '@/pocketbase-types'
import { pb } from '@/backend'
const agentListe: AgentResponse[] = await pb.collection('agent').getFullList()
</script>

<template>
  <h1 class="text-2xl">Tous les agents</h1>

  <ul>
    <li v-for="unAgent of agentListe" :v-bind:key="unAgent.id">
        <RouterLink
          :to="{
            name: '/agents/[id]',
            params: {
              id: unAgent.id
            }
          }"
          class="text-red-400 hover:text-red-600"
        >
          {{ unAgent.nom }}
        </RouterLink>
    </li>
  </ul>
</template>