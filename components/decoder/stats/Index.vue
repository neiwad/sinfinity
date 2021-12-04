<template>
    <div class="grid grid-cols-3 gap-3">
        <DecoderStatsItem
            class="bg-yellow-400"
            title="Masternodes"
            :value="masternodes.length"
            :loaded="masternodesLoaded"
        />
        <DecoderStatsItem
            class="bg-yellow-400"
            title="ROI"
            :value="roi + '%'"
            :loaded="masternodesLoaded"
        />
        <DecoderStatsItem class="bg-yellow-400" title="Sin Price" :value="10.4" loaded />
    </div>
</template>

<script setup>
const { masternodes, masternodesLoaded, roi } = useMasternodes()
</script>