import React from 'react'
import { Trash2 } from 'lucide-react';

const ItemList = () => {
  return (
    <div className="max-w-7xl">
      <div className="bg-[#526D82] h-auto w-full flex items-start rounded-2xl">
        <div className="flex flex-row items-center justify-between w-auto h-full m-4">
          <p>Item list of any task</p>
          <Trash2 />
        </div>
      </div>
    </div>
  )
}

export default ItemList