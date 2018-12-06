import React from "react";
import ReactDOM from "react-dom";

import Deck from "./components/Deck";
import Title from "./slides/Title";
import About from "./slides/About";
import Poes from "./slides/Poes";
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
import ImageTitle4 from "./slides/Image/Title4";
import ImageDemo1 from "./slides/Image/Demo1";
import ImageDemo2 from "./slides/Image/Demo2";
import ImageDemo3 from "./slides/Image/Demo3";
import ImageDemo4 from "./slides/Image/Demo4";
import ImageDemo5 from "./slides/Image/Demo5";
import ImageDemo6 from "./slides/Image/Demo6";
import ImageDemo7 from "./slides/Image/Demo7";
import ImageCode1 from "./slides/Image/Code1";
import ImageCode2 from "./slides/Image/Code2";
import ImageCode3 from "./slides/Image/Code3";
import ImageCode4 from "./slides/Image/Code4";
import ImageCode5 from "./slides/Image/Code5";
import ImageCode6 from "./slides/Image/Code6";
import ImageCode7 from "./slides/Image/Code7";
import ImageCode8 from "./slides/Image/Code8";
import ImageCode9 from "./slides/Image/Code9";
import ImageCode10 from "./slides/Image/Code10";
import ImageCode11 from "./slides/Image/Code11";
import ImageCode12 from "./slides/Image/Code12";
import ImageCode13 from "./slides/Image/Code13";
import ImageCode14 from "./slides/Image/Code14";
import HealthIntro from "./slides/Health/Intro";
import HealthDemo1 from "./slides/Health/Demo1";
import HealthDemo2 from "./slides/Health/Demo2";
import HealthDemo3 from "./slides/Health/Demo3";
import HealthCode1 from "./slides/Health/Code1";
import HealthCode2 from "./slides/Health/Code2";
import HealthCode3 from "./slides/Health/Code3";
import HealthCode4 from "./slides/Health/Code4";
import HealthCode5 from "./slides/Health/Code5";
import HealthCode6 from "./slides/Health/Code6";
import HealthCode7 from "./slides/Health/Code7";
import AssistantIntro from "./slides/Assistant/Intro";
import AssistantDemo1 from "./slides/Assistant/Demo1";
import AssistantDemo2 from "./slides/Assistant/Demo2";
import AssistantDemo3 from "./slides/Assistant/Demo3";
import AssistantCode1 from "./slides/Assistant/Code1";
import AssistantCode2 from "./slides/Assistant/Code2";
import AssistantCode3 from "./slides/Assistant/Code3";
import AssistantCode4 from "./slides/Assistant/Code4";
import AuthIntro from "./slides/Auth/Intro";
import AuthDemo1 from "./slides/Auth/Demo1";
import AuthDemo2 from "./slides/Auth/Demo2";
import AuthCode1 from "./slides/Auth/Code1";
import AuthCode2 from "./slides/Auth/Code2";
import AuthCode3 from "./slides/Auth/Code3";
import Stats from "./slides/Stats";
import SubTitle from "./slides/Subtitle";
import Questions from "./slides/Questions";
import Thanks from "./slides/Thanks";

import "./styles/styles.css";

ReactDOM.render(
  <Deck>
    <Title />
    <About />
    <Poes />
    <SubTitle text="All browsers are equal, but some browsers are more equal than others!" />
    <Stats browsers={["chrome"]} />
    <NativeIntro />
    <NativeMessaging />
    <NativeImage />
    <SubTitle text="AKA" />
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
    <Stats browsers={["chrome", "firefox", "edge", "safari", "opera"]} />
    <ImageDemo2 />
    <ImageCode3 />
    <ImageCode4 />
    <ImageCode5 />
    <ImageCode6 />
    <Stats browsers={["chrome", "firefox", "edge", "safari", "opera"]} />
    <SubTitle text="Destructive editing" />
    <ImageCode14 />
    <ImageTitle3 />
    <ImageCode7 />
    <Stats browsers={["chrome", "opera"]} />
    <ImageTitle2 />
    <ImageDemo3 />
    <ImageCode8 />
    <ImageDemo4 />
    <ImageCode9 />
    <ImageDemo5 />
    <ImageDemo6 />
    <Stats browsers={["chrome"]} />
    <ImageTitle4 />
    <ImageDemo7 />
    <ImageCode10 />
    <ImageCode11 />
    <ImageCode12 />
    <ImageCode13 />
    <Stats browsers={["chrome", "firefox"]} />
    <HealthIntro />
    <HealthDemo1 />
    <SubTitle text="Please don't judge me 🤭" />
    <HealthCode1 />
    <HealthCode2 />
    <HealthCode3 />
    <HealthCode6 />
    <Stats browsers={["chrome", "opera"]} />
    <HealthDemo2 />
    <HealthCode4 />
    <Stats browsers={["chrome", "firefox", "edge"]} />
    <HealthCode7 />
    <Stats browsers={["chrome", "firefox", "edge"]} />
    <HealthDemo3 />
    <HealthCode5 />
    <Stats browsers={["chrome", "firefox", "edge", "safari", "opera"]} />
    <AssistantIntro />
    <AssistantDemo1 />
    <AssistantCode1 />
    <Stats browsers={["chrome"]} />
    <AssistantCode2 />
    <AssistantDemo2 />
    <AssistantCode3 />
    <AssistantDemo3 />
    <AssistantCode4 />
    <Stats browsers={["chrome", "firefox", "edge", "safari", "opera"]} />
    <AuthIntro />
    <AuthDemo1 />
    <AuthCode1 />
    <AuthCode2 />
    <AuthCode3 />
    <AuthDemo2 />
    <Stats browsers={["chrome", "firefox", "edge"]} />
    <SubTitle
      text={
        <a
          href="https://webauthn.is"
          title="Visit the web authentication API playground"
          target="_blank"
          style={{ color: "#000" }}
          rel="noopener noreferrer"
        >
          https://webauthn.is
        </a>
      }
    />
    <SubTitle text="What else?" />
    <SubTitle text="Installable web apps" />
    <SubTitle text="Offline web apps" />
    <SubTitle text="Ask me again tomorrow and I might have 10 more slides" />
    <SubTitle text="So, is the web better than Native apps?" />
    <SubTitle text="Yes" />
    <SubTitle text="No" />
    <SubTitle text="Maybe" />
    <SubTitle text="It depends" />
    <SubTitle text="The web is evolving" />
    <SubTitle text="The web is what we make of it" />
    <SubTitle
      text={
        <a
          href="https://go-web.sambego.be/"
          title="Go to the online presentation"
          target="_blank"
          style={{ color: "#000" }}
          rel="noopener noreferrer"
        >
          https://go-web.sambego.be
        </a>
      }
    />
    <Questions />
    <Thanks />
  </Deck>,
  document.getElementById("app")
);
