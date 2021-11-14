<template>
  <div v-for="pokemon in pokemons">
    name: {{ pokemon.name }}
    <br>
    url: {{ pokemon.url }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import usePokemons from "@/composables/usePokemons"

export default defineComponent({
  async setup() {
    const { pokemons, fetchPokemons } = usePokemons()
    fetchPokemons()

    return {
      pokemons,
    }
  }
})
</script>
