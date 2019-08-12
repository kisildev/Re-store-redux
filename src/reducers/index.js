const InitialState = {
    books: []
};

const reducer = (state = InitialState, action) => {
    switch(action.type) {
        case 'BOOKS_LOADED' :
            return {
                books: action.payload
            }

        default :
            return state;
    }
};

export default reducer;