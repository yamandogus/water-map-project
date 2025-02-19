export const weatherSuggestions = {
  Clouds:
    "Hava bugün bulutlu, dışarı çıkarken hava serin olabilir, hafif bir ceket alabilirsin.",
  Rain: "Hava bugün yağmurlu, şemsiyeni yanına almayı unutma!",
  Snow: "Dışarıda kar yağıyor, kalın giyin ve kaygan yollara dikkat et!",
  Clear:
    "Güneşli bir gün seni bekliyor, dışarıda vakit geçirmek için harika bir fırsat!",
  Overcast: "Gökyüzü kapalı, ama yağmur beklenmiyor. Hafif serin olabilir.",
  Wind: "Rüzgarlı bir hava var, dışarı çıkarken şapka veya atkı kullanabilirsin.",
  Thunderstorm: "Fırtına bekleniyor, mümkünse içeride kal ve dikkatli ol!",
  Mist: "Hava sisli, görüş mesafesi düşük olabilir, araç kullanıyorsan dikkatli olmalısın.",
  Hot: "Bugün hava çok sıcak, bol su içmeyi ve güneşten korunmayı unutma!",
};

export const dummyData = {
  city: {
    name: "Şehir Seçiniz",
    country: "TR",
  },
  list: [
    {
      dt: new Date().getTime() / 1000,
      main: {
        temp: 0,
        feels_like: 0,
        humidity: 0,
        pressure: 0,
      },
      weather: [
        {
          main: "Clear",
          description: "Hava durumu bilgisi için şehir seçin",
        },
      ],
      wind: {
        speed: 0,
      },
    },
  ],
};

export const backgroundImages = {
  Clouds:
    "https://images.unsplash.com/photo-1611928482473-7b27d24eab80?auto=format&w=1400&q=75",
  Rain: "https://images.unsplash.com/photo-1620385019253-b051a26048ce?auto=format&w=1400&q=75",
  Snow: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&w=1400&q=75",
  Clear:
    "https://images.unsplash.com/photo-1598717123623-19d2a85be3f7?auto=format&w=1400&q=75",
  Overcast:
    "https://images.unsplash.com/photo-1499956827185-0d63ee78a910?auto=format&w=1400&q=75",
  Wind: "https://images.unsplash.com/photo-1507619579562-f2e10da1ec86?auto=format&w=1400&q=75",
  Thunderstorm:
    "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?auto=format&w=1400&q=75",
  Mist: "https://images.unsplash.com/photo-1543968996-ee822b8176ba?auto=format&w=1400&q=75",
  Hot: "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?auto=format&w=1400&q=75",
  default:
    "https://images.unsplash.com/photo-1598717123623-19d2a85be3f7?auto=format&w=1400&q=75",
};
