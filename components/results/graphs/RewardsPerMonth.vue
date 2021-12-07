<template>
    <div class="flex flex-col justify-between w-full h-full">
        <h2 class="font-bold text-4xl">Rewards by months</h2>
        <div class="w-full h-[400px] relative">
            <canvas id="rewards_per_month_chart" ref="root" responsive></canvas>
        </div>
    </div>
</template>

<script setup>
import Chart from 'chart.js/auto'
import { onMounted } from "vue"
const { masternodes } = useMasternodes()
const reducer = (previousValue, currentValue) => previousValue + currentValue;
const root = ref(null)
onMounted(() => {
    const ctx = root.value.getContext('2d')

    const data = {
        labels: [],
        datasets: []
    }

    const history = []
    masternodes.value.forEach(m => {
        history.push(...m.history)
    })
    const months = [...new Set(history.map(h => {
        const date = new Date(h.date)
        const niceMonth = `${date.getFullYear()}-${date.getMonth() + 1}`
        return niceMonth
    }))]

    data.labels = months

    masternodes.value.forEach((_masternode, index) => {
        const object = {
            label: `Node ${index}`,
            type: 'bar',
            data: [],
            backgroundColor: _masternode.color
        }
        months.forEach(_month => {
            const test = _masternode.history.filter(_h => {
                const date = new Date(_h.date)
                const niceDate = `${date.getFullYear()
                    }-${date.getMonth() + 1}`
                return niceDate === _month
            })
            const rewards = test.length ? test.map(t => t.amount).reduce(reducer) : 0
            object.data.push(rewards)
        })
        data.datasets.push(object)
    })

    new Chart(ctx, {
        type: 'bar',
        data: data

    });
})
</script>