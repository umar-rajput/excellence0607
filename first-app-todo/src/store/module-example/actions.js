export function updateTask(/* context */ { commit }, payload) {
  // console.log("action...");
  // console.log("payload", payload);
  commit("updateTaskValue", payload);
  // return "ss";
}

export function deleteTask({ commit }, id) {
  console.log("action..", id);
  commit("deleteTask", id);
}
