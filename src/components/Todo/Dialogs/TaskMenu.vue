<template>
  <div>
    <v-menu
      bottom
      left
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
  
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="handleClick(item.click)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ item.text }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    
    <dialog-delete 
      v-if="dialogs.delete"
      @close="dialogs.delete = false" 
      :task="task"
    />
    <dialog-edit 
      v-if="dialogs.edit"
      @close="dialogs.edit = false" 
      :task="task"
    />
  </div>
</template>

<script>
import DialogDelete from './DialogDelete.vue';
import DialogEdit from './DialogEdit.vue';

export default {
  props: ['task'],
  data() {
    return {
      dialogs: {
        delete: false,
        edit: false,
      },
      items: [
        {
          text: 'Delete',
          icon: 'mdi-delete',
          click: this.showDeleteDialog
        },
        {
          text: 'Edit',
          icon: 'mdi-pencil',
          click: this.handleEdit
        },
        {
          text: 'Due Date',
          icon: 'mdi-calendar',
          click: this.handleDueDate
        }
      ]
    };
  },
  methods: {
    handleClick(clickFunction) {
      clickFunction();
    },
    showDeleteDialog() {
      this.dialogs.delete = true;
    },
    handleEdit() {
      this.dialogs.edit = true;
    },
    handleDueDate() {
      console.log('due date');
    }
  },
  components: {
    'dialog-delete': DialogDelete,
    'dialog-edit': DialogEdit,

  }
};
</script>

<style>
/* Your styles here */
</style>
