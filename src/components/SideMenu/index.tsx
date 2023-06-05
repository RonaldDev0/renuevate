import { links, link } from './links'
import LinkItem from './LinkItem'

export default function SideMenu () {
  return (
    <div className='flex flex-col gap-3 fixed right-2 h-screen justify-center m-2'>
      {
        links.map(({ icon, path }: link) => <LinkItem key={path} path={path} icon={icon} />)
      }
    </div>
  )
}
