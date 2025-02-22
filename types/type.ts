interface Address {
  road: string;
  village: string;
  town: string;
  province: string;
  "ISO3166-2-lvl4": string;
  region: string;
  country: string;
  country_code: string;
}

interface LocationData {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  lat: string;
  lon: string;
  class: string;
  type: string;
  place_rank: number;
  importance: number;
  addresstype: string;
  name: string;
  display_name: string;
  address: Address;
  boundingbox: string[];
}

export interface NominatimResponse {
  data: LocationData[];
  status: number;
  statusText: string;
  headers: {
    "content-length": string;
    "content-type": string;
  };
  config: {
    transitional: {
      silentJSONParsing: boolean;
      forcedJSONParsing: boolean;
      clarifyTimeoutError: boolean;
    };
    adapter: string[];
    transformRequest: (null | any)[];
    transformResponse: (null | any)[];
    timeout: number;
    xsrfCookieName: string;
    xsrfHeaderName: string;
    maxContentLength: number;
    maxBodyLength: number;
    env: {};
    headers: {
      Accept: string;
    };
    method: string;
    url: string;
  };
  request: {};
}

export interface WeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: Array<WeatherEntry>;
  city: City;
}

interface WeatherEntry {
  dt: number;
  main: Main;
  weather: Array<Weather>;
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  rain?: Rain;
  sys: Sys;
  dt_txt: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Clouds {
  all: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Rain {
  "3h": number;
}

interface Sys {
  pod: string;
}

interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

interface Coord {
  lat: number;
  lon: number;
}

export interface WeatherDataProps {
  city: {
    name: string;
    country: string;
  };
  list: {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
      pressure: number;
    };
    weather: {
      main: string;
      description: string;
      icon: string;
    }[];
    wind: {
      speed: number;
    };
    dt_txt: string;
  }[];
}

export interface WeatherResponse {
  city: {
    name: string;
    country: string;
  };
  list: {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
      pressure: number;
    };
    weather: {
      main: string;
      description: string;
    }[];
    wind: {
      speed: number;
    };
  }[];
}

interface EarthquakeResponse {
  status: boolean;
  httpStatus: number;
  serverloadms: number;
  desc: string;
  metadata: EarthquakeMetadata;
  result: Earthquake[];
}

// Metadata interface'i
interface EarthquakeMetadata {
  date_starts: string;
  date_ends: string;
  total: number;
}

// Deprem verisi interface'i
export interface Earthquake {
  _id: string;
  earthquake_id: string;
  provider: string;
  title: string;
  date: string;
  mag: number;
  depth: number;
  geojson: GeoPoint;
  location_properties: LocationProperties;
  rev: null;
  date_time: string;
  created_at: number;
  location_tz: string;
}

// Coğrafi nokta interface'i
interface GeoPoint {
  type: "Point";
  coordinates: [number, number]; // [longitude, latitude]
}

// Konum özellikleri interface'i
interface LocationProperties {
  closestCity: City;
  epiCenter: EpiCenter;
  closestCities: City[];
  airports: Airport[];
}

// Şehir interface'i
interface City {
  name: string;
  cityCode: number;
  distance: number;
  population: number;
}

// Merkez üssü interface'i
interface EpiCenter {
  name: string;
  cityCode: number;
  population: number | null;
}

// Havalimanı interface'i
interface Airport {
  distance: number;
  name: string;
  code: string;
  coordinates: GeoPoint;
}
