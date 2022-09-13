const NUMBER_OF_SPHERES = [
  {
    value: 1,
    mod: 0,
    desc: 'Una esfera',
  },
  {
    value: 2,
    mod: -1,
    desc: 'Dos esferas',
  },
  {
    value: 3,
    mod: -2,
    desc: 'Tres esferas',
  },
  {
    value: 4,
    mod: -3,
    desc: 'Cuatro esferas',
  },
  {
    value: 5,
    mod: -4,
    desc: 'Cinco esferas',
  },
];

const HIGHEST_SPHERE = [
  {
    value: 1,
    mod: -1,
    desc: 'Nivel 1',
  },
  {
    value: 2,
    mod: -2,
    desc: 'Nivel 2',
  },
  {
    value: 3,
    mod: -3,
    desc: 'Nivel 3',
  },
  {
    value: 4,
    mod: -4,
    desc: 'Nivel 4',
  },
  {
    value: 5,
    mod: -5,
    desc: 'Nivel 5',
  },
];

const NUMBER_OF_TARGETS = [
  {
    valueMin: 1,
    valueMax: 1,
    mod: 0,
    desc: 'Un objetivo',
  },
  {
    valueMin: 2,
    valueMax: 3,
    mod: -2,
    desc: 'Grupo de entre dos y tres objetivos',
  },
  {
    valueMin: 4,
    valueMax: 5,
    mod: -4,
    desc: 'Grupo de entre cuatro o cinco objetivos',
  },
  {
    valueMin: 6,
    valueMax: 7,
    mod: -6,
    desc: 'Grupo de entre seis y siete objetivos',
  },
  {
    valueMin: 8,
    valueMax: 10,
    mod: -8,
    desc: 'Grupo de entre ocho y diez objetivos',
  },
  {
    valueMin: 11,
    valueMax: 15,
    mod: -10,
    desc: 'Grupo de entre diez y quince objetivos',
  },
  {
    valueMin: 16,
    valueMax: 20,
    mod: -12,
    desc: 'Grupo de entre quince y veinte objetivos',
  },
  {
    valueMin: 21,
    valueMax: 30,
    mod: -14,
    desc: 'Grupo de entre veinte y treinta objetivos',
  },
  {
    valueMin: 31,
    valueMax: 50,
    mod: -14,
    desc: 'Grupo de entre treinta y cincuenta objetivos',
  },
];

const DURATION = [
  {
    value: 0,
    mod: 0,
    desc: 'Instantáneo',
  },
  {
    value: 10,
    mod: -1,
    desc: 'Diez segundos',
  },
  {
    value: 60,
    mod: -2,
    desc: 'Un minuto',
  },
  {
    value: 600,
    mod: -4,
    desc: 'Diez minutos',
  },
  {
    value: 1800,
    mod: -5,
    desc: 'Treinta minutos',
  },
  {
    value: 6000,
    mod: -6,
    desc: 'Una hora',
  },
  {
    value: 18000,
    mod: -7,
    desc: 'Tres horas',
  },
  {
    value: 32000,
    mod: -8,
    desc: 'Seis horas',
  },
  {
    value: 64000,
    mod: -9,
    desc: 'Doce horas',
  },
  {
    value: 128000,
    mod: -10,
    desc: 'Un día',
  },
];

const DISTANCE = [
  {
    valueMin: 1,
    valueMax: 1,
    mod: 0,
    desc: 'Una casilla o menos',
  },
  {
    valueMin: 2,
    valueMax: 2,
    mod: -1,
    desc: 'Hasta dos casillas',
  },
  {
    valueMin: 3,
    valueMax: 5,
    mod: -2,
    desc: 'Hasta cinco casillas',
  },
  {
    valueMin: 6,
    valueMax: 8,
    mod: -3,
    desc: 'Hasta ocho casillas',
  },
  {
    valueMin: 9,
    valueMax: 11,
    mod: -4,
    desc: 'Hasta once casillas',
  },
  {
    valueMin: 12,
    valueMax: 15,
    mod: -5,
    desc: 'Hasta quince casillas',
  },
  {
    valueMin: 16,
    valueMax: 20,
    mod: -6,
    desc: 'Hasta veinte casillas',
  },
  {
    valueMin: 21,
    valueMax: 25,
    mod: -7,
    desc: 'Hasta veinticinco casillas',
  },
  {
    valueMin: 26,
    valueMax: 30,
    mod: -8,
    desc: 'Hasta treinta casillas',
  },
];

