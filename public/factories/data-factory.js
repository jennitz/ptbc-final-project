(function(){
  angular.module('app')
    .factory('DataFactory', function($http){
      var data;
      return {
        setData,
        getData,
        getDetails
      };
      function setData(newData){
        data = newData;
      }
      function getData(){
        return data;
      }
      function getDetails(){
        return $http.get('/api/detail');
    }
    function post(data){
        return $http.post('/api/list', data);
    }
    });
})();
