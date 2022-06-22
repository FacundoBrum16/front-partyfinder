const cities = [
  {
    code: 'AR',
    name: 'Artigas',
  },
  {
    code: 'CA',
    name: 'Canelones',
  },
  {
    code: 'CL',
    name: 'Cerro Largo',
  },
  {
    code: 'CO',
    name: 'Colonia',
  },
  {
    code: 'DU',
    name: 'Durazno',
  },
  {
    code: 'FS',
    name: 'Flores',
  },
  {
    code: 'FD',
    name: 'Florida',
  },
  {
    code: 'LA',
    name: 'Lavalleja',
  },
  {
    code: 'MA',
    name: 'Maldonado',
  },
  {
    code: 'MO',
    name: 'Montevideo',
  },
  {
    code: 'PA',
    name: 'Paysandú',
  },
  {
    code: 'RN',
    name: 'Río Negro',
  },
  {
    code: 'RV',
    name: 'Rivera',
  },
  {
    code: 'RO',
    name: 'Rocha',
  },
  {
    code: 'SA',
    name: 'Salto',
  },
  {
    code: 'SJ',
    name: 'San José',
  },
  {
    code: 'SO',
    name: 'Soriano',
  },
  {
    code: 'TA',
    name: 'Tacuarembó',
  },
  {
    code: 'TT',
    name: 'Treinta y Tres',
  },
]

const getByCode = (code: string) =>
  cities.find((city) => city.code === code) ?? cities[9]

const uruguay = {
  cities,
  getByCode,
}

export default uruguay
