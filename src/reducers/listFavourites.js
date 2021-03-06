import {
  ADD_PRODUCT_TO_FAVOURITES,
  DELETE_PRODUCT_FROM_FAVOURITES,
  DELETE_ALL_PRODUCTS,
} from "../constants";

const initialState = {
  listFav: []
};

export default function contentReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_FAVOURITES:
      return {
        ...state,
        listFav: state.listFav.concat([action.favouriteProduct])
      };

    case DELETE_PRODUCT_FROM_FAVOURITES:
      let checkedProduct = state.listFav.find(productFilter => {
        return productFilter.id === action.favouriteProduct.id;
      });

      let index = state.listFav.indexOf(checkedProduct);

      let spliceado = state.listFav.splice(index, 1);

      // console.log("checkedProduct", checkedProduct);
      // console.log("index", index);
      // console.log("spliceado", spliceado);
      // console.log("state.listFav", state.listFav);

      return {
        ...state,
        listFav: [
          ...state.listFav.slice(0, index),
          ...state.listFav.slice(index)
        ]
      };

    case DELETE_ALL_PRODUCTS:
      let checkedCart = state.listFav.filter(productFilter => {
        return productFilter.id !== action.deleteProducts.id;
      });
      // console.log("checkedCart", checkedCart);

      return {
        ...state,
        listFav: checkedCart
      };

    default:
      return state;
  }
}
