import Image from 'next/image'
import Link from 'next/link'

import { link, links } from './links'
import LinkItem from './LinkItem'

export default function NavBarr () {
  return (
    <div className='flex items-center gap-20 bg-cyan-400 rounded-lg p-2 m-5'>
      <Link href='/'>
        <Image className='rounded' src='./logo.svg' width='150' height='200' alt='logo' />
      </Link>
      <div className='flex gap-10'>
        {
          links.map(({ name, path }: link) => <LinkItem key={path} path={path} name={name} />)
        }
      </div>
    </div>
  )
}
