<template>
    <div>
        <canvas id="rpm_chart" ref="root" responsive></canvas>
    </div>
</template>

<script setup>
import Chart from 'chart.js/auto'
import { onMounted } from "vue"
const { masternodes } = useMasternodes()
const root = ref(null)
onMounted(() => {
    const ctx = root.value.getContext('2d')
    const data = {
        labels: [],
        datasets: [
            {
                label: 'Rewards by Masternodes',
                type: 'bar',
                data: [],
                backgroundColor: []
            },
            {
                label: 'Burned',
                type: 'line',
                data: [],
                fill: false,
                borderColor: 'rgb(54, 162, 235)'
            }]
    }
    masternodes.value.forEach((_masternode, index) => {
        data.labels.push(`Node ${index}`)
        data.datasets[0].data.push(_masternode.rewards)
        data.datasets[0].backgroundColor.push(_masternode.color)
        data.datasets[1].data.push(_masternode.burned)
    })

    new Chart(ctx, {
        type: 'bar',
        data: data

    });
})
</script>