'use client'
import React from 'react'
import List from '@/components/List'

const HomePage = () => {
  return (
    <main className='bg-[#1a2638] w-full min-h-screen'>
      <nav className='flex items-center justify-left bg-[#394d5c] h-20'>
        <h1 className='ml-10 text-xl font-semibold'>TO DO LIST</h1>
      </nav>
      <div className='flex items-center justify-center mt-10'>
        <List />
      </div>
    </main>
  )
}

export default HomePage
