<template>
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
</template>

<script>
export default {
  name: `Task`,
  props: ["task", "id"],
  // data() {
  // },
};
</script>

<style scoped></style>
