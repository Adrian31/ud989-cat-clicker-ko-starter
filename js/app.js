var Cat = function(data) {
  var self = this;

  self.clickCount = ko.observable(data.clickCount);
  self.name = ko.observable(data.name);
  self.imgSrc = ko.observable(data.imgSrc);
  self.imgAttribution = ko.observable(data.imgAttribution);
  self.nicknames = ko.observableArray(data.nicknames);

    self.catLevel = ko.computed(function(){
      var clicks = self.clickCount();
      var title;

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

  this.currentCat = ko.observable(new Cat({
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    imgAttribution: 'https://flickr.com/photos/big',
    nickNames: ['Tabby', 'Fabby', 'Shabby']
  }) );


        this.incrementCounter = function() {
          self.currentCat().clickCount(self.currentCat().clickCount() + 1);
        };

};

ko.applyBindings(new viewModel());
