var Cat = function() {
  var self = this;

  self.clickCount = ko.observable(0);
  self.name = ko.observable('Tabby');
  self.catLevel = ko.observable('NewBorn');
  self.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
  self.imgAttribution = ko.observable('https://flickr.com/photos/big');
  self.nicknames = ko.observableArray([
        { name: 'Fabby' },
        { name: 'Tabby' },
        { name: 'Shabby' }
    ]);

    self.catLevel = ko.computed(function(){
      var clicks = self.clickCount();
      var title = self.catLevel();

      if (clicks < 10) {
        //return ("NewBorn");
        title = 'Newborn';
      } else if (clicks < 20) {
        title = 'Infant';
      }
      else if (clicks < 50) {
        title = 'Child';
      }
      else if (clicks < 100) {
        title = 'Teen';
      }
      else if (clicks < 150) {
        title = 'Adult';
      }
      else if (clicks < 200) {
        title = 'Ninja';
      }

      return title;
  });

}

var viewModel = function() {
  var self = this;

  this.currentCat = ko.observable(new Cat() );


        this.incrementCounter = function() {
          self.currentCat().clickCount(self.currentCat().clickCount() + 1);
        };

};

ko.applyBindings(new viewModel());
