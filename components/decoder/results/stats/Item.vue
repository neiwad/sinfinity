<template>
    <div class="rounded-lg p-4 flex">
        <div class="flex flex-col">
            <span class="font-bold text-xl">{{ title }}</span>
            <span>{{ loaded ? value : 'xx' }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        value: {
            type: [Number, String]
        },
        loaded: Boolean
    }
}
</script>

<script setup>

</script>