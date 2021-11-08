<template>
  <p v-if="pending">
    Loading...
  </p>
  <div v-else>
    <div v-for="pokemon in pokemons">
      name: {{ pokemon.name }}
      <br>
      url: {{ pokemon.url }}
    </div>
  </div>
</template>

<script lang="ts" setup>
type Pokemon = {
  name: string,
  url: string,
}

const { pending, data } = await useFetch<string, { results: Array<Pokemon> }>("/api/v2/pokemon", { pick: ["results"], baseURL: "https://pokeapi.co" })
const pokemons = data.value.results
</script>
