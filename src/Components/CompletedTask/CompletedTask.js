import React, { useMemo } from 'react';
import useTask from '../Hooks/useTask';

const CompletedTask = () => {
    const { task } = useTask()
    const filteredTask = useMemo(() => {
        return task?.filter(task => task.isComplete === true);
    }
        , [task]);

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="w-full table text-sm text-left text-gray-500 dark:text-gray-400">
                    {/* <!-- head --> */}
                    <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                        <tr>
                            <th>Count</th>
                            <th>Task</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            filteredTask?.map((task, index) => {
                                return (
                                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600' key={task._id}>
                                        <th>{ index + 1}</th>
                                        <td>{ task.todo}</td>
                                        <td>Completed</td>
                                    </tr>
                                )
                            }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompletedTask;