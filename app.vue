<template>
  <header class="border-b-2">
    <div class="p-4 container mx-auto">
      <div class="flex justify-between">
        <div>
          Nuxt3 すぶり
        </div>
      </div>
    </div>
  </header>
  <!-- Remove this component to get started! -->
  <main class="p-4 container mx-auto">
    <NuxtPage />
  </main>
</template>

<script>
import { createClient, provideClient } from "@urql/vue"

const client = createClient({
  url: "https://graphql-weather-api.herokuapp.com/graphql"
})

provideClient(client)
</script>
