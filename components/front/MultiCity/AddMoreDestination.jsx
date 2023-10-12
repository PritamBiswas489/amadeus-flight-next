import Link from 'next/link'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { multicitySearchFieldActions } from '@/store/redux/multicity-search-field-slice';

export default function AddMoreDestination() {
 const dispatch = useDispatch();     
 const numberOfField =   useSelector((state)=>state['multicitySearch'].numberOfField);
 const addMoreDestinationField = (e)=>{
      e.preventDefault();
     //alert(numberOfField);
     dispatch(multicitySearchFieldActions.setNumberOfField({numberOfField:numberOfField+1}));
 }   
  return (
    <Link className='btn btn-warning' href={''} onClick={addMoreDestinationField}>Add Another Flight</Link>
  )
}
