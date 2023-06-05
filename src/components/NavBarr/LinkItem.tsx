import Link from 'next/link'

import { link } from './links'

export default function LinkItem ({ path, name }: link) {
  return (
    <Link key={path} href={path} className='hover:text-[#F11D57] hover:text-lg transition-all font-bold'>{name}</Link>
  )
}
