<template>
<div>
      <v-list-item
      @click="$store.commit('doneTask', task.id)"
      :class="{'blue lighten-5': task.done}"
      >
        <template>
          <v-list-item-action>
            <v-checkbox 
            :input-value= "task.done"
            ></v-checkbox>
          </v-list-item-action>
       
        <v-list-item-content>
          <v-list-item-title
          :class="{'text-decoration-line-through':task.done}"
          >{{ task.title }}</v-list-item-title>
        </v-list-item-content>

        
      <v-list-item-action>
        <task-menu :task="task"/>
        </v-list-item-action>
      </template>


      </v-list-item>
    <v-divider></v-divider>
    </div>
</template>

<script>
import TaskMenu from '@/components/Todo/Dialogs/TaskMenu'

export default{
    props: ['task'],
    components:{
      'task-menu': TaskMenu,
    }
}

</script>
