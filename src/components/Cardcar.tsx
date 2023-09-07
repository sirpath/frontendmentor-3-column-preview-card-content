import { Car } from '@/app/page'
import { Big_Shoulders_Display } from 'next/font/google'

const bigshoulder = Big_Shoulders_Display({
  weight: '700',
  subsets: ['latin'],
})

type props = {
  cars: Array<Car>
}

const Cardcar = (props: props) => {
  const { cars } = props

  const carslist = cars.map(
    ({ category, describe, colorbg, iconPath, iconAlt, fontBtn }) => (
      <div
        key={describe}
        className={`${colorbg} first:rounded-t-xl last:rounded-none last:rounded-b-xl md:rounded-tr-none md:first:rounded-l-xl md:first:rounded-tr-none md:last:rounded-none md:last:rounded-r-xl`}
      >
        <div className="pl-8 pt-10">
          <picture>
            <img alt={iconAlt} src={iconPath} />
          </picture>
        </div>
        <h1
          className={`${bigshoulder.className} py-8 pl-8 text-3xl font-bold text-bgheadbtn`}
        >
          {category}
        </h1>
        <p className="px-8 text-primary md:text-base">{describe}</p>
        <div className="p-8 md:pt-16">
          <button
            className={`${fontBtn} rounded-3xl border-2 border-solid bg-bgheadbtn p-3 px-8 hover:active:bg-transparent hover:active:text-primary`}
          >
            Learn More
          </button>
        </div>
      </div>
    ),
  )

  return (
    <div className="flex max-w-sm flex-col p-8 md:max-w-4xl md:flex-row ">
      {carslist}
    </div>
  )
}
export default Cardcar
