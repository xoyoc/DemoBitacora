async function loadClient(id) {
    const res = await fetch(`http://localhost:3000/api/clientes/${id}`)
    return await res.json()
}

  export default async function Client({params}) {
    const client = await loadClient(params.id)
    return (
      <div>
        <h2><strong>Cliente:</strong> {client.name}</h2>
        <h3><strong>R.F.C.:</strong> {client.rfc}</h3>
        <h3><strong>Correo Electronico:</strong> {client.email}</h3>
      </div>
    )
  }