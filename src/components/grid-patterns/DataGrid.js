import React, { useState } from "react";
import Rows from "./Rows";

const DataGrid = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [filter, setFilter] = useState();

  const rowSelectionHandler = (id) => {
    setSelectedRows((prev) => {
        if(prev.includes(id)){
            return prev.filter(ids => ids !== id )
        }
        return [...prev, id]
    })
  };
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <tbody>
                <Rows onSelection ={rowSelectionHandler}/>
            </tbody>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default DataGrid;
