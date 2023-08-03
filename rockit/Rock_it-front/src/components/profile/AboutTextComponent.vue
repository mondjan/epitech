<script setup>

defineProps(['text']);

</script>
<template>

    <div class="text-slate-50 text-2xl p-9">
        <h1>About</h1>
        {{ text }}
    </div>

</template>