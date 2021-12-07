<template>
    <div class="uploader">
        <div
            class="uploader__drop"
            @drop.prevent="dropFile"
            @dragover.prevent
        >
            <span>Drag & Drop your sinovate's wallet history here.</span>
            <button class="btn btn-primary p-4 rounded-lg" @click="openUploader">Upload</button>
        </div>
    </div>
    <input class="hidden" ref="input" type="file" accept=".csv" @change="selectFile" />
</template>

<script setup>
import { ref, reactive, computed } from "vue";
const { file, processFile, findRewards } = useHistory()
const { findMasternodes } = useMasternodes()
const input = ref(null);

const openUploader = () => {
    input.value.click();
}
const uploadFile = async (e) => {
    file.value = e
    await processFile()
    await findMasternodes()
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

<style lang="scss">
.uploader {
    @apply bg-white rounded-lg h-[150px] w-full flex items-center justify-center p-4;
    &__drop {
        @apply border border-dashed border-black border-2 w-full h-full rounded-lg flex items-center justify-between p-4;
    }
}
</style>