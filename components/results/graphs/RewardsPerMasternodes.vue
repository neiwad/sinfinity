<template>
  <div class="flex flex-col justify-between w-full h-full">
    <h2 class="font-bold text-4xl">Rewards by masternodes</h2>
    <div class="w-full h-[400px] relative">
      <canvas id="rpm_chart" ref="root" responsive></canvas>
    </div>
  </div>
</template>

<script setup>
import Chart from "chart.js/auto/auto.js";
import { onMounted } from "vue";
const { masternodes, masternodesLoaded } = useMasternodes();
const root = ref(null);
onMounted(() => {
  const ctx = root.value.getContext("2d");
  const data = {
    labels: [],
    datasets: [
      {
        label: "Rewards by Masternodes",
        type: "bar",
        data: [],
        backgroundColor: [],
      },
      {
        label: "Burned",
        type: "line",
        data: [],
        fill: false,
        borderColor: "rgb(54, 162, 235)",
      },
    ],
  };
  masternodes.value.forEach((_masternode, index) => {
    data.labels.push(`Node ${index}`);
    data.datasets[0].data.push(_masternode.rewards);
    data.datasets[0].backgroundColor.push(
      _masternode.rewards < _masternode.burned ? "#FF0000" : "#00FF00"
    );
    data.datasets[1].data.push(_masternode.burned);
  });

  new Chart(ctx, {
    type: "bar",
    data: data,
  });
});
</script>