'use client'
import React from 'react'
import { Trash2 } from '../../node_modules/lucide-react'

const ItemList = ({ task, index, handleComplete, handleDelete }) => {
  return (
    <div className='w-full h-auto px-4 py-2 animate-fade-left animate-duration-500 animate-ease-in-out'>
      <div className='flex flex-row items-center justify-between w-auto h-full m-2'>
        <p className='overflow-ellipsis'>{task.task}</p>
        <div className='flex gap-2 ml-2'>
          {task.completed === true ? (
            <input
              type='checkbox'
              checked='false'
              onChange={() => handleComplete(index)}
              className='transition duration-300 transform cursor-pointer hover:scale-125'
            />
          ) : (
            <input
              type='checkbox'
              onChange={() => handleComplete(index)}
              className='transition duration-300 transform cursor-pointer hover:scale-125'
            />
          )}
          <button onClick={() => handleDelete(index)}>
            <Trash2 className='w-5 transition duration-300 transform hover:scale-125' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemList
