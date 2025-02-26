import axios from 'axios';

export interface EnvironmentalImpact {
  energySaving: string;
  waterConservation: string;
  carbonReduction: string;
  waterQuality: {
    ph: number;
    temperature: number;
    turbidity: number;
  };
  lastUpdate: string;
}

export interface WaterQualityData {
  ph: number;
  temperature: number;
  turbidity: number;
  conductivity: number;
  dissolved_oxygen: number;
  total_dissolved_solids: number;
  chlorine: number;
  nitrate: number;
  phosphate: number;
  coliform_bacteria: number;
}

export interface WaterSource {
  id: string;
  name: string;
  type: 'dam' | 'lake' | 'river' | 'treatment_plant';
  coordinates: {
    lat: number;
    lng: number;
  };
}

// API anahtarlarını environment variables'dan alıyoruz
const MEERSENS_API_KEY = process.env.NEXT_PUBLIC_MEERSENS_API_KEY;
const WATER_QUALITY_API_KEY = process.env.NEXT_PUBLIC_WATER_QUALITY_API_KEY;

// Carbon Interface API anahtarı
const CARBON_API_KEY = 'ThDr7ldKGmcDS7GODWY3ng';

export class EnvironmentalDataService {
  // Su kalitesi verilerini Meersens API'den alır
  static async getWaterQualityData(location: { lat: number; lng: number }) {
    try {
      const response = await axios.get(`https://api.meersens.com/water/quality`, {
        params: {
          lat: location.lat,
          lng: location.lng,
          api_key: MEERSENS_API_KEY,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Su kalitesi verileri alınamadı:', error);
      return null;
    }
  }

  // Tüm çevresel etki verilerini birleştiren ana fonksiyon
  static async getEnvironmentalImpact(waterSource: WaterSource): Promise<EnvironmentalImpact | null> {
    try {
      // Su kalitesi verilerini al
      const waterQuality = await this.getWaterQualityData(waterSource.coordinates);
      
      // Örnek su kullanımı (m³/yıl)
      const annualWaterUsage = 1000000; 
      
      // Karbon ayak izi verilerini al
      const carbonData = await this.getCarbonFootprint(annualWaterUsage);
      
      // Verimlilik oranı (0-1 arası)
      const efficiency = 0.85;
      
      // Enerji tasarrufu hesapla
      const energySaved = this.calculateEnergySavings(annualWaterUsage, efficiency);

      // Şu anki zamanı formatla
      const now = new Date();
      const lastUpdate = now.toLocaleString('tr-TR', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });

      return {
        energySaving: `${Math.round(efficiency * 100)}%`,
        waterConservation: `Yıllık ${(annualWaterUsage * efficiency / 1000000).toFixed(1)} milyon m³`,
        carbonReduction: `${Math.round(carbonData?.data.attributes.carbon_kg / 1000)} ton CO2/yıl`,
        waterQuality: {
          ph: waterQuality?.ph || 7.0,
          temperature: waterQuality?.temperature || 18.0,
          turbidity: waterQuality?.turbidity || 2.0,
        },
        lastUpdate: lastUpdate,
      };
    } catch (error) {
      console.error('Çevresel etki verileri alınamadı:', error);
      return null;
    }
  }

  // Enerji tasarrufu hesaplaması
  static calculateEnergySavings(waterUsage: number, efficiency: number): number {
    // kWh/m³ cinsinden enerji tüketimi
    const standardEnergyPerCubicMeter = 0.6; 
    const actualEnergyPerCubicMeter = standardEnergyPerCubicMeter * (1 - efficiency);
    const energySaved = (standardEnergyPerCubicMeter - actualEnergyPerCubicMeter) * waterUsage;
    return energySaved;
  }

  // Karbon ayak izi hesaplaması için Carbon Interface API
  static async getCarbonFootprint(waterUsage: number) {
    try {
      // Gerçek API yerine mock veri kullanıyoruz
      const mockCarbonData = {
        data: {
          attributes: {
            carbon_kg: waterUsage * 0.5 // Her m³ su için 0.5 kg CO2 emisyonu varsayıyoruz
          }
        }
      };
      
      // API çağrısını simüle etmek için küçük bir gecikme
      await new Promise(resolve => setTimeout(resolve, 300));
      
      return mockCarbonData;
    } catch (error) {
      console.error('Karbon ayak izi hesaplanamadı:', error);
      return null;
    }
  }
}

export class WaterQualityService {
  // Mock veri döndüren fonksiyon
  private static generateMockData(): WaterQualityData {
    return {
      ph: 6.5 + Math.random() * 2, // 6.5-8.5 arası
      temperature: 15 + Math.random() * 10, // 15-25 arası
      turbidity: 1 + Math.random() * 5, // 1-6 arası
      conductivity: 500 + Math.random() * 500, // 500-1000 arası
      dissolved_oxygen: 5 + Math.random() * 4, // 5-9 arası
      total_dissolved_solids: 200 + Math.random() * 400, // 200-600 arası
      chlorine: 1 + Math.random() * 4, // 1-5 arası
      nitrate: 5 + Math.random() * 7, // 5-12 arası
      phosphate: 0.01 + Math.random() * 0.15, // 0.01-0.16 arası
      coliform_bacteria: Math.random() > 0.8 ? 1 : 0 // %20 ihtimalle 1, genelde 0
    };
  }

  // Su kalitesi verilerini al (mock veri kullanıyor)
  static async getWaterQualityData(source: WaterSource): Promise<WaterQualityData | null> {
    try {
      // Gerçek API yerine mock veri kullanıyoruz
      const mockData = this.generateMockData();
      
      // Gerçek API çağrısını simüle etmek için küçük bir gecikme ekliyoruz
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return mockData;
    } catch (error) {
      console.error('Su kalitesi verileri alınamadı:', error);
      return null;
    }
  }

  // Su kalitesi değerlendirmesi
  static evaluateWaterQuality(data: WaterQualityData): {
    status: 'excellent' | 'good' | 'fair' | 'poor',
    details: string[]
  } {
    const issues: string[] = [];
    let status: 'excellent' | 'good' | 'fair' | 'poor' = 'excellent';

    // pH değerlendirmesi
    if (data.ph < 6.5 || data.ph > 8.5) {
      issues.push('pH değeri normal aralığın dışında');
      status = 'poor';
    }

    // Bulanıklık değerlendirmesi (NTU)
    if (data.turbidity > 5) {
      issues.push('Yüksek bulanıklık tespit edildi');
      status = status === 'excellent' ? 'fair' : status;
    }

    // Çözünmüş oksijen değerlendirmesi (mg/L)
    if (data.dissolved_oxygen < 6) {
      issues.push('Düşük çözünmüş oksijen seviyesi');
      status = 'poor';
    }

    // İletkenlik değerlendirmesi (μS/cm)
    if (data.conductivity > 1000) {
      issues.push('Yüksek iletkenlik tespit edildi');
      status = status === 'excellent' ? 'fair' : status;
    }

    // Toplam çözünmüş katı madde değerlendirmesi (mg/L)
    if (data.total_dissolved_solids > 500) {
      issues.push('Yüksek çözünmüş katı madde miktarı');
      status = status === 'excellent' ? 'good' : status;
    }

    // Klor değerlendirmesi (mg/L)
    if (data.chlorine > 4) {
      issues.push('Yüksek klor seviyesi');
      status = 'poor';
    }

    // Nitrat değerlendirmesi (mg/L)
    if (data.nitrate > 10) {
      issues.push('Yüksek nitrat seviyesi');
      status = 'poor';
    }

    // Fosfat değerlendirmesi (mg/L)
    if (data.phosphate > 0.1) {
      issues.push('Yüksek fosfat seviyesi');
      status = status === 'excellent' ? 'fair' : status;
    }

    // Koliform bakteri değerlendirmesi (CFU/100mL)
    if (data.coliform_bacteria > 0) {
      issues.push('Koliform bakteri tespit edildi');
      status = 'poor';
    }

    return {
      status,
      details: issues
    };
  }

  // WHO standartlarına göre içilebilirlik kontrolü
  static isDrinkable(data: WaterQualityData): boolean {
    return (
      data.ph >= 6.5 &&
      data.ph <= 8.5 &&
      data.turbidity <= 5 &&
      data.dissolved_oxygen >= 6 &&
      data.total_dissolved_solids <= 500 &&
      data.chlorine <= 4 &&
      data.nitrate <= 10 &&
      data.coliform_bacteria === 0
    );
  }
}
