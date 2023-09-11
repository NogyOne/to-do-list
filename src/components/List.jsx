'use client'
import React, { useState } from 'react'
import ItemList from '@/components/ItemList'

const initialTasks = JSON.parse(localStorage.getItem('tasks')) || []
const initialTask = {
  task: '',
  completed: false,
}

const List = () => {
  const [task, setTask] = useState(initialTask)
  const [tasks, setTasks] = useState(initialTasks)

  const handleSubmit = event => {
    event.preventDefault()
    if (task.task === '') return

    setTasks([...tasks, task])
    setTask(initialTask)

    event.target.reset()
    localStorage.setItem('tasks', JSON.stringify([...tasks, task]))
  }

  const handleComplete = (index) => {
    const newTasks = [...tasks]

    if(newTasks[index].completed === true){
      newTasks[index].completed = false
      setTask(newTasks)
      localStorage.setItem('tasks', JSON.stringify(tasks))
      return
    }    

    newTasks[index].completed = true
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  const handleDelete = (index) => {
    const newTasks = [...tasks]
    newTasks.splice(index, 1)
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }

  return (
    <div className='max-w-7xl'>
      <div className='bg-[#526D82] h-auto w-full  items-center rounded-2xl'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <div className='flex flex-row justify-between items-center border-b-2 border-[#DDE6ED] h-full m-4 w-auto'>
              <label>
                <input
                  className='w-full pr-8 ml-2 bg-transparent focus:outline-none'
                  type='text'
                  placeholder='Add a new task...'
                  onChange={event =>
                    setTask({ task: event.target.value, completed: false })
                  }
                />
              </label>
              <input
                className='flex items-center h-8 bg-[#9DB2BF] px-2 font-light rounded-xl mb-2 mr-2 hover:bg-[#303f53] cursor-pointer'
                type='submit'
                value='Add'
              />
            </div>
          </div>
        </form>
        {tasks?.map((task, index) => (
          <ItemList
            key={index}
            task={task}
            index={index}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  )
}

export default List
