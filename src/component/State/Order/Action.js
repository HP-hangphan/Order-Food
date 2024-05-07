import {
    CREATE_ORDER_FAILURE,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    GET_USERS_ORDERS_FAILURE,
    GET_USERS_ORDERS_REQUEST,
    GET_USERS_ORDERS_SUCCESS,
    GET_USERS_NOTIFICATION_FAILURE,
    GET_USERS_NOTIFICATION_REQUEST,
    GET_USERS_NOTIFICATION_SUCCESS,


} from  "./ActionType"

export const createOrder = (req) =>{
    return async (dispatch) => {
        dispatch({type: CREATE_ORDER_REQUEST});
        try {
            const {data} = await api.post('/api/orders', req.order, {
                headers: {
                    Authorization: `Bearer ${req.jwt}`
                }
            });
            // if(data.payment_url){
            //     window.location.href = data.payment_url;
            // }
            console.log("Created order data: ",data);
            dispatch({type: CREATE_ORDER_SUCCESS, payload: data})
        } catch (error) {
            console.log("Error: ",error);
            dispatch({type: CREATE_ORDER_FAILURE, payload: error})
        }
    }
}

export const getUserOrders = (jwt) => {
    return async (dispatch) => {
        dispatch({type: GET_USERS_ORDERS_REQUEST});
        try {
            const {data} = await api.get('/api/order/user', {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            });
            console.log("user orders: ",data);
            dispatch({type: GET_USERS_ORDERS_SUCCESS, payload: data})
        } catch (error) {
            console.log("Error: ",error);
            dispatch({type: GET_USERS_ORDERS_FAILURE, payload: error})
        }
    }
}

// export const getUserNotifications = (jwt) => {
//     return async (dispatch) => {
//         dispatch({type: GET_USERS_NOTIFICATION_REQUEST});
//         try {
//             const {data} = await api.get('/api/notification/user', {
//                 headers: {
//                     Authorization: `Bearer ${jwt}`
//                 }
//             });
//             console.log("user notifications: ",data);
//             dispatch({type: GET_USERS_NOTIFICATION_SUCCESS, payload: data})
//         } catch (error) {
//             console.log("Error: ",error);
//             dispatch({type: GET_USERS_NOTIFICATION_FAILURE, payload: error})
//         }
//     }
// }