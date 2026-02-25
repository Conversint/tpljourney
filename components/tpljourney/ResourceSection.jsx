"use client";

export default function ResourceSection({ resources, title, description }) {
  return (
    <section className="page-section">
      <div className="container">
        {(title || description) && (
          <div className="row mb-70 mb-sm-50">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
              {title && (
                <h2 className="section-title mb-30 mb-sm-20">{title}</h2>
              )}
              {description && <div className="text-gray">{description}</div>}
            </div>
          </div>
        )}

        <div className="row justify-content-center">
          {resources.map((resource) => (
            <div key={resource.id} className="col-md-6 col-lg-4 mb-40">
              <div className="resource-card text-center">
                <div className="resource-icon mb-20">
                  <i className={`${resource.icon} size-48`} aria-hidden="true" />
                </div>
                <h3 className="resource-title mb-10">{resource.title}</h3>
                <p className="resource-description text-gray mb-20">
                  {resource.description}
                </p>

                {resource.language && (
                  <div className="resource-meta mb-10">
                    <span className="resource-tag">{resource.language}</span>
                  </div>
                )}

                {resource.languages && (
                  <div className="resource-meta mb-10">
                    {resource.languages.map((lang, i) => (
                      <span key={i} className="resource-tag me-2">
                        {lang}
                      </span>
                    ))}
                  </div>
                )}

                {resource.comingSoon ? (
                  <div className="resource-coming-soon">
                    <span className="badge-coming-soon">Coming Soon</span>
                  </div>
                ) : resource.driveLink ? (
                  <a
                    href={resource.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Access Resources{" "}
                    <i
                      className="mi-arrow-right size-18 align-middle"
                      aria-hidden="true"
                    />
                  </a>
                ) : (
                  <div className="resource-coming-soon">
                    <span className="badge-coming-soon">Coming Soon</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
