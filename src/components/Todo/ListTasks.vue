<template>
    <v-list flat class="pt-0">
      <template v-if="todos.length > 0">
        <task
          v-for="task in todos"
          :key="task.id"
          :task="task"
        />
      </template>
      <no-task v-else />
    </v-list>
  </template>
  <script>
  import { mapGetters } from 'vuex';
  import Task from '@/components/Todo/Task';
  import NoTask from './NoTask.vue';
  
  export default {
    components: {
      Task, 
      NoTask
    },
    computed: {
      ...mapGetters(['todos'])
    },
    created() {
      this.$store.dispatch('fetchTasks');
    }
  }
  </script>
  