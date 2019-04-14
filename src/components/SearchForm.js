import React from 'react';
import {Field, reduxForm} from 'redux-form';

let SearchForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className='form'>
            <Field name='keyword' type='text'
                   placeholder='검색어' component='input'/>
            <button type='submit'>검색</button>
        </form>
    );
};

export default reduxForm({
    form: 'search'
})(SearchForm);