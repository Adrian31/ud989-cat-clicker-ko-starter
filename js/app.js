var initialCats = [
    {
      clickCount: 0,
      name: 'Sammy',
      imgSrc: "img/cat1.jpg",
      //imgAttribution
      nickNames: ['Tabby']
    },
    {
      clickCount: 0,
      name: 'Bruno',
      imgSrc: "img/cat2.jpg",
      nickNames: ['Shabby']
    },
    {
      clickCount: 0,
      name: 'Lilly',
      imgSrc: "img/cat3.jpg",
      nickNames: ['Shabby']
    }
];

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

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem){
    self.catList.push(new Cat(catItem));
  });

  this.currentCat = ko.observable( this.catList()[0] );

  this.incrementCounter = function() {
      self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

};

ko.applyBindings(new viewModel());
