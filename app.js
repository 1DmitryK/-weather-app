// Красивые анимированные SVG-иконки погоды
const WEATHER_SVGS = {
  clear: `
    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFF176"/>
          <stop offset="65%" stop-color="#FBC02D"/>
          <stop offset="100%" stop-color="#F57F17"/>
        </radialGradient>
      </defs>
      <g class="svg-sun-rays" stroke="#FBC02D" stroke-width="4" stroke-linecap="round">
        <line x1="48" y1="10" x2="48" y2="18"/>
        <line x1="48" y1="78" x2="48" y2="86"/>
        <line x1="10" y1="48" x2="18" y2="48"/>
        <line x1="78" y1="48" x2="86" y2="48"/>
        <line x1="21.1" y1="21.1" x2="26.8" y2="26.8"/>
        <line x1="69.2" y1="69.2" x2="74.9" y2="74.9"/>
        <line x1="74.9" y1="21.1" x2="69.2" y2="26.8"/>
        <line x1="26.8" y1="69.2" x2="21.1" y2="74.9"/>
      </g>
      <circle class="svg-sun-core" cx="48" cy="48" r="22" fill="url(#sunGrad)"/>
    </svg>
  `,
  partlyCloudy: `
    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="pSunGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFF59D"/>
          <stop offset="100%" stop-color="#F59E0B"/>
        </radialGradient>
        <linearGradient id="pCloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="100%" stop-color="#CBD5E1"/>
        </linearGradient>
      </defs>
      <g class="svg-sun-rays" style="transform-origin: 34px 36px" stroke="#FBBF24" stroke-width="3.5" stroke-linecap="round">
        <line x1="34" y1="10" x2="34" y2="16"/>
        <line x1="10" y1="36" x2="16" y2="36"/>
        <line x1="17" y1="19" x2="21.5" y2="23.5"/>
        <line x1="51" y1="19" x2="46.5" y2="23.5"/>
      </g>
      <circle class="svg-sun-core" style="transform-origin: 34px 36px" cx="34" cy="36" r="15" fill="url(#pSunGrad)"/>
      <path class="svg-cloud" d="M32 68H70C77.7 68 84 61.7 84 54C84 46.8 78.6 40.9 71.6 40.1C69.6 29.8 60.5 22 49.5 22C37.1 22 27 32.1 27 44.5C27 45.2 27 45.9 27.1 46.6C21.3 48.4 17 53.7 17 60C17 64.4 20.6 68 25 68H32Z" fill="url(#pCloudGrad)"/>
    </svg>
  `,
  cloudy: `
    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cloudFront" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#F8FAFC"/>
          <stop offset="100%" stop-color="#94A3B8"/>
        </linearGradient>
        <linearGradient id="cloudBack" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#CBD5E1"/>
          <stop offset="100%" stop-color="#64748B"/>
        </linearGradient>
      </defs>
      <path class="svg-cloud-back" d="M36 52H74C80.6 52 86 46.6 86 40C86 33.8 81.3 28.7 75.2 28.1C73.4 19.5 65.8 13 56.5 13C46 13 37.5 21.5 37.5 32C37.5 32.6 37.5 33.2 37.6 33.8C32.6 35.3 29 40 29 45.5C29 49.1 32.1 52 36 52Z" fill="url(#cloudBack)"/>
      <path class="svg-cloud" d="M26 70H68C75.7 70 82 63.7 82 56C82 48.8 76.6 42.9 69.6 42.1C67.6 31.8 58.5 24 47.5 24C35.1 24 25 34.1 25 46.5C25 47.2 25 47.9 25.1 48.6C19.3 50.4 15 55.7 15 62C15 66.4 18.6 70 23 70H26Z" fill="url(#cloudFront)"/>
    </svg>
  `,
  fog: `
    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fogCloud" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#E2E8F0"/>
          <stop offset="100%" stop-color="#94A3B8"/>
        </linearGradient>
      </defs>
      <path class="svg-cloud" d="M26 56H68C74.6 56 80 50.6 80 44C80 37.8 75.3 32.7 69.2 32.1C67.4 23.5 59.8 17 50.5 17C40 17 31.5 25.5 31.5 36C31.5 36.6 31.5 37.2 31.6 37.8C26.6 39.3 23 44 23 49.5C23 53.1 24.4 56 26 56Z" fill="url(#fogCloud)"/>
      <g stroke="#94A3B8" stroke-width="4" stroke-linecap="round">
        <line x1="22" y1="66" x2="74" y2="66"/>
        <line x1="28" y1="75" x2="68" y2="75"/>
        <line x1="34" y1="84" x2="62" y2="84"/>
      </g>
    </svg>
  `,
  rain: `
    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rainCloud" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#E2E8F0"/>
          <stop offset="100%" stop-color="#64748B"/>
        </linearGradient>
      </defs>
      <path class="svg-cloud" d="M26 60H68C75.7 60 82 53.7 82 46C82 38.8 76.6 32.9 69.6 32.1C67.6 21.8 58.5 14 47.5 14C35.1 14 25 24.1 25 36.5C25 37.2 25 37.9 25.1 38.6C19.3 40.4 15 45.7 15 52C15 56.4 18.6 60 23 60H26Z" fill="url(#rainCloud)"/>
      <g stroke="#38BDF8" stroke-width="4" stroke-linecap="round">
        <line class="svg-raindrop" x1="34" y1="68" x2="30" y2="80"/>
        <line class="svg-raindrop" x1="48" y1="68" x2="44" y2="80"/>
        <line class="svg-raindrop" x1="62" y1="68" x2="58" y2="80"/>
      </g>
    </svg>
  `,
  snow: `
    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="snowCloud" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#F1F5F9"/>
          <stop offset="100%" stop-color="#94A3B8"/>
        </linearGradient>
      </defs>
      <path class="svg-cloud" d="M26 60H68C75.7 60 82 53.7 82 46C82 38.8 76.6 32.9 69.6 32.1C67.6 21.8 58.5 14 47.5 14C35.1 14 25 24.1 25 36.5C25 37.2 25 37.9 25.1 38.6C19.3 40.4 15 45.7 15 52C15 56.4 18.6 60 23 60H26Z" fill="url(#snowCloud)"/>
      <g fill="#E0F2FE">
        <circle class="svg-snowflake" cx="34" cy="74" r="4"/>
        <circle class="svg-snowflake" cx="48" cy="78" r="4"/>
        <circle class="svg-snowflake" cx="62" cy="74" r="4"/>
      </g>
    </svg>
  `,
  storm: `
    <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="stormCloud" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#94A3B8"/>
          <stop offset="100%" stop-color="#334155"/>
        </linearGradient>
      </defs>
      <path class="svg-cloud" d="M26 58H68C75.7 58 82 51.7 82 44C82 36.8 76.6 30.9 69.6 30.1C67.6 19.8 58.5 12 47.5 12C35.1 12 25 22.1 25 34.5C25 35.2 25 35.9 25.1 36.6C19.3 38.4 15 43.7 15 50C15 54.4 18.6 58 23 58H26Z" fill="url(#stormCloud)"/>
      <polygon class="svg-lightning" points="50,52 38,70 48,70 44,86 60,65 49,65" fill="#FACC15"/>
    </svg>
  `
};

