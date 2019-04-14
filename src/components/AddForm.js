import React from 'react';
import {Field, reduxForm} from 'redux-form';
import './AddForm.css';

let AddForm = ({handleSubmit}) => {
    return (
        <form onSubmit={() => {
            handleSubmit();
            alert('추가되었습니다.');
        }} className='form'>
            <div className='column column-small'>
                <Field name='code' type='text' className='form-field'
                       placeholder='코드' component='input'/>
            </div>
            <div className='column column-middle'>
                <Field name='capital' type='text' className='form-field'
                       placeholder='수도' component='input'/>
            </div>
            <div className='column column-large'>
                <Field name='name' type='text' className='form-field'
                       placeholder='국가' component='input'/>
            </div>
            <div className='column column-small'>
                <Field name='continent' type='text' className='form-field'
                       placeholder='대륙' component='input'/>
            </div>
            <div className='column column-middle'>
                <Field name='phone' type='text' className='form-field'
                       placeholder='전화번호' component='input'/>
            </div>
            <div className='column column-small'>
                <button type='submit'>추가</button>
            </div>
        </form>
    );
};

export default reduxForm({
    form: 'add'
})(AddForm);