export default function Page() {
    return (
      <div className="bg-slate-400 w-full md:w-auto h-screen">
      <div className="my-5 flex justify-around">
        <div>
          <h2 className="text-2xl">Listado de Referencias</h2>
        </div>
        <div>
          <div href='clientes/nuevo' className="my-5 mx-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Crear Referencia
          </div>
        </div>
      </div>
      <table className="border-separate border-spacing-2 border border-slate-800 w-3/4 mx-20">
        <thead>
          <tr>
            <th className="border border-slate-800">Referencia</th>
            <th className="border border-slate-800">Contenedores</th>
            <th className="border border-slate-800">Accion</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
    )
  }