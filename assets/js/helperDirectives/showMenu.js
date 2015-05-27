CK.directive('showMenu', function($document){

return { 
  restrict: 'A',
  link: function($scope, $element, $attr){
      var cl = ($attr.showMenu + 'Show');

      $scope[cl] = false;

      $element.bind('click', function(){
        $scope[cl] = !$scope[cl];
        $scope.$digest();
      });

      $document.bind('click', function(event){
        var sameElement = $(event.target)
          .parents()
          .is($element)
          || $element[0] === event.target;

        if (sameElement)
          return;
          
        $scope[cl] = false;
        $scope.$digest();
      });
  }
};
});