'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()

  const links = [
    {
      name: 'Lowenol Surfactants',
      href: '/hair/products/lowenol-surfactants ',
    },
    {
      name: 'Bleaching Products',
      href: '/hair/products/bleaching-products',
    },
    {
      name: 'Stabilizing / Chelating Agents',
      href: '/hair/products/stabilizing-chelating-agents',
    },
    {
      name: 'Protein Derivatives / Conditioner',
      href: '/hair/products/protein-derivatives-conditioner',
    },
    {
      name: 'Colors',
      href: '/hair/products/colors',
    },
    {
      name: 'Shining Colors',
      href: '/hair/products/shining-colors',
    },
    {
      name: 'Viscosity Builders',
      href: '/hair/products/viscosity-builders',
    },
  ]

  return (
    <aside className='md:w-64 mb-16 md:mb-0 md:mr-10 md:shrink-0'>
      <h4 className='text-lg font-medium px-3 pb-3 border-b border-gray-800'>
        Choose a Product
      </h4>
      <nav>
        <ul>
          {links.map((link, linkIndex) => (
            <li key={linkIndex} className='py-2 border-b border-gray-800'>
              <Link
                className={`flex items-center px-3 group transition duration-150 ease-in-out ${
                  pathname === link.href
                    ? 'text-purple-600'
                    : 'text-gray-400 hover:text-purple-600'
                }`}
                href={link.href}
              >
                <span>{link.name}</span>
                <svg
                  className='w-3 h-3 fill-current shrink-0 ml-2 opacity-0 group-hover:opacity-100 group-hover:text-purple-600 group-hover:translate-x-1 transition duration-150 ease-in-out transform'
                  viewBox='0 0 12 12'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z' />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
