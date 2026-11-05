// Иконки погоды
const WEATHER_SVGS = {
  clear: `
    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <radialGradient id="sSun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFF59D"/>
          <stop offset="65%" stop-color="#FBC02D"/>
          <stop offset="100%" stop-color="#F57F17"/>
        </radialGradient>
      </defs>
      <g stroke="#FBC02D" stroke-width="4" stroke-linecap="round">
        <line x1="48" y1="8" x2="48" y2="18"/><line x1="48" y1="78" x2="48" y2="88"/>
        <line x1="8" y1="48" x2="18" y2="48"/><line x1="78" y1="48" x2="88" y2="48"/>
        <line x1="20" y1="20" x2="27" y2="27"/><line x1="69" y1="69" x2="76" y2="76"/>
        <line x1="76" y1="20" x2="69" y2="27"/><line x1="27" y1="69" x2="20" y2="76"/>
      </g>
      <circle cx="48" cy="48" r="22" fill="url(#sSun)"/>
    </svg>`,
  partlyCloudy: `
    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <radialGradient id="psSun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFF59D"/><stop offset="100%" stop-color="#F59E0B"/>
        </radialGradient>
        <linearGradient id="psCloud" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF"/><stop offset="100%" stop-color="#D0DCE8"/>
        </linearGradient>
      </defs>
      <g stroke="#FBBF24" stroke-width="3.5" stroke-linecap="round">
        <line x1="34" y1="10" x2="34" y2="17"/><line x1="10" y1="34" x2="17" y2="34"/>
        <line x1="17" y1="17" x2="22" y2="22"/><line x1="51" y1="17" x2="46" y2="22"/>
      </g>
      <circle cx="34" cy="34" r="15" fill="url(#psSun)"/>
      <path d="M30 68H70C77.7 68 84 61.7 84 54C84 46.8 78.6 40.9 71.6 40.1C69.6 29.8 60.5 22 49.5 22C37.1 22 27 32.1 27 44.5C27 45.2 27 45.9 27.1 46.6C21.3 48.4 17 53.7 17 60C17 64.4 20.6 68 25 68H30Z" fill="url(#psCloud)" stroke="#B8C7D6" stroke-width="1.5"/>
    </svg>`,
  cloudy: `
    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id="cBackG" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#CBD5E1"/><stop offset="100%" stop-color="#8FA1B3"/>
        </linearGradient>
        <linearGradient id="cFrontG" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF"/><stop offset="100%" stop-color="#C5D2DF"/>
        </linearGradient>
      </defs>
      <path d="M36 52H74C80.6 52 86 46.6 86 40C86 33.8 81.3 28.7 75.2 28.1C73.4 19.5 65.8 13 56.5 13C46 13 37.5 21.5 37.5 32C37.5 32.6 37.5 33.2 37.6 33.8C32.6 35.3 29 40 29 45.5C29 49.1 32.1 52 36 52Z" fill="url(#cBackG)"/>
      <path d="M24 70H68C75.7 70 82 63.7 82 56C82 48.8 76.6 42.9 69.6 42.1C67.6 31.8 58.5 24 47.5 24C35.1 24 25 34.1 25 46.5C25 47.2 25 47.9 25.1 48.6C19.3 50.4 15 55.7 15 62C15 66.4 18.6 70 23 70H24Z" fill="url(#cFrontG)" stroke="#B0C0D0" stroke-width="1.5"/>
    </svg>`,
  fog: `
    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <path d="M26 54H68C74.6 54 80 48.6 80 42C80 35.8 75.3 30.7 69.2 30.1C67.4 21.5 59.8 15 50.5 15C40 15 31.5 23.5 31.5 34C31.5 34.6 31.5 35.2 31.6 35.8C26.6 37.3 23 42 23 47.5C23 51.1 24.4 54 26 54Z" fill="#D5E0EB"/>
      <g stroke="#8CA0B5" stroke-width="4" stroke-linecap="round">
        <line x1="20" y1="64" x2="76" y2="64"/>
        <line x1="26" y1="73" x2="70" y2="73"/>
        <line x1="32" y1="82" x2="64" y2="82"/>
      </g>
    </svg>`,
  rain: `
    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <linearGradient id="rCloudG" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#E2E8F0"/><stop offset="100%" stop-color="#94A3B8"/>
        </linearGradient>
      </defs>
      <path d="M24 58H68C75.7 58 82 51.7 82 44C82 36.8 76.6 30.9 69.6 30.1C67.6 19.8 58.5 12 47.5 12C35.1 12 25 22.1 25 34.5C25 35.2 25 35.9 25.1 36.6C19.3 38.4 15 43.7 15 50C15 54.4 18.6 58 23 58H24Z" fill="url(#rCloudG)" stroke="#8899AA" stroke-width="1.5"/>
      <g stroke="#008AFF" stroke-width="4" stroke-linecap="round">
        <line x1="33" y1="65" x2="28" y2="80"/>
        <line x1="48" y1="65" x2="43" y2="80"/>
        <line x1="63" y1="65" x2="58" y2="80"/>
      </g>
    </svg>`,
  snow: `
    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <path d="M24 58H68C75.7 58 82 51.7 82 44C82 36.8 76.6 30.9 69.6 30.1C67.6 19.8 58.5 12 47.5 12C35.1 12 25 22.1 25 34.5C25 35.2 25 35.9 25.1 36.6C19.3 38.4 15 43.7 15 50C15 54.4 18.6 58 23 58H24Z" fill="#DCE6F0" stroke="#A5B8CC" stroke-width="1.5"/>
      <g fill="#439DDE">
        <circle cx="33" cy="72" r="4.5"/>
        <circle cx="48" cy="77" r="4.5"/>
        <circle cx="63" cy="72" r="4.5"/>
      </g>
    </svg>`,
  storm: `
    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <path d="M24 56H68C75.7 56 82 49.7 82 42C82 34.8 76.6 28.9 69.6 28.1C67.6 17.8 58.5 10 47.5 10C35.1 10 25 20.1 25 32.5C25 33.2 25 33.9 25.1 34.6C19.3 36.4 15 41.7 15 48C15 52.4 18.6 56 23 56H24Z" fill="#64748B"/>
      <polygon points="50,50 37,69 48,69 43,86 61,64 49,64" fill="#FFAB00"/>
    </svg>`
};

