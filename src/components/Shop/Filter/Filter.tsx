import React from 'react';
import FilterTab from './FilterTab';
import './Filter.css'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


const Filter =()=>{
      const handleDelete = () => {
        console.info('You clicked the delete icon.');
   };

 return (
    <div className='filters'>
      <button className="filter_btn btn">Clear Filters</button>
      <div className="filter_input">
        <FilterTab 
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
            <Chip label="Deletable" onDelete={handleDelete} />
            <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
         </Stack>
      </div>
    </div>
 )
}

export default Filter