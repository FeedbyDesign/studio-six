const artists = [
  // Copy/Paste this section (curly brackets included) and fill in the fields.
  {
    "name": "", // Name of the artist / group
    "album": "", // Name of the album
    "cover": "", // name of the picture file (with extension like.jpg !!) in the covers folder. e.g.: "CD-albumname.jpg"
    "website": "", // the URL to the artist's website
    "facebook": "", // if it is a facebook page instead of a wesite
    "youtube": "", // link to a youtube chanel or video
    "taskBy": "", // who has done what for the artist. e.g.: "Recorded by A.L."
    "importance": 0 // higher numbers will show the artist higher on the page
  },
  /////////////////// Copy until here (this line excluded)
  {
    "name": "Saule",
    "album": "Vous êtes ici",
    "cover": "CD-saule.jpg",
    "website": "http://www.saule.be",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded by Alexandre Leroy",
    "importance": 2
  },
  {
    "name": "Von durden",
    "album": "Von durden party project",
    "cover": "CD-von-D.jpg",
    "website": "http://www.vondurden.com/",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded and produced by Alexandre Leroy",
    "importance": 2
  },
  {
    "name": "Melchior",
    "album": "it’s always a girl choice",
    "cover": "CD-melchior.jpg",
    "website": "",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded & mixed by Alexandre Leroy",
    "importance": 0
  },
  {
    "name": "Nehal",
    "album": "some kind of medecine",
    "cover": "CD-nehal.jpg",
    "website": "",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded & mixed By Alexandre Leroy",
    "importance": 0
  },
  {
    "name": "BRNS",
    "album": "patine",
    "cover": "CD-BRNS-Patine_0.jpg",
    "website": "https://www.brns.be",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded @ Studio Six",
    "importance": 2
  },
  {
    "name": "BRNS",
    "album": "wounded",
    "cover": "CD-brns-1.jpg",
    "website": "https://www.brns.be",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded & Mixed by Gaetan Dehoux",
    "importance": 2
  },
  {
    "name": "Nicola Testa",
    "album": "The letter",
    "cover": "CD-testa.jpg",
    "website": "http://www.nicolatesta.net",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded & mixed By Alexandre Leroy",
    "importance": 2
  },
  {
    "name": "PUGGY",
    "album": "Colours/Live AB",
    "cover": "CD-puggy.jpg",
    "website": "http://www.puggy.fr",
    "facebook": "",
    "youtube": "",
    "taskBy": "Mixed By Alexandre Leroy",
    "importance": 2
  },
  {
    "name": "PUGGY",
    "album": "Everyone learns to forget / live studio",
    "cover": "CD-puggy-2.jpg",
    "website": "http://www.puggy.fr",
    "facebook": "",
    "youtube": "https://www.youtube.com/watch?v=yRpsDihvwXI",
    "taskBy": "Recorded & mixed By Alexandre Leroy",
    "importance": 2
  },
  {
    "name": "Jane Doe and the black bourgeoises",
    "album": "live studio",
    "cover": "CD-jane-doe.jpg",
    "website": "",
    "facebook": "",
    "youtube": "https://www.youtube.com/watch?v=2jHxuVwe-cI",
    "taskBy": "Recorded & mixed By Alexandre Leroy",
    "importance": 2
  },
  {
    "name": "Cargo Culte / live studio",
    "album": "",
    "cover": "CD-cargo.jpg",
    "website": "",
    "facebook": "https://www.facebook.com/CargoCulteMusic/videos/452602568139992/",
    "youtube": "",
    "taskBy": "Recorded By Alexandre Leroy",
    "importance": 1
  },
  {
    "name": "Evelinn Trouble",
    "album": "Television religion",
    "cover": "CD-evelinn.jpg",
    "website": "",
    "facebook": "",
    "youtube": "https://www.youtube.com/watch?v=kc8DVMN0XQk",
    "taskBy": "Recorded By Alexandre Leroy",
    "importance": 1
  },
  {
    "name": "Nathaniel Rateliff & the night sweats",
    "album": "Beatles cover",
    "cover": "CD-nathaniel.jpg",
    "website": "http://www.nathanielrateliff.com",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded by Alexandre Leroy",
    "importance": 1
  },
  {
    "name": "Sharon",
    "album": "Guardian Angel",
    "cover": "CD-sharon.jpg",
    "website": "http://www.sharonmusic.be",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded & mixed by Alexandre Leroy",
    "importance": 1
  },
  {
    "name": "Memed",
    "album": "",
    "cover": "CD-memed.jpg",
    "website": "",
    "facebook": "https://www.facebook.com/memedband/?fref=ts",
    "youtube": "",
    "taskBy": "Mastered by Alexandre Leroy",
    "importance": 0
  },
  {
    "name": "Yel",
    "album": "Electrophone",
    "cover": "CD-yel.jpg",
    "website": "http://www.yel.be",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded & Mixed @ studio Six",
    "importance": 1
  },
  {
    "name": "Almaniax",
    "album": "",
    "cover": "CD-almaniax.jpg",
    "website": "http://www.almaniax.be",
    "facebook": "",
    "youtube": "",
    "taskBy": "Mixed By Alexandre Leroy",
    "importance": 0
  },
  {
    "name": "Naughty Mouse",
    "album": "Staring at the sun",
    "cover": "CD-naught-1.jpg",
    "website": "https://naughtymouse.bandcamp.com",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded & mixed by Alexandre Leroy",
    "importance": 1
  },
  {
    "name": "Naughty Mouse",
    "album": "Killer #2",
    "cover": "CD-naughty-2.jpg",
    "website": "https://naughtymouse.bandcamp.com",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded & mixed by Alexandre Leroy",
    "importance": 2
  },
  {
    "name": "HULK",
    "album": "Bad news from Lago",
    "cover": "CD-hulk.jpg",
    "website": "",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded & mixed by Alexandre Leroy",
    "importance": 1
  },
  {
    "name": "DUALBLEND",
    "album": "",
    "cover": "CD-dualblend.jpg",
    "website": "",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded & mixed by Alexandre Leroy",
    "importance": 0
  },
  {
    "name": "OMSQ",
    "album": "Thrust parry",
    "cover": "CD-omsq.jpg",
    "website": "https://omsq.bandcamp.com/album/thrust-parry-lp",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded & mixed by Alexandre Leroy",
    "importance": 1
  },
  {
    "name": "Komah",
    "album": "",
    "cover": "CD-komah.jpg",
    "website": "",
    "facebook": "",
    "youtube": "",
    "taskBy": "Drums recorded by Alexandre Leroy",
    "importance": 0
  },
  {
    "name": "Vincent Scarito",
    "album": "BEINGS",
    "cover": "CD-vincentscarito.jpg",
    "website": "http://www.vincentscarito.com",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded by Alexandre Leroy",
    "importance": 1
  },
  {
    "name": "Reggie Washington",
    "album": "Freedom",
    "cover": "CD-reggie.jpg",
    "website": "https://reggiewashington-official.com",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded @ StudioSix",
    "importance": 2
  },
  {
    "name": "Galapagosht",
    "album": "",
    "cover": "CD-gala.jpg",
    "website": "http://gpghost.com",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded By Alexandre Leroy",
    "importance": 1
  },
  {
    "name": "GODDOG",
    "album": "",
    "cover": "CD-Goddog.jpg",
    "website": "",
    "facebook": "https://www.facebook.com/pg/GoddogBelgium/about/?ref=page_internal",
    "youtube": "",
    "taskBy": "Recorded & mixed by Alexandre Leroy",
    "importance": 1
  },
  {
    "name": "Hollywood Bedsheet",
    "album": "",
    "cover": "CD-holly.jpg",
    "website": "",
    "facebook": "https://www.facebook.com/hollywood.bedsheets/?fref=ts",
    "youtube": "",
    "taskBy": "Recorded & mixed by Alexandre Leroy",
    "importance": 0
  },
  {
    "name": "Zaccharia",
    "album": "",
    "cover": "CD-zacc.jpg",
    "website": "",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded & Mixed @ Studio Six",
    "importance": 0
  },
  {
    "name": "The Jacklean",
    "album": "",
    "cover": "CD-jackleans.jpg",
    "website": "",
    "facebook": "https://www.facebook.com/theJackleans/?fref=ts",
    "youtube": "",
    "taskBy": "Recorded & mixed by Alexandre Leroy",
    "importance": 1
  },
  {
    "name": "Mandales",
    "album": "",
    "cover": "CD-mandales.jpg",
    "website": "",
    "facebook": "https://www.facebook.com/mandalesweb/?fref=ts",
    "youtube": "",
    "taskBy": "Recorded & mixed by Alexandre Leroy",
    "importance": 0
  },
  {
    "name": "Solkins",
    "album": "Gold",
    "cover": "CD-solkins.jpg",
    "website": "https://solkinstheband.bandcamp.com",
    "facebook": "",
    "youtube": "",
    "taskBy": "Mastered by Alexandre Leroy",
    "importance": 2
  },
  {
    "name": "Wane",
    "album": "",
    "cover": "CD-wane.jpg",
    "website": "",
    "facebook": "",
    "youtube": "",
    "taskBy": "Mixed by Alexandre Leroy",
    "importance": 0
  },
  {
    "name": "Major Dubreucq",
    "album": "",
    "cover": "CD-major.jpg",
    "website": "",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded by Arnaud Chamey",
    "importance": 1
  },
  {
    "name": "Sadden Fact",
    "album": "",
    "cover": "CD-sadden.jpg",
    "website": "",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded & Mixed by Alexandre Leroy",
    "importance": 0
  },
  {
    "name": "Super like you",
    "album": "",
    "cover": "CD-super.jpg",
    "website": "",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded & Mixed by Alexandre Leroy",
    "importance": 0
  },
  {
    "name": "Pleymo",
    "album": "Live ROCK TOUR",
    "cover": "CD-pleymo.jpg",
    "website": "",
    "facebook": "",
    "youtube": "",
    "taskBy": "Mixed @ Studio Six / Alexandre Leroy",
    "importance": 0
  },
  {
    "name": "Moaning Cities",
    "album": "Pathways through the Sail",
    "cover": "CD-moaning.jpg",
    "website": "https://www.moaningcities.com/",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded & mixed by Matthieu Charray",
    "importance": 2
  },
  {
    "name": "Kangling",
    "album": "Echos of distant Voices",
    "cover": "CD-kangling.jpg",
    "website": "https://ragtimeproduction.bandcamp.com/album/kangling",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded & mixed by Matthieu Charray",
    "importance": 1
  },
  {
    "name": "Mbongwana Star",
    "album": "preprod",
    "cover": "CD-mbo.jpg",
    "website": "http://www.mbongwanastar.com/",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded & mixed by Matthieu Charray",
    "importance": 0
  },
  {
    "name": "Frank Shinobi",
    "album": "Semantics",
    "cover": "CD-Sinobi.jpg",
    "website": "http://www.honesthouse.be/bands/frank-shinobi/",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded by Matthieu Charray",
    "importance": 1
  },
  {
    "name": "Baloji",
    "album": "Preprod/additionnal recording",
    "cover": "CD-balo.jpg",
    "website": "",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded by Arnaud Chamey",
    "importance": 1
  },
  {
    "name": "Applause",
    "album": "Acids",
    "cover": "CD-applause.jpg",
    "website": "",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded @ studio Six",
    "importance": 1
  },
  {
    "name": "Vegastar",
    "album": "Television",
    "cover": "CD-vegastar.jpg",
    "website": "",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded @ Studio Six / Alexandre Leroy",
    "importance": 1
  },
  {
    "name": "ELEVEN!",
    "album": "Flicker rays to hell",
    "cover": "CD-eleven.jpg",
    "website": "",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded & Mixed by Nicolas Vandeweyer",
    "importance": 2
  },
  {
    "name": "Leaps",
    "album": "",
    "cover": "CD-leaps.jpg",
    "website": "",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded & Mixed by Alexandre Leroy",
    "importance": 0
  },
  {
    "name": "Beautiful Badness",
    "album": "",
    "cover": "CD-bb-1.jpg",
    "website": "https://play.spotify.com/album/2sVQ0dNZMlsU0JHz8ki0lK?play=true&utm_source=open.spotify.com&utm_medium=open",
    "facebook": "",
    "youtube": "",
    "taskBy": "Produced & recorded by Olivier Delescaille",
    "importance": 1
  },
{
    "name": "Beautiful Badness",
    "album": "Many years",
    "cover": "CD-bb-2.jpg",
    "website": "https://play.spotify.com/album/090uQdQcL0wAO9GIe7nC3n?play=true&utm_source=open.spotify.com&utm_medium=open",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded by Olivier Delescaille / Many years mixed by Olivier Delescaille",
    "importance": 2
  },
  {
    "name": "Yellow Straps",
    "album": "Whirlwind Romance",
    "cover": "CD-yellow.jpg",
    "website": "https://play.spotify.com/album/5NYiPiTqKb0WfWJKD3bx4u?play=true&utm_source=open.spotify.com&utm_medium=open",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded by Olivier Delescaille",
    "importance": 1
  },
  {
    "name": "Surfer Rosa",
    "album": "Killing the past",
    "cover": "CD-surfer.jpg",
    "website": "https://play.spotify.com/album/0pTrAlrpGf2hF9uWrQyQuy?play=true&utm_source=open.spotify.com&utm_medium=open",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded by Olivier Delescaille",
    "importance": 1
  },
  {
    "name": "Billions Of Comrades",
    "album": "Rondate",
    "cover": "CD-billions.jpg",
    "website": "http://www.comrades.eu",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded @ Studio Six",
    "importance": 2
  },
  {
    "name": "Disk-R",
    "album": "",
    "cover": "CD-diskr.jpg",
    "website": "",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded by Arnaud Chamey",
    "importance": 1
  },
  {
    "name": "The Progerians",
    "album": "The Fabulous Progerians",
    "cover": "CD-prog.jpg",
    "website": "https://theprogerians.bandcamp.com/releases",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded & Mixed & Mastered by Nicolas Vandeweyer",
    "importance": 1
  },
  {
    "name": "The Progerians",
    "album": "Vertigo EP",
    "cover": "CD-prog-2.jpg",
    "website": "https://theprogerians.bandcamp.com/releases",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded & Mixed & Mastered by Nicolas Vandeweyer",
    "importance": 1
  },
  {
    "name": "Mokoomba",
    "album": "",
    "cover": "CD-mok.jpg",
    "website": "",
    "facebook": "https://www.facebook.com/pg/alpha2point1/about/?ref=page_internal",
    "youtube": "",
    "taskBy": "Recorded @ Studio Six",
    "importance": 0
  },
  {
    "name": "Alpha 2.1",
    "album": "ETERNITY",
    "cover": "CD-alpha.jpg",
    "website": "",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded & Mixed by Gaethan Dehoux",
    "importance": 2
  },
  {
    "name": "Alaska Gold Rush",
    "album": "Wild jalopy of the mist",
    "cover": "CD-alaska.jpg",
    "website": "https://alaskagoldrush.bandcamp.com",
    "facebook": "",
    "youtube": "https://www.youtube.com/watch?v=A4baB6G7IFE",
    "taskBy": "Recorded & Mixed by Gaethan Dehoux",
    "importance": 2
  },
  {
    "name": "Mockingbirds",
    "album": "",
    "cover": "CD-mocking.jpg",
    "website": "",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded by Nicolas Vandeweyer",
    "importance": 0
  },
  {
    "name": "Sport Doen",
    "album": "The Wound",
    "cover": "CD-sport.jpg",
    "website": "",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded & Mixed & Mastered by Nicolas Vandeweyer",
    "importance": 1
  },
  {
    "name": "The Progerians",
    "album": "Degeneration EP",
    "cover": "CD-prog-3.jpg",
    "website": "https://theprogerians.bandcamp.com/releases",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded & Mixed & Mastered by Nicolas Vandeweyer",
    "importance": 0
  },
  {
    "name": "Slovenians",
    "album": "Frankie goes to Ljubljana",
    "cover": "CD-slo.jpg",
    "website": "http://www.slovenians.be/music/",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded & Mixed & Mastered by Nicolas Vandeweyer",
    "importance": 1
  },
  {
    "name": "Mofo Party Plan",
    "album": "",
    "cover": "CD-mofo.jpg",
    "website": "https://mofopartyplan.bandcamp.com",
    "facebook": "",
    "youtube": "https://www.youtube.com/watch?v=79-eKEFSAz0",
    "taskBy": "Recorded & Mixed by Gaethan Dehoux",
    "importance": 1
  },
  {
    "name": "Joli coeur",
    "album": "",
    "cover": "CD-joli.jpg",
    "website": "https://soundcloud.com/joli-coeur/city",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded & Mixed by Gaethan Dehoux",
    "importance": 1
  },
  {
    "name": "Alaska Alaska",
    "album": "",
    "cover": "CD-aa.jpg",
    "website": "http://alaska-alaska.bandcamp.com/",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded & Mixed by Gaethan Dehoux",
    "importance": 2
  },
  {
    "name": "Maw sit sii",
    "album": "",
    "cover": "CD-maw.jpg",
    "website": "http://mawsittsii.bandcamp.com/releases",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded & Mixed by Gaethan Dehoux",
    "importance": 1
  },
  {
    "name": "Monday Penny",
    "album": "Quid",
    "cover": "CD-monday.jpg",
    "website": "http://www.deezer.com/album/10616124",
    "facebook": "",
    "youtube": "",
    "taskBy": "Recorded & Mixed by Gaethan Dehoux",
    "importance": 1
  },

]

export default artists
