import HeaderTPL from "@/components/headers/HeaderTPL";
import FooterTPL from "@/components/footers/FooterTPL";
import { tplJourneyMenu, tplSocialLinks } from "@/data/tpljourney";

export const metadata = {
  title: "Contact — TPL Journey",
  description:
    "Get in touch with TPL Journey. We'd love to hear from you and help you on your discipleship journey.",
  openGraph: {
    title: "Contact TPL Journey",
    description: "Get in touch with us",
    type: "website",
    siteName: "TPL Journey",
  },
};

export default function ContactPage() {
  return (
    <div className="theme-elegant">
      <div className="page" id="top">
        <nav className="main-nav dark transparent stick-fixed wow-menubar">
          <HeaderTPL links={tplJourneyMenu} />
        </nav>
        <main id="main">
          {/* Page Header */}
          <section className="page-header light-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center">
                  <h1 className="page-header-title">Contact Us</h1>
                  <p className="page-header-subtitle">
                    We'd love to hear from you
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="page-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="text-center mb-70">
                    <p className="lead mb-40">
                      Whether you have questions about our resources, want to learn more
                      about starting a DMT group, or are interested in an intensive experience,
                      we're here to help.
                    </p>
                  </div>

                  {/* Contact Form */}
                  <div className="contact-form mb-70">
                    <form
                      action="https://formspree.io/f/placeholder"
                      method="POST"
                      className="form"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="input-lg round form-control"
                              placeholder="Enter your name"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className="input-lg round form-control"
                              placeholder="Enter your email"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <select
                          name="subject"
                          id="subject"
                          className="input-lg round form-control"
                          required
                        >
                          <option value="">Select a topic...</option>
                          <option value="general">General Inquiry</option>
                          <option value="resources">Question about Resources</option>
                          <option value="dmt">Starting a DMT Group</option>
                          <option value="intensive">Interested in an Intensive</option>
                          <option value="partnership">Partnership Opportunity</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea
                          name="message"
                          id="message"
                          className="input-lg round form-control"
                          rows="6"
                          placeholder="How can we help you?"
                          required
                        ></textarea>
                      </div>

                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-mod btn-large btn-circle"
                          data-btn-animate="y"
                        >
                          <span className="btn-animate-y">
                            <span className="btn-animate-y-1">Send Message</span>
                            <span className="btn-animate-y-2" aria-hidden="true">
                              Send Message
                            </span>
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Connect Section */}
          <section className="page-section bg-dark-1 light-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center">
                  <h2 className="section-title mb-30 mb-sm-20">
                    Connect With Us
                  </h2>
                  <p className="text-gray mb-40">
                    Follow TPL Journey on social media for encouragement, resources,
                    and updates on what God is doing around the world.
                  </p>
                  <div className="footer-social-links mb-40">
                    {tplSocialLinks.map((link, i) => (
                      <a
                        href={link.href}
                        key={i}
                        title={link.title}
                        rel="noopener nofollow"
                        target="_blank"
                        className="me-3"
                      >
                        <span className="visually-hidden">{link.name}</span>
                        <i className={`${link.iconClass} size-24`} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Preview */}
          <section className="page-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <h2 className="section-title text-center mb-50">
                    Frequently Asked Questions
                  </h2>

                  <div className="mb-40">
                    <h4 className="mb-15">What is TPL Journey?</h4>
                    <p className="text-gray">
                      TPL Journey is a discipleship ministry that equips individuals and
                      communities to experience God's kingdom through a framework grounded
                      in Truth, Power, and Love. We provide resources, training, and
                      experiences for personal growth and multiplication.
                    </p>
                  </div>

                  <div className="mb-40">
                    <h4 className="mb-15">How do I start a DMT group?</h4>
                    <p className="text-gray">
                      Starting a Discovery-Making Together group is simple. Gather 2-3
                      others who are hungry to grow, commit to meeting weekly, and use
                      our free DMT facilitation guide available on the Life Together page.
                    </p>
                  </div>

                  <div className="mb-40">
                    <h4 className="mb-15">Are the resources free?</h4>
                    <p className="text-gray">
                      Yes! All of our discipleship resources are freely available. We believe
                      these tools should be accessible to everyone, regardless of financial
                      situation. If you'd like to support the ministry, please reach out.
                    </p>
                  </div>

                  <div className="mb-40">
                    <h4 className="mb-15">Where are you located?</h4>
                    <p className="text-gray">
                      TPL Journey operates internationally with teams in multiple regions.
                      Our resources are available globally, and intensives are held in
                      various locations throughout the year.
                    </p>
                  </div>

                  <div className="mb-40">
                    <h4 className="mb-15">What languages are resources available in?</h4>
                    <p className="text-gray">
                      Currently, our resources are available in English and Bahasa Indonesia,
                      with more languages planned. If you're interested in helping translate
                      resources into another language, please contact us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-dark-1 light-content footer z-index-1 position-relative">
          <FooterTPL />
        </footer>
      </div>
    </div>
  );
}
