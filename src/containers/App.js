import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCountries, removeCountry, sortCountries, addCountry, searchCountry, increaseCount} from "../actions";
import Header from '../components/Header';
import CountryList from '../components/CountryList';
import {SORT_TYPES} from "../_common/const";

class App extends Component {
    componentDidMount() {
        this.props.fetchCountries();
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            this.props.increaseCount(this.props.count + 50);
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

const getCountries = ({countries, sort, keyword, count}) => {
    countries = keyword && countries.filter(country => {
        return Object.keys(country).some(key => {
            return country[key].includes(keyword);
        });
    }) || countries;

    let compareFunction = sort.kind === SORT_TYPES.ASC
        && function (a, b) {
            return a[sort.target].localeCompare(b[sort.target]);
        }
        || function (a, b) {
            return b[sort.target].localeCompare(a[sort.target]);
        };

    return countries.slice(0, count).sort(compareFunction);
};

const mapStateToProps = state => ({
    countries: getCountries(state),
    sort: {kind: state.sort.kind, target: state.sort.target},
    search: {keyword: state.search.keyword},
    count: state.count
});

const mapDispatchToProps = dispatch => ({
    fetchCountries: count => dispatch(fetchCountries(count)),
    onDeleteClick: code => dispatch(removeCountry(code)),
    onSortClick: (sortKind, target) => dispatch(sortCountries(sortKind, target)),
    onAddSubmit: country => dispatch(addCountry(country)),
    onSearchSubmit: search => dispatch(searchCountry(search)),
    increaseCount: count => dispatch(increaseCount(count))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
