import React from 'react';
import Country from './Country';
import './CountryList.css';
import {SORT_TYPES, SORT_TARGETS} from "../_common/const";
import AddForm from './AddForm';

const CountryList = ({countries, onSortClick, onDeleteClick, onAddSubmit}) => {
    return (
        <main>
            <section className='column-header'>
                <div className='column column-small'>
                    코드
                    <button className='btn-asc' onClick={() => onSortClick(SORT_TYPES.ASC, SORT_TARGETS.CODE)}>△</button>
                    <button className='btn-desc' onClick={() => onSortClick(SORT_TYPES.DESC, SORT_TARGETS.CODE)}>▽</button>
                </div>
                <div className='column column-middle'>
                    수도
                    <button className='btn-asc'onClick={() => onSortClick(SORT_TYPES.ASC, SORT_TARGETS.CAPITAL)} >△</button>
                    <button className='btn-desc' onClick={() => onSortClick(SORT_TYPES.DESC, SORT_TARGETS.CAPITAL)}>▽</button>
                </div>
                <div className='column column-large'>
                    국가
                    <button className='btn-asc' onClick={() => onSortClick(SORT_TYPES.ASC, SORT_TARGETS.NAME)}>△</button>
                    <button className='btn-desc' onClick={() => onSortClick(SORT_TYPES.DESC, SORT_TARGETS.NAME)}>▽</button>
                </div>
                <div className='column column-small'>
                    대륙
                    <button className='btn-asc' onClick={() => onSortClick(SORT_TYPES.ASC, SORT_TARGETS.CONTINENT)}>△</button>
                    <button className='btn-desc' onClick={() => onSortClick(SORT_TYPES.DESC, SORT_TARGETS.CONTINENT)}>▽</button>
                </div>
                <div className='column column-middle'>
                    전화번호
                    <button className='btn-asc' onClick={() => onSortClick(SORT_TYPES.ASC, SORT_TARGETS.PHONE)}>△</button>
                    <button className='btn-desc' onClick={() => onSortClick(SORT_TYPES.DESC, SORT_TARGETS.PHONE)}>▽</button>
                </div>
                <div className='column column-small'>추가 / 삭제</div>
            </section>
            <AddForm onSubmit={onAddSubmit}/>
            {countries && countries.map(country =>
                <Country
                    key={country.code}
                    country={country}
                    onClick={onDeleteClick}
                />
            )}
        </main>
    );
};

export default CountryList;