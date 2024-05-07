import { api } from '../../config/api';
import {CREATE_CATEGORY_FAILURE,
        CREATE_CATEGORY_REQUEST,
        CREATE_CATEGORY_SUCCESS,
        GET_RESTAURANT_EVENTS_REQUEST,
        GET_RESTAURANT_EVENTS_SUCCESS,
        GET_RESTAURANT_EVENTS_FAILURE,
        CREATE_EVENT_FAILURE,
        CREATE_EVENT_REQUEST,
        CREATE_EVENT_SUCCESS,
        GET_ALL_EVENTS_FAILURE,
        GET_ALL_EVENTS_REQUEST,
        GET_ALL_EVENTS_SUCCESS,
        UPDATE_RESTAURANT_STATUS_FAILURE,
        UPDATE_RESTAURANT_STATUS_REQUEST,
        UPDATE_RESTAURANT_STATUS_SUCCESS,
        UPDATE_RESTAURANT_FAILURE,
        UPDATE_RESTAURANT_REQUEST,
        UPDATE_RESTAURANT_SUCCESS,
        CREATE_RESTAURANT_FAILURE,
        CREATE_RESTAURANT_REQUEST,
        CREATE_RESTAURANT_SUCCESS,
        GET_ALL_RESTAURANTS_FAILURE,
        GET_ALL_RESTAURANTS_REQUEST,
        GET_ALL_RESTAURANTS_SUCCESS,
        GET_RESTAURANT_BY_USER_ID_REQUEST,
        GET_RESTAURANT_BY_USER_ID_FAILURE,
        GET_RESTAURANT_BY_USER_ID_SUCCESS,
        GET_RESTAURANT_BY_ID_FAILURE,
        GET_RESTAURANT_BY_ID_REQUEST,
        GET_RESTAURANT_BY_ID_SUCCESS,
        DELETE_EVENTS_FAILURE,
        DELETE_EVENTS_REQUEST,
        DELETE_EVENTS_SUCCESS,
        DELETE_RESTAURANT_FAILURE,
        DELETE_RESTAURANT_REQUEST,
        DELETE_RESTAURANT_SUCCESS,
        GET_RESTAURANT_CATEGORY_FAILURE,
        GET_RESTAURANT_CATEGORY_REQUEST,
        GET_RESTAURANT_CATEGORY_SUCCESS,
        GET_CATEGORIES_FAILURE,
        GET_CATEGORIES_REQUEST,
        GET_CATEGORIES_SUCCESS} from './ActionType';


