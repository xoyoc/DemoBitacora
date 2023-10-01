import Link from "next/link"
import ListClient from "@/components/ListClient"

async function loadClients() {
  const res = await fetch('http://localhost:3000/api/clientes')
  return await res.json()
}

export default async function () {
    const clients = await loadClients()
    return (
      <div className="bg-slate-400 w-full md:w-auto h-screen">
        <div className="my-5 flex justify-around">
          <div>
            <h2 className="text-2xl">Listado de Clientes</h2>
          </div>
          <div>
            <Link href='clientes/nuevo' className="my-5 mx-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Crear Cliente
            </Link>
          </div>
        </div>
        <table className="border-separate border-spacing-2 border border-slate-800 w-3/4 mx-20">
          <thead>
            <tr>
              <th className="border border-slate-800">Cliente</th>
              <th className="border border-slate-800">R.F.C.</th>
              <th className="border border-slate-800">Correo</th>
              <th className="border border-slate-800">Accion</th>
            </tr>
          </thead>
          <tbody>
            {clients.map(client => (
              <ListClient client={client} key={client.id} />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
