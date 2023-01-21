const itemLoaded = (newItem) => {
  return {
    type: "ITEMS_LOADED",
    payload: newItem,
  };
};

export { itemLoaded };
