/**
 * Created by shaz on 2/20/2019.
 */
(function() {
  "use strict";
  angular
    .module("productManagement")
    .controller("ProductListCtrl", ["productResource", ProductListCtrl]);

  function ProductListCtrl(productResource) {
    var vm = this;

    productResource.query(function(data) {
      vm.products = data;
    });

    vm.showImage = false;

    vm.toggleImage = function() {
      vm.showImage = !vm.showImage;
    };
  }
})();
