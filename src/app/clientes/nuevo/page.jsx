"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function NewClient({params}) {
  const router = useRouter()
  const [name, setName] = useState(" ")
  const [rfc, setRfc] = useState(" ")
  const [email, setEmail] = useState(" ")
  useEffect(() => {
    if(params.id){
      fetch(`/api/clientes/${params.id}`)
        .then(res => res.json())
        .then(data => {
          setName(data.name)
          setRfc(data.rfc)
          setEmail(data.email)
        })
    }
  },[])
  
  const onSubmit = async (e) => {
      e.preventDefault()
      if(params.id){
        const res = await fetch(`/api/clientes/${params.id}`,{
          method: 'PUT',
          body: JSON.stringify({name, rfc, email}),
          headers: {
            'Contest-Type': 'applications/json'
          }          
        })
        const data = await res.json()
      }else{
        const res = await fetch('/api/clientes',{
          method: 'POST',
          body: JSON.stringify({name, rfc, email}),
          headers: {
            'Contest-Type': 'applications/json'
          }
        })
        const data = await res.json()
      }
      router.refresh()
      router.push('/clientes')
  }

    return (
      <div className="h-screen">
        <form 
          className="bg-slate-800 p10 flex-row justify-center items-center"
          onSubmit={onSubmit}
        >
          <div className="">
            <input 
              placeholder="Nomble del Cliente" 
              type="text" 
              name="name" 
              id="name" 
              className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="mt-5">
            <input 
              placeholder="R.F.C." 
              type="text" 
              name="rfc" 
              id="rfc" 
              className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
              onChange={(e) => setRfc(e.target.value)}
              value={rfc}
            />
          </div>
          <div className="mt-5">
            <input 
              placeholder="Correo Electronico del cliente" 
              type="email" 
              name="email" 
              id="email" 
              className="block flex-1 border-0 bg- py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex justify-between">
            <button 
              className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Guardar Cliente
            </button>
            {
              params.id && (
                <button 
                  className="mt-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={ async () => {
                    const res = await fetch(`/api/clientes/${params.id}`,{method: 'DELETE'})
                    const data = await res.json()
                    router.refresh()
                    router.push("/clientes")
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