<template>
    <v-row justify="center">
      <v-dialog
        :value="true"
        persistent
        width="auto"
      >
        
        <v-card>
          <v-card-title class="text-h5">
            Edit Task?
          </v-card-title>
          <v-card-text>Are you sure to delete this button?
          </v-card-text>
          <v-text-field
          class="pa-6"
          v-model="taskTitle"
          />
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green"
              variant="text"
              :disabled="taskTitleInvalid"
              @click="saveTask"
              @keyup.enter="saveTask"
            >
              Save
            </v-btn>
            <v-btn
              color="red"
              variant="text"
              @click="$emit('close')"
            >
              Cancel
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>
  <script>
    export default {
      props:['task'],
      data() {
        return{
          taskTitle: null
        }
     },
     computed:{
      taskTitleInvalid(){
        return !this.taskTitle || this.taskTitle === this.task.title
      }
     },
     methods:{
        saveTask(){
          if(!this.taskTitleInvalid){
            let payload = {
            id: this.task.id,
            title: this.taskTitle
          }
          this.$store.commit('updateTaskTitle',payload)
          this.$emit('close')
        }
     }
          
      
    },
     mounted(){
      this.taskTitle = this.task.title
     }
    }
  </script>