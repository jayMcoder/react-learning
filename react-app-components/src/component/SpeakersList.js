import { Speaker } from "./Speaker";
import { data } from "../../SpeakerData";
import { useState } from "react";

export function SpeakersList({ showSessions }) {
  const [speakersData, setSpeakersData] = useState(data);

  function onFavoriteToggle(id) {
    const speakerRecPrevious = speakersData.find(function (rec) {
      return rec.id === id;
    });
    const speakerRecUpdated = {
      ...speakerRecPrevious,
      favorite: !speakerRecPrevious.favorite,
    };
    const speakerDataNew = speakersData.map(function (rec) {
      return rec.id === id ? speakerRecUpdated : rec;
    });

    setSpeakersData(speakerDataNew);
  }

  return (
    <div className="container speaker-list">
      <div className="row">
        {speakersData.map(function (speaker) {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              showSessions={showSessions}
              onFavoriteToggle={() => onFavoriteToggle(speaker.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
