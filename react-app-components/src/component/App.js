import { useState } from "react";
import { data } from "../../SpeakerData";
import { Header } from "./Header";
import { Speakers } from "./Speakers";
import { SpeakersList } from "./SpeakersList";
import { SpeakersToolBar } from "./SpeakersToolbar";

export function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div
      className={
        theme === "light" ? "container-fluid light" : "container-fluid dark"
      }
    >
      <Header theme={theme} />
      <Speakers data={data} theme={theme} setTheme={setTheme} />
    </div>
  );
}
