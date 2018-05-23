import React from "react";
import ReactDOM from "react-dom";

import Deck from "./components/Deck";
import Title from "./slides/Title";
import About from "./slides/About";
import NativeIntro from "./slides/Native/Intro";
import NativeMessaging from "./slides/Native/Messaging";
import NativeImage from "./slides/Native/Image";
import NativeImage2 from "./slides/Native/Image/Image-2";
import NativeImageCat from "./slides/Native/Image/Image-cat";
import NativeImageCat2 from "./slides/Native/Image/Image-cat2";
import NativeHealth from "./slides/Native/Health";
import NativeGames from "./slides/Native/Games";
import ImageIntro from "./slides/Image/Intro";
import ImageTitle1 from "./slides/Image/Title1";
import ImageTitle2 from "./slides/Image/Title2";
import ImageTitle3 from "./slides/Image/Title3";
import ImageDemo1 from "./slides/Image/Demo1";
import ImageDemo2 from "./slides/Image/Demo2";
import ImageDemo3 from "./slides/Image/Demo3";
import ImageDemo4 from "./slides/Image/Demo4";
import ImageDemo5 from "./slides/Image/Demo5";
import ImageDemo6 from "./slides/Image/Demo6";
import ImageCode1 from "./slides/Image/Code1";
import ImageCode2 from "./slides/Image/Code2";
import ImageCode3 from "./slides/Image/Code3";
import ImageCode4 from "./slides/Image/Code4";
import ImageCode5 from "./slides/Image/Code5";
import ImageCode6 from "./slides/Image/Code6";
import ImageCode7 from "./slides/Image/Code7";
import ImageCode8 from "./slides/Image/Code8";
import ImageCode9 from "./slides/Image/Code9";
import HealthIntro from "./slides/Health/Intro";
import HealthDemo1 from "./slides/Health/Demo1";
import HealthDemo2 from "./slides/Health/Demo2";
import HealthCode1 from "./slides/Health/Code1";
import HealthCode2 from "./slides/Health/Code2";
import HealthCode3 from "./slides/Health/Code3";

import "./styles/styles.css";

ReactDOM.render(
  <Deck>
    <Title />
    <About />
    <NativeIntro />
    <NativeMessaging />
    <NativeImage />
    <NativeImage2 />
    <NativeImageCat />
    <NativeImageCat2 />
    <NativeHealth />
    <NativeGames />
    <ImageIntro />
    <ImageTitle1 />
    <ImageDemo1 />
    <ImageCode1 />
    <ImageCode2 />
    <ImageDemo2 />
    <ImageCode3 />
    <ImageCode4 />
    <ImageCode5 />
    <ImageCode6 />
    <ImageTitle3 />
    <ImageCode7 />
    <ImageTitle2 />
    <ImageDemo3 />
    <ImageCode8 />
    <ImageDemo4 />
    <ImageCode9 />
    <ImageDemo5 />
    <ImageDemo6 />
    <HealthIntro />
    <HealthDemo1 />
    <HealthCode1 />
    <HealthCode2 />
    <HealthCode3 />
    <HealthDemo2 />
  </Deck>,
  document.getElementById("app")
);
