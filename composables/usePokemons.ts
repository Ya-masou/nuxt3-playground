import { ref } from "vue"

type Pokemon = {
  name: string,
  url: string,
}
type PokemonsList = Array<Pokemon>


export default function usePokemons() {
  let pokemons = ref<PokemonsList>([])

  const fetchPokemons = async () => {
    const { data } = await useFetch<string, { results: PokemonsList }>(
      "/api/v2/pokemon",
      {
        baseURL: "https://pokeapi.co",
      }
    )
    pokemons.value = data.value.results
  }

  return { pokemons, fetchPokemons }
}

