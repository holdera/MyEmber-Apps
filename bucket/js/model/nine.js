App.Nine = DS.Model.extend({
  songName    :DS.attr('string'),
  songArtist  :DS.attr('string')
});

App.Eight = DS.Model.extend({
  songNameE    :DS.attr('string'),
  songArtistE  :DS.attr('string')
});

App.Seven = DS.Model.extend({
  songNameS    :DS.attr('string'),
  songArtistS  :DS.attr('string')
});

//allows us to hardcode data
App.ApplicationAdapter = DS.LSAdapter.extend();

//use fixtures constant within model
//think of it as a cache to store records
App.Nine.FIXTURES =
[
  { 
    id: 1,
    songName: "Bittersweet Symphony",
    songArtist: "The Verve"
  },

  {
    id: 2,
    songName: "Torn",
    songArtist: "Natalie Imbruglia"
  },

  {
    id: 3,
    songName: "Heart Shaped Box",
    songArtist: "Nirvana"
  }

];

App.Eight.FIXTURES =
[
  { 
    id: 1,
    songName: "Bittersweet Symphony",
    songArtist: "The Verve"
  },

  {
    id: 2,
    songName: "Torn",
    songArtist: "Natalie Imbruglia"
  },

  {
    id: 3,
    songName: "Heart Shaped Box",
    songArtist: "Nirvana"
  }

];

App.Seven.FIXTURES =
[
  { 
    id: 1,
    songName: "Bittersweet Symphony",
    songArtist: "The Verve"
  },

  {
    id: 2,
    songName: "Torn",
    songArtist: "Natalie Imbruglia"
  },

  {
    id: 3,
    songName: "Heart Shaped Box",
    songArtist: "Nirvana"
  }

];
