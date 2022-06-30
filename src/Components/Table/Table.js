import React, { useEffect, useMemo, useState } from 'react';
import EditableTable from "./EditableTable";
import useTask from '../Hooks/useTask';

function Table() {
  const { task } = useTask();
  //Filter task by isComplete
  const filteredTask = useMemo(() => {
    return task?.filter(task => task.isComplete === false);
  }
    , [task]);

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
          <EditableTable columns={columns} rows={filteredTask} actions />
        </div>
      }

    </>

  );
}

export default Table;