import { Card, ICard } from '@/components'

export default function EstresYAnsiendad () {
  const Cards: ICard[] = [
    {
      img: './cards/1.svg',
      title: '',
      content: 'Nuestra meta es que puedas resolver cualquier cuestión relacionada con tu bienestar emocional y mental ante la ansiedad y estrespara que, así, puedas apostar por vivir una vida más tranquila y equilibrada.',
      link: ''
    },
    {
      img: './cards/2.svg',
      title: 'La lectura como ayuda psicológica',
      content: 'La lectura puede ser una poderosa aliada contra los efectos perjudiciales del exceso de estrés y ansiedad. Nos permite desconectar en cuestión de pocos minutos, sumergirnos en un tema de interés y permitir que nuestro foco de atención deje de estar fijado en aquello que nos lleva preocupando durante mucho rato.',
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
