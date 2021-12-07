<template>
    <div class="grid grid-cols-2 gap-4">
        <ResultsStatsItem
            class="bg-black"
            title="Masternodes"
            :value="masternodes.length"
            :loaded="masternodesLoaded"
        />
        <ResultsStatsItem
            class="bg-black"
            title="ROI"
            :value="roi + '%'"
            :loaded="masternodesLoaded"
        />
    </div>
</template>

<script setup>
const { masternodes, masternodesLoaded, roi } = useMasternodes()
</script>