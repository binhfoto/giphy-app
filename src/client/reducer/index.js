import {FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILED} from '../action';

export const loadingReducer = (state = true, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return true;
        case FETCH_SUCCESS:
        case FETCH_FAILED:
            return false;
        default:
            return state;
    }
};

export const dataReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return [
                ...state,
                ...action.data
            ];
        default:
            return state;
    }
};

export const offsetReducer = (state = 0, action) => {
    switch (action.type) {
        case FETCH_SUCCESS:
            return state + 1;
        default:
            return state;
    }
};