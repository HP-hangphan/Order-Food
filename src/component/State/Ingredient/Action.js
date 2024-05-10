import {
    GET_INGREDIENTS, 
    CREATE_INGREDIENT_SUCCESS,
    CREATE_INGREDIENT_CATEGORY_SUCCESS,
    GET_INGREDIENT_CATEGORY_SUCCESS,
    UPDATE_STOCK

} from './ActionType'

export const getIngredientOfRestaurant = ({id, jwt}) => {
    return async (dispatch) => {
        try {
            const response = await api.get(`/api/admin/ingredient/restaurant/${id}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            console.log("Get all ingredient: ", response.data);
            dispatch({type: GET_INGREDIENTS, payload: response.data})
        } catch (error) {
            console.log(error);
        }
    }
};

export const createIngredient = ({data, jwt}) => {
    return async (dispatch) => {
        try {
            const response = await api.post('/api/admin/ingredient', data, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            console.log("Create ingredient: ", response.data);
            dispatch({type: CREATE_INGREDIENT_SUCCESS, payload: response.data})
        } catch (error) {
            console.log(error);
        }
    }
}

export const createIngredientCategory = ({data, jwt}) => {
    return async(dispatch) => {
        try {
            const response = await api.post('/api/admin/ingredient/category', data, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            console.log("Create ingredient category: ", response.data);
            dispatch({type: CREATE_INGREDIENT_CATEGORY_SUCCESS, payload: response.data})
        } catch (error) {
            console.log(error);
        }
    }

}

export const getIngredientCategory = ({id, jwt}) => {
    return async(dispatch) => {
        try {
            const response = await api.get(`/api/admin/ingredient/restaurant/${id}/category`, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            console.log("Get ingredient category: ", response.data);
            dispatch({type: GET_INGREDIENT_CATEGORY_SUCCESS, payload: response.data})
        } catch (error) {
            console.log(error);
        }
    }
}

export const updateStock = ({id, jwt}) => {
    return async (dispatch) => {
        try {
            const response = await api.put(`/api/admin/ingredients/${id}/stock`, {}, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            })
            console.log("Update stock: ", response.data);
            dispatch({type: UPDATE_STOCK, payload: response.data})
        } catch (error) {
            console.log(error);
        }
    }
}