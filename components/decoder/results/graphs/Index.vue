<template>
    <div class="space-y-4">
        <div class="bg-white rounded-lg p-4">
            <div class="h-[400px]">
                <DecoderResultsGraphsRewardsPerMasternodes />
            </div>
        </div>
        <div class="bg-white rounded-lg p-4">
            <div class="h-[400px]">
                <DecoderResultsGraphsRewardsPerMonth />
            </div>
        </div>
    </div>
</template>

<script setup>
const { masternodes } = useMasternodes()
</script>
