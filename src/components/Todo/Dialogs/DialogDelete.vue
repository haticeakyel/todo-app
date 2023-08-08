<template>
    <v-row justify="center">
      <v-dialog
        :value="true"
        persistent
        width="auto"
      >
        
        <v-card>
          <v-card-title class="text-h5">
            Delete Task?
          </v-card-title>
          <v-card-text>Are you sure to delete this button?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green"
              variant="text"
              @click="$store.dispatch('deleteTask',task.id)"
            >
              Yes
            </v-btn>
            <v-btn
              color="red"
              variant="text"
              @click="$emit('close')"
            >
              No
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>
  <script>
    export default {
      props:['task']
    }
  </script>