export const addEntryReducer = (payload) => {
  return { type: "ADD_ENTRY", payload };
};
export const deleteEntryReducer = (id) => {
  return { type: "REMOVE_ENTRY", id };
};
