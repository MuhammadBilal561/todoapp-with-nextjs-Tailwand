
"use client"
import React, { useState } from 'react'


const Page  = () => {

  const [title, settitle]:any = useState("")
  
  const [mainTask, setmainTask]:any = useState([])
  
  
  const submitHandler =(e: { preventDefault: () => void })=>{
    e.preventDefault()

    setmainTask([...mainTask,{title}])
    settitle("")
  }


  const deleteHandler =(i: number)=>{
  

    let copyTask=[...mainTask]
    copyTask.splice(i,1)
    
    setmainTask(copyTask)
  }
  
  let renderTask=<h2 className='text-center '>No Task Available❌ </h2>;
  
  

mainTask.length>0 &&  (renderTask= mainTask.map((t:any,i:any)=>{
  return <li key={i} className='flex items-center justify-between'>
  <div className='flex justify-between w-2/3 mb-5'>
  <h5 className='text-xl font-semibold'>{t.title}</h5>
  
  
  

</div>

<button
onClick={ ()=>{
  deleteHandler(i)
}  }


className='p-1 font-semibold bg-red-600 rounded' >Delete</button>
</li>

  
}));


  
  return (
    <>
    <h1 className='p-4 text-2xl font-bold text-center text-white bg-cyan-700'>Todo Application</h1>
    
    <form className='text-center ' onSubmit={submitHandler}>
<input className=' text-2xl text-center border-2 border-zinc-800  px-12' type="text"


placeholder='Enter Task Here'


value={title}
onChange={(e)=>{
  settitle(e.target.value);
}}
/>

<button className='  space-x-0  p-2 m-2  text-white bg-red-600 '>Add ➕</button>

      
    </form>

    <hr />
    <div className='px-4 py-2 text-black text-white bg-cyan-700'>

      <ul>
        {renderTask}
      </ul>
      
    </div>

  
    
    </>
  )
}

export default Page