"use client";
import { tplFramework } from "@/data/tpljourney";

export default function TPLFramework() {
  const pillars = [
    { key: "truth", color: "truth" },
    { key: "power", color: "power" },
    { key: "love", color: "love" },
  ];

  return (
    <section className="page-section bg-dark-1 light-content">
      <div className="container">
        <div className="row mb-70 mb-sm-50">
          <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
            <h2 className="section-title mb-30 mb-sm-20">
              Truth. Power. Love<span className="text-gray">.</span>
            </h2>
            <div className="text-gray">
              The TPL framework reveals who God is and how His kingdom comes.
              These three pillars work together to transform lives and communities.
            </div>
          </div>
        </div>

        <div className="row">
          {pillars.map(({ key, color }) => {
            const pillar = tplFramework[key];
            return (
              <div key={key} className="col-md-4 mb-40 mb-md-0">
                <div className={`tpl-pillar tpl-pillar-${color}`}>
                  <h3 className="tpl-pillar-title mb-20">{pillar.title}</h3>
                  <p className="tpl-pillar-description mb-30">
                    {pillar.description}
                  </p>
                  <blockquote className="tpl-scripture">
                    <p>"{pillar.scriptureText}"</p>
                    <cite>— {pillar.scripture}</cite>
                  </blockquote>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
