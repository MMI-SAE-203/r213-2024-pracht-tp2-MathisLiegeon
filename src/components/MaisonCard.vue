<script setup lang="ts">
import type { maisonRecord } from "@/types"

defineProps<maisonRecord>()
</script>
<template>
    <p>prix = {{ prix }}</p>
</template>