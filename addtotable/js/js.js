    var app = angular.module('myApp', []);
    app.controller('myController', function ($scope) {

        //default informations dans les row 
        $scope.infArray =
        [
            { 'user': 'ismail', 'email': 'ismail@gmail.com' },
            { 'user': 'ahmed', 'email': 'ahmed@live.com' },
            { 'user': 'houd', 'email': 'houd@sakim.com' }
        ];

        //nom et email default
        var app = angular.module('myApp', []);
app.controller('validateCtrl', function($scope) {
    $scope.user = 'John Doe';
    $scope.email = 'john.doe@gmail.com';
});

        // les info dans les tables .
        $scope.addRow = function () {
            if ($scope.user != undefined && $scope.email != undefined) {
                var inf = [];
                inf.user = $scope.user;
                inf.email = $scope.email;

                $scope.infArray.push(inf);

                // CLEAR TEXTBOX.
                $scope.user = null;
                $scope.email = null;
            }
        };

        // suppression row.
        $scope.removeRow = function () {
            var arrinf = [];
            angular.forEach($scope.infArray, function (value) {
                if (!value.Remove) {
                    arrinf.push(value);
                }
            });
            $scope.infArray = arrinf;
        };

        // nom & prenom dans la table.
        $scope.submit = function () {
            var arrinf = [];
            angular.forEach($scope.infArray, function (value) {
                arrinf.push('Name:' + value.user + ', email:' + value.email);
            });
            $scope.display = arrinf;
        };
    });
