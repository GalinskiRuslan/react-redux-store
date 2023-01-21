const initalState = {
  items: [
    {
      id: 1,
      title: "Some iteme",
      discription:
        "Черная кепка BMW Motorsport с 3D-принтом BMW Motorsport спереди и вышитым логотипом Puma Cat сзади. Размер: один размер, регулируемый.",
    },
  ],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "ITEMS_LOADED":
      return { items: action.payload };
    default: {
      return state;
    }
  }
};

export default reducer;
