'use client'

import { useState } from 'react'
// import { fetch } from 'next/data-client'

type IEmail = {
  name: string
  email: string
}

export default function AgendarCita () {
  const [email, setEmail] = useState<IEmail>({ name: '', email: '' })

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    // await fetch('/api/mail', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(email)
    // }).then(res => {
    //   if (!res.ok) {
    //     throw new Error(`Error del servidor: ${res.status} ${res.statusText}`)
    //   }
    //   return res.text()
    // }).then(text => {
    //   try {
    //     const json = JSON.parse(text)
    //     console.log(json)
    //   } catch (error) {
    //     console.error('La respuesta del servidor no es un objeto JSON válido:', text)
    //   }
    // }).catch(error => {
    //   console.error(error)
    // })

    setEmail({ name: '', email: '' })
    alert('Cita agendada, te llegara un correo con las indicaciones.')
  }

  const handleName = ({ target: { value } }: any) => setEmail(prevState => ({ ...prevState, name: value }))
  const handleEmail = ({ target: { value } }: any) => setEmail(prevState => ({ ...prevState, email: value }))

  return (
    <form className='bg-[#3f3f3f] p-10 rounded-xl flex flex-col w-96' onSubmit={handleSubmit}>
      <span className='text-gray-300'>Nombre</span>
      <input onChange={handleName} value={email.name} className='rounded w-full h-8 outline-none bg-[#2f2f2f] p-2 mt-1' type='text' />

      <span className='mt-5 text-gray-300'>Email</span>
      <input onChange={handleEmail} value={email.email} className='rounded  w-full h-8 outline-none bg-[#2f2f2f] p-2 mt-1' type='email' />

      <button className='bg-[#F11D57] mt-10 rounded h-8 hover:bg-[#f11d55ce] transition-all outline-none'>Agendar Cita</button>
    </form>
  )
}
