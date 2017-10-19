var viewModel = function() {
  var self = this;

  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  self.catLevel = ko.observable('NewBorn');
  this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
  this.imgAttribution = ko.observable('https://flickr.com/photos/big');

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
    var count = 0;
    count++;
  };

    self.catLevel = ko.computed(function(){
      var clicks = self.clickCount();
      var title = self.catLevel();

      if (clicks < 10) {
        return ("NewBorn");
      } else if (clicks >= 10 && clicks < 15) {
        return("Infant");
      }
  });
};

ko.applyBindings(new viewModel());