// Словари локализации для 3 языков: Русский (ru), Українська (uk), English (en)
const I18N = {
  ru: {
    locale: 'ru-RU',
    pageTitle: 'Погода — Прогноз на 10 дней',
    brandTitle: 'ПОГОДА',
    brandTagline: 'Метеопрогноз 10 дней',
    searchPlaceholder: 'Название населенного пункта, страны или региона...',
    settingsBtn: 'Настройки',
    settingsTitle: 'Настройки отображения',
    lblTempUnit: 'Единицы температуры:',
    lblWindUnit: 'Скорость ветра:',
    weatherPrefix: 'Погода',
    inCityPrefix: 'в',
    tab7: 'Неделя',
    tab10: '10 дней',
    min: 'мин.',
    max: 'макс.',
    sunrise: 'Восход',
    sunset: 'Закат',
    daylightPrefix: 'Световой день:',
    hoursShort: 'ч',
    minsShort: 'мин',
    shareBtn: 'Поделиться погодой',
    copiedBtn: 'Скопировано!',
    rowTemp: 'Температура',
    rowFeels: 'чувствуется как',
    rowPressure: 'Давление, мм',
    rowHumidity: 'Влажность, %',
    rowWind: 'Ветер',
    rowPrecip: 'Вероятность осадков, %',
    unitMs: 'м/с',
    unitKmh: 'км/ч',
    night: 'ночь',
    morning: 'утро',
    day: 'день',
    evening: 'вечер',
    regionalTitle: 'Погода в регионе',
    nearbyTitle: 'Погода в ближайших населенных пунктах',
    mapBtn: 'Погода на карте',
    worldTitle: 'Погода на 10 дней в других городах мира',
    footerCopy: 'Погода во всех уголках мира • Точный прогноз на 10 дней',
    footerSub: 'Автоматическое определение геолокации (GPS) • Без рекламы',
    loadingGeo: 'Определяем ваше местоположение (GPS)...',
    loadingForecast: 'Загружаем точный метеопрогноз на 10 дней...',
    searchingCity: 'Ищем',
    notFound: 'Населенный пункт не найден. Проверьте написание.',
    networkError: 'Не удалось загрузить прогноз погоды. Проверьте подключение к сети.',
    yourLocation: 'Ваша локация',
    worldCrumb: 'Мир',
    regionCrumb: 'Регион',
    gpsSubtitle: 'Точный прогноз по координатам GPS',
    conditions: {
      clear: 'Ясно',
      fair: 'Небольшая облачность',
      partly: 'Облачно с прояснениями',
      cloudy: 'Сплошная облачность',
      fog: 'Туман',
      drizzle: 'Сплошная облачность, мелкий дождь',
      rain: 'Сплошная облачность, дождь',
      heavyRain: 'Сильный дождь',
      snow: 'Снегопад',
      storm: 'Гроза'
    },
    windDirs: ['Северный', 'Северо-Восточный', 'Восточный', 'Юго-Восточный', 'Южный', 'Юго-Западный', 'Западный', 'Северо-Западный'],
    worldCities: [
      { label: 'Лондон', q: 'London' }, { label: 'Париж', q: 'Paris' }, { label: 'Берлин', q: 'Berlin' }, { label: 'Мадрид', q: 'Madrid' },
      { label: 'Рим', q: 'Rome' }, { label: 'Амстердам', q: 'Amsterdam' }, { label: 'Вена', q: 'Vienna' }, { label: 'Прага', q: 'Prague' },
      { label: 'Варшава', q: 'Warsaw' }, { label: 'Киев', q: 'Kyiv' }, { label: 'Женева', q: 'Geneva' }, { label: 'Цюрих', q: 'Zurich' },
      { label: 'Стокгольм', q: 'Stockholm' }, { label: 'Осло', q: 'Oslo' }, { label: 'Хельсинки', q: 'Helsinki' }, { label: 'Копенгаген', q: 'Copenhagen' },
      { label: 'Лиссабон', q: 'Lisbon' }, { label: 'Афины', q: 'Athens' }, { label: 'Дублин', q: 'Dublin' }, { label: 'Брюссель', q: 'Brussels' },
      { label: 'Нью-Йорк', q: 'New York' }, { label: 'Лос-Анджелес', q: 'Los Angeles' }, { label: 'Майами', q: 'Miami' }, { label: 'Чикаго', q: 'Chicago' },
      { label: 'Торонто', q: 'Toronto' }, { label: 'Ванкувер', q: 'Vancouver' }, { label: 'Токио', q: 'Tokyo' }, { label: 'Сеул', q: 'Seoul' },
      { label: 'Сингапур', q: 'Singapore' }, { label: 'Сидней', q: 'Sydney' }, { label: 'Дубай', q: 'Dubai' }, { label: 'Стамбул', q: 'Istanbul' }
    ]
  },
  uk: {
    locale: 'uk-UA',
    pageTitle: 'Погода — Прогноз на 10 днів',
    brandTitle: 'ПОГОДА',
    brandTagline: 'Метеопрогноз 10 днів',
    searchPlaceholder: 'Назва населеного пункту, країни або регіону...',
    settingsBtn: 'Налаштування',
    settingsTitle: 'Налаштування відображення',
    lblTempUnit: 'Одиниці температури:',
    lblWindUnit: 'Швидкість вітру:',
    weatherPrefix: 'Погода',
    inCityPrefix: 'у',
    tab7: 'Тиждень',
    tab10: '10 днів',
    min: 'мін.',
    max: 'макс.',
    sunrise: 'Схід',
    sunset: 'Захід',
    daylightPrefix: 'Світловий день:',
    hoursShort: 'год',
    minsShort: 'хв',
    shareBtn: 'Поділитися погодою',
    copiedBtn: 'Скопійовано!',
    rowTemp: 'Температура',
    rowFeels: 'відчувається як',
    rowPressure: 'Тиск, мм',
    rowHumidity: 'Вологість, %',
    rowWind: 'Вітер',
    rowPrecip: 'Ймовірність опадів, %',
    unitMs: 'м/с',
    unitKmh: 'км/год',
    night: 'ніч',
    morning: 'ранок',
    day: 'день',
    evening: 'вечір',
    regionalTitle: 'Погода в регіоні',
    nearbyTitle: 'Погода у найближчих населених пунктах',
    mapBtn: 'Погода на карті',
    worldTitle: 'Погода на 10 днів в інших містах світу',
    footerCopy: 'Погода в усіх куточках світу • Точний прогноз на 10 днів',
    footerSub: 'Автоматичне визначення геолокації (GPS) • Без реклами',
    loadingGeo: 'Визначаємо ваше місцезнаходження (GPS)...',
    loadingForecast: 'Завантажуємо точний метеопрогноз на 10 днів...',
    searchingCity: 'Шукаємо',
    notFound: 'Населений пункт не знайдено. Перевірте написання.',
    networkError: 'Не вдалося завантажити прогноз погоди. Перевірте підключення до мережі.',
    yourLocation: 'Ваша локація',
    worldCrumb: 'Світ',
    regionCrumb: 'Регіон',
    gpsSubtitle: 'Точний прогноз за координатами GPS',
    conditions: {
      clear: 'Ясно',
      fair: 'Невелика хмарність',
      partly: 'Хмарно з проясненнями',
      cloudy: 'Суцільна хмарність',
      fog: 'Туман',
      drizzle: 'Суцільна хмарність, дрібний дощ',
      rain: 'Суцільна хмарність, дощ',
      heavyRain: 'Сильний дощ',
      snow: 'Снігопад',
      storm: 'Гроза'
    },
    windDirs: ['Північний', 'Північно-Східний', 'Східний', 'Південно-Східний', 'Південний', 'Південно-Західний', 'Західний', 'Північно-Західний'],
    worldCities: [
      { label: 'Лондон', q: 'London' }, { label: 'Париж', q: 'Paris' }, { label: 'Берлін', q: 'Berlin' }, { label: 'Мадрид', q: 'Madrid' },
      { label: 'Рим', q: 'Rome' }, { label: 'Амстердам', q: 'Amsterdam' }, { label: 'Відень', q: 'Vienna' }, { label: 'Прага', q: 'Prague' },
      { label: 'Варшава', q: 'Warsaw' }, { label: 'Київ', q: 'Kyiv' }, { label: 'Женева', q: 'Geneva' }, { label: 'Цюрих', q: 'Zurich' },
      { label: 'Стокгольм', q: 'Stockholm' }, { label: 'Осло', q: 'Oslo' }, { label: 'Гельсінкі', q: 'Helsinki' }, { label: 'Копенгаген', q: 'Copenhagen' },
      { label: 'Лісабон', q: 'Lisbon' }, { label: 'Афіни', q: 'Athens' }, { label: 'Дублін', q: 'Dublin' }, { label: 'Брюссель', q: 'Brussels' },
      { label: 'Нью-Йорк', q: 'New York' }, { label: 'Лос-Анджелес', q: 'Los Angeles' }, { label: 'Маямі', q: 'Miami' }, { label: 'Чикаго', q: 'Chicago' },
      { label: 'Торонто', q: 'Toronto' }, { label: 'Ванкувер', q: 'Vancouver' }, { label: 'Токіо', q: 'Tokyo' }, { label: 'Сеул', q: 'Seoul' },
      { label: 'Сінгапур', q: 'Singapore' }, { label: 'Сідней', q: 'Sydney' }, { label: 'Дубай', q: 'Dubai' }, { label: 'Стамбул', q: 'Istanbul' }
    ]
  },
  en: {
    locale: 'en-US',
    pageTitle: 'Weather — 10-Day Forecast',
    brandTitle: 'WEATHER',
    brandTagline: '10-Day Forecast',
    searchPlaceholder: 'City name, country or region...',
    settingsBtn: 'Settings',
    settingsTitle: 'Display Settings',
    lblTempUnit: 'Temperature unit:',
    lblWindUnit: 'Wind speed unit:',
    weatherPrefix: 'Weather',
    inCityPrefix: 'in',
    tab7: '7 Days',
    tab10: '10 Days',
    min: 'min.',
    max: 'max.',
    sunrise: 'Sunrise',
    sunset: 'Sunset',
    daylightPrefix: 'Daylight:',
    hoursShort: 'h',
    minsShort: 'min',
    shareBtn: 'Share weather',
    copiedBtn: 'Copied!',
    rowTemp: 'Temperature',
    rowFeels: 'feels like',
    rowPressure: 'Pressure, mmHg',
    rowHumidity: 'Humidity, %',
    rowWind: 'Wind',
    rowPrecip: 'Precipitation prob., %',
    unitMs: 'm/s',
    unitKmh: 'km/h',
    night: 'night',
    morning: 'morning',
    day: 'afternoon',
    evening: 'evening',
    regionalTitle: 'Weather in the region',
    nearbyTitle: 'Weather in nearby towns',
    mapBtn: 'Weather map',
    worldTitle: '10-Day Weather in Major World Cities',
    footerCopy: 'Worldwide Weather • Accurate 10-Day Forecast',
    footerSub: 'Automatic GPS Geolocation • Ad-free',
    loadingGeo: 'Detecting your location (GPS)...',
    loadingForecast: 'Loading accurate 10-day forecast...',
    searchingCity: 'Searching',
    notFound: 'Location not found. Please check the spelling.',
    networkError: 'Could not load the weather forecast. Please check your connection.',
    yourLocation: 'Your Location',
    worldCrumb: 'World',
    regionCrumb: 'Region',
    gpsSubtitle: 'Accurate GPS forecast',
    conditions: {
      clear: 'Clear sky',
      fair: 'Mostly clear',
      partly: 'Partly cloudy',
      cloudy: 'Overcast',
      fog: 'Fog',
      drizzle: 'Overcast, light rain',
      rain: 'Overcast, rain',
      heavyRain: 'Heavy rain',
      snow: 'Snowfall',
      storm: 'Thunderstorm'
    },
    windDirs: ['North', 'North-East', 'East', 'South-East', 'South', 'South-West', 'West', 'North-West'],
    worldCities: [
      { label: 'London', q: 'London' }, { label: 'Paris', q: 'Paris' }, { label: 'Berlin', q: 'Berlin' }, { label: 'Madrid', q: 'Madrid' },
      { label: 'Rome', q: 'Rome' }, { label: 'Amsterdam', q: 'Amsterdam' }, { label: 'Vienna', q: 'Vienna' }, { label: 'Prague', q: 'Prague' },
      { label: 'Warsaw', q: 'Warsaw' }, { label: 'Kyiv', q: 'Kyiv' }, { label: 'Geneva', q: 'Geneva' }, { label: 'Zurich', q: 'Zurich' },
      { label: 'Stockholm', q: 'Stockholm' }, { label: 'Oslo', q: 'Oslo' }, { label: 'Helsinki', q: 'Helsinki' }, { label: 'Copenhagen', q: 'Copenhagen' },
      { label: 'Lisbon', q: 'Lisbon' }, { label: 'Athens', q: 'Athens' }, { label: 'Dublin', q: 'Dublin' }, { label: 'Brussels', q: 'Brussels' },
      { label: 'New York', q: 'New York' }, { label: 'Los Angeles', q: 'Los Angeles' }, { label: 'Miami', q: 'Miami' }, { label: 'Chicago', q: 'Chicago' },
      { label: 'Toronto', q: 'Toronto' }, { label: 'Vancouver', q: 'Vancouver' }, { label: 'Tokyo', q: 'Tokyo' }, { label: 'Seoul', q: 'Seoul' },
      { label: 'Singapore', q: 'Singapore' }, { label: 'Sydney', q: 'Sydney' }, { label: 'Dubai', q: 'Dubai' }, { label: 'Istanbul', q: 'Istanbul' }
    ]
  }
};

