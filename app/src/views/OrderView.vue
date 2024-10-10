<script setup lang="ts">
import { ref } from "vue";

const loading = ref(false);

const load = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 2000);
};

const categories = [
    {
        title: 'Entrées',
        items: [
            { 
                title: 'Entrée 1', 
                description: 'Délicieux plat d\'entrée', 
                price: '5.00€',
                src: 'https://plus.unsplash.com/premium_photo-1677686707466-2c86b174d072?q=80&w=250&auto=format&fit=crop', 
                alt: 'Entrée 1' 
            },
            { 
                title: 'Entrée 2', 
                description: 'Savoureux mélange de légumes', 
                price: '6.00€',
                src: 'https://plus.unsplash.com/premium_photo-1677686707466-2c86b174d072?q=80&w=250&auto=format&fit=crop', 
                alt: 'Entrée 2' 
            },
            { 
                title: 'Entrée 3', 
                description: 'Plat traditionnel revisité', 
                price: '7.00€',
                src: 'https://plus.unsplash.com/premium_photo-1677686707466-2c86b174d072?q=80&w=250&auto=format&fit=crop', 
                alt: 'Entrée 3' 
            },
        ],
    },
    {
        title: 'Plats',
        items: [
            { 
                title: 'Plat 1', 
                description: 'Plat principal savoureux', 
                price: '12.00€',
                src: 'https://images.unsplash.com/photo-1464093515883-ec948246accb?q=80&w=250&auto=format&fit=crop', 
                alt: 'Plat 1' 
            },
            { 
                title: 'Plat 2', 
                description: 'Spécialité de la maison', 
                price: '14.00€',
                src: 'https://images.unsplash.com/photo-1464093515883-ec948246accb?q=80&w=250&auto=format&fit=crop', 
                alt: 'Plat 2' 
            },
            { 
                title: 'Plat 3', 
                description: 'Mélange de saveurs', 
                price: '13.00€',
                src: 'https://images.unsplash.com/photo-1464093515883-ec948246accb?q=80&w=250&auto=format&fit=crop', 
                alt: 'Plat 3' 
            },
        ],
    },
    {
        title: 'Desserts',
        items: [
            { 
                title: 'Dessert 1', 
                description: 'Douceur sucrée', 
                price: '4.50€',
                src: 'https://images.unsplash.com/photo-1468218620578-e8d78dcda7b1?q=80&w=250&auto=format&fit=crop', 
                alt: 'Dessert 1' 
            },
            { 
                title: 'Dessert 2', 
                description: 'Délice au chocolat', 
                price: '5.50€',
                src: 'https://images.unsplash.com/photo-1468218620578-e8d78dcda7b1?q=80&w=250&auto=format&fit=crop', 
                alt: 'Dessert 2' 
            },
            { 
                title: 'Dessert 3', 
                description: 'Tarte aux fruits', 
                price: '6.00€',
                src: 'https://images.unsplash.com/photo-1468218620578-e8d78dcda7b1?q=80&w=250&auto=format&fit=crop', 
                alt: 'Dessert 3' 
            },
        ],
    },
    {
        title: 'Boissons',
        items: [
            { 
                title: 'Boisson 1', 
                description: 'Boisson rafraîchissante', 
                price: '2.50€',
                src: 'https://images.unsplash.com/photo-1489866492941-15d60bdaa7e0?q=80&w=250&auto=format&fit=crop', 
                alt: 'Boisson 1' 
            },
            { 
                title: 'Boisson 2', 
                description: 'Jus de fruits frais', 
                price: '3.00€',
                src: 'https://images.unsplash.com/photo-1489866492941-15d60bdaa7e0?q=80&w=250&auto=format&fit=crop', 
                alt: 'Boisson 2' 
            },
            { 
                title: 'Boisson 3', 
                description: 'Soda pétillant', 
                price: '2.00€',
                src: 'https://images.unsplash.com/photo-1489866492941-15d60bdaa7e0?q=80&w=250&auto=format&fit=crop', 
                alt: 'Boisson 3' 
            },
        ],
    },
];
</script>

<template>
    <section class="menu-container">
        <div class="menu-content">
            <h1 class="menu-title">Menu</h1>

            <div v-for="category in categories" :key="category.title" class="menu-category">
                <h2 class="category-title">{{ category.title }}</h2>
                <div class="grid">
                    <div v-for="item in category.items" :key="item.alt" class="card">
                        <div class="card-content">
                            <div class="text-container">
                                <h3 class="recipe-title">{{ item.title }}</h3>
                                <p class="description">{{ item.description }}</p>
                                <p class="price">{{ item.price }}</p>
                            </div>
                            <img :src="item.src" :alt="item.alt" class="menu-image" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="button-container">
                <button @click="load" :disabled="loading" class="btn btn-primary mt-4">
                    <span v-if="loading">Chargement...</span>
                    <span v-else>Commander</span>
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 15px;
}

.card {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
}

.card-content {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    justify-content: space-between;
    flex-grow: 1;
}

.text-container {
    flex-grow: 1;
    margin-right: 15px;
}

.recipe-title {
    font-size: 1.25rem;
    margin-bottom: 5px;
    color: #343a40;
}

.description {
    font-size: 0.9rem;
    margin-bottom: 5px;
    color: #6c757d;
}

.price {
    font-size: 1rem;
    font-weight: bold;
    color: #28a745;
}

.menu-image {
    width: 100px;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
}

.menu-container {
    background-color: white;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
}

.menu-content {
    max-width: 1200px;
    margin: 0 auto;
}

.menu-title {
    font-size: 2.5rem;
    color: #343a40;
    margin-bottom: 20px;
    text-align: center;
}

.menu-category {
    margin: 30px 0;
}

.category-title {
    font-size: 1.5rem;
    color: #495057;
    text-transform: uppercase;
    margin-bottom: 10px;
    border-bottom: 2px solid #007bff;
    padding-bottom: 5px;
    letter-spacing: 1px;
}

.btn {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    font-weight: bold;
    transition: background-color 0.3s;
}

.button-container {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
}

.btn:hover:not(:disabled) {
    background-color: #0056b3;
}

.btn:disabled {
    background-color: #ccc;
    cursor: not-allowed;
}

.mt-4 {
    margin-top: 1rem;
}

@media (max-width: 768px) {
    .menu-title {
        font-size: 2rem;
    }

    .category-title {
        font-size: 1.25rem;
    }

    .card {
        flex-direction: column;
        align-items: center;
    }

    .menu-image {
        width: 80%;
    }

    .grid {
        grid-template-columns: 1fr;
    }
}
</style>
