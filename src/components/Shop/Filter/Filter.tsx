import React, { useContext, useEffect,useState } from 'react';
import FilterTab from './FilterTab';
import './Filter.css'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {FilterProvider} from '../Shop'

const Filter =()=>{
  const [personName, setPersonName] = React.useState<string[]>([]);
   const {filterArrays, setFilterArrays,mySet} = useContext(FilterProvider)
   const [id,setId] = useState('')

   const mysetClear =()=>{
    mySet.clear();
    const newSet = mySet
    setPersonName([...newSet])
    setFilterArrays([...newSet])
  }

 return (
    <div className='filters'>
      <button className="filter_btn btn" onClick={mysetClear}>Clear Filters</button>
      <div className="filter_input">
        <FilterTab 
        personName={personName}
        setPersonName={setPersonName}
        // clearFilters={handleDelete}
        name='Size'
         filterArray={['XS','S','L','M','XL','XXL','XXL',]}
         />
         <FilterTab 
         personName={personName}
         setPersonName={setPersonName}
        // clearFilters={handleDelete}
        name='Prize'
         filterArray={['Under-$500','$500-$1000','$1000-$1500','$2000-$2500','$3000-$1500','$1000-$1500','$1000-$1500',]}
         />
         <FilterTab 
         personName={personName}
         setPersonName={setPersonName}
        // clearFilters={handleDelete}
        name='Rating'
         filterArray={['1-2','2-3','3-4','4-5']}
         />
         <FilterTab 
         personName={personName}
         setPersonName={setPersonName}
        // clearFilters={handleDelete}
        name='Brand'
         filterArray={['Nike','Jordon']}
         />
      </div>
      <div className="filterDisplay">
         <Stack direction="row" spacing={1}>
         {filterArrays && filterArrays.map((filter:any)=>(
            <Chip label={filter} id={filter} />
          ))}
         </Stack>
      </div>
    </div>
 )
}

export default Filter