// Расшифровка WMO-кодов погоды
function getWeatherMeta(wmoCode) {
  const code = Number(wmoCode);
  if (code === 0) {
    return { label: 'Ясно', icon: WEATHER_SVGS.clear, theme: 'theme-clear' };
  }
  if (code === 1 || code === 2) {
    return { label: 'Переменная облачность', icon: WEATHER_SVGS.partlyCloudy, theme: 'theme-clear' };
  }
  if (code === 3) {
    return { label: 'Пасмурно', icon: WEATHER_SVGS.cloudy, theme: 'theme-cloudy' };
  }
  if (code === 45 || code === 48) {
    return { label: 'Туман', icon: WEATHER_SVGS.fog, theme: 'theme-cloudy' };
  }
  if ([51, 53, 55, 56, 57].includes(code)) {
    return { label: 'Морось', icon: WEATHER_SVGS.rain, theme: 'theme-rain' };
  }
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) {
    const heavy = [65, 82].includes(code);
    return {
      label: heavy ? 'Сильный дождь' : 'Дождь',
      icon: WEATHER_SVGS.rain,
      theme: 'theme-rain'
    };
  }
  if ([71, 73, 75, 77, 85, 86].includes(code)) {
    return { label: 'Снегопад', icon: WEATHER_SVGS.snow, theme: 'theme-snow' };
  }
  if ([95, 96, 99].includes(code)) {
    return { label: 'Гроза', icon: WEATHER_SVGS.storm, theme: 'theme-storm' };
  }
  return { label: 'Облачно', icon: WEATHER_SVGS.partlyCloudy, theme: 'theme-clear' };
}

