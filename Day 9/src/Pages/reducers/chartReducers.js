const initialState = {
    data: [
        {name: 'Fruits',min: 25,max: 33,amt: 100,},
        {name: 'Veg',min: 45,max: 60,amt: 100,},
        {name: 'Cereal',min: 10,max: 25,amt: 100,},
        {name: 'Tree',min: 25,max: 35,amt: 100,},
        {name: 'Flower',min: 75,max: 89,amt: 100,},
        {name: 'Herbs',min: 44,max: 55,amt: 100,},
        {name: 'Grass',min: 70,max: 81,amt: 100,},
      ],
      data01: [
        { name: 'Fruits', value: 33 },
        { name: 'Veg', value: 60 },
        { name: 'Cereals', value: 25 },
        { name: 'Tree', value: 35 },
        { name: 'Flower', value: 89 },
        { name: 'Herb', value: 55 },
        { name: 'Grass', value: 81 },
      ],
      data02: [
        { name: 'Fruits', value: 25 },
        { name: 'Veg', value: 45 },
        { name: 'Cereals', value: 10 },
        { name: 'Tree', value: 25 },
        { name: 'Flower', value: 75 },
        { name: 'Herb', value: 44 },
        { name: 'Grass', value: 70 },
      ],
      dataa: [
        {name: '1995',gardenplants: 800,otherplant: 9800,},
        {name: '2000',gardenplants: 2000,otherplant: 8100,},
        {name: '2005',gardenplants: 1000,otherplant: 7200,},
        {name: '2010',gardenplants: 3080,otherplant: 4908,},
        {name: '2015',gardenplants: 2890,otherplant: 4100,},
        {name: '2020',gardenplants: 4390,otherplant: 8800,},
        {name: '2023',gardenplants: 7490,otherplant: 9300,},
      ],
      dataa1: [
        {name: '2011', Appcount: 30,UsersCount: 1000},
        {name: '2013', Appcount: 170,UsersCount: 1500},   
        {name: '2015', Appcount: 400,UsersCount: 2000},   
        {name: '2017', Appcount: 908,UsersCount: 4000},   
        {name: '2019', Appcount: 1300,UsersCount: 6000},   
        {name: '2021', Appcount: 2000,UsersCount: 8000},   
        {name: '2023', Appcount: 5000,UsersCount: 10000}  
    ]
    
  };
  
  const chartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_STATIC_CHART_DATA':
        return state; 
      default:
        return state;
    }
  };
  
  export default chartReducer;
  