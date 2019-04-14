import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCountries, removeCountry, sortCountries, addCountry, searchCountry} from "../actions";
import Header from '../components/Header';
import CountryList from '../components/CountryList';
import {SORT_TYPES} from "../_common/const";

class App extends Component {
    componentDidMount() {
        this.props.fetchCountries();
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            console.log('bottom');
        }
    }

    render() {
        return (
            <React.Fragment>
                <Header
                    onSearchSubmit={this.props.onSearchSubmit}
                />
                <CountryList
                    countries={this.props.countries}
                    onSortClick={this.props.onSortClick}
                    onDeleteClick={this.props.onDeleteClick}
                    onAddSubmit={this.props.onAddSubmit}
                />
            </React.Fragment>
        );
    }
}

const getCountries = (countries, sortKind, sortTarget, keyword) => {
    countries = keyword && countries.filter(country => {
        return Object.keys(country).some(key => {
            return country[key].includes(keyword);
        });
    }) || countries;

    let compareFunction = sortKind === SORT_TYPES.ASC
        && function (a, b) {
            return a[sortTarget].localeCompare(b[sortTarget]);
        }
        || function (a, b) {
            return b[sortTarget].localeCompare(a[sortTarget]);
        };

    return countries.sort(compareFunction);
};

const mapStateToProps = state => ({
    countries: getCountries(state.countries, state.sort.kind, state.sort.target, state.search.keyword),
    sort: {kind: state.sort.kind, target: state.sort.target},
    search: {keyword: state.search.keyword}
});

const mapDispatchToProps = dispatch => ({
    fetchCountries: () => dispatch(fetchCountries()),
    onDeleteClick: code => dispatch(removeCountry(code)),
    onSortClick: (sortKind, target) => dispatch(sortCountries(sortKind, target)),
    onAddSubmit: country => dispatch(addCountry(country)),
    onSearchSubmit: search => dispatch(searchCountry(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
