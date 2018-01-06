export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';

export const getGiphty = (offset) => {
    return {
        type: FETCH_REQUEST,
        offset
    }
};

export const getGiphySuccess = (data) => {
    return {
        type: FETCH_SUCCESS,
        data
    }
};

export const getGiphyFailed = (error) => {
    return {
        type: FETCH_FAILED,
        error
    };
};

export const SHOW_DIALOG = 'SHOW_DIALOG';
export const HIDE_DIALOG = 'HIDE_DIALOG';

export const showDialog = (fullView) => {
    return {
        type: SHOW_DIALOG,
        fullView
    }
};

export const hideDialog = () => ({type: HIDE_DIALOG});