const AREA = [
  {
    valueMin: 1,
    valueMax: 1,
    mod: 0,
    desc: 'Una casilla o menos',
  },
  {
    valueMin: 2,
    valueMax: 2,
    mod: -1,
    desc: 'Hasta dos casillas',
  },
  {
    valueMin: 3,
    valueMax: 4,
    mod: -2,
    desc: 'Hasta cuatro casillas',
  },
  {
    valueMin: 5,
    valueMax: 6,
    mod: -3,
    desc: 'Hasta seis casillas',
  },
  {
    valueMin: 7,
    valueMax: 8,
    mod: -4,
    desc: 'Hasta ocho casillas',
  },
  {
    valueMin: 9,
    valueMax: 10,
    mod: -5,
    desc: 'Hasta diez casillas',
  },
  {
    valueMin: 11,
    valueMax: 12,
    mod: -6,
    desc: 'Hasta doce casillas',
  },
  {
    valueMin: 13,
    valueMax: 14,
    mod: -7,
    desc: 'Hasta catorce casillas',
  },
  {
    valueMin: 15,
    valueMax: 16,
    mod: -8,
    desc: 'Hasta dieciséis casillas',
  },
  {
    valueMin: 17,
    valueMax: 18,
    mod: -9,
    desc: 'Hasta dieciocho casillas',
  },
  {
    valueMin: 19,
    valueMax: 20,
    mod: -10,
    desc: 'Hasta veinte casillas',
  },
];

const WEIGHT = [
  {
    valueMin: 0,
    valueMax: 5,
    mod: 0,
    desc: 'Hast cinco kilos',
  },
  {
    valueMin: 6,
    valueMax: 10,
    mod: -1,
    desc: 'Hasta diez kilos',
  },
  {
    valueMin: 11,
    valueMax: 50,
    mod: -3,
    desc: 'Hasta cincuenta kilos',
  },
  {
    valueMin: 51,
    valueMax: 100,
    mod: -4,
    desc: 'Hasta cien kilos',
  },
  {
    valueMin: 101,
    valueMax: 250,
    mod: -5,
    desc: 'Hasta doscientos cincuenta kilos',
  },
  {
    valueMin: 251,
    valueMax: 500,
    mod: -6,
    desc: 'Hasta media tonelada',
  },
  {
    valueMin: 501,
    valueMax: 1000,
    mod: -7,
    desc: 'Hasta una tonelada',
  },
  {
    valueMin: 10001,
    valueMax: 2000,
    mod: -8,
    desc: 'Hasta dos toneladas',
  },
  {
    valueMin: 2001,
    valueMax: 3500,
    mod: -9,
    desc: 'Hasta tres toneladas y media',
  },
  {
    valueMin: 3501,
    valueMax: 5000,
    mod: -10,
    desc: 'Hasta cinco toneladas',
  },
];

const DISTANCE_WITH_CORRESPONDENCE = [
  {
    valueMax: 100,
    mod: 0,
    desc: 'Hasta cien metros',
  },
  {
    valueMax: 500,
    mod: -1,
    desc: 'Hasta quinientos',
  },
  {
    valueMax: 1000,
    mod: -3,
    desc: 'Hasta un kilómetro',
  },
  {
    value: 5000,
    mod: -4,
    desc: 'Hasta cinco kilómetros',
  },
  {
    value: 25000,
    mod: -5,
    desc: 'Hasta veinticinco kilómetros',
  },
  {
    value: 100000,
    mod: -6,
    desc: 'Hasta cien kilómetros',
  },
  {
    value: 500000,
    mod: -7,
    desc: 'Hasta quinientos kilómetros',
  },
  {
    value: 1000000,
    mod: -8,
    desc: 'Hasta mil kilómetros',
  },
  {
    value: 5000000,
    mod: -9,
    desc: 'Hasta cinco mil kilómetros',
  },
  {
    value: 10000000,
    mod: -10,
    desc: 'Hasta diez mil kilómetros',
  },
];

const TIME_WITH_TIME = [
  {
    valueMax: 1,
    mod: 0,
    desc: 'Hasta un día',
  },
  {
    valueMax: 7,
    mod: -1,
    desc: 'Hasta una semana',
  },
  {
    valueMax: 31,
    mod: -2,
    desc: 'Hasta un mes',
  },
  {
    value: 365,
    mod: -4,
    desc: 'Hasta un año',
  },
  {
    value: 365 * 5,
    mod: -5,
    desc: 'Hasta cinco años',
  },
  {
    value: 365 * 15,
    mod: -6,
    desc: 'Hasta quince años',
  },
  {
    value: 365 * 50,
    mod: -7,
    desc: 'Hasta cincuenta años',
  },
  {
    value: 365 * 100,
    mod: -8,
    desc: 'Hasta cien años',
  },
  {
    value: 365 * 250,
    mod: -9,
    desc: 'Hasta doscientos años',
  },
  {
    value: 365 * 500,
    mod: -10,
    desc: 'Hasta quinientos',
  },
];

export default {
  NUMBER_OF_SPHERES,
  HIGHEST_SPHERE,
  NUMBER_OF_TARGETS,
  DURATION,
  DISTANCE,
  AREA,
  WEIGHT,
  DISTANCE_WITH_CORRESPONDENCE,
  TIME_WITH_TIME,
};
