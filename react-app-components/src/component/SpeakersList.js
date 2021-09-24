import { Speaker } from "./Speaker";

export function SpeakersList({ data, showSessions }) {
  return (
    <div className="container speaker-list">
      <div className="row">
        {data.map(function (speaker) {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              showSessions={showSessions}
            />
          );
        })}
      </div>
    </div>
  );
}
