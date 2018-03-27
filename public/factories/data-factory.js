(function(){
  angular.module('app')
    .factory('DataFactory', function($http){
      var data;
      return {
        setData,
        getData,
        getDetails,
        patch,
        getEmp
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
    function getEmp(data){
        return $http.get('/api/employee');
    }
    function patch(id, data){
      return $http.patch('/api/detail/'+ id, data);
  }
    });
})();
