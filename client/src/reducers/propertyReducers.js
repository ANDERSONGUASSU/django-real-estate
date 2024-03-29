import {
	PROPERTY_LIST_FAIL,
	PROPERTY_LIST_SUCCESS,
	PROPERTY_LIST_REQUEST,
} from "../actions/types";

export const propertiesListReducer = (state = { loading: true, properties: [], error: null }, action) => {
    switch (action.type) {
        case PROPERTY_LIST_REQUEST:
            return { ...state, loading: true, error: null };
        case PROPERTY_LIST_SUCCESS:
            return { ...state, loading: false, properties: action.payload.results };
        case PROPERTY_LIST_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
