import {
  Press_Start_2P,
  VT323,
  DotGothic16,
  Pixelify_Sans,
  Silkscreen,
} from "next/font/google";

const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const vt323 = VT323({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const dotGothic16 = DotGothic16({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const silkscreen = Silkscreen({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const Name: React.FC = () => {
  return (
    <div
      className={pressStart2P.className}
      style={{ fontSize: "50px", color: "white" }}
    >
      LIAM CONNOLLY
    </div>
  );
};

export default Name;
