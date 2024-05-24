<script setup lang="ts">
import type { AgentResponse} from '@/pocketbase-types'
import { pb } from '@/backend'
import MaisonCard from '@/components/MaisonCard.vue'

const props = defineProps<AgentResponse>()

// {filter: `agentId = "${nom}"`, expand: 'agent'}



</script>

<template>
    <section class="flex flex-col p-12 rounded-xl border-2 m-10">
        <div>
            {{ nom }}
            {{ prenom }}
        </div>
        <span class="text-gray-500">
            {{ numTel }}
        </span>
        <span class="font-bold text-indigo-500">
        {{ eMail }}
        </span>
    </section>

</template>