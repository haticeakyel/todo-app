<template>
    <v-list
    flat
    class="pt-0" 
    > 
    <task
      v-for="task in $store.state.tasks"
      :key="task.id"
      :task = "task"
      />
    </v-list>
</template>

<script>
import Task from '@/components/Todo/Task'
export default 
{
    components:{
        'task': Task,
    }
}
</script>
