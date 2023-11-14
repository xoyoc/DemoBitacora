"use client"

async function contadorReferencia() {
    const res = await fetch('http://localhost:3000/api/referencias')
    return await res.json()
  }

  async function Pedimento() {
    const contadorRef = await contadorReferencia()
    const contador = contadorRef.length + 1
    let hoy = new Date();
    let year = hoy.getFullYear().toString();
    let digan = year.substring(-1);
    const pedimento = digan.slice(-1) + contador.toString().padStart(6,'0')
  return (
    <div>
        <input 
            placeholder="Pedimento" 
            type="text" 
            name="pedimento" 
            id="pedimento" 
            className="block flex-1 border-0 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0"
            value={pedimento}
            disabled
        />
    </div>
  )
}

export default Pedimento
