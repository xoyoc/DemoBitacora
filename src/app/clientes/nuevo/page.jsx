"use client"

import { useRouter } from "next/navigation"

export default function NewClient() {
    const router = useRouter()
    const onSubmit = async (e) => {
      e.preventDefault()
      const name = e.target.name.value
      const rfc = e.target.rfc.value
      const email = e.target.email.value
      const res = await fetch('/api/clientes',{
        method: 'POST',
        body: JSON.stringify({name, rfc, email}),
        headers: {
          'Contest-Type': 'applications/json'
        }
      })
      const data = await res.json()
      console.log(data)
      router.push('/clientes')
    }

    return (
      <div className="h-screen">
        <form 
          className="bg-slate-800 p10 flex-row justify-center items-center"
          onSubmit={onSubmit}
        >
          <div className="">
            <input placeholder="Nomble del Cliente" type="text" name="name" id="name" className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 "/>
          </div>
          <div className="mt-5">
            <input placeholder="R.F.C." type="text" name="rfc" id="rfc" className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 "/>
          </div>
          <div className="mt-5">
            <input placeholder="Correo Electronico del cliente" type="email" name="email" id="email" className="block flex-1 border-0 bg- py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"/>
          </div>
          <button className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Crear Cliente
          </button>
        </form>
      </div>
    )
  }