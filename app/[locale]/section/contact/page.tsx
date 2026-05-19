import { getTranslations } from "next-intl/server";
import { Link } from "../../../../i18n/navigation";
import { SiteShell } from "../../../components";
import { ContactForm } from "../../../contact-form";

export const dynamic = "force-dynamic";

const SCHOOL_EMAIL = "info@hatsikschool.am";
const FACEBOOK_URL = "https://www.facebook.com/hatsikvil1966";
const YOUTUBE_URL = "https://www.youtube.com/";

// Hatsik village, Shirak Region, Armenia — 4.5 km NE of Gyumri, approx. 40.818°N, 43.885°E
const MAP_EMBED =
  "https://www.openstreetmap.org/export/embed.html?bbox=43.815%2C40.778%2C43.955%2C40.858&layer=mapnik&marker=40.818%2C43.885";

export default async function ContactPage() {
  const t = await getTranslations("contact");

  return (
    <SiteShell>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="subhero">
        <img
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80"
          alt={t("title")}
        />
        <div>
          <Link href="/">{t("homeLink")}</Link>
          <h1>{t("title")}</h1>
          <p>{t("description")}</p>
        </div>
      </section>

      <div className="section-wrap">
        {/* ── Contact info cards ───────────────────────────────── */}
        <section aria-labelledby="contact-info-heading">
          <div className="section-heading">
            <p className="eyebrow">{t("infoEyebrow")}</p>
            <h2 id="contact-info-heading">{t("infoTitle")}</h2>
          </div>

          <div className="contact-info-grid">
            <div className="contact-info-card">
              <p className="eyebrow">{t("addressLabel")}</p>
              <strong>{t("addressValue")}</strong>
            </div>

            <div className="contact-info-card">
              <p className="eyebrow">{t("phoneLabel")}</p>
              <strong>
                <a href={`tel:${t("phoneValue").replace(/\s/g, "")}`}>
                  {t("phoneValue")}
                </a>
              </strong>
            </div>

            <div className="contact-info-card">
              <p className="eyebrow">{t("emailLabel")}</p>
              <strong>
                <a href={`mailto:${SCHOOL_EMAIL}`}>{SCHOOL_EMAIL}</a>
              </strong>
            </div>
          </div>
        </section>

        {/* ── Feedback form + Map ──────────────────────────────── */}
        <section className="contact-columns" aria-label={t("feedbackEyebrow")}>
          {/* Feedback form */}
          <div className="contact-form-wrap" id="feedback">
            <div className="section-heading">
              <p className="eyebrow">{t("feedbackEyebrow")}</p>
              <h2>{t("feedbackTitle")}</h2>
            </div>
            <p>{t("feedbackDescription")}</p>

            <ContactForm
              recipientEmail={SCHOOL_EMAIL}
              labels={{
                name: t("feedbackName"),
                namePlaceholder: t("feedbackNamePlaceholder"),
                email: t("feedbackEmail"),
                emailPlaceholder: t("feedbackEmailPlaceholder"),
                message: t("feedbackMessage"),
                messagePlaceholder: t("feedbackMessagePlaceholder"),
                send: t("feedbackSend"),
                sending: t("feedbackSending"),
                sent: t("feedbackSent"),
              }}
            />
          </div>

          {/* Map */}
          <div className="contact-map-wrap" id="map">
            <div className="section-heading">
              <p className="eyebrow">{t("mapEyebrow")}</p>
              <h2>{t("mapTitle")}</h2>
            </div>
            <p>{t("addressValue")}</p>

            <div className="contact-map-frame">
              <iframe
                src={MAP_EMBED}
                title={t("mapAriaLabel")}
                aria-label={t("mapAriaLabel")}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* ── Social links ─────────────────────────────────────── */}
        <section className="contact-social" aria-labelledby="social-heading">
          <div className="section-heading">
            <p className="eyebrow">{t("socialEyebrow")}</p>
            <h2 id="social-heading">{t("socialTitle")}</h2>
          </div>
          <p style={{ color: "var(--muted)", margin: "0 0 4px" }}>
            {t("socialDescription")}
          </p>

          <div className="contact-social-links">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="contact-social-link"
              aria-label={t("facebookLabel")}
            >
              {/* Facebook icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M22 12a10 10 0 1 0-11.56 9.87v-6.99H7.9V12h2.54v-2.2c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.88h-2.33v6.99A10 10 0 0 0 22 12z" />
              </svg>
              Facebook
            </a>

            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noreferrer"
              className="contact-social-link"
              aria-label={t("youtubeLabel")}
            >
              {/* YouTube icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.57 3.5 12 3.5 12 3.5s-7.57 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.13C4.43 20.5 12 20.5 12 20.5s7.57 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.13A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z" />
              </svg>
              YouTube
            </a>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
