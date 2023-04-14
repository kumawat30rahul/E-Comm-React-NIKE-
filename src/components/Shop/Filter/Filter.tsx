import React, { useContext, useEffect, useState } from "react";
import FilterTab from "./FilterTab";
import "./Filter.css";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { FilterProvider } from "../Shop";

const Filter = () => {
  const [personName, setPersonName] = React.useState<string[]>([]);
  const {
    filterArrays,
    setFilterArrays,
    mySet,
    category,
    data,
    setData,
    setFilterData,
  } = useContext(FilterProvider);
  const [shoeCategory, setShoeCategory] = useState<any>([
    "XS",
    "S",
    "L",
    "M",
    "XL",
    "XXL",
    "XXL",
  ]);
  const mysetClear = () => {
    mySet.clear();
    const newSet = mySet;
    setPersonName([...newSet]);
    setFilterArrays([...newSet]);
    setFilterData([...data]);
  };

  useEffect(() => {
    if (category === "Shoes") {
      setShoeCategory([
        "6",
        "6.5",
        "7",
        "7.5",
        "8",
        "8.5",
        "9",
        "9.5",
        "10",
        "10.5",
        "11",
        "11.5",
      ]);
    } else if (category === "AllProducts") {
      setShoeCategory([
        ...shoeCategory,
        "6",
        "6.5",
        "7",
        "7.5",
        "8",
        "8.5",
        "9",
        "9.5",
        "10",
        "10.5",
        "11",
        "11.5",
      ]);
    }
  }, []);

  return (
    <div className="filters">
      <div className="btn-flex">
        <h3>Filters</h3>
        <button className="filter_btn btn" onClick={mysetClear}>
          Clear Filters
        </button>
      </div>
      <div className="filter_input">
        <FilterTab
          personName={personName}
          setPersonName={setPersonName}
          name="Size"
          filterArray={shoeCategory}
        />
        <FilterTab
          personName={personName}
          setPersonName={setPersonName}
          name="Prize"
          filterArray={[
            "$500-$1500",
            "$1500-$3000",
            "$3000-$6000",
            "$6000-$9000",
            "$9000-$13000",
            "$13000-$15000",
            "$15000-$35000",
          ]}
        />
        <FilterTab
          personName={personName}
          setPersonName={setPersonName}
          name="Rating"
          filterArray={["1-2", "2-3", "3-4", "4-5"]}
        />
        <FilterTab
          personName={personName}
          setPersonName={setPersonName}
          name="Brand"
          filterArray={["Nike", "Jordon"]}
        />
        <FilterTab
          personName={personName}
          setPersonName={setPersonName}
          name="Category"
          filterArray={["Mens", "Womens", "Kids"]}
        />
      </div>
      <div className="filterDisplay">
        <Stack direction="row" spacing={1}>
          {filterArrays &&
            filterArrays.map((filter: any) => (
              <Chip label={filter} id={filter} />
            ))}
        </Stack>
      </div>
    </div>
  );
};

export default Filter;
