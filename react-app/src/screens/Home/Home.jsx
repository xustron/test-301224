import style from "./Home.module.css";

import Header from "../../components/header/Header";
import MenuBar from "../../components/menuBar/MenuBar";
import Content3D from "../../components/content3D/Content3D";
import Slider from "../../components/slider/Slider";

export default function Home() {
  return (
    <>
      <Header />
      <MenuBar />

      <div className="waper">
        <Content3D />
        <Slider />
      </div>
    </>
  );
}