// Текущее состояние
let currentLang = localStorage.getItem('weather_lang') || 'ru';
if (!I18N[currentLang]) currentLang = 'ru';

let lastWeatherData = null;
let currentLocationMeta = {
  city: '',
  region: '',
  country: '',
  lat: 51.45,
  lon: 0.22
};
let selectedDayIndex = 0;
let displayDaysCount = 10;
let tempUnit = 'C';
let windUnit = 'ms';
let debounceTimer = null;
let isGeoResolved = false;

function t() {
  return I18N[currentLang];
}

function getWeatherMeta(wmoCode) {
  const code = Number(wmoCode);
  const c = t().conditions;
  if (code === 0) return { label: c.clear, icon: WEATHER_SVGS.clear };
  if (code === 1) return { label: c.fair, icon: WEATHER_SVGS.partlyCloudy };
  if (code === 2) return { label: c.partly, icon: WEATHER_SVGS.partlyCloudy };
  if (code === 3) return { label: c.cloudy, icon: WEATHER_SVGS.cloudy };
  if (code === 45 || code === 48) return { label: c.fog, icon: WEATHER_SVGS.fog };
  if ([51, 53, 55, 56, 57].includes(code)) return { label: c.drizzle, icon: WEATHER_SVGS.rain };
  if ([61, 63, 80, 81].includes(code)) return { label: c.rain, icon: WEATHER_SVGS.rain };
  if ([65, 66, 67, 82].includes(code)) return { label: c.heavyRain, icon: WEATHER_SVGS.rain };
  if ([71, 73, 75, 77, 85, 86].includes(code)) return { label: c.snow, icon: WEATHER_SVGS.snow };
  if ([95, 96, 99].includes(code)) return { label: c.storm, icon: WEATHER_SVGS.storm };
  return { label: c.partly, icon: WEATHER_SVGS.partlyCloudy };
}

function metSymbolToWmo(symbolCode = '', cloudArea = 40, precipMm = 0, tempC = 15) {
  const s = symbolCode.toLowerCase();
  if (s.includes('thunder')) return 95;
  if (s.includes('snow') || s.includes('sleet')) return 73;
  if (s.includes('heavyrain')) return 65;
  if (s.includes('lightrain') || s.includes('drizzle')) return 51;
  if (s.includes('rain')) return 61;
  if (s.includes('fog')) return 45;
  if (s.includes('clearsky')) return 0;
  if (s.includes('fair')) return 1;
  if (s.includes('partlycloudy')) return 2;
  if (s.includes('cloudy')) return 3;

  if (precipMm > 0.3) return tempC <= 0 ? 71 : 61;
  if (cloudArea < 20) return 0;
  if (cloudArea < 50) return 1;
  if (cloudArea < 80) return 2;
  return 3;
}

function getWindInfo(deg) {
  const d = ((Number(deg) || 0) % 360 + 360) % 360;
  const idx = Math.round(d / 45) % 8;
  const arrows = ['↓', '↙', '←', '↖', '↑', '↗', '→', '↘'];
  return {
    arrow: arrows[idx],
    full: t().windDirs[idx]
  };
}

