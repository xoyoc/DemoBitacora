import Link from 'next/link'
 
export function NavBar() {
  return (
      <nav>
        <ul>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/referencias">Referencias</Link>
          </li>
        </ul>
      </nav>
  )
}