<template>
  <div class="home">

    <field-add-task/>
    <field-list-tasks
    />
    
  </div>
</template>

<script>
import FieldAddTask from '@/components/Todo/FieldAddTask.vue'
import ListTasks from '@/components/Todo/ListTasks'
import NoTask from '@/components/Todo/NoTask'

  export default {
    name: 'Home',
  
    components:{
      'field-add-task': FieldAddTask,
      'field-list-tasks': ListTasks,
      'no-task': NoTask
    }
  
  }
</script>
