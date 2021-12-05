<template>
    <div class="bg-white rounded-4xl h-[300px] w-2/3 flex items-center justify-center p-4">
        <div
            v-if="!loading && !loaded"
            class="border border-dashed border-purple border-2 w-full h-full rounded-4xl flex items-center justify-center"
            @drop.prevent="dropFile"
            @dragover.prevent
        >
            <div class="w-[90%]">
                <span>Drag & Drop your sinovate's wallet history here.</span>
                <button class="btn btn-primary p-4 rounded-lg w-full" @click="openUploader">Upload</button>
            </div>
        </div>
        <div v-else-if="loading">LOADING...</div>
        <div v-else class="w-full">
            <NuxtLink to="/decoder/results">
                <button class="btn btn-primary w-full">View my analysis</button>
            </NuxtLink>
        </div>
    </div>
    <input class="hidden" ref="input" type="file" accept=".csv" @change="selectFile" />
</template>

<script setup>
import { ref, reactive, computed } from "vue";
const { file, processFile, findRewards } = useHistory()
const { findMasternodes } = useMasternodes()
const input = ref(null);
const loading = ref(false)
const steps = reactive({
    extraction: 'ko',
    findMasternodes: 'ko',
    computeStats: 'ko'
})
const loaded = computed(() => {
    return steps.extraction === 'ok' && steps.findMasternodes === 'ok' && steps.computeStats === 'ok'
})
const openUploader = () => {
    input.value.click();
}
const uploadFile = async (e) => {
    loading.value = true
    file.value = e
    steps.extraction = 'running'
    await processFile()
    steps.extraction = 'ok'
    steps.findMasternodes = 'running'
    await findMasternodes()
    steps.findMasternodes = 'ok'
    steps.computeStats = 'ok'
    loading.value = false
}

const selectFile = (e) => {
    const file = e.target.files[0]
    uploadFile(file)
}

const dropFile = async (e) => {
    const droppedFiles = e.dataTransfer.files;
    if (!droppedFiles || droppedFiles.length === 0) {
        return
    }
    uploadFile(droppedFiles[0])
}
</script>