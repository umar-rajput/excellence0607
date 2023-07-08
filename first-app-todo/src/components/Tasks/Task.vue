<template>
  <q-item
    v-ripple
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
    :class="!task.completed ? 'bg-blue-grey-2' : 'bg-green-2'"
    clickable
  >
    <q-item-section side top>
      <q-checkbox v-model="taskVal.completed" />
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

    <q-item-section side>
      <q-btn
        flat
        color="negative"
        icon="delete"
        @click.stop
        @click="deleteOpen()"
      />
      <q-dialog v-model="deleteVal" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <!-- <q-avatar
              icon="signal_wifi_off"
              color="primary"
              text-color="white"
            /> -->
            <span class="q-ml-sm">Do you really want to delete the task?</span>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="primary" v-close-popup />
            <q-btn
              flat
              label="Delete"
              color="primary"
              @click="deleteTask(id)"
              v-close-popup
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-item-section>
  </q-item>
</template>

<script>
// import { mapActions } from "vuex";
export default {
  name: `Task`,
  props: ["task", "id"],
  data() {
    return {
      taskVal: this.task,
      deleteVal: false,
    };
  },
  methods: {
    updateTask(payload) {
      // console.log("works..", this.$store.dispatch("index/updateTask"));
      return this.$store.dispatch("index/updateTask", payload);
    },
    // ...mapActions("index", ["updateTask"]),
    deleteOpen() {
      // console.log("val..");
      this.deleteVal = true;
    },
    deleteTask(id) {
      // console.log("delete task", id);
      // console.log(this.$store.dispatch("index/deleteTask"), id);
      return this.$store.dispatch("index/deleteTask", id);
    },
  },
  // mounted() {
  //   console.log("...", this.task.completed);
  //   // this.updateTask();
  //   // console.log(this.$store._actions);
  //   // updateTask();
  // },
};
</script>

<style scoped></style>
