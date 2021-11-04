<template>
  <div v-if="fetching">
    Loading...
  </div>
  <div v-else-if="error">
    Oh no... {{error}}
  </div>
  <div v-else>
    <div v-if="data">
      {{ data }}
    </div>
  </div>
</template>