export const getAllRestaurantsAction = (token) =>{
    return async (dispatch) => {
        dispatch({type: GET_ALL_RESTAURANTS_REQUEST});
        try {
            const {data} = await api.get('/api/restaurants', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log("Get all restaurants: ",data);
            dispatch({type: GET_ALL_RESTAURANTS_SUCCESS, payload: data})
        } catch (error) {
            console.log(error);
            dispatch({type: GET_ALL_RESTAURANTS_FAILURE, payload: error.response.data})
        }
    }
}

export const getRestaurantById = (req) => {
    return async (dispatch) => {
        dispatch({type: GET_RESTAURANT_BY_ID_REQUEST});
        try {
            const response = await api.get(`/api/restaurants/${req.id}`, {
                headers: {
                    Authorization: `Bearer ${req.jwt}`
                }
            })
            dispatch({type: GET_RESTAURANT_BY_ID_SUCCESS, payload: response.data})
        } catch (error) {
            console.log(error);
            dispatch({type: GET_RESTAURANT_BY_ID_FAILURE, payload: error})
        }
    }
}

export const getRestaurantByUserId = (jwt) => {
    return async (dispatch) => {
        dispatch({type: GET_RESTAURANT_BY_USER_ID_REQUEST});
                try {
                    const {data} = await api.get('/api/restaurants/users', {
                        headers: {
                            Authorization: `Bearer ${jwt}`
                        }
                    })
                    console.log("Get restaurant by user id: ",data);
                    dispatch({type: GET_RESTAURANT_BY_USER_ID_SUCCESS, payload: data})
                } catch (error) {
                    console.log(error);
                    dispatch({type: GET_RESTAURANT_BY_USER_ID_FAILURE, payload: error.message});
                }
    }
}

export const createRestaurant = (req) => {
    console.log("token----", req.token);
    return async (dispatch) => {
        dispatch({type: CREATE_RESTAURANT_REQUEST});
                try {
                    const {data} = await api.post('/api/admin/restaurants', req.data, {
                        headers: {
                            Authorization: `Bearer ${req.token}`
                        }
                    })
                    dispatch({type: CREATE_RESTAURANT_SUCCESS, payload: data})
                } catch (error) {
                    console.log(error);
                    dispatch({type: CREATE_RESTAURANT_FAILURE, payload: error.response.data})
                }
    }
}

export const updateRestaurant = ({restaurantId, restaurantData, jwt}) => {
    return async (dispatch) => {
        dispatch({type: UPDATE_RESTAURANT_REQUEST});
                try {
                    const res = await api.put(`/api/restaurants/${restaurantId}`, restaurantData, {
                        headers: {
                            Authorization: `Bearer ${jwt}`
                        }
                    })
                    dispatch({type: UPDATE_RESTAURANT_SUCCESS, payload: res.data})
                } catch (error) {
                    console.log(error);
                    dispatch({type: UPDATE_RESTAURANT_FAILURE, payload: error.response.data})
                }
    }
}

export const deleteRestaurant = ({restaurantId, jwt}) =>{
    return async (dispatch) => {
        dispatch({type: DELETE_RESTAURANT_REQUEST});
                try {
                    const res = await api.delete(`/api/admin/restaurants/${restaurantId}`, {
                        headers: {
                            Authorization: `Bearer ${jwt}`
                        }
                    })
                    dispatch({type: DELETE_RESTAURANT_SUCCESS, payload: res.data})
                } catch (error) {
                    console.log(error);
                    dispatch({type: DELETE_RESTAURANT_FAILURE, payload: error.response.data})
                }
    }
}

export const updateRestaurantStatus = ({restaurantId, jwt}) => {
    return async (dispatch) => {
        dispatch({type: UPDATE_RESTAURANT_STATUS_REQUEST});
                        try {
                            const res = await api.put(`/api/admin/restaurants/${restaurantId}/status`, {}, {
                                headers: {
                                    Authorization: `Bearer ${jwt}`
                                }
                            })
                            dispatch({type: UPDATE_RESTAURANT_STATUS_SUCCESS, payload: res.data})
                        } catch (error) {
                            console.log(error);
                            dispatch({type: UPDATE_RESTAURANT_STATUS_FAILURE, payload: error.response.data})
                        }
    }
}

export const createEventAction = ({data, jwt, restaurantId}) => {
    return async (dispatch) => {
        dispatch({type: CREATE_EVENT_REQUEST});
                try {
                    const res = await api.post(`/api/admin/events/restaurants/${restaurantId}`, data, {
                        headers: {
                            Authorization: `Bearer ${jwt}`
                        }
                    })
                    dispatch({type: CREATE_EVENT_SUCCESS, payload: res.data})
                } catch (error) {
                    console.log(error);
                    dispatch({type: CREATE_EVENT_FAILURE, payload: error.response.data})
                }
    }
}

export const getAllEventsAction = ({jwt}) => {
    return async (dispatch) => {
        dispatch({type: GET_ALL_EVENTS_REQUEST});
                try {
                    const res = await api.get('/api/events', {
                        headers: {
                            Authorization: `Bearer ${jwt}`
                        }
                    })
                    dispatch({type: GET_ALL_EVENTS_SUCCESS, payload: res.data})
                } catch (error) {
                    console.log(error);
                    dispatch({type: GET_ALL_EVENTS_FAILURE, payload: error.response.data})
                }
    }
}

export const deleteEventAction = ({eventId, jwt}) => {
    return async (dispatch) => {
        dispatch({type: DELETE_EVENTS_REQUEST});
                try {
                    const res = await api.delete(`/api/admin/events/${eventId}`, {
                        headers: {
                            Authorization: `Bearer ${jwt}`
                        }
                    })
                    dispatch({type: DELETE_EVENTS_SUCCESS, payload: res.data})
                } catch (error) {
                    console.log(error);
                    dispatch({type: DELETE_EVENTS_FAILURE, payload: error.response.data})
                }
    }
}

export const getRestaurantEventsAction = ({jwt, restaurantId}) => {
    return async(dispatch) => {
        dispatch({type: GET_RESTAURANT_EVENTS_REQUEST});
                        try {
                            const res = await api.get(`/api/admin/events/restaurants/${restaurantId}`, {
                                headers: {
                                    Authorization: `Bearer ${jwt}`
                                }
                            })
                            dispatch({type: GET_RESTAURANT_EVENTS_SUCCESS, payload: res.data})
                        } catch (error) {
                            console.log(error);
                            dispatch({type: GET_RESTAURANT_EVENTS_FAILURE, payload: error.response.data})
                        }
    }
}

export const createCategoryAction = ({req, jwt}) => {
    return async (dispatch) => {
        dispatch({type: CREATE_CATEGORY_REQUEST});
                try {
                    const res = await api.post('/api/admin/category', req.data, {
                        headers: {
                            Authorization: `Bearer ${jwt}`
                        }
                    })
                    dispatch({type: CREATE_CATEGORY_SUCCESS, payload: res.data})
                } catch (error) {
                    console.log(error);
                    dispatch({type: CREATE_CATEGORY_FAILURE, payload: error.response.data})
                }
    }
}

// export const getAllCategoriesAction = ({jwt}) => {
//     return async (dispatch) => {
//         dispatch({type: GET_CATEGORIES_REQUEST});
//                 try {
//                     const res = await api.get('/api/category', {
//                         headers: {
//                             Authorization: `Bearer ${jwt}`
//                         }
//                     })
//                     dispatch({type: GET_CATEGORIES_SUCCESS, payload: res.data})
//                 } catch (error) {
//                     console.log(error);
//                     dispatch({type: GET_CATEGORIES_FAILURE, payload: error.response.data})
//                 }
//     }
// }

export const getRestaurantCategory = ({jwt, restaurantId}) => {
    return async(dispatch) => {
        dispatch({type: GET_RESTAURANT_CATEGORY_REQUEST});
                        try {
                            const res = await api.get(`/api/category/restaurants/${restaurantId}`, {
                                headers: {
                                    Authorization: `Bearer ${jwt}`
                                }
                            })
                            dispatch({type: GET_RESTAURANT_CATEGORY_SUCCESS, payload: res.data})
                        } catch (error) {
                            console.log(error);
                            dispatch({type: GET_RESTAURANT_CATEGORY_FAILURE, payload: error.response.data})
                        }
    }
}