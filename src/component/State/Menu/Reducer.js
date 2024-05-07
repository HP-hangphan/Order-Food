import * as actionType from "./ActionType";

const initialState = {
  menuItems: [],
  loading: false,
  error: null,
  search: [],
  message: null,
};

export const menuItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CREATE_MENU_ITEM_REQUEST:
    case actionType.GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST:
    case actionType.DELETE_MENU_ITEM_REQUEST:
    case actionType.UPDATE_MENU_ITEM_AVAILABILITY_REQUEST:
    case actionType.SEARCH_MENU_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        message: null,
      };
    case actionType.CREATE_MENU_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        menuItems: [...state.menuItems, action.payload],
        message: "Food Created Successfully",
      };
    case actionType.GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS:
      return {
        loading: false,
        error: null,
        menuItems: action.payload,
      };
    case actionType.DELETE_MENU_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        menuItems: state.menuItems.filter((item) => item.id !== action.payload),
        message: "Food Deleted Successfully",
      };
    case actionType.UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        menuItems: state.menuItems.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        message: "Food Availability Updated Successfully",
      };
    case actionType.SEARCH_MENU_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        search: action.payload,
      };
    case actionType.CREATE_MENU_ITEM_FAILURE:
    case actionType.GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE:
    case actionType.DELETE_MENU_ITEM_FAILURE:
    case actionType.UPDATE_MENU_ITEM_AVAILABILITY_FAILURE:
    case actionType.SEARCH_MENU_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        message: null,
      };
    default:
      return state;
  }
};
