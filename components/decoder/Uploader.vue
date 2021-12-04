<template>
    <div>
        <input class="hidden" ref="input" type="file" accept=".csv" @change="fileUploaded" />
        <button class="bg-blue-400" @click="openUploader">Upload</button>
    </div>
</template>

<script setup>
import { ref } from "vue";
const { file, processFile } = useHistory()
const { findMasternodes } = useMasternodes()
const input = ref(null);
const openUploader = () => {
    input.value.click();
}
const fileUploaded = (e) => {
    file.value = e.target.files[0];
    processFile()
    findMasternodes()
}
</script>