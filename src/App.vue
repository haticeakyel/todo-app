<template>
  <v-app id="inspire">
    <v-app-bar>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Vuetify Todo</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-navigation-drawer v-model="drawer">
      <v-list dense nav class="menu-list" :class="{ 'visible': rail }">
        <v-list-item-group>
          <v-list-item v-for="item in menuItems" :key="item.value">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<style>
.menu-list {
  display: none; /* Hide the menu list by default */
}

.visible {
  display: block; /* Show the menu list when the 'visible' class is present */
}
</style>

<script setup>
import { ref } from 'vue'
import router from './router'

const drawer = ref(false)
const rail = ref(false)

const menuItems = [
  { icon: 'mdi-home-city', title: 'Todo', value: 'home' },
  { icon: 'mdi-account', title: 'About', value: 'account' },
]

const toggleDrawer = () => {
  drawer.value = !drawer.value
  rail.value = drawer.value
}
</script>
