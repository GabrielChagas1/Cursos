let data =  [
  {
    id: 1,
    name: "Pizzaria Guloso",
    'daily-hours': 2,
    'total-hours': 1,
    created_at: 1617753484744,
  },
  {
    id: 2,
    name: "Newsletter Otis Brasil",
    'daily-hours': 2,
    'total-hours': 10,
    created_at: 1617753484744,
  }
];

module.exports = {
  get(){
    return data;
  },

  update(newData){
    data = newData;
  }

}