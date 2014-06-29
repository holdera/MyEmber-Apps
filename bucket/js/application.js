
/*
declare ember application,
root of the app
*/
var App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

//everypage will be defined through this
App.Router.map(function(){
	//, {path: '/aboutus'}
	this.route('nine');
	this.route('eight');
	this.route('seven');

});

App.NineRoute = Ember.Route.extend({
	model: function(){
		return this.store.findAll('nine');
		return this.store.createRecord('nine', this.get('model'));
	},
	actions:{
		addSong: function(){
			this.controller.set('add', true);
		}
	}
});


App.EightRoute = Ember.Route.extend({
	model: function(){
		return this.store.findAll('eight');
		return this.store.createRecord('eight', this.get('model'));
	},
	actions:{
		addESongs: function(){
			this.controller.set('add', true);
		}
	}
});

App.SevenRoute = Ember.Route.extend({
	model: function(){
		return this.store.findAll('seven');
		return this.store.createRecord('seven', this.get('model'));
	},
	actions:{
		addSsongs: function(){
			this.controller.set('add', true);
		}
	}
});


