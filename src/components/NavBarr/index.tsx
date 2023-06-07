import Image from 'next/image'
import Link from 'next/link'

import { link, links } from './links'
import LinkItem from './LinkItem'

export default function NavBarr () {
  return (
    <div className='flex items-center gap-20 bg-cyan-400 rounded-lg p-2 my-5 [@media(min-width:800px)]:mb-36'>
      <Link href='/' className='[@media(max-width:800px)]:hidden'>
        <Image className='rounded' src='./logo.svg' width='150' height='200' alt='logo' />
      </Link>
      <div className='flex gap-10 [@media(max-width:800px)]:gap-2'>
        {
          links.map(({ name, path }: link) => <LinkItem key={path} path={path} name={name} />)
        }
      </div>
    </div>
  )
}
