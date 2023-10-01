async function loadClient(id) {
    const res = await fetch(`http://localhost:3000/api/clientes/${id}`)
    return await res.json()
}

export default async function EditClient({params}) {
    const client = await loadClient(params.id) 
    return(
        <div>
            <form 
                className="bg-slate-800 p10 flex-row justify-center items-center"
            >
                <div className="">
                    <input 
                        placeholder="Nomble del Cliente" 
                        type="text" 
                        name="name" 
                        id="name"
                        value={client.name} 
                        className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 "
                    />
                </div>
                <div className="mt-5">
                    <input 
                        placeholder="R.F.C." 
                        type="text" 
                        name="rfc" 
                        id="rfc"
                        value={client.rfc} 
                        className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 "
                    />
                </div>
                <div className="mt-5">
                    <input 
                        placeholder="Correo Electronico del cliente" 
                        type="email" 
                        name="email" 
                        id="email"
                        value={client.email} 
                        className="block flex-1 border-0 bg- py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
                    />
                </div>
                <button className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Guardar Cliente
                </button>
            </form>
            <button className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Cancelar
            </button>
        </div>
    )
}