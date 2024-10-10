<script setup lang="ts">
import { ref } from "vue";

const loading = ref(false);

const load = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 2000);
};
</script>

<template>
    <section class="card flex flex-column align-items-center">

        <h1 class="mb-3">Menu</h1>
    
        <div class="text-center">
            <h2>Entrées</h2>
            <section class="card">
                <div class="flex flex-row gap-4 mb-3">
                    <img src="https://plus.unsplash.com/premium_photo-1677686707466-2c86b174d072?q=80&w=250&auto=format&fit=crop" alt="Entrée 1" width="250" />
                    <img src="https://plus.unsplash.com/premium_photo-1677686707466-2c86b174d072?q=80&w=250&auto=format&fit=crop" alt="Entrée 2" width="250" />
                    <img src="https://plus.unsplash.com/premium_photo-1677686707466-2c86b174d072?q=80&w=250&auto=format&fit=crop" alt="Entrée 3" width="250" />
                </div>
            </section>
        </div>
    
        <div class="text-center">
            <h2>Plats</h2>
            <section class="card">
                <div class="flex flex-row gap-4 mb-3">
                    <img src="https://images.unsplash.com/photo-1464093515883-ec948246accb?q=80&w=250&auto=format&fit=crop" alt="Plat 1" width="250" />
                    <img src="https://images.unsplash.com/photo-1464093515883-ec948246accb?q=80&w=250&auto=format&fit=crop" alt="Plat 2" width="250" />
                    <img src="https://images.unsplash.com/photo-1464093515883-ec948246accb?q=80&w=250&auto=format&fit=crop" alt="Plat 3" width="250" />
                </div>
            </section>
        </div>
    
        <div class="text-center">
            <h2>Desserts</h2>
            <section class="card">
                <div class="flex flex-row gap-4 mb-3">
                    <img src="https://images.unsplash.com/photo-1468218620578-e8d78dcda7b1?q=80&w=250&auto=format&fit=crop" alt="Dessert 1" width="250" />
                    <img src="https://images.unsplash.com/photo-1468218620578-e8d78dcda7b1?q=80&w=250&auto=format&fit=crop" alt="Dessert 2" width="250" />
                    <img src="https://images.unsplash.com/photo-1468218620578-e8d78dcda7b1?q=80&w=250&auto=format&fit=crop" alt="Dessert 3" width="250" />
                </div>
            </section>
        </div>
    
        <div class="text-center">
            <h2>Boissons</h2>
            <section class="card">
                <div class="flex flex-row gap-4 mb-3">
                    <img src="https://images.unsplash.com/photo-1489866492941-15d60bdaa7e0?q=80&w=250&auto=format&fit=crop" alt="Boisson 1" width="250" />
                    <img src="https://images.unsplash.com/photo-1489866492941-15d60bdaa7e0?q=80&w=250&auto=format&fit=crop" alt="Boisson 2" width="250" />
                    <img src="https://images.unsplash.com/photo-1489866492941-15d60bdaa7e0?q=80&w=250&auto=format&fit=crop" alt="Boisson 3" width="250" />
                </div>
            </section>
        </div>

        <button @click="load" :disabled="loading" class="btn btn-primary mt-4">
            <span v-if="loading">Chargement...</span>
            <span v-else>Commander</span>
        </button>
    </section>
</template>

<style scoped>
h1, h2 {
    color: black;
}
.card {
    margin: 20px 0;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
.flex {
    display: flex;
}
.flex-row {
    flex-direction: row;
}
.align-items-center {
    align-items: center;
}
.gap-4 {
    gap: 1rem;
}
.mt-4 {
    margin-top: 1rem;
}
.text-center {
    text-align: center;
}
.btn {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    font-weight: bold;
}
.btn:disabled {
    background-color: #ccc;
}
</style>
