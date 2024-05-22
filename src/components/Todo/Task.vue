<template>
  <div>
    <v-list-item
      @click="toggleDone"
      :class="{'blue lighten-5': task.done}"
    >
      <v-list-item-action>
        <v-checkbox 
          v-model="task.done"
          @change="toggleDone"
        ></v-checkbox>
      </v-list-item-action>

      <v-list-item-content>
        <v-list-item-title :class="{'text-decoration-line-through': task.done}">
          {{ task.name }}
        </v-list-item-title>
      </v-list-item-content>

      <v-list-item-action>
        <task-menu :task="task" @update-task="updateTask"/>
      </v-list-item-action>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import TaskMenu from '@/components/Todo/Dialogs/TaskMenu';

export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  components: {
    TaskMenu
  },
  methods: {
    toggleDone() {
      this.$store.dispatch('toggleDoneTask', this.task.id);
    },
    updateTask(updatedTask) {
      this.$store.dispatch('updateTask', updatedTask);
    }
  }
}
</script>
