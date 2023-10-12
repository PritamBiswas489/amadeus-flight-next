import Link from 'next/link'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { multicitySearchFieldActions } from '@/store/redux/multicity-search-field-slice';

export default function RemoveField() {
    const dispatch = useDispatch();     
    const numberOfField =   useSelector((state)=>state['multicitySearch'].numberOfField);
    const removeDestinationField = ()=>{
        //alert(numberOfField);
        dispatch(multicitySearchFieldActions.setNumberOfField({numberOfField:numberOfField-1}));
    }   
    return (
        <Link onClick={removeDestinationField} className='btn btn-danger' href={'#'}>X</Link>
      )
}
