import React from 'react'
import ItemList from '@/components/ItemList'

const List = () => {
  return (
    <div className='max-w-7xl'>
      <div className='bg-[#526D82] h-auto w-full  items-center rounded-2xl'>
        <div className='flex flex-col'>
          <div className='flex flex-row justify-between items-center border-b-2 border-[#DDE6ED] h-full m-4 w-auto'>
            <label htmlFor=''>
              <input
                className='w-full pr-8 ml-2 bg-transparent focus:outline-none'
                type='text'
                placeholder='Add a new task...'
              />
            </label>
            <button
              className='flex items-center h-8 bg-[#9DB2BF] p-2 rounded-xl mb-2 mr-2 hover:bg-[#303f53]'
              type='button'
            >
              Add
            </button>
          </div>
        </div>
        <ItemList />
      </div>
    </div>
  )
}

export default List
