<template>
    <div class="space-y-4">
        <div class="bg-white rounded-lg p-4">
            <div class="h-[500px]">
                <ResultsGraphsRewardsPerMasternodes v-if="masternodesLoaded"/>
                <span v-else>Load your history</span>
            </div>
        </div>
        <div class="bg-white rounded-lg p-4">
            <div class="h-[500px]">
                <ResultsGraphsRewardsPerMonth v-if="masternodesLoaded" />
                <span v-else>Load your history</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const { masternodes, masternodesLoaded } = useMasternodes()
</script>
