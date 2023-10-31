"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function NewReferencia({params}) {
  const router = useRouter()
  const [refernecia, setRefernecia] = useState(" ")
  const [container, setContainer] = useState(" ")
  useEffect(() => {
    if(params.id){
      fetch(`/api/referencias/${params.id}`)
        .then(res => res.json())
        .then(data => {
          setRefernecia(data.refernecia)
          setContainer(data.container)
        })
    }
  },[])

  const onSubmit = async (e) => {
    e.preventDefault()
    if(params.id){
      const res = await fetch(`/api/referencias/${params.id}`,{
        method: 'PUT',
        body: JSON.stringify({refernecia, container}),
        headers: {
          'Contest-Type': 'applications/json'
        }          
      })
      const data = await res.json()
    }else{
      const res = await fetch('/api/referencias',{
        method: 'POST',
        body: JSON.stringify({refernecia, container}),
        headers: {
          'Contest-Type': 'applications/json'
        }
      })
      const data = await res.json()
    }
    router.refresh()
    router.push('/referencias')
  }
    
  return (
      <div className="h-screen">
        <form 
          className="bg-slate-800 p10 flex-row justify-center items-center"
          onSubmit={onSubmit}
        >
          <div className="">
            <input 
              placeholder="Referencia" 
              type="text" 
              name="refernecia" 
              id="refernecia" 
              className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
              onChange={(e) => setRefernecia(e.target.value)}
              value={refernecia}
            />
          </div>
          <div className="mt-5">
            <input 
              placeholder="Contenedor(es)" 
              type="text" 
              name="container" 
              id="container" 
              className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
              onChange={(e) => setContainer(e.target.value)}
              value={container}
            />
          </div>
          <div className="flex justify-between">
            <button 
              className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Guardar Referencia
            </button>
            {
              params.id && (
                <button 
                  className="mt-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={ async () => {
                    const res = await fetch(`/api/referencias/${params.id}`,{method: 'DELETE'})
                    const data = await res.json()
                    router.refresh()
                    router.push("/referencias")
                  }}
                >
                  Eliminar
                </button>
              )
            }
          </div>
        </form>
      </div>
    )
 }