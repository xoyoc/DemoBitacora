import Link from "next/link"

function NavBar() {
  return (
    <nav className="my-3 bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <h3>Bitacora de referencioas Agencia Aduanal Loginco</h3>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                    <img src="" alt="" className="h-8 w-auto"/>
                </div>

            </div>
            <div className="hidden sm:ml-6 sm:block">
                <ul className="flex space-x-4">
                    <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                        <Link href="/clientes">
                            Clientes
                        </Link>
                    </li>
                    <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                        <Link href="/referencias">
                            Referencias
                        </Link>
                    </li>
                    <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                        <Link href="/bitacora">
                            Bitacora
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

            </div>
        </div>
    </nav>
  )
}

export default NavBar
