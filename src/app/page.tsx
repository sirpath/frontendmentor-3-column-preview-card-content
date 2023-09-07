import Cardcar from '@/components/Cardcar'
import Footer from '@/components/footer'

export type Car = {
  category: string
  describe: string
  colorbg: string
  iconPath: string
  iconAlt: string
  fontBtn: string
}

const cars: Array<Car> = [
  {
    category: 'SEDANS',
    describe:
      'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on you next road trip.',
    colorbg: 'bg-orangecard',
    iconPath: './images/icon-sedans.svg',
    iconAlt: 'sedans car icon',
    fontBtn: 'text-orangecard',
  },
  {
    category: 'SUVS',
    describe:
      'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    colorbg: 'bg-cyancard',
    iconPath: './images/icon-suvs.svg',
    iconAlt: 'suvs car icon',
    fontBtn: 'text-cyancard',
  },
  {
    category: 'LUXURY',
    describe:
      'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    colorbg: 'bg-darkcyancard',
    iconPath: './images/icon-luxury.svg',
    iconAlt: 'luxury car icon',
    fontBtn: 'text-darkcyancard',
  },
]

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-bgheadbtn p-8">
      <Cardcar cars={cars} />
      <Footer />
    </main>
  )
}
export default Home
