import type { Guia } from "../types";

export const masaMadre: Guia = {
  slug: "masa-madre",
  tipo: "guia",
  titulo: "Guía de Cuidados de tu Masa Madre",
  resumen:
    "Todo lo que necesitas saber para mantener viva y saludable tu masa madre, explicado paso a paso como si estuviéramos juntas en la cocina.",
  fechaPublicacion: "2026-07-14",
  nivel: "Principiante",
  tiempoLectura: "8 minutos",
  secciones: [
    {
      id: "bienvenida",
      titulo: "Bienvenida",
      icono: "🌾",
      parrafos: [
        "Si llegaste hasta aquí es porque ya tienes (o estás por tener) algo maravilloso entre manos: un cultivo vivo de levaduras y bacterias que, con un poco de harina, agua y paciencia, puede convertirse en el mejor pan que hayas probado.",
        "La masa madre no es complicada, pero sí es viva. Eso significa que responde a tu cuidado, a la temperatura de tu cocina y a la constancia con la que la alimentas. En esta guía te voy a explicar, con calma y sin tecnicismos, todo lo que necesitas para mantenerla sana durante años.",
      ],
    },
    {
      id: "antes-de-comenzar",
      titulo: "Antes de comenzar",
      icono: "🧺",
      parrafos: [
        "Antes de meterte de lleno en la rutina de alimentación, hay tres cosas que te van a ahorrar dolores de cabeza:",
      ],
      lista: [
        "Usa un frasco de vidrio con boca ancha, para poder ver y remover con facilidad.",
        "Pesa siempre en gramos, no en tazas: la precisión es lo que da consistencia a tu masa madre.",
        "Ten a la mano harina de trigo (o la que estés usando para tu cultivo) y agua a temperatura ambiente, nunca helada ni hirviendo.",
      ],
      destacados: [
        {
          tipo: "importante",
          texto:
            "Evita tapar el frasco de forma hermética: tu masa madre necesita liberar el gas que produce al fermentar. Usa una tapa floja o un trapo sujeto con liga.",
        },
      ],
    },
    {
      id: "alimentacion",
      titulo: "Cómo alimentar tu masa madre",
      icono: "🍞",
      parrafos: [
        "Alimentar tu masa madre es simplemente darle harina y agua fresca para que las levaduras sigan activas. La proporción clásica es 1:1:1: una parte de masa madre, una parte de harina y una parte de agua, en peso.",
        "Por ejemplo: 50 g de masa madre, 50 g de harina y 50 g de agua. Mezcla bien hasta que no queden grumos secos, marca el nivel en el frasco con una liga o plumón, y déjala reposar a temperatura ambiente.",
      ],
      lista: [
        "Si la usas a diario: aliméntala una vez al día.",
        "Si la usas cada pocos días: aliméntala 4-6 horas antes de usarla y vuelve a alimentarla después.",
        "Si no la vas a usar pronto: pasa a la sección de Refrigeración.",
      ],
      destacados: [
        {
          tipo: "alimentacion",
          texto:
            "Una masa madre bien alimentada duplica o triplica su volumen entre 4 y 8 horas después de comer, dependiendo de la temperatura de tu cocina.",
        },
        {
          tipo: "consejo",
          texto:
            "Si usas harina blanca, procura que sea harina de fuerza (alta en proteína). Le da más estructura a tu masa madre y ayuda a que fermente con mayor fuerza.",
        },
      ],
    },
    {
      id: "refrigeracion",
      titulo: "Refrigeración",
      icono: "❄️",
      parrafos: [
        "Si no horneas todos los días, lo más práctico es guardar tu masa madre en el refrigerador. El frío ralentiza la actividad de las levaduras, así que puedes alimentarla con mucha menos frecuencia.",
        "Una masa madre refrigerada se mantiene feliz alimentándola una vez por semana. Solo saca el frasco, retira una parte si ya está muy crecida, alimenta con tu proporción de siempre y regrésala al refrigerador después de que empiece a burbujear (30-60 minutos a temperatura ambiente es suficiente antes de refrigerar de nuevo).",
      ],
      destacados: [
        {
          tipo: "refrigeracion",
          texto:
            "No te preocupes si ves un líquido oscuro en la superficie (se le conoce como 'hooch'). Es normal cuando tiene hambre: solo mézclalo o retíralo antes de alimentar.",
        },
      ],
    },
    {
      id: "reactivacion",
      titulo: "Reactivación",
      icono: "🔥",
      parrafos: [
        "¿Tu masa madre estuvo dormida en el refrigerador por semanas o meses? No hay nada de qué preocuparse, casi siempre se puede recuperar.",
      ],
      lista: [
        "Saca el frasco del refrigerador y deja que llegue a temperatura ambiente.",
        "Descarta todo menos 20-30 g de masa madre.",
        "Aliméntala con tu proporción 1:1:1 y espera a que duplique su volumen.",
        "Repite este ciclo de alimentación cada 12 horas durante 2-3 días, hasta que vuelva a mostrar burbujas fuertes y buen aroma.",
      ],
      destacados: [
        {
          tipo: "consejo",
          texto:
            "Si después de 3-4 alimentaciones seguidas no ves actividad, prueba cambiar de harina (una integral o de centeno suele dar un empujón extra de levaduras).",
        },
      ],
    },
    {
      id: "lista",
      titulo: "Cómo saber si está lista",
      icono: "✅",
      parrafos: [
        "Antes de usar tu masa madre para hornear, necesitas confirmar que está en su punto máximo de fuerza. La señal más confiable es la prueba de flotación:",
      ],
      lista: [
        "Toma una cucharadita de tu masa madre recién alimentada.",
        "Colócala suavemente en un vaso con agua a temperatura ambiente.",
        "Si flota, está lista para usarse. Si se hunde, todavía necesita más tiempo.",
      ],
      destacados: [
        {
          tipo: "recomendacion",
          texto:
            "Además de la prueba de flotación, fíjate en el aroma: debe oler ácido y ligeramente afrutado, nunca a alcohol fuerte ni a algo desagradable.",
        },
      ],
    },
    {
      id: "problemas-frecuentes",
      titulo: "Problemas frecuentes",
      icono: "🛠️",
      parrafos: [
        "Es normal encontrarte con baches en el camino, sobre todo al principio. Aquí las situaciones más comunes:",
      ],
      lista: [
        "No crece: probablemente necesita más alimentaciones seguidas, o el ambiente está muy frío. Busca un lugar más cálido de tu cocina (encima del refrigerador suele funcionar).",
        "Huele muy fuerte a acetona o alcohol: tiene hambre. Descarta la mitad y aliméntala de inmediato.",
        "Le salió moho (manchas verdes, rosas o negras): lamentablemente hay que desecharla y empezar un cultivo nuevo; no se puede salvar con seguridad.",
        "Se ve muy líquida y sin fuerza: prueba con una harina de mejor calidad y reduce el tiempo entre alimentaciones.",
      ],
    },
    {
      id: "limpieza",
      titulo: "Limpieza",
      icono: "🧼",
      parrafos: [
        "Cada 2-4 semanas conviene 'darle mantenimiento' a tu frasco para que los residuos secos de los bordes no afecten el sabor.",
      ],
      lista: [
        "Aprovecha el momento en que la masa madre está baja (recién alimentada o después de usarla) para cambiarla a un frasco limpio.",
        "Lava el frasco anterior con agua caliente y jabón, sin residuos de jabón al enjuagar.",
        "Sécalo por completo antes de regresar tu masa madre.",
      ],
    },
  ],
  consejoMaestra:
    "Una masa madre no se cuida por reloj, se cuida por observación. Yo aprendí a leer la mía antes de aprender a leer una receta: el olor, las burbujas, cómo se siente al removerla con la cuchara. No te obsesiones con horarios exactos ni con seguir cada paso al pie de la letra los primeros meses; obsérvala todos los días y, poco a poco, ella misma te va a decir lo que necesita. Ese es el verdadero secreto detrás de cualquier pan con buena miga y buen sabor.",
  faq: [
    {
      pregunta: "¿Puedo usar harina integral en lugar de harina blanca?",
      respuesta:
        "Sí, incluso puede ayudar a fortalecer una masa madre débil porque tiene más levaduras naturales. Puedes usarla siempre o alternarla con harina blanca en tus alimentaciones.",
    },
    {
      pregunta: "¿Cuánto tiempo puede sobrevivir sin que la alimente?",
      respuesta:
        "Refrigerada, puede aguantar 2-3 semanas sin problema, e incluso más tiempo si está muy fuerte, aunque necesitará varias alimentaciones de reactivación al sacarla.",
    },
    {
      pregunta: "¿Es normal que el color cambie con el tiempo?",
      respuesta:
        "Un tono grisáceo o un poco más oscuro en la superficie es normal, especialmente si usas harina integral. Lo que nunca es normal son las manchas de colores brillantes (moho), que sí indican que hay que desecharla.",
    },
    {
      pregunta: "¿Puedo darle un nombre a mi masa madre?",
      respuesta:
        "¡Por supuesto! Muchas alumnas de la Escuela le ponen nombre a la suya. No cambia nada en lo técnico, pero ayuda a crear el hábito de revisarla y cuidarla como el cultivo vivo que es.",
    },
  ],
  recetasRelacionadas: ["pan-de-elote"],
  guiasRelacionadas: [],
};
