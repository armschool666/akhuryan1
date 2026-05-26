import { notFound } from "next/navigation";
import { Link } from "../../../../../i18n/navigation";
import { SiteShell } from "../../../../components";
import { sections } from "../../../../data";

const BASE_PATH = "/hashvetvutiun";
const columns = [
  {
    title: 'Բյուջեի եկամուտների և ծախսերի կատարման վերաբերյալ հաշվետվություն',
    files: [
      { name: '2020թվական 1-ին եռամսյակ', path: '2020tiv 1in eramsyak.pdf' },
      { name: '2020թվական 2-րդ եռամսյակ', path: '2020 tiv 2-rd eramsyak.pdf' },
      { name: '2020 թվականի 3-րդ եռամսյակ', path: '20202tiv 3-rd eramsyak.pdf' },
      { name: '2020թվական 4-րդ եռամսյակ', path: '2020tiv 4-rd eramsyak.pdf' },
      { name: '2021թվականի 1-ին եռամսյակ', path: '2021tvakani 1-in eramsyak.pdf' },
      { name: '2021 թվականի 2-րդ եռամսյակ', path: '2021 tvakani 2-rd eramsyak.pdf' },
      { name: '2021թվական 3-րդ եռամսյակ', path: '2021 tvakani 3-rd eramsyak.pdf' },
      { name: '2021 թվականի 4-րդ եռամսյակ', path: '2021 tvakani 4-rd eramsyak.pdf' },
      { name: '2022 թվականի 1-ին եռամսյակ', path: '2022tvakani 1-in eramsyak.pdf' },
      { name: 'Գնումների պլան 2021թվական', path: 'Gnumneri plan 2021tiv.pdf' },
      { name: 'Գնումների պլան 2022թվական', path: 'Gnumneri plan 2022tiv.pdf' },
      { name: '2022թվականի 2-րդ եռամսյակ', path: '2 eramsyak.pdf' },
      { name: '2022թ. 3-րդ եռամսյակ', path: '2022t. 3-rd eramsyak.pdf' },
      { name: '2022-23ուսումնադաստարակչական աշխատանքային պլան', path: '2022-23usumnadas ashx. plan.pdf' },
      { name: 'Զարգացման ծրագիր Ա. Գեղամյան', path: 'zargacman cragir a.gexamyan.pdf' },
      { name: 'Զարգացման ծրագիր Ա. Գեղամյան ի լրուն 2', path: 'i lrum 2.pdf' },
      { name: 'Զարգացման ծրագիր Ա. Գեղամյան ի լրումն 1', path: 'i lrum 1.pdf' },
      { name: '2022 թվականի 4-րդ եռամսյակ', path: 'eramsyak 2022-4.pdf' },
      { name: '2023 թվականի 1-րդ եռամսյակ', path: '1-in eramsyak.pdf' },
      { name: '2023 թվականի 2-րդ եռամսյակ', path: '2023 2-rd eramsyak.pdf' },
      { name: 'Ներքին գնահատում 2022-2023ուստ', path: 'nerqin gnahatum2022-2023.pdf' },
      { name: 'Համադպրոցական աշխատանքային պլան 2023-2024 ուստարի', path: 'hamadprocakan 2023-2024.pdf' },
      { name: 'Ներդպրոցական վերահսկողության պլան 2023-2024', path: 'nerdp verahsk p2023-2024.pdf' },
      { name: '2023թ. 3-րդ եռամսյակ', path: '3rd eramsyak.pdf' },
      { name: 'ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ 10.10.2023', path: 'haytararutyun10.pdf' },
      { name: 'ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ 17.10.2023', path: 'haytararutyun 17.pdf' },
      { name: 'ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ 29.11.2023', path: 'haytararutyun19.pdf' },
      { name: '2023թ. 4-րդ եռամսյակ', path: 'eramsyak4.pdf' },
      { name: 'Արձանագրություն կառավարման խորհրդի նիստի 1', path: 'arcanakrutyun1.pdf' },
      { name: '2024 թվականի 1-րդ եռամսյակ', path: '1eramsyak.pdf' },
      { name: '2024 թվականի 2-րդ եռամսյակ', path: 'eramsyak 2 2024.pdf' },
      { name: 'ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ', path: 'haytararutyun23.pdf' },
      { name: '2024 թվականի 3-րդ եռամսյակ', path: '2024/3rd eramsyak.pdf' },
      { name: '2025թվական 1-ին եռամսյակ', path: 'eramsyak1.pdf' },
      { name: '2025թվական 2-րդ եռամսյակ', path: '2024/2025 2eramsyak.pdf' },
      { name: '2025թվականի 3-րդ եռամսյակ', path: 'eramsyak 325.pdf' },
      { name: '2025թվականի 4-րդ եռամսյակ', path: '2025 er4.pdf' },
      { name: '2023նախահաշիվ 1', path: 'nax231.pdf' },
      { name: '2023նախահաշիվ 2', path: 'nax232.pdf' },
      { name: '2023նախահաշիվ 3', path: 'nax233.pdf' },
      { name: '2023նախահաշիվ 4', path: 'nax234.pdf' },
      { name: '2025նախահաշիվ 1', path: '2025 1.pdf' },
      { name: '2025նախահաշիվ 2', path: '2025 2.pdf' },
      { name: '2025նախահաշիվ 3', path: '2025 3.pdf' },
    ],
  },
  {
    title: 'Տարեկան բյուջեի նախագիծ',
    files: [
      { name: 'Ներքին գնահատում 2018-2019', path: 'nerqin gnahatum 2018-2019.pdf' },
      { name: 'Արձանագրություն կառավարման խորհրդի նիստ 1', path: '28.04.2022t. karavarman xorhrdi arcanagrutyun tiv 1.pdf' },
      { name: 'Արձանագրություն կառավարման խորհրդի նիստ 2', path: '28.04.2022t. karavarman xorhrdi arcanagrutyun tiv 2.pdf' },
      { name: 'Հայտարարություն մանկավարժական արտահերթ նիստի վերաբերյալ', path: 'haytararutyun 2.pdf' },
      { name: 'Արձանագրություն մանկ. խորհրդի արտահերթ նիստից 26.05.2022թ.', path: 'Arcanagrutyun mankavarjakan xorhrdi nistic 26.05.2022.pdf' },
      { name: 'Արձանագրություն ծնողական խորհրդի նիստից 30.05.2022թ.', path: 'arcanagrutyun cnoxakan xorhrdi 30.05.2022.pdf' },
      { name: 'Արձանագրություն 06.06.2022թ.', path: 'arcanagrutyun 06.06.2022t.pdf' },
      { name: 'Արձանագրություն կառավարման խորհրդի նիստի 10.06.2022թ.', path: '5 arcanagrutyun.pdf' },
      { name: 'Արձանագրություն կառավարման խորհրդի նիստի 15.06.2022թ.', path: 'Arcanagrutyun 15.06.2022.pdf' },
      { name: 'Արձանագրություն մանկ. խորհրդի նիստից 05.09.2022թ.', path: 'arcanagrutyun tiv2  05.09.2022.pdf' },
      { name: 'Արձանագրություն ծնողական խորհրդի նիստից 07.09.2022թ.', path: 'Cnoxakan xordi arcanagrutyun2 07.09.2022.pdf' },
      { name: 'Արձանագրություն կառավարման խորհրդի 9 — 16.09.2022թ.', path: '16.09.20222 Arcanagrutyun karavarman  tiv9.pdf' },
      { name: 'Ուսպլան 2022-2023թ. 1', path: 'Usplan 2022-2023.pdf' },
      { name: 'Արձանագրություն կառավարման խորհրդի նիստի 11 — 21.10.2022թ.', path: '21.11.22 arcanagrutyun 11.pdf' },
      { name: 'Հայտարարություն 03.01.2023', path: 'haytararutyun 03.01.2023.pdf' },
      { name: 'Արձանագրություն կառավարման խորհրդի 13 — 02.02.2023', path: 'arcanagrutyun 13.pdf' },
      { name: 'ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ', path: 'haytararutyun13.pdf' },
      { name: 'Արձանագրություն կառավարման խորհրդի նիստի 14 — 06.07.2023թ.', path: 'arcanagrutyun 14.pdf' },
      { name: 'Ուսպլան 2023-2024թ. 1', path: 'usplan2023-2024.pdf' },
      { name: 'Ներքին գնահատում 2024-2025', path: 'nerqin.pdf' },
      { name: 'ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ 24.09.2023Թ.', path: 'haytararutyun24.pdf' },
      { name: 'Ուսպլան 2023-2024թ. 2-րդ կիս.', path: 'usplan2024.pdf' },
      { name: 'Ուսպլան 2024-2025թ. 1-ին կիսամյակ', path: '2024/usplan 2024-25 1kisamyak.pdf' },
      { name: 'ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ', path: '2024/haytararutyun18.pdf' },
      { name: '2024թվականի 4-րդ եռամսյակ', path: '4rd eramsyak.pdf' },
      { name: 'Հայտարարություն', path: 'hayt25.pdf' },
      { name: 'Հայտարարություն', path: 'hay.pdf' },
      { name: 'Հայտարարություն', path: 'hay08.pdf' },
      { name: '2024նախահաշիվ 1', path: 'nax251.pdf' },
      { name: '2024նախահաշիվ 2', path: 'nax25 2.pdf' },
      { name: '2026թվականի 1-ին եռամսյակ', path: 'eramsyak 4.pdf' },
    ],
  },
  {
    title: 'Կազմակերպության տարեկան նախահաշիվ',
    files: [
      { name: 'Ժամանակացույց դասագիրք', path: 'ժամանակացույց.pdf' },
      { name: 'Հայտարարություն տնօրենի պաշտոնի թափուր տեղի', path: 'Haytararutyun.pdf' },
      { name: 'Արձանագրություն կառ. խորհ. նիստի 3 — 23.05.2022թ.', path: 'Arcanagrutyun kar. xor tiv3 23.05.2022.pdf' },
      { name: 'Լիցենզիա հիմնական դպրոցի', path: 'Licenzia himnakan.pdf' },
      { name: 'Լիցենզիա տարրական դպրոցի', path: 'Licenzia tarakan.pdf' },
      { name: 'Դպրոցի ներքին կարգապահական կանոնները', path: 'Nerqin kargapahakan kanonner.pdf' },
      { name: 'Հայտարարություն 16.06.2022թ. տնօրենի մրցույթի', path: 'Haytararutyun 16.06.2022.pdf' },
      { name: 'Արձանագրություն 7 — 07.07.2022թ.', path: 'Arcanagrutyun 7.pdf' },
      { name: 'Ներքին գնահատում 2021-2022ուստ.', path: 'Ներքին գնահատում 2021-2022.rar' },
      { name: 'Համադպրոցական աշխ. պլան 2022-2023 ուստ.', path: 'Hamadprocakan ashxatanqayin plan 2022-2023.pdf' },
      { name: 'Արձանագրություն կառ. խորհ. — 13.09.2022թ.', path: 'Arcanagrutyun 8.pdf' },
      { name: 'Արձանագրություն կառ. խորհ. նիստի 3', path: '23.05.2022t karavarman xorhrdi nist 3.pdf' },
      { name: 'Արձանագրություն մանկ. խորհ. նիստի — 14.09.2022թ.', path: '14.09.2022mankavarjakan xo8hrdi nistic.pdf' },
      { name: 'Արձանագրություն կառ. խորհ. նիստի 10 — 30.09.2022', path: 'N10 Arcanagrutyun karavarman xorhrdi  30.09.2022.pdf' },
      { name: 'Հայտարարություն 18.10.2022 — հանդ. ուս. խորհրդի հետ', path: '14.10.22 haytararutyun.pdf' },
      { name: 'Հայտարարություն 25.10.2022թ.', path: 'haytararutyun 25.10.2022.pdf' },
      { name: 'Արձ. ծնողական խորհ. նիստի — 27.10.2022թ.', path: '27.10.2022 arcanagrutyun mank. xorhrdi nisti.pdf' },
      { name: 'Արձ. մանկ. խորհ. նիստից — 28.10.2022թ.', path: '28.10.2022 arcanagrutyun makxor5.pdf' },
      { name: 'Արձ. կառ. խորհ. նիստի 12 — 04.11.2022թ.', path: 'arcanagrutyun 12 04.11.2022.pdf' },
      { name: 'Հ. Ռուշանյան Զարգացման ծրագիր', path: 'h rushanyan.pdf' },
      { name: 'Հ. Ռուշանյանի տարեկան հաշվետվությունը 27.12.2023', path: 'tnoreni hashvetvutyun23.pdf' },
      { name: 'Հ. Ռուշանյանի տարեկան հաշվետվությունը 26.12.2024', path: 'arc26.pdf' },
      { name: 'Հայտարարություն', path: 'haytu.pdf' },
      { name: 'Արձ. կառ. խ. նիստ 3 — 01.10.2025թ.', path: 'mankxor.pdf' },
      { name: 'Արձ. ծնողական խ. — 30.09.2025թ.', path: 'cnox xor.pdf' },
      { name: 'Հաշվետ. հուշարձ. պահպ. վերաբ.', path: 'husharcan.pdf' },
      { name: 'Ուսպլան 2025-2026 1կիսամյակ', path: 'usplan 261.pdf' },
      { name: 'Ուսպլան 2025-2026 2կիսամյակ', path: 'usplan262.pdf' },
    ],
  },
]

export default async function ReportsPage() {
  const section = sections.find((s) => s.slug === "about");
  const page = section?.links.find((p) => p.slug === "reports");

  if (!section || !page) {
    notFound();
  }

  return (
    <SiteShell>
      <section className="subhero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/school.jpg" alt={page.title} loading="lazy" />
        <div>
          <Link href={`/section/${section.slug}`}>{section.title}</Link>
          <h1>{page.title}</h1>
        </div>
      </section>

      <section className="section-wrap">
        <div className="reports-grid">
          {columns.map((col) => (
            <div key={col.title} className="reports-column">
              <div className="reports-column-header">{col.title}</div>
              <ul className="reports-list">
                {col.files.map((file, i) => (
                  <li key={i}>
                    <a
                      href={`${BASE_PATH}/${file.path}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="reports-link"
                    >
                      {file.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}