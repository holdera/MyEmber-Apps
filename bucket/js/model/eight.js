App.Eight = DS.Model.extend({
  discoName    :DS.attr(),
  discoArtist  :DS.attr()
});

//feeding the DSstore

App.Disco.FIXTURES =
[
  {
    discoName: "When Doves Cry",
    discoArtist: "Prince"
  },

  {
    discoName: "Rock the Casbah",
    discoArtist: "The Clash"
  },

  {
    discoName: "AC/DC",
    discoArtist: "Highway to Hell"
  }

];
