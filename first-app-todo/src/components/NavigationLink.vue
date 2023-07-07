<template>
  <q-item clickable exact :to="link">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <!-- <q-item-label caption>{{ caption }}</q-item-label> -->
    </q-item-section>
  </q-item>
</template>

<script>
// import { defineComponent } from "vue";

export default {
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      default: "",
    },

    icon: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
.q-item.q-router-link--active,
.q-item--active {
  color: #000000 !important;
  background: #e1f5fe;
  /* margin: 2px 0px 2px 15px; */
  /* border-radius: 10px 0px 0px 10px; */
}
.q-item {
  margin: 2px 0px 2px 15px;
  border-radius: 10px 0px 0px 10px;
  color: #e1f5fe;
}
</style>
