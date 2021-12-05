<template>
    <div>
        <div class="bg-bluegray bg-opacity-50 rounded-4xl p-10">
            <div class="flex flex-col items-center">
                <h2
                    class="text-purple text-4xl font-bold text-center mb-10"
                >Upload & Analyse your masternode's history</h2>
                <DecoderUploader />
                <div class="mt-6 bg-salmon bg-opacity-50 w-full rounded-4xl px-6 py-8 flex justify-between items-center">
                    <span class="text-purple font-bold">Your history is never sent anywhere</span>
                    <button class="btn btn-primary">
                        <span>Check how</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>