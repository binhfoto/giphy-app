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