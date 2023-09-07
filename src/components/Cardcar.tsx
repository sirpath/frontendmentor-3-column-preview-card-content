import { Car } from '@/app/page'

type props = {
  cars: Array<Car>
}

const Cardcar = (props: props) => {
  return (
    <div className="max-w-sm">
      <div className="rounded-t-3xl bg-orangecard">
        <div className="p-7">
          <picture>
            <img alt="caricon" src="./images/icon-sedans.svg" />
          </picture>
        </div>
        <h1 className="py-5 pl-7 text-3xl font-bold text-primary">SEDANS</h1>
        <p className="px-7 text-primary">
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <div className="p-7 ">
          <button className="rounded-3xl bg-bgheadbtn p-3 px-7 text-orangecard">
            Learn More
          </button>
        </div>
      </div>

      <div className="bg-cyancard">
        <div className="p-7">img</div>
        <h2 className="py-5 pl-7 text-3xl font-semibold text-primary">SUVS</h2>
        <p className="px-7 text-primary">
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </p>
        <div className="p-7">
          <button className="rounded-3xl bg-bgheadbtn p-3 px-7 text-cyancard">
            Learn More
          </button>
        </div>
      </div>

      <div className="rounded-b-3xl bg-darkcyancard">
        <div className="p-7">img</div>
        <h3 className="py-5 pl-7 text-3xl font-semibold text-primary">
          Luxury
        </h3>
        <p className="px-7 text-primary">
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </p>
        <div className="p-7">
          <button className="rounded-3xl bg-bgheadbtn p-3 px-7 text-darkcyancard">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}
export default Cardcar
