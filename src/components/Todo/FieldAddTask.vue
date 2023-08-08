<template>
    <v-text-field
            @click:append="addTask"
            @keyup.enter="addTask"

            class="pa-2"
            label="Append inner"
            append-icon="mdi-plus"
            outlined
            clearable
            hide-details
            v-model="newTaskTitle"
          ></v-text-field>

</template>

<script>
export default {
    data() {
      return{
        newTaskTitle:'',
      }
    },
    methods:{
        addTask(){
          this.$store.dispatch('addTask', this.newTaskTitle)
          this.newTaskTitle = ''
        },
      
    },
}
</script>

