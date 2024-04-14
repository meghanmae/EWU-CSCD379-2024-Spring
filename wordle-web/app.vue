<template>
  <NuxtLayout>
    <v-app>
      <v-app-bar color="primary">
        <template v-slot:prepend>
          <v-icon>mdi-alpha-w-circle</v-icon>
        </template>

        <v-app-bar-title>Wordle Spring 2024</v-app-bar-title>
        <v-btn @click="router.push('/')">Home</v-btn>
        <v-btn @click="router.push('/test')">Test</v-btn>
        <v-btn
          icon="mdi-help-circle"
          @click="showHelpDialog = !showHelpDialog"
        />
        <v-btn
          icon="mdi-theme-light-dark"
          @click="switchTheme"
        />
      </v-app-bar>

      <HelpDialog v-model="showHelpDialog" />

      <v-main>
        <NuxtPage />
      </v-main>
    </v-app>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify/lib/framework.mjs'

const router = useRouter();
const showHelpDialog = ref(false);
const theme = useTheme()

function switchTheme() {
  if (theme.global.name.value === 'light') {
    setDarkTheme()
  } else {
    setLightTheme()
  }
}

function setLightTheme() {
  theme.global.name.value = 'light'
}

function setDarkTheme() {
  theme.global.name.value = 'dark'
}
</script>
