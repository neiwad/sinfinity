<template>
    <div class="space-y-4">
        <div class="bg-white rounded-lg p-4">
            <div class="h-[400px]">
                <DecoderGraphsRewardsPerMasternodes v-if="masternodes.length" />
            </div>
        </div>
        <div class="bg-white rounded-lg p-4">
            <div class="h-[400px]">
                <DecoderGraphsRewardsPerMonth v-if="masternodes.length" />
            </div>
        </div>
    </div>
</template>

<script setup>
const { masternodes } = useMasternodes()
</script>
