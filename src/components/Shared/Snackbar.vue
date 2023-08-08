<template>
 <v-snackbar
      v-model="$store.state.snackbar.show"
    >
      {{ $store.state.snackbar.text }}

      <template v-slot:actions>
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          {{Close}}
        </v-btn>
      </template>
    </v-snackbar>
</template>
<script>
  export default {
    
  }
</script>
