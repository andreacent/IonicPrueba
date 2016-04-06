angular.module('starter.services', [])

.factory('Collections', function() {
/*
//PRUEBA
.factory('Collections', function($http, ApiEndpoint) {
        console.log('ApiEndpoint', ApiEndpoint);

        var getApiData = function() {
            return $http.get(ApiEndpoint.url + '/products');
        };

        return {
            getApiData: getApiData
        };
        
//END PRUEBA */

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
        name : 'Pavo',
        precio :  '13'
      },
      {
        id : 1,
        name : 'Mero',
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
        name : 'Pulpo',
        precio :  '29'
      },
      {
        id : 1,
        name : 'Calamar',
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
        name : 'Tocineta',
        precio :  '13'
      },
      {
        id : 1,
        name : 'Nuggets de pollo',
        precio : '16'
      }
    ]
  }];

  return {
    all: function() {
      return collections;
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
