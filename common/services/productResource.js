/**
 * Created by Shaz on 01/21/2019.
 */
(function() {
  "use strict";

  angular
    .module("common.services")
    .factory("productResource", ["$resource", productResource]);

  function productResource($resource) {
    return $resource("/api/products/:productId");
  }
})();
