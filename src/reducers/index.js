const InitialState = {
    books: [],
    loading: true,
    error: null
};

const reducer = (state = InitialState, action) => {
    switch(action.type) {
        case 'FETCH_BOOKS_REQUEST' :
            return {
                boooks: [],
                loading: true,
                error: null
            }
        case 'FETCH_BOOKS_SUCCESS' :
            return {
                books: action.payload,
                loading: false,
                error: null
            }

        case 'FETCH_BOOKS_ERROR' :
            return {
                books: [],
                loading: false,
                error: action.payload
            }

        default :
            return state;
    }
};

export default reducer;