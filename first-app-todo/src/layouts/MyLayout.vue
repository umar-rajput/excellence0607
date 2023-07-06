<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>
          <!-- Quasar v{{ $q.version }} -->
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer breakpoint="767" v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header class="q-mb-lg q-pa-lg">
          Essential Links
        </q-item-label>
        <NavigationLink
          v-for="link in NavigationLink"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <q-toolbar>
        <q-tabs v-model="tab" inline-label class="text-white">
          <q-route-tab
            v-for="link in NavigationLink"
            :key="link.title"
            v-bind="link"
          />
          <!-- <q-tab name="alarms" icon="alarm" label="Alarms" />
          <q-tab name="movies" icon="movie" label="Movies" /> -->
        </q-tabs>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import NavigationLink from "../components/NavigationLink.vue";

const navigationList = [
  {
    title: "Todo",
    icon: "list",
    link: "/",
  },
  {
    title: "Settings",
    icon: "settings",
    link: "/settings",
  },
];

export default defineComponent({
  name: "MyLayout",

  components: {
    // EssentialLink,
    NavigationLink,
  },

  data() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      NavigationLink: navigationList,
    };
  },
});
</script>

<style scoped>
@media screen and (min-width: 768px) {
}
</style>
