define(['toastr'], function (toastr) {

  function svc(mvToastr) {

    var service = {
      notify: notify,
      error: error
    };

    function notify(msg) {
      mvToastr.success(msg);
    }

    function error(msg) {
      mvToastr.error(msg);
    }

    return service;
  }

  return svc;
});