// Направление ветра по градусам
function getWindDirection(deg) {
  if (deg === undefined || deg === null) return '';
  const dirs = ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ'];
  const idx = Math.round(((deg %= 360) < 0 ? deg + 360 : deg) / 45) % 8;
  const fullNames = {
    'С': 'Северный',
    'СВ': 'Северо-восточный',
    'В': 'Восточный',
    'ЮВ': 'Юго-восточный',
    'Ю': 'Южный',
    'ЮЗ': 'Юго-западный',
    'З': 'Западный',
    'СЗ': 'Северо-западный'
  };
  return `${fullNames[dirs[idx]]} (${dirs[idx]})`;
}

function formatTime(isoStr) {
  if (!isoStr) return '—';
  const parts = isoStr.split('T');
  return parts[1] ? parts[1].slice(0, 5) : isoStr;
}

// Элементы DOM
const brandIcon = document.getElementById('brandIcon');
const searchForm = document.getElementById('searchForm');
const cityInput = document.getElementById('cityInput');
const geoBtn = document.getElementById('geoBtn');
const suggestionsList = document.getElementById('suggestionsList');
const errorBanner = document.getElementById('errorBanner');
const errorText = document.getElementById('errorText');
const loader = document.getElementById('loader');
const loaderText = document.getElementById('loaderText');
const weatherContent = document.getElementById('weatherContent');

// Текущая погода DOM
const cityNameEl = document.getElementById('cityName');
const countryNameEl = document.getElementById('countryName');
const currentDateEl = document.getElementById('currentDate');
const currentIconEl = document.getElementById('currentIcon');
const currentTempEl = document.getElementById('currentTemp');
const currentDescEl = document.getElementById('currentDesc');
const feelsLikeEl = document.getElementById('feelsLike');
const currentWindEl = document.getElementById('currentWind');
const currentWindDirEl = document.getElementById('currentWindDir');
const currentPrecipEl = document.getElementById('currentPrecip');
const currentHumidityEl = document.getElementById('currentHumidity');
const currentPressureEl = document.getElementById('currentPressure');
const sunTimesEl = document.getElementById('sunTimes');
const uvIndexEl = document.getElementById('uvIndex');

// 5-дневный и почасовой DOM
const forecastGrid = document.getElementById('forecastGrid');
const hourlyTitle = document.getElementById('hourlyTitle');
const hourlyTrack = document.getElementById('hourlyTrack');

let lastWeatherData = null;
let selectedDayIndex = 0;
let debounceTimer = null;

brandIcon.innerHTML = WEATHER_SVGS.partlyCloudy;

// Поиск геокоординат по названию города
async function searchLocations(query) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=6&language=ru&format=json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Ошибка сети при поиске города');
  const data = await res.json();
  return data.results || [];
}

