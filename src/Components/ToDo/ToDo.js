import React from 'react';
import { BiMessageRoundedAdd } from 'react-icons/bi';

const ToDo = () => {
    return (
        <div className='mt-10 w-1/2 mx-auto'>
            <form>
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Add ToDo</label>
                <div class="relative">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        {<BiMessageRoundedAdd className="w-5 h-5 text-gray-500 dark:text-gray-400"/>}
                    </div>
                    <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Add your todays tasks..." required />
                        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ADD TODO</button>
                </div>
            </form>
        </div>
    );
};

export default ToDo;