angular.module('starter.services', [])

.factory('Collections', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var collections = [{
    id: 0,
    name: 'Veggie',
    lastText: 'Vegetales',
    face: 'img/Coleccion_Veggie.png',
    products:[
      {
        id : 0,
        name : 'Tomates',
        precio :  '13'
      },
      {
        id : 1,
        name : 'Lechuga',
        precio : '16'
      }
    ]
  }, {
    id: 1,
    name: 'Amazonia',
    lastText: 'Ejemplo de amazonia',
    face: 'img/Coleccion_Amazonia.png',
    products:[
      {
        id : 0,
        name : 'Tomates',
        precio :  '13'
      },
      {
        id : 1,
        name : 'Lechuga',
        precio : '16'
      }
    ]
  }, {
    id: 2,
    name: 'Oceanica',
    lastText: 'Ejemplo de oceanica',
    face: 'img/Coleccion_Oceanica.png',
    products:[
      {
        id : 0,
        name : 'Tomates',
        precio :  '13'
      },
      {
        id : 1,
        name : 'Lechuga',
        precio : '16'
      }
    ]
  }, {
    id: 3,
    name: 'Plumrose',
    lastText: 'Ejemplo de plumroses',
    face: 'img/Coleccion_Plumrose.png',
    products:[
      {
        id : 0,
        name : 'Tomates',
        precio :  '13'
      },
      {
        id : 1,
        name : 'Lechuga',
        precio : '16'
      }
    ]
  }];

  return {
    all: function() {
      return collections;
    },
    remove: function(collection) {
      collections.splice(collections.indexOf(collection), 1);
    },
    get: function(collectionId) {
      for (var i = 0; i < collections.length; i++) {
        if (collections[i].id === parseInt(collectionId)) {
          return collections[i];
        }
      }
      return null;
    },
    get_product: function(collection,productId) {
      for (var i = 0; i < collection.products.length; i++) {
        if (collection.products[i].id === parseInt(productId)) {
          return collection.products[i];
        }
      }
      return null;
    }
  };
});
