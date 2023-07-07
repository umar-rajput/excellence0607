<template>
  <q-page padding>
    <p>This is Todo page</p>
    <Task v-for="(task, key) in tasks" :key="key" :task="task" :id="key">
    </Task>
    <q-list bordered separator>
      <q-item
        tag="label"
        v-for="(task, key) in tasks"
        :key="key"
        v-ripple
        :class="!task.completed ? 'bg-blue-grey-2' : 'bg-green-2'"
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" clickable />
        </q-item-section>

        <q-item-section :class="task.completed ? 'text-strike' : ''">
          <q-item-label>{{ task.name }}</q-item-label>
          <!-- <q-item-label caption>
          Notify me about updates to apps or games that I downloaded
        </q-item-label> -->
        </q-item-section>

        <q-item-section side>
          <div class="row flex-center q-gutter-md">
            <!-- <div class="col"> -->
            <q-icon name="event" size="18px" />
            <!-- </div> -->
            <div class="col">
              <q-item-label caption>{{ task.dueDate }}</q-item-label>
              <q-item-label caption>
                <small>
                  {{ task.dueTime }}
                </small>
              </q-item-label>
            </div>
          </div>
        </q-item-section>
      </q-item>
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
      console.log(this.$store.getters["index/tasks"].tasks);
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
