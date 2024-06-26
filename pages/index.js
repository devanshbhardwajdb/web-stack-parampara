import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "./hero";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import Page5 from "./page5";
import Page6 from "./page6";
import Page7 from "./page7";
import Page8 from "./page8";
import Page9 from "./page9";
import Page10 from "./page10";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Page1/>
      <Page2/>
      <Page3/>
      <Page10/>
      <Page4/>
      <Page5/>
      <Page6/>
      <Page7/>
      <Page8/>
      <Page9/>

    </div>
  );
}
