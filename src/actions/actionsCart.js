export const addCart = (data) => {
  return {
    type: "ADD_CART",
    data: [...data],
  };
};
