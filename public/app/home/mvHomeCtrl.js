define([], function () {

  function mvHomeCtrl() {
    var vm = this;

    vm.courses = [
      { name: 'C#', featured: true, published: new Date('2014-01-01') },
      { name: 'Ruby', featured: true, published: new Date('2014-02-01') },
      { name: 'Python', featured: true, published: new Date('2014-03-01') }
    ];

  }

  return mvHomeCtrl;
});