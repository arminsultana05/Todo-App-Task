import React, { useEffect, useMemo, useState } from 'react';
import { BsPencilSquare, BsSaveFill, BsFillTrashFill, BsXSquareFill } from 'react-icons/bs';
import './EditableTable.css';

const EditableTable = ({ columns, rows, actions }) => {
    // console.log(rows)
    const [isEditMode, setIsEditMode] = useState(undefined);
    const [rowIDToEdit, setRowIDToEdit] = useState(undefined);
    const [rowsState, setRowsState] = useState(rows);
    const [open, setOpen] = useState(undefined);
    const [checked, setChecked] = useState(false);

    const [todo, setTodo] = useState('');
    // console.log(rows);

    const filterRowState = useMemo(() => {
        return rowsState.filter(row => row.isComplete === false);
    }
        , [rowsState]);
    
    useEffect(() => {
        setRowsState(rows)
    }, [rows])
    const [editedRow, setEditedRow] = useState();
    const handleEdit = (rowID) => {
        // console.log(rowID);
        setIsEditMode(true);
        setEditedRow(undefined);
        setRowIDToEdit(rowID);
        setOpen(true);
    }

    //Delete row
    const handleRemoveRow = (rowID) => {

        //Delete row from database
        // if (window.confirm('Are you sure you want to delete this row?')) {
        fetch(`http://localhost:5000/tasks/${rowID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRowsState(data)
            }
            )
    }

    const handleOnChangeField = (e, rowID) => {
        const { name: fieldName, value } = e.target;
        // console.log(fieldName);
        setEditedRow({
            id: rowID,
            [fieldName]: value
        })
    }

    const handleCancelEditing = () => {
        setIsEditMode(undefined);
        setEditedRow(undefined);
        setOpen(undefined);
    }



    const handleSaveRowChanges = () => {
        console.log('save row changes');
        let newObject = {}
        setTimeout(() => {
            setIsEditMode(undefined);

            const newData = rowsState.map(row => {
                if (row._id === editedRow.id) {
                    newObject.todo = todo || row.todo;
                    newObject.isComplete = checked || row.isComplete;

                    // console.log(name, dob, email, result);
                }

                return row;
            })

            // console.log(newObject);

            //PUT newData to API

            fetch(`http://localhost:5000/tasks/${editedRow.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newObject)
            })
                .then(res => res.json())
                .then(data => {
                    // alert('Successfully updated');
                    // console.log('data', data);
                    if (data) {
                        setOpen(undefined)
                    }
                }
                )
            setRowsState(newData);
            setEditedRow(undefined)

        }, 1000)

    }
    console.log(rowsState);
    return (
        <div className='overflow-x-auto overflow-y-hidden'>
            <h1 className='text-xl font-medium mb-10 md:mb-2 text-center md:text-left'>Total of {filterRowState?.length} Work left & { rowsState.length - filterRowState.length} Work done today</h1>
            <table className='w-full table'>
                <thead >
                    <tr>
                        {columns.map((column) => {
                            return <th key={column.field}>{column.fieldName}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {rowsState.map((row) => {


                        return (<tr key={row._id}>
                            <td>
                                {
                                    row.isComplete ?
                                        <div className="form-control">
                                            <input type="checkbox"
                                                checked={row.isComplete}
                                                className="checkbox checkbox-primary"
                                                onChange={(e) => {
                                                    setChecked(!checked)
                                                    handleOnChangeField(e, row._id)
                                                }}
                                            />
                                        </div>
                                        :
                                        <div className="form-control">
                                            <input type="checkbox"
                                                checked={row.complete}
                                                className="checkbox checkbox-primary"
                                                onChange={(e) => {
                                                    setChecked(!checked)
                                                    handleOnChangeField(e, row._id)
                                                }}
                                            />
                                        </div>
                                }
                            </td>
                            <td>
                                {isEditMode && rowIDToEdit === row._id
                                    ? <input
                                        className='input input-bordered w-full max-w-xs'
                                        type='text'
                                        defaultValue={editedRow ? editedRow.task : row.todo}
                                        id={row._id}
                                        name='name'
                                        onChange={(e) => {
                                            handleOnChangeField(e, row._id)
                                            setTodo(e.target.value)
                                        }}
                                    />
                                    : row.todo
                                }
                            </td>

                            {actions &&
                                <td>
                                    {isEditMode && rowIDToEdit === row._id
                                        ? <button onClick={() => handleSaveRowChanges()} className='custom-table__action-btn ' disabled={!editedRow}>
                                            <BsSaveFill />
                                        </button>
                                        : <button onClick={() => handleEdit(row._id)} className='custom-table__action-btn'>
                                            <BsPencilSquare />
                                        </button>
                                    }

                                    {open && rowIDToEdit === row._id
                                        ? <button onClick={() => handleCancelEditing()} className='custom-table__action-btn'>
                                            <BsXSquareFill />
                                        </button>
                                        : <button onClick={() => handleRemoveRow(row._id)} className='custom-table__action-btn'>
                                            <BsFillTrashFill />
                                        </button>
                                    }
                                </td>
                            }
                        </tr>
                        )

                    })}
                </tbody>
            </table>
        </div>
    );
};

export default EditableTable;