import React, { useEffect, useState } from 'react';
import EditableTable from "./EditableTable";
import Spinner from '../Shared/Spinner';
import useTask from '../Hooks/useTask';

function Table() {
  const {task, spinner} = useTask();
  const columns = [
    { field: 'complete', fieldName: 'Is Complete' },
    { field: 'name', fieldName: 'Task' },
    { field: 'action', fieldName: 'Action' },
  ];


  

//   console.log(task)
  return (
    <>
      {
        // spinner ? <Spinner /> :
          <div className='mb-10 pt-20'>
            <EditableTable columns={columns} rows={task} actions />
          </div>
      }

    </>

  );
}

export default Table;