// Обратное геокодирование (определение названия города по GPS-координатам)
async function reverseGeocode(lat, lon) {
  try {
    const res = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=ru`
    );
    if (res.ok) {
      const data = await res.json();
      const city = data.city || data.locality || data.principalSubdivision || 'Ваше местоположение';
      const country = data.countryName || '';
      return { city, country };
    }
  } catch {
    // игнорируем и возвращаем стандартную подпись
  }
  return { city: 'Ваше местоположение', country: 'GPS' };
}

// Загрузка погоды по координатам
async function fetchWeatherByCoords(lat, lon, cityLabel, countryLabel = '') {
  showLoader(true, 'Загружаем точный прогноз погоды...');
  hideError();

  try {
    const params = new URLSearchParams({
      latitude: lat,
      longitude: lon,
      current: [
        'temperature_2m',
        'relative_humidity_2m',
        'apparent_temperature',
        'precipitation',
        'weather_code',
        'surface_pressure',
        'wind_speed_10m',
        'wind_direction_10m'
      ].join(','),
      hourly: [
        'temperature_2m',
        'precipitation_probability',
        'precipitation',
        'weather_code',
        'wind_speed_10m'
      ].join(','),
      daily: [
        'weather_code',
        'temperature_2m_max',
        'temperature_2m_min',
        'sunrise',
        'sunset',
        'uv_index_max',
        'precipitation_sum',
        'precipitation_probability_max',
        'wind_speed_10m_max',
        'wind_direction_10m_dominant'
      ].join(','),
      wind_speed_unit: 'ms',
      timezone: 'auto',
      forecast_days: '10'
    });

    const res = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`);
    if (!res.ok) throw new Error('Не удалось получить прогноз погоды');
    const data = await res.json();

    lastWeatherData = data;
    selectedDayIndex = 0;
    renderAllWeather(data, cityLabel, countryLabel);
  } catch (err) {
    showError(err.message || 'Произошла ошибка при загрузке данных');
  } finally {
    showLoader(false);
  }
}

function renderAllWeather(data, cityLabel, countryLabel) {
  const current = data.current;
  const daily = data.daily;
  const meta = getWeatherMeta(current.weather_code);

  document.body.className = meta.theme;

  cityNameEl.textContent = cityLabel;
  if (countryLabel) {
    countryNameEl.textContent = countryLabel;
    countryNameEl.classList.remove('hidden');
  } else {
    countryNameEl.classList.add('hidden');
  }

  const now = new Date();
  currentDateEl.textContent = now.toLocaleDateString('ru-RU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'
  });

  currentIconEl.innerHTML = meta.icon;
  const tempVal = Math.round(current.temperature_2m);
  currentTempEl.textContent = `${tempVal > 0 ? '+' : ''}${tempVal}°`;
  currentDescEl.textContent = meta.label;

  const feelsVal = Math.round(current.apparent_temperature);
  feelsLikeEl.textContent = `${feelsVal > 0 ? '+' : ''}${feelsVal}°C`;

  currentWindEl.textContent = `${current.wind_speed_10m.toFixed(1)} м/с`;
  currentWindDirEl.textContent = getWindDirection(current.wind_direction_10m);

  currentPrecipEl.textContent = `${current.precipitation.toFixed(1)} мм`;
  currentHumidityEl.textContent = `Влажность: ${current.relative_humidity_2m}%`;

  const pressureMm = Math.round(current.surface_pressure * 0.750062);
  currentPressureEl.textContent = `${pressureMm} мм`;

  const sunrise = formatTime(daily.sunrise?.[0]);
  const sunset = formatTime(daily.sunset?.[0]);
  sunTimesEl.textContent = `${sunrise} / ${sunset}`;
  uvIndexEl.textContent = `УФ-индекс: ${daily.uv_index_max?.[0]?.toFixed(0) ?? 0}`;

  renderFiveDays(daily);
  renderHourlyForDay(selectedDayIndex);

  weatherContent.classList.remove('hidden');
}

