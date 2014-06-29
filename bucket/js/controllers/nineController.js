

App.NineController = Ember.ArrayController.extend({
  actions:{
  	addSong: function(){
  		this.store.createRecord('nine', {
  			songName: this.get('songName'),
  			songArtist: this.get('songArtist')
  		}).save();
  		this.set('showAdd', true);
  	}
  }
});

App.EightController = Ember.ArrayController.extend({
  actions:{
  	addESong: function(){
  		this.store.createRecord('eight', {
  			songNameE: this.get('songNameE'),
  			songArtistE: this.get('songArtistE')
  		}).save();
  		this.set('showAddE', true);
  	}
  }
});

App.SevenController = Ember.ArrayController.extend({
  actions:{
  	addSSong: function(){
  		this.store.createRecord('seven', {
  			songNameS: this.get('songNameS'),
  			songArtistS: this.get('songArtistS')
  		}).save();
  		this.set('showAddE', true);
  	}
  }
});