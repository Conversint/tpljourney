"use client";
import Link from "next/link";
import { journeyStages } from "@/data/tpljourney";

export default function JourneyStages() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="row mb-70 mb-sm-50">
          <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
            <h2 className="section-title mb-30 mb-sm-20">
              The Journey<span className="text-gray">.</span>
            </h2>
            <div className="text-gray">
              From encountering the kingdom vision to going out into the harvest,
              each stage builds upon the last. Where are you on your journey?
            </div>
          </div>
        </div>

        <div className="row">
          {journeyStages.map((stage, index) => (
            <div key={stage.id} className="col-md-6 col-lg-4 mb-40 d-flex">
              <Link href={stage.href} className="journey-card w-100">
                <div className="journey-card-inner">
                  <div className="journey-number">{index + 1}</div>
                  <div className="journey-icon mb-20">
                    <i className={`${stage.icon} size-48`} aria-hidden="true" />
                  </div>
                  <div className="journey-stage-label mb-10">{stage.stage}</div>
                  <h3 className="journey-title mb-10">{stage.title}</h3>
                  <p className="journey-description text-gray">
                    {stage.description}
                  </p>
                  <div className="journey-link mt-20">
                    <span className="link-strong">
                      Explore{" "}
                      <i
                        className="mi-arrow-right size-18 align-middle"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
