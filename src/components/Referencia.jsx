"use client"

async function contadorReferencia() {
    const res = await fetch('http://localhost:3000/api/referencias')
    return await res.json()
  }

async function Referencia() {
    const contadorRef = await contadorReferencia()
    const contador = contadorRef.length + 1
    const referencia = 'LCLF'+'000'+contador+'/23'
  return (
    <div>
        <input 
            placeholder="Referencia" 
            type="text" 
            name="referencia" 
            id="referencia" 
            className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
            value={referencia}
            disabled
        />
    </div>
  )
}

export default Referencia
