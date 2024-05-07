import {
    UPDATE_ORDER_STATUS_FAILURE,
    UPDATE_ORDER_STATUS_REQUEST,
    UPDATE_ORDER_STATUS_SUCCESS,
    GET_RESTAURANT_ORDER_FAILURE,
    GET_RESTAURANT_ORDER_REQUEST,
    GET_RESTAURANT_ORDER_SUCCESS,
} from "./ActionType"

const initialState = {
    loading: false,
    error: null,
    orders: [],
}

export const restaurantOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RESTAURANT_ORDER_REQUEST:
        case UPDATE_ORDER_STATUS_REQUEST:
       
            return {
               ...state,
                loading: true,
                error: null,
            }
        case GET_RESTAURANT_ORDER_SUCCESS:
            return {
               ...state,
                loading: false,
                error: null,
                orders: action.payload,
            }
        case UPDATE_ORDER_STATUS_SUCCESS:
            const updateOrders = state.orders.map((order) => order.id === action.payload.id?action.payload:order);
          return {
            ...state,
            loading: true,
            orders: updateOrders
          }
        case GET_RESTAURANT_ORDER_FAILURE:
        case UPDATE_ORDER_STATUS_FAILURE:
            return {
               ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}