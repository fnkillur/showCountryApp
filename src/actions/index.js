import * as types from './actionTypes';

export const addCountry = country => ({
    type: types.ADD_COUNTRY,
    country
});

export const removeCountry = code => ({
    type: types.REMOVE_COUNTRY,
    code
});

export const searchCountry = search => ({
    type: types.SEARCH_COUNTRY,
    search
});

export const sortCountries = (sortKind, sortTarget) => ({
    type: types.SORT_COUNTRIES,
    sortKind,
    sortTarget
});

export const fetchCountries = count => ({
    type: types.FETCH_COUNTRIES,
    count
});

export const fetchCountriesSucceeded = countries => ({
    type: types.FETCH_COUNTRIES_SUCCEEDED,
    payload: countries
});

export const fetchCountriesFailed = error => ({
    type: types.FETCH_COUNTRIES_FAILED,
    error
});

export const increaseCount = count => ({
    type: types.INCREASE_COUNT,
    count
});

