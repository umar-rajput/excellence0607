// import Vue from "vue";
export function updateTaskValue(/* state */ state, payload) {
  // console.log("mutation", payload.updates);
  // console.log(state.tasks[payload.id]);
  Object.assign(state.tasks[payload.id], payload.updates);
}

export function deleteTask(state, id) {
  // console.log(id);
  // Vue.delete(state.tasks, payload);
  // console.log(removeKey(id, state.tasks));
  delete state.tasks[id];
}
