<template>
  <q-page class="q-pa-md">
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    > -->
    <p>This is index page.</p>
    <div class="q-mb-md">
      <input
        type="text"
        v-model="msg"
        class="q-mr-md"
        :style="errorStyle"
        ref="msgInput"
      />
      <button @click="clear">Clear</button>
      <p>{{ msg.length }}</p>
    </div>
    <p>{{ msg }}</p>
    <p>Upper case : {{ msgUpper }}</p>
    <p>Lower case : {{ msgLower }}</p>
  </q-page>
</template>

<script>
// import { defineComponent } from "vue";
// import { ref } from "vue";

export default {
  name: "IndexPage",
  data() {
    return {
      msg: "This is our msg",
    };
  },
  computed: {
    msgUpper() {
      return this.msg.toUpperCase();
    },
    msgLower() {
      return this.msg.toLowerCase();
    },
    errorStyle() {
      console.log("works..");
      if (this.msg.length > 22) {
        return {
          color: "red",
          background: "pink",
        };
      }
      return {
        color: "#000",
      };
    },
  },
  methods: {
    clear() {
      this.msg = "";
    },
  },
  // mounted() {
  //   console.log(this.$ref.msgInput);
  //   this.$ref.msgInput.className = "bg-green";
  // },
};
</script>
