import { getTranslations } from "next-intl/server";
import { Link } from "../../../../i18n/navigation";
import { SiteShell } from "../../../components";
import { sections } from "../../../data";
import { notFound } from "next/navigation";

export default async function AboutPage() {
  const t = await getTranslations();
  const section = sections.find((s) => s.slug === "about");

  if (!section) {
    notFound();
  }

  return (
    <SiteShell>
      <section className="subhero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/school.jpg" alt={section.title} loading="lazy" />
        <div>
          <Link href="/">{t("section.homeLink")}</Link>
          <h1>{section.title}</h1>
          <p>{section.description}</p>
        </div>
      </section>

      <section className="section-wrap">
        <div className="history-prose">

          <div className="about-stats-grid">
            <div className="about-stat-item"><span>Դպրոցի ստեղծման տարեթիվը` 1991, որպես   միջնակարգ   դպրոց</span></div>
            <div className="about-stat-item"><span>Տվյալ շենքում դպրոցի տեղակայման տարեթիվը` 1991թ.</span></div>
            <div className="about-stat-item"><span>Դպրոցի շենքի տիպը` տիպային</span></div>
            <div className="about-stat-item"><span>Հարկայնությունը` 2 հարկանի</span></div>
            <div className="about-stat-item"><span>Ջեռուցման եղանակը` լոկալ ջեռուցման ցանց</span></div>
            <div className="about-stat-item"><span>Առանձնասենյակների թիվը` 7</span></div>
            <div className="about-stat-item"><span>Դասասենյակների թիվը` 20</span></div>
            <div className="about-stat-item"><span>Լաբորատորիա` 1</span></div>
            <div className="about-stat-item"><span>Սպորտդահլիճ՝ 1</span></div>
            <div className="about-stat-item"><span>Առարկայական սենյակ /կաբինետ` 1</span></div>
            <div className="about-stat-item"><span>Նախնական զինպատրաստության` 1</span></div>
            <div className="about-stat-item"><span>Հրաձգարան`</span></div>
            <div className="about-stat-item"><span>Համակարգչային կաբինետ` 1</span></div>
            <div className="about-stat-item"><span>Ինտերնետ կապի առկայությունը` առկա է</span></div>
            <div className="about-stat-item"><span>Բացօդյա սպորտհրապարակ` առկա է</span></div>
            <div className="about-stat-item"><span>Մարզադահլիճ`1</span></div>
            <div className="about-stat-item"><span>Պտղատու այգի՝ առկա է</span></div>
            <div className="about-stat-item"><span>Գրադարանի ֆոնդը` 3555 կտոր գիրք</span></div>
            <div className="about-stat-item"><span>Աշխատողների թիվը` 44</span></div>
            <div className="about-stat-item"><span>Դասարանների թիվը` 13</span></div>
            <div className="about-stat-item"><span>Աշակերտների թիվը` 305</span></div>
            <div className="about-stat-item"><span>Նախակրթարան — 4</span></div>
          </div>
        </div>

        <div className="section-heading" style={{ marginTop: "48px" }}>
          <p className="eyebrow">{t("section.structureEyebrow")}</p>
          <h2>{section.title}</h2>
        </div>
        <div className="list-grid">
          {section.links.map((link) => (
            <Link
              className="list-card"
              href={`/section/${section.slug}/${link.slug}`}
              key={link.slug}
            >
              <div>
                <h3>{link.title}</h3>
                <p>{link.body}</p>
              </div>
              <span className="list-card-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}