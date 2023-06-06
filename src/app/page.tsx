import { Card, ICard } from '@/components'

export default function Home () {
  const Cards: ICard[] = [
    {
      img: '',
      title: 'Quienes somos',
      content: 'Somos un proyecto enfocado principalmente en buscar alternativas para la ayuda de mujeres que padecen de estrés y ansiedad. Creando una pagina por la cual estaremos brindando información y tips de ayuda para controlarlo a través de libros y revistas digitales. Esta pagina se diseñó específicamente con el fin de ayudar a mujeres de 17 a 21 años que padecen de esta patología, la ayuda se dará especialmente en el ámbito de la lectura',
      link: ''
    },
    {
      img: '',
      title: 'Misión',
      content: 'Brindar ayuda a través de la lectura y la tecnología a jóvenes entre los 17 y 21 años por las altas cifras de ansiedad y estrés presentadas en la adolescencia.',
      link: ''
    },
    {
      img: '',
      title: 'Visión',
      content: 'Ser la pagina mas reconocida por mujeres jóvenes con problemas de estrés y ansiedad que deseen obtener ayuda por medio de la lectura',
      link: ''
    },
    {
      img: '',
      title: 'Valores',
      content: '- Responsabilidad - Pasión - Respeto - Solidaridad - Amor',
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
