import Image from "next/image";
import pic from '../../public/profile.jpg'
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="flex justify-center bg-blue-700">
      <div className="mx-4 order-last self-center">
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={120}
          height={120}
          className="rounded-full"
        />
      </div>
      <div className="mx-4 self-center text-center">
        <h3 className="text-xl font-semibold text-zinc-100">
          Hello World from
        </h3>
        <h1 className="text-4xl font-bold text-zinc-200">
          Najib ul Rehman Malik
        </h1>
        <h2 className="text-2xl font-semibold text-zinc-200">
          Learning Web 3.0 and Metaverse
        </h2>
        <button className="my-4 px-4 border-2 border-zinc rounded-lg text-white bg-blue-800 hover:bg-orange-500">
          Learn More
        </button>
      </div>
    </div>
   
  );
}

