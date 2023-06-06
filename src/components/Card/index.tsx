import Image from 'next/image'
import Link from 'next/link'

export type ICard = {
  img: string
  title: string
  content: string
  link: string
}

export default function Card ({ img, title, content, link }: ICard) {
  return (
    <div className='bg-[#3f3f3f] flex flex-col gap-3 p-5 rounded-lg w-[400px] [@media(max-width:400px)]:w-full hover:bg-[#333333] transition-all'>
      {
        img && (
          <div className='w-full flex justify-center'>
            <Image className='rounded' src={img} width='200' height='200' alt={title} />
          </div>
        )
      }
      <p className='font-semibold'>{title}</p>
      <p className='text-gray-300'>{content}</p>
      <Link className='text-[#f11d55cb] hover:text-[#F11D57]' href={link}>Leer mas</Link>
    </div>
  )
}
