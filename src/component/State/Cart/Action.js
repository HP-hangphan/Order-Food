import {
    FIND_CART_FAILURE,
    FIND_CART_REQUEST,
    FIND_CART_SUCCESS,
    GET_ALL_CART_ITEMS_FAILURE,
    GET_ALL_CART_ITEMS_REQUEST,
    GET_ALL_CART_ITEMS_SUCCESS,
    ADD_ITEM_TO_CART_FAILURE,
    ADD_ITEM_TO_CART_REQUEST,
    ADD_ITEM_TO_CART_SUCCESS,
    UPDATE_CARTITEM_FAILURE,
    UPDATE_CARTITEM_REQUEST,
    UPDATE_CARTITEM_SUCCESS,
    CLEAN_CART_FAILURE,
    CLEAN_CART_REQUEST,
    CLEAN_CART_SUCCESS,
    REMOVE_CART_ITEM_SUCCESS,
    
} from './ActionType';


export const findCart = (token) => {
    return async (dispatch) => {
        dispatch({type: FIND_CART_REQUEST});
        try {
            const {data} = await api.get('/api/cart', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            dispatch({type: FIND_CART_SUCCESS, payload: data});
        } catch (error) {
            dispatch({type: FIND_CART_FAILURE, payload: error});
        }
    }
}

export const getAllCartItems = (req) => {
    return async (dispatch) => {
            dispatch({type: GET_ALL_CART_ITEMS_REQUEST});
            try {
                const res = await api.get(`/api/carts/${req.cartId}/items`, {
                    headers: {
                        Authorization: `Bearer ${req.token}`
                    }
                });
                dispatch({type: GET_ALL_CART_ITEMS_SUCCESS, payload: res});
            } catch (error) {
                dispatch({type: GET_ALL_CART_ITEMS_FAILURE, payload: error});
            }
        }
}

export const addItemToCart  = (req) => {
    return async (dispatch) => {
            dispatch({type: ADD_ITEM_TO_CART_REQUEST});
            try {
                const {data} = await api.post(`/api/carts/add`, req.item, {
                    headers: {
                        Authorization: `Bearer ${req.token}`
                    }
                });
                dispatch({type: ADD_ITEM_TO_CART_SUCCESS, payload: data});
            } catch (error) {
                dispatch({type: ADD_ITEM_TO_CART_FAILURE, payload: error});
            }
        }
}

export const updateCartItem = (req) => {
    return async (dispatch) => {
            dispatch({type: UPDATE_CARTITEM_REQUEST});
            try {
                const {data} = await api.put(`/api/cart-item/update`, req.data, {
                    headers: {
                        Authorization: `Bearer ${req.token}`
                    }
                });
                dispatch({type: UPDATE_CARTITEM_SUCCESS, payload: data});
            } catch (error) {
                dispatch({type: UPDATE_CARTITEM_FAILURE, payload: error});
            }
        }
}

export const removeCartItem = ({cartItemId, jwt}) => {
    return async (dispatch) => {
                dispatch({type: REMOVE_CART_ITEM_SUCCESS});
                try {
                    const {data} = await api.delete(`/api/carts/${cartItemId}`, {
                        headers: {
                            Authorization: `Bearer ${jwt}`
                        }
                    });
                    dispatch({type: REMOVE_CART_ITEM_SUCCESS, payload: data});
                } catch (error) {
                    dispatch({type: REMOVE_CART_ITEM_SUCCESS, payload: error});
                }
            }
}

export const cleanCart = () => {
    return async (dispatch) => {
            dispatch({type: CLEAN_CART_REQUEST});
            try {
                const {data} = await api.put('/api/cart/clean', {}, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwt")}`
                    }
                });
                dispatch({type: CLEAN_CART_SUCCESS, payload: data});
            } catch (error) {
                dispatch({type: CLEAN_CART_FAILURE, payload: error});
            }
        }
}