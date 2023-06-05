import Link from 'next/link'
import Image from 'next/image'

import { link } from './links'

export default function LinkItem ({ icon, path }: link) {
  return (
    <Link href={path}>
      <Image className='rounded-xl hover:w-[55px] transition-all' src={icon} width='50' height='50' alt={icon} />
    </Link>
  )
}
