const defualtState = [
  {
    name: 'John Smith',
    address: '1756 James St. Rochester, NY 14613',
    birthday: '10/12/1993',
    id: 101,
    height: "5'1''",
    weight: 105,
  },
  {
    name: 'Kaison Aguirre',
    address: '1949 Carson St. Covington, KY 41011',
    birthday: '9/26/1987',
    id: 102,
    height: "5'5''",
    weight: 124.2,
  },
  {
    name: 'Gracie Guest',
    address: '968 Buena Vista Ave. Eugene, OR 97401',
    birthday: '9/16/1979',
    id: 103,
    height: "5'03''",
    weight: 168,
  },
  {
    name: 'Saarah Jefferson',
    address: '843 James Martin Circle Columbus, OH 43215',
    birthday: '10/22/1972',
    id: 104,
    height: "5'7''",
    weight: 132,
  },
  {
    name: 'Carly Raymond',
    address: '14314 Margaret St, Sugarland, TX 77478',
    birthday: '1/6/1964',
    id: 105,
    height: "5'7''",
    weight: 142,
  },
  {
    name: 'Keeva Hodges',
    address: '1096 Aspen Court Boston, MA 02115',
    birthday: '1/7/1994',
    id: 106,
    height: "6'01''",
    weight: 165,
  },
  {
    name: 'Seth Corrigan',
    address: '4736 Middleville Road City of Commerce, CA 90040',
    birthday: '10/12/1993',
    id: 107,
    height: "6'6''",
    weight: 202,
  },
  {
    name: 'Chandler Grant',
    address: '3037 Ray Court Fayetteville, NC 28305',
    birthday: '06/12/1995',
    id: 108,
    height: "5'3'",
    weight: 120,
  },
  {
    name: 'Hugo Richmond',
    address: '4748 Lake Road Atlantic City, NJ 08401',
    birthday: '04/14/1997',
    id: 109,
    height: "6'3''",
    weight: 160,
  },
  {
    name: 'Corey Wells',
    address: '583 Brown Avenue Abbeville, SC 29620',
    birthday: '10/12/1993',
    id: 110,
    height: "6'11''",
    weight: 120,
  },
  {
    name: 'Toyah Hernandez',
    address: '2320 Musgrave St. Atlanta, GA 30303',
    birthday: '12/5/1951',
    id: 111,
    height: "5'4''",
    weight: 120,
  },
];

export const handlePatientsReducer = (state = defualtState, action) => {
  switch (action.type) {
    case 'hello':
      return action.user;
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
