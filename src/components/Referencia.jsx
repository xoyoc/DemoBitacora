"use client"

async function contadorReferencia() {
    const res = await fetch('http://localhost:3000/api/referencias')
    return await res.json()
  }

async function mascaraReferencia() {
  const resp = await fetch('http://localhost:3000/api/mascarareferencia/1')
  return await resp.json()
}

async function Referencia() {
    const masrefe = await mascaraReferencia()
    const contadorRef = await contadorReferencia()
    const contador = contadorRef.length + 1
    const referencia = masrefe.antreferencia + contador.toString().padStart(4,'0') + masrefe.desreferencia
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
