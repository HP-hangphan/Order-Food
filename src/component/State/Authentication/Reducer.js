import { isPresentInFavorites } from "../../config/logic";
import { LOGOUT, ADD_TO_FAVORITE_FAILURE, ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, LOGIN_FAILURE, LOGIN_REQUEST, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, LOGIN_SUCCESS, GET_USER_SUCCESS} from "./ActionType"

const initialState = {
    user:null,
    isLoading: false,
    error:null,
    jwt:null,
    favourites:[],
    success:null
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
        case ADD_TO_FAVORITE_REQUEST:
            return {
                ...state, isLoading: true,error:null, success: null
                    };

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state, isLoading: true, jwt: action.payload, success: "Register success"
                    };
        case GET_USER_SUCCESS:
            return {
                ...state, isLoading: false, user: action.payload, favourites: action.payload.favourites
                    };
            
        case ADD_TO_FAVORITE_SUCCESS:
            return {
                ...state, isLoading: false,error:null, favourites: isPresentInFavorites(state.favourites, action.payload) ? state.favourites.filter((item) => item.id !== action.payload.id):
                [action.payload, ...state.favourites]
                    };
        case LOGOUT:
            return initialState;
        
        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
        case ADD_TO_FAVORITE_FAILURE:
            return {
                ...state, isLoading: false,error: action.payload, success: null
                    };

        default:
            return state;
        
            
    }

}