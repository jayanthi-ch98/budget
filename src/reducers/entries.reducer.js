const reducer = (state = initialEntries, action) => {
  switch (action.type) {
    case "ADD_ENTRY":
      const newEntries = state.concat({ ...action.payload });
      return newEntries;
      break;
    case "REMOVE_ENTRY":
      const afterdeletionEntries = state.filter(
        (entry) => entry.id !== action.id
      );
      return afterdeletionEntries;
      break;
    default:
      return state;
  }
};
var initialEntries = [
  {
    id: 1,
    Description: "Work Income",
    Value: 10000,
    isExpense: false,
  },
  {
    id: 2,
    Description: "Rent",
    Value: 2000,
    isExpense: true,
  },
  {
    id: 3,
    Description: "Electricity Bill",
    Value: 800,
    isExpense: true,
  },
  {
    id: 4,
    Description: "Water Bill",
    Value: 300,
    isExpense: true,
  },
];

export default reducer;
