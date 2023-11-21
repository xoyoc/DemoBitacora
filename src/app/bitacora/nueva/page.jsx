export default function NewLogbook() {
    return (
      <div className="h-screen">
        <form 
          className="bg-slate-800 p10 flex-row justify-center items-center"
          onSubmit=''//{onSubmit}
        >
          <div className="mt-5">
            <input 
              placeholder="Tipo de operacion" 
              type="text" 
              name="tipooperacion" 
              id="tipooperacion" 
              className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
/*               onChange={(e) => setContainer(e.target.value)}
              value={container} */
            />
          </div>
          <div className="mt-5">
            <input 
              placeholder="Referencia" 
              type="text" 
              name="referencia" 
              id="referencia" 
              className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
/*               onChange={(e) => setContainer(e.target.value)}
              value={container} */
            />
          </div>
          <div className="mt-5">
            <input 
              placeholder="Cliente" 
              type="text" 
              name="container" 
              id="container" 
              className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
/*               onChange={(e) => setContainer(e.target.value)}
              value={container} */
            />
          </div>
          <div className="mt-5">
            <input 
              placeholder="Usuario" 
              type="text" 
              name="container" 
              id="container" 
              className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
/*               onChange={(e) => setContainer(e.target.value)}
              value={container} */
            />
          </div>
          <div className="mt-5">
            <label htmlFor="">Revalidacion</label>
            <input 
              placeholder="Revalidacion" 
              type="date" 
              name="revalidacion" 
              id="revalidacion" 
              className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
/*               onChange={(e) => setContainer(e.target.value)}
              value={container} */
            />
          </div>
          <div className="mt-5">
            <label htmlFor="">ETA</label>
            <input 
              placeholder="ETA" 
              type="date" 
              name="eta" 
              id="eta" 
              className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
/*               onChange={(e) => setContainer(e.target.value)}
              value={container} */
            />
          </div>
          <div className="mt-5">
            <label htmlFor="">Previo</label>
            <input 
              placeholder="Previo" 
              type="date" 
              name="previo" 
              id="previo" 
              className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
/*               onChange={(e) => setContainer(e.target.value)}
              value={container} */
            />
          </div>
          <div className="mt-5">
            <label htmlFor="">Glosa</label>
            <input 
              placeholder="Glosa" 
              type="date" 
              name="glosa" 
              id="glosa" 
              className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
/*               onChange={(e) => setContainer(e.target.value)}
              value={container} */
            />
          </div>
          <div className="mt-5">
            <label htmlFor="">Fecha de Pago</label>
            <input 
              placeholder="Fecha de pago" 
              type="date" 
              name="datepay" 
              id="datepay" 
              className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
/*               onChange={(e) => setContainer(e.target.value)}
              value={container} */
            />
          </div>
          <div className="mt-5">
            <label htmlFor="">Fecha de Modulacion</label>
            <input 
              placeholder="Fecha de modulacion" 
              type="date" 
              name="datemodu" 
              id="datemodu" 
              className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
/*               onChange={(e) => setContainer(e.target.value)}
              value={container} */
            />
          </div>
          <div className="mt-5">
            <input 
              placeholder="Folio de factura" 
              type="text" 
              name="container" 
              id="container" 
              className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
/*               onChange={(e) => setContainer(e.target.value)}
              value={container} */
            />
          </div>
          <div className="mt-5">
            <input 
              placeholder="Cuenta de gastos" 
              type="text" 
              name="container" 
              id="container" 
              className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
/*               onChange={(e) => setContainer(e.target.value)}
              value={container} */
            />
          </div>
          <div className="flex justify-between">
            <button 
              className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Guardar Referencia
            </button>
{/*             {
              params.id && ( */}
                <button 
/*                   className="mt-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={ async () => {
                    const res = await fetch(`/api/referencias/${params.id}`,{method: 'DELETE'})
                    const data = await res.json()
                    router.refresh()
                    router.push("/referencias")
                  }} */
                >
                  Eliminar
                </button>
{/*               )
            } */}
          </div>
        </form>
      </div>
    )
  }