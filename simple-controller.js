// Simple AngularJS controller for text field validation example

angular.module('textControlsApp', [ ])

  // only the one controller in this little example
  .controller('AppCtrl', ['$scope', function($scope) {
    
    $scope.totalUnit = 0.0;
    $scope.unit = 0.0;
    $scope.firstUnitPrice = 5.26;
    $scope.secondUnitPrice = 7.20;
    $scope.thirdUnitPrice = 7.59;
    $scope.fourthUnitPrice = 8.02;
    $scope.fifthUnitPrice = 12.67;
    $scope.sixthUnitPrice = 14.61;

    $scope.firstUnit = 75;
    $scope.secondUnit = 125;
    $scope.thirdUnit = 100;
    $scope.fourthUnit = 100;
    $scope.fifthUnit = 200;
    $scope.sixthUnit = 0.0;

    $scope.firstUnitTotalPrice = 0.0;
    $scope.secondUnitTotalPrice = 0.0;
    $scope.thirdUnitTotalPrice = 0.0;
    $scope.fourthUnitTotalPrice = 0.0;
    $scope.fifthUnitTotalPrice = 0.0;
    $scope.sixthUnitTotalPrice = 0.0;
    $scope.totalEnergyCharge = 0.0;
    $scope.loadCount = 2;
    $scope.demandCharge = 42;
    $scope.totalDemandCharge = 0.0;
    $scope.vatPercentage = 5.0;
    $scope.totalVat = 0.0;
    $scope.totalBill = 0.0;
    $scope.principalAmount = 0.0;

    $scope.calculateElectricBill = function() {
        $scope.unit = $scope.totalUnit;
        if($scope.totalUnit > 75){
            $scope.firstUnit = 75;
        }else{
            $scope.firstUnit = $scope.totalUnit;
        }

        $scope.firstUnitTotalPrice = $scope.firstUnit * $scope.firstUnitPrice;
        $scope.firstUnitTotalPrice = parseFloat($scope.firstUnitTotalPrice.toFixed(2));
        $scope.unit = $scope.unit - $scope.firstUnit;

        if($scope.unit > 125){
            $scope.secondUnit = 125;
        }else{
            $scope.secondUnit = $scope.unit;
        }

        $scope.secondUnitTotalPrice = $scope.secondUnit * $scope.secondUnitPrice;
        $scope.secondUnitTotalPrice = parseFloat($scope.secondUnitTotalPrice.toFixed(2));
        $scope.unit = $scope.unit - $scope.secondUnit;

        if($scope.unit > 100){
            $scope.thirdUnit = 100;
        }else{
            $scope.thirdUnit = $scope.unit;
        }

        $scope.thirdUnitTotalPrice = $scope.thirdUnit * $scope.thirdUnitPrice;
        $scope.unit = $scope.unit - $scope.thirdUnit;

        if($scope.unit > 100){
            $scope.fourthUnit = 100;
        }else{
            $scope.fourthUnit = $scope.unit;
        }

        $scope.fourthUnitTotalPrice = $scope.fourthUnit * $scope.fourthUnitPrice;
        $scope.unit = $scope.unit - $scope.fourthUnit;

        if($scope.unit > 100){
            $scope.fifthUnit = 100;
        }else{
            $scope.fifthUnit = $scope.unit;
        }

        $scope.fifthUnitTotalPrice = $scope.fifthUnit * $scope.fifthUnitPrice;
        $scope.unit = $scope.unit - $scope.fifthUnit;

        $scope.sixthUnit = $scope.unit;
        $scope.sixthUnitTotalPrice = $scope.sixthUnit * $scope.sixthUnitPrice;

        $scope.totalEnergyCharge = $scope.firstUnitTotalPrice + $scope.secondUnitTotalPrice + $scope.thirdUnitTotalPrice + $scope.fourthUnitTotalPrice + $scope.fifthUnitTotalPrice + $scope.sixthUnitTotalPrice;
        $scope.totalEnergyCharge = parseFloat($scope.totalEnergyCharge.toFixed(2));
        $scope.totalDemandCharge = $scope.loadCount * $scope.demandCharge;
        $scope.principalAmount = $scope.totalEnergyCharge + $scope.totalDemandCharge;
        $scope.principalAmount = parseFloat($scope.principalAmount.toFixed(2));
        $scope.totalVat = $scope.principalAmount * ($scope.vatPercentage / 100);
        $scope.totalVat = parseFloat($scope.totalVat.toFixed(2));
        $scope.totalBill = $scope.principalAmount + $scope.totalVat;
        $scope.totalBill = parseFloat($scope.totalBill.toFixed(2));
    };

    $scope.demandChargeChanged = function() {
        $scope.totalDemandCharge = $scope.loadCount * $scope.demandCharge;
    };

    

    $scope.firstUnitPriceChanged = function() {
        $scope.firstUnitTotalPrice = $scope.firstUnit * $scope.firstUnitPrice;
    };

    $scope.secondUnitPriceChanged = function() {
        $scope.secondUnitTotalPrice = $scope.secondUnit * $scope.secondUnitPrice;
    };

    $scope.thirdUnitPriceChanged = function() {
        $scope.thirdUnitTotalPrice = $scope.thirdUnit * $scope.thirdUnitPrice;
    };

    $scope.fourthUnitPriceChanged = function() {
        $scope.fourthUnitTotalPrice = $scope.fourthUnit * $scope.fourthUnitPrice;
    };

    $scope.fifthUnitPriceChanged = function() {
        $scope.fifthUnitTotalPrice = $scope.fifthUnit * $scope.fifthUnitPrice;
    };

    $scope.sixthUnitPriceChanged = function() {
        $scope.sixthUnitTotalPrice = $scope.sixthUnit * $scope.sixthUnitPrice;
    };
}]);

