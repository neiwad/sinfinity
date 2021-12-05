<template>
    <div class="bg-black min-h-screen">
        <Navigation />
        <main class="container mx-auto my-10 min-h-screen">
            <slot></slot>
        </main>
        <Footer />
    </div>
</template>