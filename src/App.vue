<template>
  <v-app>
    <!-- Headerbar -->
    <v-toolbar>
      <v-toolbar-title>
        <v-btn variant="plain" to="/"> Marcel Jacek </v-btn>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn to="/">About</v-btn>
        <v-menu :open-on-hover="!mobile">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props">Projects</v-btn>
          </template>
          <v-list>
            <v-list-item v-for="item in projects" :key="item.to">
              <v-list-item-title>
                <v-btn :to="item.to">{{ item.title }}</v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>

    <v-main>
      <v-container class="fill-height">
        <v-responsive class="align-centerfill-height mx-auto">
          <router-view />
        </v-responsive>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { useDisplay } from "vuetify/lib/framework.mjs";

//
const projects = [{ title: "GYM Visitor Stats", to: "/project/gym-stats" }];

const { mobile } = useDisplay();
</script>

<style>
#app {
  height: 100vh;
}

@media screen and (min-width: 900px) {
  .v-responsive {
    max-width: 900px;
  }

  .headerbar {
    max-width: 900px !important;
  }
}
</style>
