'use client';
import { useContext } from "react";
import Image from "next/image";
import { DataContext } from '../context/DataProvider';

export default function Home() {
  const { data } = useContext(DataContext);
  const AverageScore = data.reduce((acc, item) => acc + item.score, 0) / data.length;
  const AproxAverageScore = Math.round(AverageScore);
  const backgroundTheme = (category: string) => {
    switch (category) {
      case 'Reaction':
        return 'bg-bg-light-red';
      case 'Memory':
        return 'bg-orangey-yellow';
      case 'Verbal':
        return 'bg-green-teal';
      case 'Visual':
        return 'bg-light-slate-blue';
      default:
        return '';
    }
  }

  return (
    <main className="md:grid md:grid-cols-2 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:shadow-md md:rounded-tr-[20px] md:rounded-br-[20px] ">
      <header className="flex flex-col items-center justify-center bg-light-royal-blue py-5 px-10 rounded-bl-[20px] rounded-br-[20px] md:rounded-tl-[20px] md:rounded-tr-[20px]">
        <h1>Your Result</h1>
        <p className="bg-cobalt-blue my-10 py-7 px-10 rounded-full text-center"><span className="text-white font-bold text-4xl">{AproxAverageScore}</span><br /> of 100</p>
        <p className="font-bold text-xl">Great</p>
        <p className="text-center">Your scored higher than 65% of the people who have taken these tests.</p>
      </header>
      <section className="flex flex-col justify-center m-5">
        <h2 className="font-bold">Summary</h2>
        <ul className="summary">
          {data.map((item, index) => (
            <li className={`flex justify-between items-center p-5 rounded-[20px] my-5 ${backgroundTheme(item.category)}`} key={index}>
              <div className="flex justify-start items-center gap-3">
                <Image src={item.icon} alt={item.category} width={40} height={40} />
                <p>{item.category}</p>
              </div>
              <p className="font-bold text-black">{item.score}<span className="text-light-lavender"> / 100</span></p>
            </li>
          ))}
        </ul>
        <button className="w-full bg-dark-grey-blue font-bold text-white py-3 rounded-full">Continue</button>
      </section>
    </main>
  );
}
