import {
  CREATE_MENU_ITEM_FAILURE,
  CREATE_MENU_ITEM_REQUEST,
  CREATE_MENU_ITEM_SUCCESS,
  GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,
  GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST,
  GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS,
  DELETE_MENU_ITEM_FAILURE,
  DELETE_MENU_ITEM_REQUEST,
  DELETE_MENU_ITEM_SUCCESS,
  SEARCH_MENU_ITEM_REQUEST,
  SEARCH_MENU_ITEM_SUCCESS,
  SEARCH_MENU_ITEM_FAILURE,
  UPDATE_MENU_ITEM_AVAILABILITY_REQUEST,
  UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS,
  UPDATE_MENU_ITEM_AVAILABILITY_FAILURE,
} from "./ActionType";

export const createMenuItem = ({ menu, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_MENU_ITEM_REQUEST });
    try {
      const res = await api.post("/api/admin/food", menu, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: CREATE_MENU_ITEM_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({
        type: CREATE_MENU_ITEM_FAILURE,
        payload: error.response.data,
      });
    }
  };
};

export const getMenuItemsByRestaurantId = ({ req }) => {
  return async (dispatch) => {
    dispatch({ type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST });
    try {
      const res = await api.get(
        `/api/food/restaurant/${req.restaurantId}?vegetarian=${req.vegetarian}&nonveg=${req.nonveg}
            &seasonal=${req.seasonal}&food_category=${req.foodCategory}`,
        {
          headers: {
            Authorization: `Bearer ${req.jwt}`,
          },
        }
      );
      dispatch({
        type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS,
        payload: res.data,
      });
    } catch {
      dispatch({
        type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,
        payload: error.response.data,
      });
    }
  };
};

export const searchMenu = ({ keyword, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: SEARCH_MENU_ITEM_REQUEST });
    try {
      const res = await api.get(`/api/food/search?name=${keyword}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: SEARCH_MENU_ITEM_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({
        type: SEARCH_MENU_ITEM_FAILURE,
        payload: error.response.data,
      });
    }
  };
};

// export const getAllIngredientOfMenuItem = (req) => {
//     return async (dispatch) => {
//         dispatch({type: GET_ALL_INGREDIENTS_OF_MENU_ITEM_REQUEST});
//         try {
//             const res = await api.get(`/api/food/ingredients/${req.id}`, {
//                 headers: {
//                     Authorization: `Bearer ${req.jwt}`
//                 }
//             })
//             dispatch({type: GET_ALL_INGREDIENTS_OF_MENU_ITEM_SUCCESS, payload: res.data})
//         } catch (error) {
//             dispatch({type: GET_ALL_INGREDIENTS_OF_MENU_ITEM_FAILURE, payload: error.response.data})
//         }
//     }
// }

export const updateMenuItemAvailability = ({ foodId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_MENU_ITEM_AVAILABILITY_REQUEST });
    try {
      const res = await api.put(
        `/api/admin/food/${foodId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      dispatch({
        type: UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_MENU_ITEM_AVAILABILITY_FAILURE,
        payload: error.response.data,
      });
    }
  };
};

export const deleteMenuItem = ({ foodId, jwt }) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_MENU_ITEM_REQUEST });
    try {
      const res = await api.delete(`/api/admin/food/${foodId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      dispatch({ type: DELETE_MENU_ITEM_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({
        type: DELETE_MENU_ITEM_FAILURE,
        payload: error.response.data,
      });
    }
  };
};
