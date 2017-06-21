var _ = require("lodash");

const features = [{
    'name': 'feature1',
    'tags': [{
      'weight': 10,
      'tagName': 't1'
    }, {
      'weight': 20,
      'tagName': 't2'
    }, {
      'weight': 30,
      'tagName': 't3'
    }]
  },
  {
    'name': 'feature2',
    'tags': [{
      'weight': 40,
      'tagName': 't1'
    }, {
      'weight': 5,
      'tagName': 't2'
    }, {
      'weight': 70,
      'tagName': 't3'
    }]
  },
  {
    'name': 'feature3',
    'tags': [{
      'weight': 50,
      'tagName': 't1'
    }, {
      'weight': 2,
      'tagName': 't2'
    }, {
      'weight': 80,
      'tagName': 't3'
    }]
  }
];

const result = _.flatMap(features, item => {
  return _.map(item.tags, tag => _.defaults({ name: item.name }, tag));
});

console.log(result);
/*
[ { name: 'feature1', weight: 10, tagName: 't1' },
  { name: 'feature1', weight: 20, tagName: 't2' },
  { name: 'feature1', weight: 30, tagName: 't3' },
  { name: 'feature2', weight: 40, tagName: 't1' },
  { name: 'feature2', weight: 5, tagName: 't2' },
  { name: 'feature2', weight: 70, tagName: 't3' },
  { name: 'feature3', weight: 50, tagName: 't1' },
  { name: 'feature3', weight: 2, tagName: 't2' },
  { name: 'feature3', weight: 80, tagName: 't3' } ] */



  
