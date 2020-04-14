import * as actionTypes from './actionTypes';
import axios from 'axios';



export const fetchDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_DATA_SUCCESS,
        data: data
    }
}

export const fetchDataFail = (error) => {
    return {
        type: actionTypes.FETCH_DATA_FAIL,
        error: error
    }
}

export const setCategory = (category) => {
    return {
        type: actionTypes.SET_CATEGORY,
        category: category
    }
}
export const setItemSidebar = (category) => {
    return {
        type: actionTypes.SET_CATEGORY,
        category: category
    }
}


export const fetchData = (category) => {
    return (dispatch) => {
       
        let url = 'https://api.divar.ir/v8/web-search/tehran/';
        if(category){
            url += category;
        }

        console.log(url);

        axios.get(url)
            .then(response => {
                dispatch(fetchDataSuccess(response.data.widget_list));
                console.log(response.data);
            })
            .catch(error => {
                dispatch(fetchDataFail(error));
            });
    }
}

