import { notFound } from "next/navigation";
import { Link } from "../../../../../i18n/navigation";
import { SiteShell } from "../../../../components";
import { sections } from "../../../../data";

export default async function LeadershipPage() {
  const section = sections.find((s) => s.slug === "staff");
  const page = section?.links.find((p) => p.slug === "leadership");

  if (!section || !page) {
    notFound();
  }

  return (
    <SiteShell>
      <section className="subhero subhero--compact">
        <div>
          <Link href={`/section/${section.slug}`}>{section.title}</Link>
          <h1>{page.title}</h1>
        </div>
      </section>

      <section className="section-wrap">
        <div className="leadership-grid">

          {/* ── Ձախ ── Տնօրեն ────────────────────────────────── */}
          <div className="leader-card">
            <div className="leader-photo-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/տնօրեն.jpg"
                alt="Իրինա Կիրովի Հովհաննիսյան"
                className="leader-photo"
              />
            </div>
            <div className="leader-body">
              <p className="director-role">Տնօրեն</p>
              <h2 className="leader-name">Իրինա Կիրովի Հովհաննիսյան</h2>
              <p className="leader-position">Տնօրենի պաշտոնակատար</p>

              <div className="leader-details">
                <div className="leader-detail-row">
                  <span className="leader-detail-label">Կրթությունը</span>
                  <span>Բարձրագույն</span>
                </div>
                <div className="leader-detail-row">
                  <span className="leader-detail-label">Մասնագիտությունը</span>
                  <span>Կենսաբանության և քիմիայի ուսուցչուհի</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Աջ ── Վարչատնտեսական մասի համակարգող ──────── */}
          <div className="leader-card">
            <div className="leader-photo-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/վարչատնտեսական1.jpg"
                alt="Նաիրա Նաիրիի Գասպարյան"
                className="leader-photo"
              />
            </div>
            <div className="leader-body">
              <p className="director-role">Վարչատնտեսական մասի համակարգող</p>
              <h2 className="leader-name">Նաիրա Նաիրիի Գասպարյան</h2>
              <p className="leader-position">
                Ծնվել է 1979թ. դեկտեմբերի 23-ին Շիրակի մարզի Լանջիկ գյուղում
              </p>

              <div className="bio-section" style={{ marginTop: "20px" }}>
                <h3>Կրթություն</h3>
                <ul>
                  <li>
                    <span className="bio-years">1986–1997</span>
                    Սովորել և ավարտել է տեղի միջնակարգ դպրոցը
                  </li>
                  <li>
                    <span className="bio-years">1997–1999</span>
                    Ավարտել է Գյումրու Ան. Շիրակացու անվան մանկավարժական
                    ուսումնարանը՝ տարրական դասարանների դասվարի որակավորմամբ
                  </li>
                  <li>
                    <span className="bio-years">2007–2012</span>
                    Ավարտել է Գյումրու Մ. Նալբանդյանի անվան մանկավարժական
                    ինստիտուտը՝ հայոց լեզվի և գրականության ուսուցչի
                    որակավորմամբ
                  </li>
                </ul>
              </div>

              <div className="bio-section">
                <h3>Աշխատանքային գործունեություն</h3>
                <ul>
                  <li>
                    <span className="bio-years">2006</span>
                    Աշխատանքի է անցել Մարալիկի թիվ 2 դպրոցում՝ որպես
                    համակարգչային օպերատոր
                  </li>
                  <li>
                    <span className="bio-years">2010</span>
                    Հայոց լեզվի և գրականության ուսուցչուհի
                  </li>
                  <li>
                    <span className="bio-years">2019</span>
                    ՀՀ Շիրակի մարզպետի N 628-Ա որոշմամբ նշանակվել է
                    Մարալիկի թիվ 2 միջնակարգ դպրոցի տնօրեն
                  </li>
                </ul>
              </div>

              <p className="leader-family">Ամուսնացած է, ունի երեք երեխա</p>
            </div>
          </div>

        </div>
      </section>
    </SiteShell>
  );
}
