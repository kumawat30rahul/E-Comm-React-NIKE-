import React, { useContext } from 'react';
import FilterTab from './FilterTab';
import './Filter.css'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {FilterProvider} from '../Shop'

const Filter =()=>{
   const {filterArrays, setFilterArrays} = useContext(FilterProvider)
   
   const handleDelete = (e:any) => {
        const {id} = e.target
        setFilterArrays((prevFilterArray: any[]) => prevFilterArray.filter(filter => filter !== id))
   };


 return (
    <div className='filters'>
      <button className="filter_btn btn">Clear Filters</button>
      <div className="filter_input">
        <FilterTab 
      //   arrayofFilters={arrayofFilters}
        name='Size'
         filterArray={['XS','S','L','M','XL','XXL','XXL',]}
         />
         <FilterTab 
        name='Prize'
         filterArray={['Under-$500','$500-$1000','$1000-$1500','$2000-$2500','$3000-$1500','$1000-$1500','$1000-$1500',]}
         />
         <FilterTab 
        name='Rating'
         filterArray={['1-2','2-3','3-4','4-5']}
         />
         <FilterTab 
        name='Brand'
         filterArray={['Nike','Jordon']}
         />
      </div>
      <div className="filterDisplay">
         <Stack direction="row" spacing={1}>
         {filterArrays && filterArrays.map((filter:any)=>(
            <Chip label={filter} id={filter} onDelete={handleDelete} />
          ))}
         </Stack>
      </div>
    </div>
 )
}

export default Filter