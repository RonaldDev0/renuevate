import { ReactNode } from 'react'

import { NavBarr, SideMenu } from '@/components'

import 'tailwindcss/tailwind.css'

export const metadata = {
  title: 'Renuevate | Dayana Alejandra Ortega y Sharick Angelly Martinez',
  description: 'Creado por Dayana Alejandra Ortega y Sharick Angelly Martynez'
}

export default function RootLayout ({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-[#292929] text-white w-full h-screen flex flex-col items-center'>
        <NavBarr />
        <SideMenu />
        {children}
      </body>
    </html>
  )
}
