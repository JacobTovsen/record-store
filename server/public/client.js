let myApp = angular.module( 'myApp', [] );

myApp.controller( 'LaunchpadController', ['$http', function($http){
    // use "vm" as the name in script
    let vm = this;
    //use nickname in HTML

    vm.getNewRecord = function (){
        let record = {
            artist: vm.inArtist,
            album: vm.inAlbum,
            year: vm.inYear,
            genre: vm.inGenre
        }
        vm.addRecord(record);
    }

    vm.addRecord = function (record){
        $http({
            method: 'POST',
            url: '/record',
            data: record
        }).then( function(response) {
            //clear input fields
            vm.getAllRecords();
            vm.inArtist = '';
            vm.inAlbum = '';
            vm.inYear = '';
            vm.inGenre = '';
        }).catch( function(response){
            console.log('Something bad happened in catch on POST:', response.status );
        });
    }

    vm.getAllRecords = function (){
        $http({
            method: 'GET',
            url: '/record'
        }).then( function(response) {
            console.log(`Got response from the server:`, response.data );
            vm.records = response.data;
            console.log( 'your records:', vm.records);
            // vm.displayAllRecords(vm.records);
        }).catch(function(error){
            console.log(`Error getting records in GET: ${error}`);
        });
    }
    vm.getAllRecords();
}]);
