import { useState } from "react";
import { SpeakersList } from "./SpeakersList";
import { SpeakersToolBar } from "./SpeakersToolbar";

export function Speakers({ theme, setTheme }) {
  const [showSessions, setShowSessions] = useState(true);

  return (
    <>
      <SpeakersToolBar
        theme={theme}
        setTheme={setTheme}
        showSessions={showSessions}
        setShowSessions={setShowSessions}
      />
      <SpeakersList showSessions={showSessions} />
    </>
  );
}
