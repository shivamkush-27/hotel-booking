import Nav from "./Components/Nav";
import Hero from "./sections/Hero";
import PopularHotel from "./sections/PopularHotel";

export default function App() {
  return (
    <>
    <main className="relative">
      <Nav />
      <section className="">
        <Hero />
      </section>
      <section className="">
        <PopularHotel />
      </section>

    </main>
    </>
  )
}