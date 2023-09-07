import Cardcar from '@/components/Cardcar'

export type Car = {
  category: string
  describe: string
}

const cars: Array<Car> = [
  {
    category: 'SEDANS',
    describe: 'dasd',
  },
  {
    category: 'SUVS',
    describe: 'dsdsadasd',
  },
  {
    category: 'LUXURY',
    describe: 'dassssssdddw',
  },
]

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-bgheadbtn">
      <Cardcar cars={cars} />
    </main>
  )
}
export default Home
