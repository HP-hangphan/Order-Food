import {
    UPDATE_ORDER_STATUS_SUCCESS,
    UPDATE_ORDER_STATUS_REQUEST,
    UPDATE_ORDER_STATUS_FAILURE,
    GET_RESTAURANT_ORDER_REQUEST,
    GET_RESTAURANT_ORDER_SUCCESS,
    GET_RESTAURANT_ORDER_FAILURE,
} from './ActionType'

export const updateStatus = ({orderId, orderStatus, jwt}) => {
    return async (dispatch) => {
            dispatch({type: UPDATE_ORDER_STATUS_REQUEST});
                    try {
                        const res = await api.put(`/api/admin/orders/${orderId}/${orderStatus}`, {}, {
                            headers: {
                                Authorization: `Bearer ${jwt}`
                            }
                        })
                        const updateOrder = res.data;
                        console.log("updated status: ", updateOrder)
                        dispatch({type: UPDATE_ORDER_STATUS_SUCCESS, payload: res.data})
                    } catch (error) {
                        console.log(error);
                        dispatch({type: UPDATE_ORDER_STATUS_FAILURE, payload: error.response.data})
                    }
        }
}

export const fetchRestaurantsOrder = ({restaurantId, orderStatus, jwt}) => {
    return async (dispatch) => {
            dispatch({type: GET_RESTAURANT_ORDER_REQUEST});
                    try {
                        const res = await api.get(`/api/admin/order/restaurant/${restaurantId}`, {
                            params: {order_status : orderStatus},
                            headers: {
                                Authorization: `Bearer ${jwt}`
                            }
                        })
                        const order = res.data;
                        console.log("order: ", order)
                        dispatch({type: GET_RESTAURANT_ORDER_SUCCESS, payload: res.data})
                    } catch (error) {
                        console.log(error);
                        dispatch({type: GET_RESTAURANT_ORDER_FAILURE, payload: error.response.data})
                    }
        }
}