function computeSunTimes(lat, lon, dateStr) {
  try {
    const d = new Date(dateStr + 'T12:00:00');
    const start = new Date(d.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((d - start) / 86400000);
    const rad = Math.PI / 180;
    const decl = 23.45 * Math.sin(rad * ((360 / 365) * (dayOfYear - 81)));
    const cosH = -Math.tan(lat * rad) * Math.tan(decl * rad);
    if (cosH < -1 || cosH > 1) return { sunrise: '06:30', sunset: '18:30', durH: 12, durM: 0 };
    const halfDayHours = (Math.acos(cosH) / rad) / 15;
    const riseHour = Math.max(0, Math.min(23.9, 12 - halfDayHours));
    const setHour = Math.max(0, Math.min(23.9, 12 + halfDayHours));
    const totalHours = setHour - riseHour;
    const durH = Math.floor(totalHours);
    const durM = Math.round((totalHours - durH) * 60) % 60;
    const fmt = (h) => {
      const hh = Math.floor(h);
      const mm = Math.round((h - hh) * 60) % 60;
      return `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
    };
    return { sunrise: fmt(riseHour), sunset: fmt(setHour), durH, durM };
  } catch {
    return { sunrise: '06:50', sunset: '16:45', durH: 9, durM: 55 };
  }
}

// DOM-элементы
const searchForm = document.getElementById('searchForm');
const cityInput = document.getElementById('cityInput');
const geoBtn = document.getElementById('geoBtn');
const suggestionsList = document.getElementById('suggestionsList');
const errorBanner = document.getElementById('errorBanner');
const errorText = document.getElementById('errorText');
const loader = document.getElementById('loader');
const loaderText = document.getElementById('loaderText');
const weatherMain = document.getElementById('weatherMain');

const cityTitleLoc = document.getElementById('cityTitleLoc');
const regionSubtitle = document.getElementById('regionSubtitle');
const tab7Days = document.getElementById('tab7Days');
const tab10Days = document.getElementById('tab10Days');
const daysTabsRow = document.getElementById('daysTabsRow');

const localTimeLabel = document.getElementById('localTimeLabel');
const detailHeroIcon = document.getElementById('detailHeroIcon');
const thermoMercury = document.getElementById('thermoMercury');
const detailCurrentTemp = document.getElementById('detailCurrentTemp');
const sunriseVal = document.getElementById('sunriseVal');
const sunsetVal = document.getElementById('sunsetVal');
const daylightDuration = document.getElementById('daylightDuration');
const shareWeatherBtn = document.getElementById('shareWeatherBtn');
const shareBtnText = document.getElementById('shareBtnText');

const hourlyTimesRow = document.getElementById('hourlyTimesRow');
const hourlyTableBody = document.getElementById('hourlyTableBody');
const naturalSummaryText = document.getElementById('naturalSummaryText');
const extraSummaryText = document.getElementById('extraSummaryText');

const regionalSection = document.getElementById('regionalSection');
const regionalHeading = document.getElementById('regionalHeading');
const nearbyCitiesGrid = document.getElementById('nearbyCitiesGrid');
const toggleMapBtn = document.getElementById('toggleMapBtn');
const mapContainer = document.getElementById('mapContainer');
const weatherMapIframe = document.getElementById('weatherMapIframe');
const worldCitiesList = document.getElementById('worldCitiesList');

const crumbCountry = document.getElementById('crumbCountry');
const crumbRegion = document.getElementById('crumbRegion');
const crumbCity = document.getElementById('crumbCity');

function fmtTemp(celsius, withSign = true) {
  const val = tempUnit === 'F' ? Math.round((celsius * 9) / 5 + 32) : Math.round(celsius);
  const sign = withSign && val > 0 ? '+' : '';
  return `${sign}${val}°`;
}

function fmtWind(msVal) {
  const val = windUnit === 'kmh' ? msVal * 3.6 : msVal;
  return val.toFixed(1);
}

// Применение переводов ко всем статическим элементам интерфейса
function applyStaticTranslations() {
  const dict = t();
  document.documentElement.lang = currentLang;
  document.title = dict.pageTitle;

  document.getElementById('brandTitle').textContent = dict.brandTitle;
  document.getElementById('brandTagline').textContent = dict.brandTagline;
  cityInput.placeholder = dict.searchPlaceholder;
  document.getElementById('settingsBtn').textContent = dict.settingsBtn;
  document.getElementById('settingsModalTitle').textContent = dict.settingsTitle;
  document.getElementById('lblTempUnit').textContent = dict.lblTempUnit;
  document.getElementById('lblWindUnit').textContent = dict.lblWindUnit;

  document.getElementById('weatherWordPrefix').textContent = dict.weatherPrefix;
  tab7Days.textContent = dict.tab7;
  tab10Days.textContent = dict.tab10;

  document.getElementById('lblSunrise').textContent = dict.sunrise;
  document.getElementById('lblSunset').textContent = dict.sunset;
  shareBtnText.textContent = dict.shareBtn;

  document.getElementById('lblRowTemp').textContent = dict.rowTemp;
  document.getElementById('lblRowFeels').textContent = dict.rowFeels;
  document.getElementById('lblRowPressure').textContent = dict.rowPressure;
  document.getElementById('lblRowHumidity').textContent = dict.rowHumidity;
  document.getElementById('lblRowWind').textContent = dict.rowWind;
  document.getElementById('lblRowPrecip').textContent = dict.rowPrecip;

  document.getElementById('lblNight').textContent = dict.night;
  document.getElementById('lblMorning').textContent = dict.morning;
  document.getElementById('lblDay').textContent = dict.day;
  document.getElementById('lblEvening').textContent = dict.evening;

  toggleMapBtn.textContent = dict.mapBtn;
  document.getElementById('worldSectionTitle').textContent = dict.worldTitle;
  document.getElementById('crumbPrefix').textContent = dict.weatherPrefix;
  document.getElementById('footerCopy').textContent = dict.footerCopy;
  document.getElementById('footerSub').textContent = dict.footerSub;

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  initWorldCitiesList();
}

// Поиск геокоординат с учётом выбранного языка
async function searchLocations(query) {
  try {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=6&language=${currentLang}&format=json`;
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      if (data && Array.isArray(data.results) && data.results.length > 0) {
        return data.results;
      }
    }
  } catch {
    // резервный геокодер
  }

  try {
    const nomUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&addressdetails=1&limit=6&accept-language=${currentLang}`;
    const res2 = await fetch(nomUrl);
    if (res2.ok) {
      const list = await res2.json();
      return list.map((item) => ({
        name: item.address?.city || item.address?.town || item.address?.village || item.name || item.display_name.split(',')[0],
        admin1: item.address?.state || item.address?.county || '',
        country: item.address?.country || '',
        latitude: Number(item.lat),
        longitude: Number(item.lon)
      }));
    }
  } catch {
    // игнорируем
  }
  return [];
}

// Обратное геокодирование по координатам на выбранном языке (Nominatim OpenStreetMap + резерв BigDataCloud)
async function reverseGeocode(lat, lon) {
  try {
    const nomRes = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${Number(lat).toFixed(4)}&lon=${Number(lon).toFixed(4)}&format=json&zoom=10&accept-language=${currentLang}`
    );
    if (nomRes.ok) {
      const nomData = await nomRes.json();
      const addr = nomData.address || {};
      const city = addr.city || addr.town || addr.village || addr.municipality || addr.suburb || addr.borough || addr.county || nomData.name;
      const region = addr.state || addr.region || addr.county || '';
      const country = addr.country || '';
      if (city) {
        return { city, region, country };
      }
    }
  } catch {
    // переходим ко второму источнику
  }

  try {
    const res = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=${currentLang}`
    );
    if (res.ok) {
      const data = await res.json();
      const city = data.city || data.locality || data.principalSubdivision || t().yourLocation;
      const region = data.principalSubdivision || '';
      const country = data.countryName || '';
      return { city, region, country };
    }
  } catch {
    // резерв
  }
  return { city: t().yourLocation, region: '', country: 'GPS' };
}

// Запрос к европейской метеорологической модели ECMWF (основа прогнозов Foreca / Sinoptik.ua)
async function fetchFromEcmwfModel(lat, lon) {
  const params = new URLSearchParams({
    latitude: Number(lat).toFixed(4),
    longitude: Number(lon).toFixed(4),
    hourly: [
      'temperature_2m',
      'relative_humidity_2m',
      'apparent_temperature',
      'precipitation',
      'weather_code',
      'surface_pressure',
      'wind_speed_10m',
      'wind_direction_10m'
    ].join(','),
    daily: [
      'weather_code',
      'temperature_2m_max',
      'temperature_2m_min'
    ].join(','),
    wind_speed_unit: 'ms',
    timezone: 'auto',
    forecast_days: '10'
  });

  const res = await fetch(`https://api.open-meteo.com/v1/ecmwf?${params.toString()}`);
  if (!res.ok) throw new Error('ECMWF API error');
  const json = await res.json();
  if (json.error || !json.hourly || !json.daily) {
    throw new Error('ECMWF invalid payload');
  }

  const nowHour = new Date().getHours();
  const curIdx = Math.min(nowHour, json.hourly.time.length - 1);

  const current = {
    temperature_2m: json.hourly.temperature_2m[curIdx],
    relative_humidity_2m: Math.round(json.hourly.relative_humidity_2m[curIdx] ?? 72),
    apparent_temperature: json.hourly.apparent_temperature[curIdx],
    precipitation: json.hourly.precipitation[curIdx] ?? 0,
    weather_code: json.hourly.weather_code[curIdx] ?? 2,
    surface_pressure: json.hourly.surface_pressure[curIdx] ?? 1015,
    wind_speed_10m: json.hourly.wind_speed_10m[curIdx] ?? 3.0,
    wind_direction_10m: json.hourly.wind_direction_10m[curIdx] ?? 180
  };

  // Группировка почасовых данных ECMWF по датам
  const dayMap = new Map();
  json.hourly.time.forEach((iso, idx) => {
    const dateStr = iso.slice(0, 10);
    const hour = Number(iso.slice(11, 13));
    if (!dayMap.has(dateStr)) dayMap.set(dateStr, []);
    const pMm = json.hourly.precipitation[idx] ?? 0;
    const wmo = json.hourly.weather_code[idx] ?? 2;
    const pProb = pMm > 1.5 ? 85 : pMm > 0.3 ? 55 : pMm > 0.05 ? 25 : (wmo >= 51 ? 35 : wmo === 3 ? 6 : 2);

    dayMap.get(dateStr).push({
      hour,
      temp: json.hourly.temperature_2m[idx],
      feels: json.hourly.apparent_temperature[idx],
      pressureMm: Math.round((json.hourly.surface_pressure[idx] ?? 1015) * 0.750062),
      humidity: Math.round(json.hourly.relative_humidity_2m[idx] ?? 72),
      windSpeed: json.hourly.wind_speed_10m[idx] ?? 2.5,
      windDeg: json.hourly.wind_direction_10m[idx] ?? 180,
      precipProb: pProb,
      wmo
    });
  });

  const targetHours = [0, 3, 6, 9, 12, 15, 18, 21];
  const days = [];

  json.daily.time.slice(0, 10).forEach((dateStr, dIdx) => {
    const pts = dayMap.get(dateStr) || [];
    const tMax = json.daily.temperature_2m_max[dIdx];
    const tMin = json.daily.temperature_2m_min[dIdx];
    const dWmo = json.daily.weather_code[dIdx] ?? 2;
    const sun = computeSunTimes(lat, lon, dateStr);

    const slots = targetHours.map((th) => {
      const found = pts.find((p) => p.hour === th) || pts[0] || {
        temp: (tMax + tMin) / 2,
        feels: (tMax + tMin) / 2 - 2,
        pressureMm: 760,
        humidity: 75,
        windSpeed: 3.0,
        windDeg: 180,
        precipProb: 2,
        wmo: dWmo
      };
      return {
        hourLabel: `${th}:00`,
        hourNum: th,
        temp: found.temp,
        feels: found.feels,
        pressureMm: found.pressureMm,
        humidity: found.humidity,
        windSpeed: found.windSpeed,
        windDeg: found.windDeg,
        precipProb: found.precipProb,
        wmo: found.wmo
      };
    });

    days.push({
      dateStr,
      tMin,
      tMax,
      wmo: dWmo,
      sunrise: sun.sunrise,
      sunset: sun.sunset,
      durH: sun.durH,
      durM: sun.durM,
      slots
    });
  });

  return { current, days };
}

// Запрос к MET Norway (10 дней + почасовая разбивка на 8 интервалов)
async function fetchFromMetNorway(lat, lon) {
  const url = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${Number(lat).toFixed(4)}&lon=${Number(lon).toFixed(4)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('MET Norway API error');
  const json = await res.json();
  const series = json?.properties?.timeseries;
  if (!Array.isArray(series) || !series.length) throw new Error('Empty MET Norway series');

  const first = series[0];
  const inst = first.data.instant.details;
  const next1 = first.data.next_1_hours || first.data.next_6_hours || {};
  const curPrecip = next1.details?.precipitation_amount ?? 0;
  const curSymbol = next1.summary?.symbol_code || '';
  const curWmo = metSymbolToWmo(curSymbol, inst.cloud_area_fraction, curPrecip, inst.air_temperature);

  const current = {
    temperature_2m: inst.air_temperature,
    relative_humidity_2m: Math.round(inst.relative_humidity ?? 70),
    apparent_temperature: inst.air_temperature - (inst.wind_speed > 3 ? 1.8 : 0.5),
    precipitation: curPrecip,
    weather_code: curWmo,
    surface_pressure: inst.air_pressure_at_sea_level ?? 1015,
    wind_speed_10m: inst.wind_speed ?? 3.0,
    wind_direction_10m: inst.wind_from_direction ?? 200
  };

  const dayBuckets = new Map();
  series.forEach((entry) => {
    const dObj = new Date(entry.time);
    const yyyy = dObj.getFullYear();
    const mm = String(dObj.getMonth() + 1).padStart(2, '0');
    const dd = String(dObj.getDate()).padStart(2, '0');
    const hour = dObj.getHours();
    const localDate = `${yyyy}-${mm}-${dd}`;

    const details = entry.data.instant.details;
    const block = entry.data.next_1_hours || entry.data.next_6_hours || entry.data.next_12_hours || {};
    const pAmount = block.details?.precipitation_amount ?? 0;
    const sym = block.summary?.symbol_code || '';
    const wmo = metSymbolToWmo(sym, details.cloud_area_fraction, pAmount, details.air_temperature);
    const pProb = pAmount > 2 ? 85 : pAmount > 0.3 ? 55 : pAmount > 0 ? 25 : (details.cloud_area_fraction > 80 ? 12 : 2);

    if (!dayBuckets.has(localDate)) {
      dayBuckets.set(localDate, []);
    }
    dayBuckets.get(localDate).push({
      hour,
      temp: details.air_temperature,
      feels: details.air_temperature - ((details.wind_speed ?? 2) > 3.5 ? 2 : 1),
      pressureMm: Math.round((details.air_pressure_at_sea_level ?? 1015) * 0.750062),
      humidity: Math.round(details.relative_humidity ?? 72),
      windSpeed: details.wind_speed ?? 2.5,
      windDeg: details.wind_from_direction ?? 180,
      precipAmount: pAmount,
      precipProb: pProb,
      wmo
    });
  });

  const sortedDates = Array.from(dayBuckets.keys()).slice(0, 10);
  const days = [];

  sortedDates.forEach((dateStr) => {
    const pts = dayBuckets.get(dateStr);
    const temps = pts.map((p) => p.temp);
    const tMax = Math.max(...temps);
    const tMin = Math.min(...temps);
    const midPt = pts[Math.floor(pts.length / 2)] || pts[0];
    const sun = computeSunTimes(lat, lon, dateStr);

    const targetHours = [0, 3, 6, 9, 12, 15, 18, 21];
    const curve = [0.15, 0.0, 0.1, 0.45, 0.85, 1.0, 0.75, 0.4];
    const slots = targetHours.map((th, idx) => {
      let best = pts[0];
      let minDiff = 99;
      pts.forEach((p) => {
        const diff = Math.abs(p.hour - th);
        if (diff < minDiff) {
          minDiff = diff;
          best = p;
        }
      });

      const interpTemp = pts.length < 4
        ? tMin + (tMax - tMin) * curve[idx]
        : best.temp;

      return {
        hourLabel: `${th}:00`,
        hourNum: th,
        temp: interpTemp,
        feels: interpTemp - (best.windSpeed > 3.5 ? 2 : 1),
        pressureMm: best.pressureMm,
        humidity: best.humidity,
        windSpeed: best.windSpeed,
        windDeg: best.windDeg,
        precipProb: best.precipProb,
        wmo: best.wmo
      };
    });

    days.push({
      dateStr,
      tMin,
      tMax,
      wmo: midPt.wmo,
      sunrise: sun.sunrise,
      sunset: sun.sunset,
      durH: sun.durH,
      durM: sun.durM,
      slots
    });
  });

  while (days.length < 10 && days.length > 0) {
    const last = days[days.length - 1];
    const nextD = new Date(last.dateStr + 'T12:00:00');
    nextD.setDate(nextD.getDate() + 1);
    const nextDateStr = nextD.toISOString().slice(0, 10);
    const sun = computeSunTimes(lat, lon, nextDateStr);
    days.push({
      ...last,
      dateStr: nextDateStr,
      sunrise: sun.sunrise,
      sunset: sun.sunset,
      durH: sun.durH,
      durM: sun.durM
    });
  }

  return { current, days };
}

async function fetchWeatherByCoords(lat, lon, cityLabel, regionLabel = '', countryLabel = '') {
  const numLat = Number(lat);
  const numLon = Number(lon);
  if (!Number.isFinite(numLat) || !Number.isFinite(numLon)) {
    return;
  }

  showLoader(true, t().loadingForecast);
  hideError();

  try {
    let data;
    try {
      // Сначала запрашиваем европейскую модель ECMWF (совпадающую с Foreca / Sinoptik.ua)
      data = await fetchFromEcmwfModel(numLat, numLon);
    } catch {
      // Автоматический резерв на MET Norway (которая также базируется на ECMWF)
      data = await fetchFromMetNorway(numLat, numLon);
    }

    currentLocationMeta = {
      city: cityLabel || t().yourLocation,
      region: regionLabel || '',
      country: countryLabel || '',
      lat: numLat,
      lon: numLon
    };

    lastWeatherData = data;
    selectedDayIndex = 0;

    hideError();
    renderSinoptikView();
    loadNearbyRegionalCities(numLat, numLon, regionLabel, countryLabel);
  } catch (err) {
    if (!lastWeatherData) {
      showError(t().networkError);
    }
  } finally {
    showLoader(false);
  }
}

function renderSinoptikView() {
  if (!lastWeatherData) return;
  const dict = t();
  const { city, region, country } = currentLocationMeta;

  cityTitleLoc.textContent = `${dict.inCityPrefix} ${city}`;
  const subParts = [region, country].filter(Boolean);
  regionSubtitle.textContent = subParts.length ? subParts.join(', ') : dict.gpsSubtitle;

  crumbCountry.textContent = country || dict.worldCrumb;
  crumbRegion.textContent = region || dict.regionCrumb;
  crumbCity.textContent = city;

  renderDaysTabs();
  renderSelectedDayDetail(selectedDayIndex);

  weatherMain.classList.remove('hidden');
}

function renderDaysTabs() {
  daysTabsRow.innerHTML = '';
  const dict = t();
  const count = Math.min(displayDaysCount, lastWeatherData.days.length);

  for (let i = 0; i < count; i++) {
    const day = lastWeatherData.days[i];
    const dObj = new Date(day.dateStr + 'T12:00:00');
    const dayOfWeekNum = dObj.getDay();
    const isWeekend = dayOfWeekNum === 0 || dayOfWeekNum === 6;

    const weekdayName = dObj.toLocaleDateString(dict.locale, { weekday: 'long' });
    const dayNumber = String(dObj.getDate()).padStart(2, '0');
    const monthStr = dObj.toLocaleDateString(dict.locale, { day: 'numeric', month: 'long' });
    const monthParts = monthStr.split(' ');
    const monthGenitive = currentLang === 'en' ? monthParts[0] : (monthParts[1] || monthParts[0]);

    const meta = getWeatherMeta(day.wmo);

    const tab = document.createElement('div');
    tab.className = `day-tab ${i === selectedDayIndex ? 'active' : ''}`;
    tab.setAttribute('role', 'menuitem');
    tab.setAttribute('title', `${weekdayName}, ${dayNumber} ${monthGenitive}: ${meta.label}`);

    tab.innerHTML = `
      <span class="tab-weekday ${isWeekend ? 'weekend' : ''}">${weekdayName}</span>
      <span class="tab-daynum ${isWeekend ? 'weekend' : ''}">${dayNumber}</span>
      <span class="tab-month">${monthGenitive}</span>
      <div class="tab-weather-icon" title="${meta.label}">${meta.icon}</div>
      <div class="tab-temps">
        <div class="tab-temp-col">
          <span class="tab-temp-label">${dict.min}</span>
          <span class="tab-temp-val">${fmtTemp(day.tMin)}</span>
        </div>
        <div class="tab-temp-col">
          <span class="tab-temp-label">${dict.max}</span>
          <span class="tab-temp-val">${fmtTemp(day.tMax)}</span>
        </div>
      </div>
    `;

    tab.addEventListener('click', () => {
      selectedDayIndex = i;
      renderDaysTabs();
      renderSelectedDayDetail(i);
    });

    daysTabsRow.appendChild(tab);
  }
}

function renderSelectedDayDetail(dayIdx) {
  const day = lastWeatherData.days[dayIdx];
  if (!day) return;
  const dict = t();

  const now = new Date();
  const nowHH = String(now.getHours()).padStart(2, '0');
  const nowMM = String(now.getMinutes()).padStart(2, '0');

  const heroTempC = dayIdx === 0
    ? lastWeatherData.current.temperature_2m
    : day.tMax;
  const heroWmo = dayIdx === 0
    ? lastWeatherData.current.weather_code
    : day.wmo;
  const heroMeta = getWeatherMeta(heroWmo);

  const dObj = new Date(day.dateStr + 'T12:00:00');
  const dateCaption = dObj.toLocaleDateString(dict.locale, { day: 'numeric', month: 'long' });
  localTimeLabel.textContent = dayIdx === 0
    ? `${currentLocationMeta.city}: ${nowHH}:${nowMM}`
    : `${currentLocationMeta.city}, ${dateCaption}`;

  detailHeroIcon.innerHTML = heroMeta.icon;
  detailHeroIcon.setAttribute('title', heroMeta.label);
  detailCurrentTemp.textContent = `${fmtTemp(heroTempC)}${tempUnit}`;

  const clampedC = Math.max(-40, Math.min(40, heroTempC));
  const mercuryPct = ((clampedC + 40) / 80) * 100;
  thermoMercury.style.height = `${mercuryPct.toFixed(1)}%`;

  sunriseVal.textContent = day.sunrise;
  sunsetVal.textContent = day.sunset;
  daylightDuration.textContent = `${dict.daylightPrefix} ${day.durH} ${dict.hoursShort} ${String(day.durM).padStart(2, '0')} ${dict.minsShort}`;

  const currentHour = now.getHours();
  let activeSlotIdx = 4;
  if (dayIdx === 0) {
    let minDiff = 99;
    day.slots.forEach((s, idx) => {
      const diff = Math.abs(s.hourNum - currentHour);
      if (diff < minDiff) {
        minDiff = diff;
        activeSlotIdx = idx;
      }
    });
  }

  const timeCells = hourlyTimesRow.querySelectorAll('td');
  timeCells.forEach((td, idx) => {
    td.classList.toggle('active-hour-head', idx === activeSlotIdx);
  });

  document.querySelectorAll('.unit-temp-label').forEach((el) => {
    el.textContent = `°${tempUnit}`;
  });
  document.querySelectorAll('.unit-wind-label').forEach((el) => {
    el.textContent = windUnit === 'kmh' ? dict.unitKmh : dict.unitMs;
  });

  const iconsCells = day.slots.map((s, idx) => {
    const m = getWeatherMeta(s.wmo);
    return `<td class="${idx === activeSlotIdx ? 'active-hour-col' : ''}"><div class="table-cell-icon" title="${m.label}">${m.icon}</div></td>`;
  }).join('');

  const tempCells = day.slots.map((s, idx) =>
    `<td class="${idx === activeSlotIdx ? 'active-hour-col' : ''}">${fmtTemp(s.temp)}</td>`
  ).join('');

  const feelsCells = day.slots.map((s, idx) =>
    `<td class="${idx === activeSlotIdx ? 'active-hour-col' : ''}">${fmtTemp(s.feels)}</td>`
  ).join('');

  const pressureCells = day.slots.map((s, idx) =>
    `<td class="${idx === activeSlotIdx ? 'active-hour-col' : ''}">${s.pressureMm}</td>`
  ).join('');

  const humidityCells = day.slots.map((s, idx) =>
    `<td class="${idx === activeSlotIdx ? 'active-hour-col' : ''}">${s.humidity}</td>`
  ).join('');

  const windCells = day.slots.map((s, idx) => {
    const wInfo = getWindInfo(s.windDeg);
    return `<td class="${idx === activeSlotIdx ? 'active-hour-col' : ''}" title="${wInfo.full}">
      <span class="wind-cell-inner"><span class="wind-dir-arrow">${wInfo.arrow}</span>${fmtWind(s.windSpeed)}</span>
    </td>`;
  }).join('');

  const precipCells = day.slots.map((s, idx) => {
    const valStr = s.precipProb <= 2 ? '-' : `${s.precipProb}`;
    return `<td class="${idx === activeSlotIdx ? 'active-hour-col' : ''}">${valStr}</td>`;
  }).join('');

  hourlyTableBody.innerHTML = `
    <tr class="icons-row">${iconsCells}</tr>
    <tr class="temp-row">${tempCells}</tr>
    <tr class="feels-row">${feelsCells}</tr>
    <tr class="zebra-row">${pressureCells}</tr>
    <tr>${humidityCells}</tr>
    <tr class="zebra-row">${windCells}</tr>
    <tr>${precipCells}</tr>
  `;

  naturalSummaryText.textContent = generateNaturalSummary(day, currentLocationMeta.city);
  extraSummaryText.textContent = generateAtmosphericSummary(day);
}

// Мультиязычный генератор текстового описания погоды (RU / UK / EN)
function generateNaturalSummary(day, cityName) {
  const morningWmo = day.slots[3]?.wmo ?? day.wmo;
  const afternoonWmo = day.slots[5]?.wmo ?? day.wmo;
  const eveningWmo = day.slots[7]?.wmo ?? day.wmo;
  const maxProb = Math.max(...day.slots.map((s) => s.precipProb));

  if (currentLang === 'uk') {
    let sky = '';
    if (morningWmo === 0 && afternoonWmo === 0 && eveningWmo === 0) {
      sky = `У ${cityName} протягом усього дня небо залишатиметься ясним та безхмарним.`;
    } else if (morningWmo >= 2 && afternoonWmo === 0) {
      sky = `Вранці у ${cityName} можлива хмарність, але вже до полудня небо проясниться і залишиться чистим до вечора.`;
    } else if (morningWmo === 0 && afternoonWmo >= 2) {
      sky = `Ранок у ${cityName} буде сонячним, проте у другій половині дня з'являться хмари.`;
    } else if (afternoonWmo === 3 && eveningWmo === 3) {
      sky = `Хмарна погода триматиметься у ${cityName} з самого ранку і до пізнього вечора.`;
    } else {
      sky = `У ${cityName} протягом дня очікується мінлива хмарність із періодичними проясненнями.`;
    }

    let precip = 'Без опадів.';
    if (maxProb >= 70) {
      precip = day.tMax <= 0
        ? 'У другій половині дня очікується сніг, рекомендуємо одягнутися тепліше.'
        : 'Протягом дня очікується дощ — рекомендуємо взяти з собою парасольку.';
    } else if (maxProb >= 35) {
      precip = 'Вдень можливий невеликий короткочасний дощ.';
    }
    return `${sky} ${precip}`;
  }

  if (currentLang === 'en') {
    let sky = '';
    if (morningWmo === 0 && afternoonWmo === 0 && eveningWmo === 0) {
      sky = `The sky in ${cityName} will remain clear and sunny throughout the entire day.`;
    } else if (morningWmo >= 2 && afternoonWmo === 0) {
      sky = `Morning clouds in ${cityName} will clear up by noon, leaving sunny skies until the evening.`;
    } else if (morningWmo === 0 && afternoonWmo >= 2) {
      sky = `A sunny morning in ${cityName} will give way to clouds in the afternoon.`;
    } else if (afternoonWmo === 3 && eveningWmo === 3) {
      sky = `Cloudy weather will persist in ${cityName} from morning until late evening.`;
    } else {
      sky = `Partly cloudy skies with occasional sunny spells are expected in ${cityName} throughout the day.`;
    }

    let precip = 'No precipitation expected.';
    if (maxProb >= 70) {
      precip = day.tMax <= 0
        ? 'Snow is expected in the afternoon; please dress warmly.'
        : 'Rain is expected during the day — bringing an umbrella is recommended.';
    } else if (maxProb >= 35) {
      precip = 'Light brief showers are possible in the afternoon.';
    }
    return `${sky} ${precip}`;
  }

  // RU
  let skySentence = '';
  if (morningWmo === 0 && afternoonWmo === 0 && eveningWmo === 0) {
    skySentence = `В ${cityName} на протяжении всего дня небо будет оставаться ясным и безоблачным.`;
  } else if (morningWmo >= 2 && afternoonWmo === 0) {
    skySentence = `Утром в ${cityName} возможна облачность, но уже к полудню небо прояснится и останется чистым до вечера.`;
  } else if (morningWmo === 0 && afternoonWmo >= 2) {
    skySentence = `Утро в ${cityName} будет солнечным, однако во второй половине дня набегут облака.`;
  } else if (afternoonWmo === 3 && eveningWmo === 3) {
    skySentence = `Облачная погода будет держаться в ${cityName} с самого утра и до позднего вечера.`;
  } else {
    skySentence = `В ${cityName} в течение дня ожидается переменная облачность с периодическими прояснениями.`;
  }

  let precipSentence = 'Без осадков.';
  if (maxProb >= 70) {
    precipSentence = day.tMax <= 0
      ? 'Во второй половине дня ожидается снег, рекомендуем одеться теплее.'
      : 'В течение дня ожидается дождь — рекомендуем взять с собой зонт.';
  } else if (maxProb >= 35) {
    precipSentence = 'Днём вероятен небольшой кратковременный дождь.';
  }

  return `${skySentence} ${precipSentence}`;
}

function generateAtmosphericSummary(day) {
  const dict = t();
  const minP = Math.min(...day.slots.map((s) => s.pressureMm));
  const maxP = Math.max(...day.slots.map((s) => s.pressureMm));
  const maxW = Math.max(...day.slots.map((s) => s.windSpeed));
  const avgHum = Math.round(day.slots.reduce((a, b) => a + b.humidity, 0) / day.slots.length);
  const wUnit = windUnit === 'kmh' ? dict.unitKmh : dict.unitMs;

  if (currentLang === 'uk') {
    const windNote = maxW >= 7
      ? `Очікується відчутний вітер із поривами до ${fmtWind(maxW)} ${wUnit}.`
      : `Вітер слабкий та комфортний, до ${fmtWind(maxW)} ${wUnit}.`;
    return `Атмосферний тиск у цей день становитиме ${minP}–${maxP} мм рт. ст., середня відносна вологість повітря — близько ${avgHum}%. ${windNote}`;
  }

  if (currentLang === 'en') {
    const windNote = maxW >= 7
      ? `Noticeable wind is expected with gusts up to ${fmtWind(maxW)} ${wUnit}.`
      : `Light and comfortable breeze up to ${fmtWind(maxW)} ${wUnit}.`;
    return `Atmospheric pressure will range between ${minP}–${maxP} mmHg, with an average relative humidity around ${avgHum}%. ${windNote}`;
  }

  const windNote = maxW >= 7
    ? `Ожидается ощутимый ветер с порывами до ${fmtWind(maxW)} ${wUnit}.`
    : `Ветер слабый и комфортный, до ${fmtWind(maxW)} ${wUnit}.`;
  return `Атмосферное давление в этот день составит ${minP}–${maxP} мм рт. ст., средняя относительная влажность воздуха — около ${avgHum}%. ${windNote}`;
}

async function loadNearbyRegionalCities(lat, lon, regionName, countryName) {
  const dict = t();
  const titleParts = [regionName, countryName].filter(Boolean).join(', ');
  regionalHeading.textContent = titleParts
    ? `${dict.regionalTitle} (${titleParts})`
    : dict.nearbyTitle;

  if (weatherMapIframe) {
    weatherMapIframe.src = `https://www.openstreetmap.org/export/embed.html?bbox=${(lon - 0.6).toFixed(3)}%2C${(lat - 0.35).toFixed(3)}%2C${(lon + 0.6).toFixed(3)}%2C${(lat + 0.35).toFixed(3)}&layer=mapnik&marker=${lat.toFixed(4)}%2C${lon.toFixed(4)}`;
  }

  const offsets = [
    { dLat: 0.25, dLon: -0.35 },
    { dLat: -0.28, dLon: 0.32 },
    { dLat: 0.38, dLon: 0.28 },
    { dLat: -0.35, dLon: -0.30 },
    { dLat: 0.15, dLon: 0.50 },
    { dLat: -0.18, dLon: -0.52 }
  ];

  nearbyCitiesGrid.innerHTML = '';
  regionalSection.classList.remove('hidden');

  const seenNames = new Set([currentLocationMeta.city.toLowerCase()]);

  await Promise.all(
    offsets.map(async (off) => {
      const nLat = lat + off.dLat;
      const nLon = lon + off.dLon;
      try {
        const place = await reverseGeocode(nLat, nLon);
        const nameKey = place.city.toLowerCase();
        if (!place.city || seenNames.has(nameKey) || place.city === dict.yourLocation) return;
        seenNames.add(nameKey);

        const url = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${nLat.toFixed(3)}&lon=${nLon.toFixed(3)}`;
        const res = await fetch(url);
        if (!res.ok) return;
        const json = await res.json();
        const first = json?.properties?.timeseries?.[0];
        if (!first) return;

        const inst = first.data.instant.details;
        const next1 = first.data.next_1_hours || first.data.next_6_hours || {};
        const wmo = metSymbolToWmo(next1.summary?.symbol_code || '', inst.cloud_area_fraction, next1.details?.precipitation_amount ?? 0, inst.air_temperature);
        const meta = getWeatherMeta(wmo);

        const li = document.createElement('li');
        li.className = 'nearby-city-item';
        li.innerHTML = `
          <span class="nearby-city-link">${dict.weatherPrefix} ${place.city}</span>
          <div class="nearby-city-right">
            <span class="nearby-city-temp">${fmtTemp(inst.air_temperature)}</span>
            <div class="nearby-city-icon" title="${meta.label}">${meta.icon}</div>
          </div>
        `;
        li.addEventListener('click', () => {
          fetchWeatherByCoords(nLat, nLon, place.city, place.region, place.country);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        nearbyCitiesGrid.appendChild(li);
      } catch {
        // пропускаем точку
      }
    })
  );
}

function initWorldCitiesList() {
  const dict = t();
  worldCitiesList.innerHTML = '';
  dict.worldCities.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'world-city-li';
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'world-city-btn';
    btn.textContent = `${dict.weatherPrefix} ${item.label}`;
    btn.addEventListener('click', async () => {
      isGeoResolved = true;
      const results = await searchLocations(item.q);
      if (results.length > 0) {
        const best = results[0];
        fetchWeatherByCoords(best.latitude, best.longitude, best.name, best.admin1 || '', best.country || '');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
    li.appendChild(btn);
    worldCitiesList.appendChild(li);
  });
}

async function detectUserLocationAndLoad() {
  isGeoResolved = false;
  showLoader(true, t().loadingGeo);
  hideError();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        if (isGeoResolved) return;
        isGeoResolved = true;
        const { latitude, longitude } = pos.coords;
        const place = await reverseGeocode(latitude, longitude);
        await fetchWeatherByCoords(latitude, longitude, place.city, place.region, place.country);
      },
      async () => {
        if (isGeoResolved) return;
        isGeoResolved = true;
        await fallbackIpGeolocation();
      },
      { enableHighAccuracy: true, timeout: 6000, maximumAge: 60000 }
    );
  } else {
    isGeoResolved = true;
    await fallbackIpGeolocation();
  }
}

async function fallbackIpGeolocation() {
  showLoader(true, t().loadingGeo);

  // Источник 1: GeoJS (быстрый глобальный HTTPS сервис с поддержкой CORS и IPv6)
  try {
    const res = await fetch('https://get.geojs.io/v1/ip/geo.json');
    if (res.ok) {
      const data = await res.json();
      const lat = Number(data.latitude);
      const lon = Number(data.longitude);
      if (Number.isFinite(lat) && Number.isFinite(lon)) {
        const place = await reverseGeocode(lat, lon);
        await fetchWeatherByCoords(
          lat,
          lon,
          place.city !== t().yourLocation ? place.city : (data.city || t().yourLocation),
          place.region || data.region || '',
          place.country || data.country || ''
        );
        return;
      }
    }
  } catch {
    // переходим ко второму источнику
  }

  // Источник 2: BigDataCloud
  try {
    const res2 = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?localityLanguage=${currentLang}`);
    if (res2.ok) {
      const data2 = await res2.json();
      if (data2.latitude && data2.longitude) {
        await fetchWeatherByCoords(
          data2.latitude,
          data2.longitude,
          data2.city || data2.locality || t().yourLocation,
          data2.principalSubdivision || '',
          data2.countryName || ''
        );
        return;
      }
    }
  } catch {
    // игнорируем
  }

  showLoader(false);
  if (!lastWeatherData) {
    showError(t().networkError);
  }
}

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = cityInput.value.trim();
  if (!query) return;

  isGeoResolved = true;
  suggestionsList.classList.add('hidden');
  showLoader(true, `${t().searchingCity} «${query}»...`);
  hideError();

  try {
    const results = await searchLocations(query);
    if (!results.length) {
      showLoader(false);
      showError(t().notFound);
      return;
    }
    const best = results[0];
    await fetchWeatherByCoords(best.latitude, best.longitude, best.name, best.admin1 || '', best.country || '');
  } catch {
    showLoader(false);
    showError(t().notFound);
  }
});

cityInput.addEventListener('input', () => {
  const query = cityInput.value.trim();
  clearTimeout(debounceTimer);

  if (query.length < 2) {
    suggestionsList.classList.add('hidden');
    return;
  }

  debounceTimer = setTimeout(async () => {
    try {
      const results = await searchLocations(query);
      renderSuggestions(results);
    } catch {
      suggestionsList.classList.add('hidden');
    }
  }, 250);
});

function renderSuggestions(results) {
  if (!results.length) {
    suggestionsList.classList.add('hidden');
    return;
  }

  suggestionsList.innerHTML = '';
  results.forEach((loc) => {
    const item = document.createElement('div');
    item.className = 'sinoptik-suggestion-item';
    const region = [loc.admin1, loc.country].filter(Boolean).join(', ');
    item.innerHTML = `
      <span class="sug-city">${loc.name}</span>
      <span class="sug-region">${region}</span>
    `;
    item.addEventListener('click', () => {
      isGeoResolved = true;
      cityInput.value = loc.name;
      suggestionsList.classList.add('hidden');
      fetchWeatherByCoords(loc.latitude, loc.longitude, loc.name, loc.admin1 || '', loc.country || '');
    });
    suggestionsList.appendChild(item);
  });

  suggestionsList.classList.remove('hidden');
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-container')) {
    suggestionsList.classList.add('hidden');
  }
});

