import { NextResponse } from 'next/server';

const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/forecast";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon');
    
    const API_KEY = process.env.WEATHER_API;

    const response = await fetch(
      `${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&cnt=40&lang=tr`
    );

    if (!response.ok) {
      throw new Error('Weather API yanıt vermedi');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Weather API hatası:', error);
    return NextResponse.json(
      { error: 'Hava durumu verileri alınamadı' }, 
      { status: 500 }
    );
  }
}
