import React, { useEffect, useState } from 'react';
import EditableTable from "./EditableTable";
import Spinner from '../Shared/Spinner';

function Table() {
  const [task, setTask] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const columns = [
    { field: 'complete', fieldName: 'Is Complete' },
    { field: 'task', fieldName: 'Task' }
  ];


  useEffect(() => {
    setSpinner(true);
    fetch('data.json')
      .then(res => res.json())
      .then(data => {
        setTask(data);
        setSpinner(false);
      })
  }, []);

  console.log(task)
  return (
    <>
      {
        spinner ? <Spinner /> :
          <div className='mb-10 pt-20'>
            <EditableTable columns={columns} rows={task} actions />
          </div>
      }

    </>

  );
}

export default Table;