// Переключение языков UA / EN / RU
document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const newLang = btn.dataset.lang;
    if (!I18N[newLang] || newLang === currentLang) return;
    currentLang = newLang;
    localStorage.setItem('weather_lang', currentLang);
    applyStaticTranslations();

    if (lastWeatherData) {
      // Переводим название текущего города и региона на выбранный язык
      const place = await reverseGeocode(currentLocationMeta.lat, currentLocationMeta.lon);
      if (place.city) currentLocationMeta.city = place.city;
      if (place.region) currentLocationMeta.region = place.region;
      if (place.country) currentLocationMeta.country = place.country;
      renderSinoptikView();
      loadNearbyRegionalCities(currentLocationMeta.lat, currentLocationMeta.lon, currentLocationMeta.region, currentLocationMeta.country);
    }
  });
});

tab7Days.addEventListener('click', () => {
  displayDaysCount = 7;
  if (selectedDayIndex >= 7) selectedDayIndex = 0;
  tab7Days.classList.add('active');
  tab10Days.classList.remove('active');
  renderSinoptikView();
});

tab10Days.addEventListener('click', () => {
  displayDaysCount = 10;
  tab10Days.classList.add('active');
  tab7Days.classList.remove('active');
  renderSinoptikView();
});

toggleMapBtn.addEventListener('click', () => {
  mapContainer.classList.toggle('hidden');
});

