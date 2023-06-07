import { Card, ICard } from '@/components'

export default function Tratamientos () {
  const Cards: ICard[] = [
    {
      img: '',
      title: '',
      content: '',
      link: ''
    }
  ]
  return (
    <div className='flex gap-4 flex-wrap max-w-4xl w-full justify-center'>
      {
        Cards.map(({ img, title, content, link }: ICard) => <Card key={img} img={img} title={title} content={content} link={link} />)
      }
    </div>
  )
}
