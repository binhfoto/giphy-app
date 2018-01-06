import {
    FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILED,
    SHOW_DIALOG, HIDE_DIALOG
} from '../action';

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

export const fullViewReducer = (state = {}, action) => {
    switch (action.type) {
        case SHOW_DIALOG:
            return action.fullView;
        case HIDE_DIALOG:
            return {};
        default:
            return state;
    }
};

