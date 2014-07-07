var toDoApp = angular.module('toDoApp',[]);



toDoApp.service('listService', function () {
    this.listService = {};

    var tasks = [{task:'A', priority:'high',time:'16:40 7 july 2014'}, {task:'B', priority:'medium',time:'14:40 7 july 2014'} ];

    return tasks;

});

toDoApp.controller('showListsController', function ($scope, listService) {

    $scope.taskList = listService;
} );

toDoApp.controller('mainController',function($scope, listService){

   $scope.addTask= function (newTask, priority ) {
       if (newTask) {
           var d = new Date();
//           console.log('date', d.getDay());
           var taskObj = {
               task: newTask,
               priority: priority,
               time: d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear()
           };
           listService.push(taskObj);
//           console.log(listService);

       }
   }
    $scope.removeTask= function ($scope) {
                $scope.listService.splice(index,1);
    }
//      console.log($scope.priority);

})