"use client";
import Link from "next/link";
import { journeyStages } from "@/data/tpljourney";

export default function JourneyProgress({ currentStage }) {
  return (
    <div className="journey-progress-wrap">
      <div className="container">
        <div className="journey-progress">
          {journeyStages.map((stage, index) => {
            const stageNum = stage.id;
            const isPast = stageNum < currentStage;
            const isCurrent = stageNum === currentStage;
            const isLast = index === journeyStages.length - 1;

            return (
              <div key={stage.id} className="journey-progress-item">
                <Link
                  href={stage.href}
                  className={[
                    "journey-progress-circle",
                    isPast ? "journey-progress-circle--past" : "",
                    isCurrent ? "journey-progress-circle--current" : "",
                    !isPast && !isCurrent ? "journey-progress-circle--future" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  aria-label={`Stage ${stageNum}: ${stage.title}`}
                  aria-current={isCurrent ? "page" : undefined}
                >
                  {stageNum}
                </Link>
                <div
                  className={[
                    "journey-progress-label",
                    isCurrent ? "journey-progress-label--current" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {stage.title}
                </div>
                {!isLast && <div className="journey-progress-line" />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
