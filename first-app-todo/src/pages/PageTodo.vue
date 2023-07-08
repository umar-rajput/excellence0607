<template>
  <q-page padding>
    <h3 class="text-center text-light-blue-9">All Tasks</h3>
    <q-list bordered separator>
      <Task v-for="(task, key) in tasks" :key="key" :task="task" :id="key">
      </Task>
    </q-list>
  </q-page>
</template>

<script>
import Task from "../components/Tasks/Task.vue";
// import { mapGetters } from "vuex";
export default {
  name: "PageTodo",
  components: { Task },
  computed: {
    tasks() {
      // console.log(this.$store._state.data.index.tasks);
      // console.log(this.$store.getters["index/tasks"].tasks);
      return this.$store.getters["index/tasks"].tasks;
    },
    // ...mapGetters("tasks", ["tasks" / "tasks"]),
  },
  data() {
    return {
      // tasks: this.$store.state.tasks,
      // tasks: [
      //   {
      //     id: 1,
      //     name: "Go to bed",
      //     completed: false,
      //     dueDate: "12/07/2023",
      //     dueTime: "02:00",
      //   },
      //   {
      //     id: 2,
      //     name: "Get Banana",
      //     completed: false,
      //     dueDate: "15/06/2023",
      //     dueTime: "12:00",
      //   },
      //   {
      //     id: 3,
      //     name: "Get Apples",
      //     completed: false,
      //     dueDate: "01/07/2023",
      //     dueTime: "15:00",
      //   },
      // ],
    };
  },
  // mounted() {
  //   this.tasks;
  // },
};
</script>
