var viewModel = function() {
  var self = this;

  self.clickCount = ko.observable(0);
  self.name = ko.observable('Tabby');
  self.catLevel = ko.observable('NewBorn');
  self.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
  self.imgAttribution = ko.observable('https://flickr.com/photos/big');

  self.incrementCounter = function() {
    self.clickCount(self.clickCount() + 1);
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

  self.people = ko.observableArray([
        { name: 'Fabby' },
        { name: 'Tabby' },
        { name: 'Shabby' }
    ]);

    /*self.addPerson = function() {
        self.people.push({ name: "New at " + new Date() });
    };

    self.removePerson = function() {
        self.people.remove(this);
    }*/
};

ko.applyBindings(new viewModel());