function renderFiveDays(daily) {
  forecastGrid.innerHTML = '';

  const daysCount = Math.min(10, daily.time.length);
  const allMin = Math.min(...daily.temperature_2m_min.slice(0, daysCount));
  const allMax = Math.max(...daily.temperature_2m_max.slice(0, daysCount));
  const tempSpan = Math.max(1, allMax - allMin);

  for (let i = 0; i < daysCount; i++) {
    const dateObj = new Date(daily.time[i] + 'T12:00:00');
    const isToday = i === 0;
    const isTomorrow = i === 1;

    let dayTitle = dateObj.toLocaleDateString('ru-RU', { weekday: 'short' });
    dayTitle = dayTitle.charAt(0).toUpperCase() + dayTitle.slice(1);
    if (isToday) dayTitle = 'Сегодня';
    if (isTomorrow) dayTitle = 'Завтра';

    const dayDateStr = dateObj.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long'
    });

    const meta = getWeatherMeta(daily.weather_code[i]);
    const tMax = Math.round(daily.temperature_2m_max[i]);
    const tMin = Math.round(daily.temperature_2m_min[i]);
    const precipSum = (daily.precipitation_sum?.[i] ?? 0).toFixed(1);
    const precipProb = daily.precipitation_probability_max?.[i] ?? 0;
    const windMax = (daily.wind_speed_10m_max?.[i] ?? 0).toFixed(1);

    const leftPct = ((daily.temperature_2m_min[i] - allMin) / tempSpan) * 70;
    const widthPct = Math.max(22, ((daily.temperature_2m_max[i] - daily.temperature_2m_min[i]) / tempSpan) * 100);

    const card = document.createElement('div');
    card.className = `day-card ${i === selectedDayIndex ? 'active' : ''}`;
    card.innerHTML = `
      <div class="day-name">${dayTitle}</div>
      <div class="day-date">${dayDateStr}</div>
      <div class="day-icon-wrap">${meta.icon}</div>
      <div class="day-desc">${meta.label}</div>
      <div class="day-temps">
        <span class="temp-max">${tMax > 0 ? '+' : ''}${tMax}°</span>
        <span class="temp-min">${tMin > 0 ? '+' : ''}${tMin}°</span>
      </div>
      <div class="temp-bar-wrap">
        <div class="temp-bar-fill" style="margin-left:${leftPct.toFixed(0)}%; width:${Math.min(100 - leftPct, widthPct).toFixed(0)}%"></div>
      </div>
      <div class="day-details">
        <div class="detail-pill" title="Сумма осадков и вероятность">
          <span class="detail-pill-left">
            <svg class="precip-badge" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
            </svg>
            Осадки
          </span>
          <span class="detail-pill-val precip-badge">${precipSum} мм (${precipProb}%)</span>
        </div>
        <div class="detail-pill" title="Максимальная скорость ветра за день">
          <span class="detail-pill-left">
            <svg class="wind-badge" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
            </svg>
            Ветер
          </span>
          <span class="detail-pill-val wind-badge">${windMax} м/с</span>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      selectedDayIndex = i;
      document.querySelectorAll('.day-card').forEach((el, idx) => {
        el.classList.toggle('active', idx === i);
      });
      renderHourlyForDay(i);
    });

    forecastGrid.appendChild(card);
  }
}

function renderHourlyForDay(dayIdx) {
  if (!lastWeatherData) return;
  const daily = lastWeatherData.daily;
  const hourly = lastWeatherData.hourly;
  const targetDate = daily.time[dayIdx];

  const dateObj = new Date(targetDate + 'T12:00:00');
  const formattedDay = dateObj.toLocaleDateString('ru-RU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });

  hourlyTitle.textContent = dayIdx === 0
    ? 'Почасовой прогноз на сегодня'
    : `Почасовой прогноз: ${formattedDay}`;

  hourlyTrack.innerHTML = '';

  const dayIndices = [];
  hourly.time.forEach((iso, idx) => {
    if (iso.startsWith(targetDate)) {
      const hour = Number(iso.slice(11, 13));
      if (hour % 3 === 0) {
        dayIndices.push(idx);
      }
    }
  });

  dayIndices.slice(0, 8).forEach((idx) => {
    const timeStr = hourly.time[idx].slice(11, 16);
    const temp = Math.round(hourly.temperature_2m[idx]);
    const prob = hourly.precipitation_probability?.[idx] ?? 0;
    const wind = (hourly.wind_speed_10m?.[idx] ?? 0).toFixed(1);
    const meta = getWeatherMeta(hourly.weather_code[idx]);

    const item = document.createElement('div');
    item.className = 'hour-item';
    item.innerHTML = `
      <span class="hour-time">${timeStr}</span>
      <div class="hour-icon">${meta.icon}</div>
      <span class="hour-temp">${temp > 0 ? '+' : ''}${temp}°</span>
      <span class="hour-meta" title="Вероятность осадков">💧 ${prob}%</span>
      <span class="hour-wind" title="Скорость ветра">💨 ${wind} м/с</span>
    `;
    hourlyTrack.appendChild(item);
  });
}

// Автоматическое определение местоположения:
// 1. Сначала запрашиваем точный браузерный GPS (navigator.geolocation)
// 2. Если GPS отклонён или недоступен — определяем местоположение по IP, чтобы сразу показать погоду там, где находится пользователь
async function detectUserLocationAndLoad() {
  showLoader(true, 'Определяем ваше местоположение (GPS)...');
  hideError();

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        const place = await reverseGeocode(latitude, longitude);
        await fetchWeatherByCoords(latitude, longitude, place.city, place.country);
      },
      async () => {
        await fallbackIpGeolocation();
      },
      { enableHighAccuracy: true, timeout: 7000, maximumAge: 60000 }
    );
  } else {
    await fallbackIpGeolocation();
  }
}

async function fallbackIpGeolocation() {
  showLoader(true, 'Определяем ваше местоположение...');
  try {
    // Попытка 1: ipwho.is
    const res = await fetch('https://ipwho.is/');
    if (res.ok) {
      const data = await res.json();
      if (data && data.success !== false && data.latitude && data.longitude) {
        await fetchWeatherByCoords(
          data.latitude,
          data.longitude,
          data.city || 'Ваша локация',
          data.country || ''
        );
        return;
      }
    }
  } catch {
    // Переходим ко второму источнику
  }

  try {
    // Попытка 2: bigdatacloud
    const res2 = await fetch('https://api.bigdatacloud.net/data/reverse-geocode-client?localityLanguage=ru');
    if (res2.ok) {
      const data2 = await res2.json();
      if (data2.latitude && data2.longitude) {
        const city = data2.city || data2.locality || 'Ваша локация';
        const country = data2.countryName || '';
        await fetchWeatherByCoords(data2.latitude, data2.longitude, city, country);
        return;
      }
    }
  } catch {
    // Если всё заблокировано
  }

  showLoader(false);
  showError('Разрешите доступ к геолокации в браузере или введите нужный вам город в строке поиска выше.');
}

// Обработка поиска города через форму (только по запросу пользователя)
searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = cityInput.value.trim();
  if (!query) return;

  suggestionsList.classList.add('hidden');
  showLoader(true, `Ищем «${query}»...`);
  hideError();

  try {
    const results = await searchLocations(query);
    if (!results.length) {
      showLoader(false);
      showError(`Город «${query}» не найден. Проверьте написание.`);
      return;
    }
    const best = results[0];
    await fetchWeatherByCoords(best.latitude, best.longitude, best.name, best.country || '');
  } catch {
    showLoader(false);
    showError('Не удалось выполнить поиск города.');
  }
});

// Автодополнение при вводе города
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
  }, 260);
});

function renderSuggestions(results) {
  if (!results.length) {
    suggestionsList.classList.add('hidden');
    return;
  }

  suggestionsList.innerHTML = '';
  results.forEach((loc) => {
    const item = document.createElement('div');
    item.className = 'suggestion-item';
    const region = [loc.admin1, loc.country].filter(Boolean).join(', ');
    item.innerHTML = `
      <span class="suggestion-main">${loc.name}</span>
      <span class="suggestion-sub">${region}</span>
    `;
    item.addEventListener('click', () => {
      cityInput.value = loc.name;
      suggestionsList.classList.add('hidden');
      fetchWeatherByCoords(loc.latitude, loc.longitude, loc.name, loc.country || '');
    });
    suggestionsList.appendChild(item);
  });

  suggestionsList.classList.remove('hidden');
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-wrapper')) {
    suggestionsList.classList.add('hidden');
  }
});

// Кнопка повторного запроса GPS
geoBtn.addEventListener('click', () => {
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

// При открытии сайта сразу определяем текущее местоположение пользователя
window.addEventListener('DOMContentLoaded', () => {
  detectUserLocationAndLoad();
});
