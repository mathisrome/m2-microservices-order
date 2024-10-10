<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";

const showLinks = ref(true)
window.onresize = () => {
  if (window.innerWidth >= 768) {
    showLinks.value = true
  } else {
    showLinks.value = false
  }
}

const directoryMenu = ref();
const toggleDirectoryMenu = (event) => {
  directoryMenu.value.toggle(event);
};

const structuralMenu = ref();
const toggleStructuralMenu = (event) => {
  structuralMenu.value.toggle(event);
};

const router = useRouter();

const directoryItems = ref([
  {
    label: 'Entreprises',
    command: () => {
      router.push('/companies');
    }
  },
  {
    label: 'Contact',
    command: () => {
      router.push('/contacts');
    }
  }
]);

const structuralItems = ref([
  {
    label: 'Sites',
    command: () => {
      router.push({name: "sites"});
    }
  },
  {
    label: 'Parties',
    command: () => {
      router.push('/areas');
    }
  },
  {
    label: 'Destinations',
    command: () => {
      router.push('/destinations');
    }
  },
  {
    label: 'Installations techniques',
    command: () => {
      router.push({name: "technical_installations"});
    }
  },
  {
    label: 'Familles d\'installation technique',
    command: () => {
      router.push({name: "technical_installation_families"});
    }
  }
]);
</script>

<template>
  <aside>
    <section>
      <RouterLink to="">
        <Image src="/axignis.png" width="150"/>
      </RouterLink>
      <Button icon="pi pi-bars" @click="showLinks = !showLinks" aria-label="Display navbar"/>
    </section>
    <Transition>
      <ul v-if="showLinks">
        <li>
          <RouterLink to="/order">
            <i class="pi pi-home"></i>
            <span class="ml-2">Commander</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/">
            <i class="pi pi-users"></i>
            <span class="ml-2">Clients</span>

          </RouterLink>
        </li>
        <li>
          <a type="button" @click="toggleDirectoryMenu">
            <i class="pi pi-address-book"></i>
            <span class="ml-2">Annuaire</span>
          </a>
          <Menu ref="directoryMenu" id="overlay_menu" :model="directoryItems" :popup="true"/>
        </li>
        <li>
          <a type="button" @click="toggleStructuralMenu">
            <i class="pi pi-sitemap"></i>
            <span class="ml-2">Structure</span>
          </a>
          <Menu ref="structuralMenu" id="overlay_menu" :model="structuralItems" :popup="true"/>
        </li>
      </ul>
    </Transition>
  </aside>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: height 0.5s ease;
}

.v-enter-from {
  height: 0;
}

.v-enter-to {
  height: 204px;
}

.v-leave-from {
  height: 204px;
}

.v-leave-to {
  height: 0;
}
</style>