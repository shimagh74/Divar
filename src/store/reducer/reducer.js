import * as actionTypes from '../action/actionTypes';

const initialState = {
    data: [],
    items: null,
    city: 'tehran',
    error: null,
    setItemSidebar : null,
    category: null,
    product: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.data,
                error: null,
                items: action.data.widget_list
            }
            
        case actionTypes.FETCH_DATA_FAIL:
            return {
                ...state,
                error: action.error
            }

        case actionTypes.SET_CATEGORY:
            return {
                ...state,
                category: action.category
            }

        case actionTypes.SET_PRODUCT:
            return {
                ...state,
                product: action.product
            }
    
        default:
            return state;
    }
}

export default reducer;