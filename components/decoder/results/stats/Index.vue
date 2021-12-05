<template>
    <div class="grid grid-cols-3 gap-3">
        <DecoderResultsStatsItem
            class="bg-bluegray"
            title="Masternodes"
            :value="masternodes.length"
            :loaded="masternodesLoaded"
        />
        <DecoderResultsStatsItem
            class="bg-bluegray"
            title="ROI"
            :value="roi + '%'"
            :loaded="masternodesLoaded"
        />
        <DecoderResultsStatsItem class="bg-yellow-400" title="Sin Price" :value="10.4" loaded />
    </div>
</template>

<script setup>
const { masternodes, masternodesLoaded, roi } = useMasternodes()
</script>