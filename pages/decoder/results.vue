<template>
    <div>
        <DecoderResults />
    </div>
</template>

<script setup>
const { masternodesLoaded } = useMasternodes()
const router = useRouter()
console.log('ici')
if (!masternodesLoaded.value) {
    router.push('/decoder/upload')
}
</script>