shareWeatherBtn.addEventListener('click', async () => {
  if (!lastWeatherData) return;
  const day = lastWeatherData.days[selectedDayIndex];
  const shareText = `${t().weatherPrefix} ${currentLocationMeta.city} (${day.dateStr}): ${fmtTemp(day.tMin)} .. ${fmtTemp(day.tMax)}`;
  if (navigator.share) {
    try {
      await navigator.share({ title: `${t().brandTitle} — ${currentLocationMeta.city}`, text: shareText, url: window.location.href });
      return;
    } catch {
      // fallback
    }
  }
  try {
    await navigator.clipboard.writeText(`${shareText} — ${window.location.href}`);
    shareBtnText.textContent = t().copiedBtn;
    setTimeout(() => {
      shareBtnText.textContent = t().shareBtn;
    }, 2000);
  } catch {
    // ignore
  }
});

const settingsModal = document.getElementById('settingsModal');
document.getElementById('settingsBtn').addEventListener('click', () => {
  settingsModal.classList.remove('hidden');
});
document.getElementById('closeSettingsBtn').addEventListener('click', () => {
  settingsModal.classList.add('hidden');
});
settingsModal.addEventListener('click', (e) => {
  if (e.target === settingsModal) settingsModal.classList.add('hidden');
});

document.getElementById('tempUnitSelect').addEventListener('change', (e) => {
  tempUnit = e.target.value;
  renderSinoptikView();
});

document.getElementById('windUnitSelect').addEventListener('change', (e) => {
  windUnit = e.target.value;
  renderSinoptikView();
});

geoBtn.addEventListener('click', () => {
  cityInput.value = '';
  detectUserLocationAndLoad();
});
document.getElementById('logoHome').addEventListener('click', (e) => {
  e.preventDefault();
  cityInput.value = '';
  detectUserLocationAndLoad();
});

function showLoader(visible, text) {
  if (text && loaderText) loaderText.textContent = text;
  loader.classList.toggle('hidden', !visible);
}

function showError(msg) {
  errorText.textContent = msg;
  errorBanner.classList.remove('hidden');
}

function hideError() {
  errorBanner.classList.add('hidden');
}

window.addEventListener('DOMContentLoaded', () => {
  applyStaticTranslations();
  detectUserLocationAndLoad();
});
