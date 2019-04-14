import {
    FETCH_COUNTRIES_SUCCEEDED,
    FETCH_COUNTRIES_FAILED,
    ADD_COUNTRY,
    REMOVE_COUNTRY,
    SORT_COUNTRIES,
    SEARCH_COUNTRY,
    SHOW_MORE_COUNTRIES,
    INCREASE_COUNT
} from '../actions/actionTypes';
import {SORT_TARGETS, SORT_TYPES} from '../_common/const';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const countries = (state = [], action) => {
    switch (action.type) {
        case FETCH_COUNTRIES_SUCCEEDED:
            return action.payload.data;
        case FETCH_COUNTRIES_FAILED:
            console.log(action.error);
            return [];
        case ADD_COUNTRY:
            return [...state, action.country];
        case REMOVE_COUNTRY:
            return state.filter(country => country.code !== action.code);
        default:
            return state;
    }
};

const sort = (state = {kind: SORT_TYPES.ASC, target: SORT_TARGETS.CODE}, action) => {
    switch (action.type) {
        case SORT_COUNTRIES:
            return {kind: action.sortKind, target: action.sortTarget};
        default:
            return state;
    }
};

const search = (state = {keyword: ''}, action) => {
    switch (action.type) {
        case SEARCH_COUNTRY:
            return {keyword: action.search.keyword};
        default:
            return state;
    }
};

const count = (state = 50, action) => {
    switch (action.type) {
        case INCREASE_COUNT:
            return action.count;
        default:
            return state;
    }
};

export default combineReducers({
    countries,
    sort,
    search,
    count,
    form: formReducer,
});

