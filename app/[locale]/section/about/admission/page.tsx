import { notFound } from "next/navigation";
import { Link } from "../../../../../i18n/navigation";
import { SiteShell } from "../../../../components";
import { sections } from "../../../../data";

export default async function AdmissionPage() {
  const section = sections.find((s) => s.slug === "about");
  const page = section?.links.find((p) => p.slug === "admission");

  if (!section || !page) {
    notFound();
  }

  return (
    <SiteShell>
      <section className="subhero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/school.jpg" alt={section.title} loading="lazy" />
        <div>
          <Link href={`/section/${section.slug}`}>{section.title}</Link>
          <h1>{page.title}</h1>
        </div>
      </section>

      <section className="section-wrap">
        <div className="history-prose">

          <div className="admission-section">
            <h2>I դասարանի ընդունելության համար պահանջվում են ներքոհիշյալ փաստաթղթերը</h2>
            <ul className="admission-list">
            <li>Ծնողի դիմումը</li>
            <li>Երեխայի ծննդյան վկայականի պատճենը</li>
            <li>Տեղեկանք հաշվառման մասին /անձնագրային բաժին/</li>
            <li>Երկու լուսանկար   /3X4 չափի /</li>
            <li>Երեխայի բժշկական քարտը</li>
            <li>Եթե վկայագրված չէ, ապա բժշկից փաստաթուղթը</li>
            </ul>
          </div>

          <div className="admission-section">
            <h2>Նախակրթարանի  ընդունելության համար պահանջվում են ներքոհիշյալ փաստաթղթերը.</h2>
            <ul className="admission-list">
            <li>Ծնողի անձնագրի պատճենը</li>
            <li>Ծնողի դիմումը</li>
            <li>Երեխայի ծննդյան վկայականի պատճենը</li>
            <li>Տեղեկանք հաշվառման մասին /անձնագրային բաժին/</li>
            <li>Երկու լուսանկար   /3X4 չափի /</li>
            <li>Երեխայի բժշկական քարտը</li>
            <li>Եթե վկայագրված չէ, ապա բժշկից փաստաթուղթը</li>
            </ul>
          </div>

          <div className="admission-section">
            <h2>Ներառական կրթության ծրագրում ընդունելության համար պահանջվում են ներքոհիշյալ փաստաթղթերը</h2>
            <ul className="admission-list">
            <li>Երեխայի բժշկական ամբուլատոր քարտից քաղվածք գործադիր տնօրենի կնիքով</li>
            <li>Երեխայի ծննդյան վկայականի պատճենը</li>
            <li>Ծնողի անձնագիրը</li>
            <li>Անձնական գործի պատճենը</li>
            <li>Դիտարկման քարտը</li>
            <li>Գնահատման կենտրոնից տրված եզրակացությունը /վերագնահատման դեպքում/</li>
            </ul>
          </div>

        </div>
      </section>
    </SiteShell>
  );
}