/**
 * Конфиг конкретной школы.
 *
 * Это единственное место, которое нужно менять, чтобы клонировать сайт
 * под другую школу. Тексты (название, описание, адрес) локализованы:
 * правьте здесь — никаких хардкодов в коде или messages/*.json.
 */

export type SchoolLocale = "hy" | "ru" | "en";

type LocalizedString = Record<SchoolLocale, string>;

export interface SchoolConfig {
  /** Домен сайта без протокола, для SEO/metadata */
  domain: string;
  /** Email школы — используется в footer, contact page, mailto-форме */
  email: string;
  /** Телефон в международном формате (для tel:) и локально для отображения */
  phone: {
    display: string;
    tel: string;
  };
  /** Соц. сети — оставить пустую строку, чтобы скрыть ссылку */
  social: {
    facebook: string;
    youtube: string;
  };
  /** Координаты для встроенной карты OpenStreetMap */
  map: {
    lat: number;
    lon: number;
    /** Половина видимого охвата карты по широте/долготе (градусы) */
    bboxRadius: number;
  };
  /** Логотип и hero-изображение из /public */
  assets: {
    logo: string;
    heroImage: string;
  };
  /** Локализованные строки */
  name: LocalizedString;
  shortName: LocalizedString;
  tagline: LocalizedString;
  address: LocalizedString;
  region: LocalizedString;
}

export const schoolConfig: SchoolConfig = {
  domain: "akhuryan1school.am",
  email: "akhuryan1@schools.am",
  phone: {
    display: "+374 312 70850",
    tel: "+37431270850",
  },
  social: {
    facebook: "https://www.facebook.com/t.iv.erku.dproc.maralik",
    youtube: "",
  },
  map: {
    lat: 40.781478, 
    lon: 43.885959,
    bboxRadius: 0.02,
  },
  assets: {
    logo: "/logo.jpg",
    heroImage: "/school.jpg",
  },
  name: {
    hy: "Ախուրյանի թիվ 1 հիմնական դպրոց",
    ru: "Начальная школа Ахурян № 1",
    en: "Akhuryan Basic School No. 1",
  },
  shortName: {
    hy: "Ախուրյան 1",
    ru: "Ахурян 1",
    en: "Akhuryan 1",
  },
  tagline: {
    hy: "Պաշտոնական տեղեկատվական հարթակ",
    ru: "Официальный информационный портал",
    en: "Official information portal",
  },
  address: {
    hy: "ՀՀ Շիրակի մարզ, գյուղ Ախուրյան, Գյումրու խճուղի 16",
    ru: "Ширакская область Республики Армения, село Ахурян, Гюмрийская трасса 16",
    en: "Shirak region of the Republic of Armenia, Akhuryan village, Gyumri highway 16",
  },
  region: {
    hy: "Շիրակի մարզ",
    ru: "Ширакская область",
    en: "Shirak Region",
  },
};

export function bboxString(): string {
  const { lat, lon, bboxRadius } = schoolConfig.map;
  return [
    lon - bboxRadius,
    lat - bboxRadius / 2,
    lon + bboxRadius,
    lat + bboxRadius / 2,
  ].join(",");
}

export function mapEmbedUrl(): string {
  const { lat, lon } = schoolConfig.map;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bboxString()}&layer=mapnik&marker=${lat},${lon}`;
}
