// Print the list of titles of Action movies
// Find the number of movies per Genre
// Find the number of movies per Genre per Year
// Find the average Gross_Earning_in_Mil per Year


const data=[
    {
      "Rank": 1,
      "Title": "The Shawshank Redemption",
      "Description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      "Runtime": 142,
      "Genre": "Crime",
      "Rating": 9.3,
      "Metascore": 80,
      "Votes": 1934970,
      "Gross_Earning_in_Mil": 28.34,
      "Director": "Frank Darabont",
      "Actor": "Tim Robbins",
      "Year": 1994
    },
    {
      "Rank": 2,
      "Title": "The Godfather",
      "Description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      "Runtime": 175,
      "Genre": "Crime",
      "Rating": 9.2,
      "Metascore": 100,
      "Votes": 1323670,
      "Gross_Earning_in_Mil": 134.97,
      "Director": "Francis Ford Coppola",
      "Actor": "Marlon Brando",
      "Year": 1972
    },
    {
      "Rank": 3,
      "Title": "The Dark Knight",
      "Description": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      "Runtime": 152,
      "Genre": "Action",
      "Rating": 9,
      "Metascore": 82,
      "Votes": 1905413,
      "Gross_Earning_in_Mil": 534.86,
      "Director": "Christopher Nolan",
      "Actor": "Christian Bale",
      "Year": 2008
    },
    {
      "Rank": 4,
      "Title": "The Godfather: Part II",
      "Description": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      "Runtime": 202,
      "Genre": "Crime",
      "Rating": 9,
      "Metascore": 85,
      "Votes": 914854,
      "Gross_Earning_in_Mil": 57.3,
      "Director": "Francis Ford Coppola",
      "Actor": "Al Pacino",
      "Year": 1974
    },
    {
      "Rank": 5,
      "Title": "Pulp Fiction",
      "Description": "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      "Runtime": 154,
      "Genre": "Crime",
      "Rating": 8.9,
      "Metascore": 94,
      "Votes": 1511653,
      "Gross_Earning_in_Mil": 107.93,
      "Director": "Quentin Tarantino",
      "Actor": "John Travolta",
      "Year": 1994
    },
    {
      "Rank": 6,
      "Title": "Schindler's List",
      "Description": "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.",
      "Runtime": 195,
      "Genre": "Biography",
      "Rating": 8.9,
      "Metascore": 93,
      "Votes": 997570,
      "Gross_Earning_in_Mil": 96.07,
      "Director": "Steven Spielberg",
      "Actor": "Liam Neeson",
      "Year": 1993
    },
    {
      "Rank": 7,
      "Title": "The Lord of the Rings: The Return of the King",
      "Description": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      "Runtime": 201,
      "Genre": "Adventure",
      "Rating": 8.9,
      "Metascore": 94,
      "Votes": 1381275,
      "Gross_Earning_in_Mil": 377.85,
      "Director": "Peter Jackson",
      "Actor": "Elijah Wood",
      "Year": 2003
    },
    {
      "Rank": 8,
      "Title": "Il buono, il brutto, il cattivo",
      "Description": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
      "Runtime": 161,
      "Genre": "Western",
      "Rating": 8.9,
      "Metascore": 90,
      "Votes": 574055,
      "Gross_Earning_in_Mil": 6.1,
      "Director": "Sergio Leone",
      "Actor": "Clint Eastwood",
      "Year": 1957
    },
    {
      "Rank": 9,
      "Title": "12 Angry Men",
      "Description": "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
      "Runtime": 96,
      "Genre": "Crime",
      "Rating": 8.9,
      "Metascore": 96,
      "Votes": 536439,
      "Gross_Earning_in_Mil": "NA",
      "Director": "Sidney Lumet",
      "Actor": "Henry Fonda",
      "Year": 1966
    },
    {
      "Rank": 10,
      "Title": "Inception",
      "Description": "A thief, who steals corporate secrets through the use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Runtime": 148,
      "Genre": "Action",
      "Rating": 8.8,
      "Metascore": 74,
      "Votes": 1692709,
      "Gross_Earning_in_Mil": 292.58,
      "Director": "Christopher Nolan",
      "Actor": "Leonardo DiCaprio",
      "Year": 2010
    },
    {
      "Rank": 11,
      "Title": "The Lord of the Rings: The Fellowship of the Ring",
      "Description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
      "Runtime": 178,
      "Genre": "Adventure",
      "Rating": 8.8,
      "Metascore": 92,
      "Votes": 1400549,
      "Gross_Earning_in_Mil": 315.54,
      "Director": "Peter Jackson",
      "Actor": "Elijah Wood",
      "Year": 2001
    },
    {
      "Rank": 12,
      "Title": "Forrest Gump",
      "Description": "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.",
      "Runtime": 142,
      "Genre": "Drama",
      "Rating": 8.8,
      "Metascore": 82,
      "Votes": 1464979,
      "Gross_Earning_in_Mil": 330.25,
      "Director": "Robert Zemeckis",
      "Actor": "Tom Hanks",
      "Year": 1994
    },
    {
      "Rank": 13,
      "Title": "Fight Club",
      "Description": "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soapmaker, forming an underground fight club that evolves into something much, much more.",
      "Runtime": 139,
      "Genre": "Drama",
      "Rating": 8.8,
      "Metascore": 66,
      "Votes": 1549429,
      "Gross_Earning_in_Mil": 37.03,
      "Director": "David Fincher",
      "Actor": "Brad Pitt",
      "Year": 1999
    },
    {
      "Rank": 14,
      "Title": "Star Wars: Episode V - The Empire Strikes Back",
      "Description": "After the rebels are overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda. His friends accept shelter from a questionable ally as Darth Vader hunts them in a plan to capture Luke.",
      "Runtime": 124,
      "Genre": "Action",
      "Rating": 8.8,
      "Metascore": 82,
      "Votes": 973239,
      "Gross_Earning_in_Mil": 290.48,
      "Director": "Irvin Kershner",
      "Actor": "Mark Hamill",
      "Year": 1980
    },
    {
      "Rank": 15,
      "Title": "Goodfellas",
      "Description": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
      "Runtime": 146,
      "Genre": "Biography",
      "Rating": 8.7,
      "Metascore": 89,
      "Votes": 834787,
      "Gross_Earning_in_Mil": 46.84,
      "Director": "Martin Scorsese",
      "Actor": "Robert De Niro",
      "Year": 1990
    },
    {
      "Rank": 16,
      "Title": "The Matrix",
      "Description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      "Runtime": 136,
      "Genre": "Action",
      "Rating": 8.7,
      "Metascore": 73,
      "Votes": 1389987,
      "Gross_Earning_in_Mil": 171.48,
      "Director": "Lana Wachowski",
      "Actor": "Keanu Reeves",
      "Year": 1999
    },
    {
      "Rank": 17,
      "Title": "The Lord of the Rings: The Two Towers",
      "Description": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
      "Runtime": 179,
      "Genre": "Adventure",
      "Rating": 8.7,
      "Metascore": 87,
      "Votes": 1250370,
      "Gross_Earning_in_Mil": 342.55,
      "Director": "Peter Jackson",
      "Actor": "Elijah Wood",
      "Year": 2002
    },
    {
      "Rank": 18,
      "Title": "One Flew Over the Cuckoo's Nest",
      "Description": "A criminal pleads insanity after getting into trouble again and once in the mental institution rebels against the oppressive nurse and rallies up the scared patients.",
      "Runtime": 133,
      "Genre": "Drama",
      "Rating": 8.7,
      "Metascore": 80,
      "Votes": 771930,
      "Gross_Earning_in_Mil": 112,
      "Director": "Milos Forman",
      "Actor": "Jack Nicholson",
      "Year": 1975
    },
    {
      "Rank": 19,
      "Title": "Shichinin no samurai",
      "Description": "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.",
      "Runtime": 207,
      "Genre": "Adventure",
      "Rating": 8.7,
      "Metascore": 98,
      "Votes": 262172,
      "Gross_Earning_in_Mil": 0.27,
      "Director": "Akira Kurosawa",
      "Actor": "Toshir%uFFFD Mifune",
      "Year": 1954
    },
    {
      "Rank": 20,
      "Title": "Interstellar",
      "Description": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Runtime": 169,
      "Genre": "Adventure",
      "Rating": 8.6,
      "Metascore": 74,
      "Votes": 1160405,
      "Gross_Earning_in_Mil": 188.02,
      "Director": "Christopher Nolan",
      "Actor": "Matthew McConaughey",
      "Year": 2014
    },
    {
      "Rank": 21,
      "Title": "L%uFFFDon",
      "Description": "Mathilda, a 12-year-old girl, is reluctantly taken in by L%uFFFDon, a professional assassin, after her family is murdered. L%uFFFDon and Mathilda form an unusual relationship, as she becomes his prot%uFFFDg%uFFFDe and learns the assassin's trade.",
      "Runtime": 110,
      "Genre": "Crime",
      "Rating": 8.6,
      "Metascore": 64,
      "Votes": 844425,
      "Gross_Earning_in_Mil": 19.5,
      "Director": "Luc Besson",
      "Actor": "Jean Reno",
      "Year": 1995
    },
    {
      "Rank": 22,
      "Title": "The Silence of the Lambs",
      "Description": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
      "Runtime": 118,
      "Genre": "Crime",
      "Rating": 8.6,
      "Metascore": 85,
      "Votes": 1033711,
      "Gross_Earning_in_Mil": 130.74,
      "Director": "Jonathan Demme",
      "Actor": "Jodie Foster",
      "Year": 1977
    },
    {
      "Rank": 23,
      "Title": "Saving Private Ryan",
      "Description": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
      "Runtime": 169,
      "Genre": "Drama",
      "Rating": 8.6,
      "Metascore": 90,
      "Votes": 1019794,
      "Gross_Earning_in_Mil": 216.54,
      "Director": "Steven Spielberg",
      "Actor": "Tom Hanks",
      "Year": 1994
    },
    {
      "Rank": 24,
      "Title": "Se7en",
      "Description": "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
      "Runtime": 127,
      "Genre": "Crime",
      "Rating": 8.6,
      "Metascore": 65,
      "Votes": 1180395,
      "Gross_Earning_in_Mil": 100.13,
      "Director": "David Fincher",
      "Actor": "Morgan Freeman",
      "Year": 1991
    },
    {
      "Rank": 25,
      "Title": "Star Wars",
      "Description": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station while also attempting to rescue Princess Leia from the evil Darth Vader.",
      "Runtime": 121,
      "Genre": "Action",
      "Rating": 8.6,
      "Metascore": 90,
      "Votes": 1045206,
      "Gross_Earning_in_Mil": 322.74,
      "Director": "George Lucas",
      "Actor": "Mark Hamill",
      "Year": 1998
    },
    {
      "Rank": 26,
      "Title": "The Usual Suspects",
      "Description": "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
      "Runtime": 106,
      "Genre": "Crime",
      "Rating": 8.6,
      "Metascore": 77,
      "Votes": 844175,
      "Gross_Earning_in_Mil": 23.34,
      "Director": "Bryan Singer",
      "Actor": "Kevin Spacey",
      "Year": 2001
    },
    {
      "Rank": 27,
      "Title": "Sen to Chihiro no kamikakushi",
      "Description": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
      "Runtime": 125,
      "Genre": "Animation",
      "Rating": 8.6,
      "Metascore": 96,
      "Votes": 502569,
      "Gross_Earning_in_Mil": 10.06,
      "Director": "Hayao Miyazaki",
      "Actor": "Daveigh Chase",
      "Year": 1995
    },
    {
      "Rank": 28,
      "Title": "Cidade de Deus",
      "Description": "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.",
      "Runtime": 130,
      "Genre": "Crime",
      "Rating": 8.6,
      "Metascore": 79,
      "Votes": 601763,
      "Gross_Earning_in_Mil": 7.56,
      "Director": "Fernando Meirelles",
      "Actor": "Alexandre Rodrigues",
      "Year": 1997
    },
    {
      "Rank": 29,
      "Title": "Dangal",
      "Description": "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.",
      "Runtime": 161,
      "Genre": "Action",
      "Rating": 8.6,
      "Metascore": "NA",
      "Votes": 90612,
      "Gross_Earning_in_Mil": 12.39,
      "Director": "Nitesh Tiwari",
      "Actor": "Aamir Khan",
      "Year": 2002
    },
    {
      "Rank": 30,
      "Title": "La vita %uFFFD bella",
      "Description": "When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.",
      "Runtime": 116,
      "Genre": "Comedy",
      "Rating": 8.6,
      "Metascore": "NA",
      "Votes": 501498,
      "Gross_Earning_in_Mil": 57.6,
      "Director": "Roberto Benigni",
      "Actor": "Roberto Benigni",
      "Year": 2016
    },
    {
      "Rank": 31,
      "Title": "It's a Wonderful Life",
      "Description": "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.",
      "Runtime": 130,
      "Genre": "Drama",
      "Rating": 8.6,
      "Metascore": 89,
      "Votes": 325577,
      "Gross_Earning_in_Mil": 7.27,
      "Director": "Frank Capra",
      "Actor": "James Stewart",
      "Year": 1946
    },
    {
      "Rank": 32,
      "Title": "City Lights",
      "Description": "With the aid of a wealthy erratic tippler, a dewy-eyed tramp who has fallen in love with a sightless flower girl accumulates money to be able to help her medically.",
      "Runtime": 87,
      "Genre": "Comedy",
      "Rating": 8.6,
      "Metascore": "NA",
      "Votes": 131845,
      "Gross_Earning_in_Mil": 0.02,
      "Director": "Charles Chaplin",
      "Actor": "Charles Chaplin",
      "Year": 1931
    },
    {
      "Rank": 33,
      "Title": "Coco",
      "Description": "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
      "Runtime": 105,
      "Genre": "Animation",
      "Rating": 8.5,
      "Metascore": 81,
      "Votes": 148391,
      "Gross_Earning_in_Mil": 209.43,
      "Director": "Lee Unkrich",
      "Actor": "Anthony Gonzalez",
      "Year": 2017
    },
    {
      "Rank": 34,
      "Title": "The Lion King",
      "Description": "A Lion cub crown prince is tricked by a treacherous uncle into thinking he caused his father's death and flees into exile in despair, only to learn in adulthood his identity and his responsibilities.",
      "Runtime": 88,
      "Genre": "Animation",
      "Rating": 8.5,
      "Metascore": 83,
      "Votes": 757738,
      "Gross_Earning_in_Mil": 312.9,
      "Director": "Roger Allers",
      "Actor": "Matthew Broderick",
      "Year": 1999
    },
    {
      "Rank": 35,
      "Title": "The Green Mile",
      "Description": "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
      "Runtime": 189,
      "Genre": "Crime",
      "Rating": 8.5,
      "Metascore": 61,
      "Votes": 921068,
      "Gross_Earning_in_Mil": 136.8,
      "Director": "Frank Darabont",
      "Actor": "Tom Hanks",
      "Year": 1985
    },
    {
      "Rank": 36,
      "Title": "Gladiator",
      "Description": "When a Roman General is betrayed, and his family murdered by an emperor's corrupt son, he comes to Rome as a gladiator to seek revenge.",
      "Runtime": 155,
      "Genre": "Action",
      "Rating": 8.5,
      "Metascore": 67,
      "Votes": 1121561,
      "Gross_Earning_in_Mil": 187.71,
      "Director": "Ridley Scott",
      "Actor": "Russell Crowe",
      "Year": 1994
    },
    {
      "Rank": 37,
      "Title": "The Departed",
      "Description": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
      "Runtime": 151,
      "Genre": "Crime",
      "Rating": 8.5,
      "Metascore": 85,
      "Votes": 997917,
      "Gross_Earning_in_Mil": 132.38,
      "Director": "Martin Scorsese",
      "Actor": "Leonardo DiCaprio",
      "Year": 2000
    },
    {
      "Rank": 38,
      "Title": "Back to the Future",
      "Description": "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
      "Runtime": 116,
      "Genre": "Adventure",
      "Rating": 8.5,
      "Metascore": 86,
      "Votes": 853178,
      "Gross_Earning_in_Mil": 210.61,
      "Director": "Robert Zemeckis",
      "Actor": "Michael J. Fox",
      "Year": 2006
    },
    {
      "Rank": 39,
      "Title": "The Prestige",
      "Description": "After a tragic accident two stage magicians engage in a battle to create the ultimate illusion whilst sacrificing everything they have to outwit the other.",
      "Runtime": 130,
      "Genre": "Drama",
      "Rating": 8.5,
      "Metascore": 66,
      "Votes": 984159,
      "Gross_Earning_in_Mil": 53.09,
      "Director": "Christopher Nolan",
      "Actor": "Christian Bale",
      "Year": 2014
    },
    {
      "Rank": 40,
      "Title": "Raiders of the Lost Ark",
      "Description": "Archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before the Nazis.",
      "Runtime": 115,
      "Genre": "Action",
      "Rating": 8.5,
      "Metascore": 85,
      "Votes": 751250,
      "Gross_Earning_in_Mil": 248.16,
      "Director": "Steven Spielberg",
      "Actor": "Harrison Ford",
      "Year": 2006
    },
    {
      "Rank": 41,
      "Title": "Psycho",
      "Description": "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
      "Runtime": 109,
      "Genre": "Horror",
      "Rating": 8.5,
      "Metascore": 97,
      "Votes": 490460,
      "Gross_Earning_in_Mil": 32,
      "Director": "Alfred Hitchcock",
      "Actor": "Anthony Perkins",
      "Year": 1981
    },
    {
      "Rank": 42,
      "Title": "Whiplash",
      "Description": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
      "Runtime": 107,
      "Genre": "Drama",
      "Rating": 8.5,
      "Metascore": 88,
      "Votes": 541473,
      "Gross_Earning_in_Mil": 13.09,
      "Director": "Damien Chazelle",
      "Actor": "Miles Teller",
      "Year": 1979
    },
    {
      "Rank": 43,
      "Title": "Alien",
      "Description": "After a space merchant vessel perceives an unknown transmission as a distress call, its landing on the source moon finds one of the crew attacked by a mysterious lifeform, and they soon realize that its life cycle has merely begun.",
      "Runtime": 116,
      "Genre": "Horror",
      "Rating": 8.5,
      "Metascore": 83,
      "Votes": 660877,
      "Gross_Earning_in_Mil": 78.9,
      "Director": "Ridley Scott",
      "Actor": "Sigourney Weaver",
      "Year": 1960
    },
    {
      "Rank": 44,
      "Title": "Apocalypse Now",
      "Description": "During the Vietnam War, Captain Willard is sent on a dangerous mission into Cambodia to assassinate a renegade Colonel who has set himself up as a god among a local tribe.",
      "Runtime": 147,
      "Genre": "Drama",
      "Rating": 8.5,
      "Metascore": 94,
      "Votes": 510001,
      "Gross_Earning_in_Mil": 83.47,
      "Director": "Francis Ford Coppola",
      "Actor": "Martin Sheen",
      "Year": 1979
    },
    {
      "Rank": 45,
      "Title": "Memento",
      "Description": "A man juggles searching for his wife's murderer and keeping his short-term memory loss from being an obstacle.",
      "Runtime": 113,
      "Genre": "Mystery",
      "Rating": 8.5,
      "Metascore": 80,
      "Votes": 964170,
      "Gross_Earning_in_Mil": 25.54,
      "Director": "Christopher Nolan",
      "Actor": "Guy Pearce",
      "Year": 2000
    },
    {
      "Rank": 46,
      "Title": "American History X",
      "Description": "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
      "Runtime": 119,
      "Genre": "Crime",
      "Rating": 8.5,
      "Metascore": 62,
      "Votes": 888886,
      "Gross_Earning_in_Mil": 6.72,
      "Director": "Tony Kaye",
      "Actor": "Edward Norton",
      "Year": 1991
    },
    {
      "Rank": 47,
      "Title": "Terminator 2: Judgment Day",
      "Description": "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten year old son, John Connor, from a more advanced cyborg.",
      "Runtime": 137,
      "Genre": "Action",
      "Rating": 8.5,
      "Metascore": "NA",
      "Votes": 843348,
      "Gross_Earning_in_Mil": 204.84,
      "Director": "James Cameron",
      "Actor": "Arnold Schwarzenegger",
      "Year": 1998
    },
    {
      "Rank": 48,
      "Title": "The Intouchables",
      "Description": "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
      "Runtime": 112,
      "Genre": "Biography",
      "Rating": 8.5,
      "Metascore": "NA",
      "Votes": 611033,
      "Gross_Earning_in_Mil": 13.18,
      "Director": "Olivier Nakache",
      "Actor": "Fran%uFFFDois Cluzet",
      "Year": 2011
    },
    {
      "Rank": 49,
      "Title": "The Pianist",
      "Description": "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
      "Runtime": 150,
      "Genre": "Biography",
      "Rating": 8.5,
      "Metascore": 85,
      "Votes": 585009,
      "Gross_Earning_in_Mil": 32.57,
      "Director": "Roman Polanski",
      "Actor": "Adrien Brody",
      "Year": 1988
    },
    {
      "Rank": 50,
      "Title": "Casablanca",
      "Description": "A cynical nightclub owner protects an old flame and her husband from Nazis in Morocco.",
      "Runtime": 102,
      "Genre": "Drama",
      "Rating": 8.5,
      "Metascore": 100,
      "Votes": 441864,
      "Gross_Earning_in_Mil": 1.02,
      "Director": "Michael Curtiz",
      "Actor": "Humphrey Bogart",
      "Year": 1942
    }
  ]


// function actionMovies(data){
//  const actionMovies = data.filter(item=>item.Genre==='Action');
//  const moviesList =actionMovies.map(movie=>movie.Title);
//  console.log(moviesList);
// }

// actionMovies(data);



// function numberOfMovies(data){
//     const result = data.reduce((acc,curr)=>{
//         if(acc[curr.Genre]){
//             acc[curr.Genre] +=1;
//         }
//         else{
//             acc[curr.Genre]=1;
//         }
//         return acc;
//     },{});
//     console.log(result);
// }

// numberOfMovies(data);


// function moviesPerYear(data){
//     const result = data.reduce((acc,curr)=>{
//         const year=curr.Year;
//         const genre=curr.Genre;
//         if(acc[year]){
//             if(acc[year][genre]){
//                 acc[year][genre] +=1;
//             }
//             else{
//                 acc[year][genre] =1;
//             }
//         }
//         else{
//             acc[year]={};
//             acc[year][genre]=1;
//         }
//         return acc;
//     },{})
//     console.log(result);
// }

// moviesPerYear(data);


// function average(data){
//     const averageData=data.reduce((acc,curr)=>{
//         if(typeof curr.Gross_Earning_in_Mil==='number'){
//             if(acc[curr.Year]){
//                 acc[curr.Year].total +=curr.Gross_Earning_in_Mil;
//                 acc[curr.Year].count +=1;
//             }
//             else{
//                 acc[curr.Year]={};
//                 acc[curr.Year].total =curr.Gross_Earning_in_Mil;
//                 acc[curr.Year].count =1;
//             }
//         }
//         return acc;
//     },{});

//     const result = Object.keys(averageData).reduce((acc,year)=>{
//         acc[year] = averageData[year].total/averageData[year].count;
//         return acc;
//     },{});

//     console.log(result);
// }

// average(data);




// API - https://restcountries.com/v3.1/all
// Use fetch to call this API and save the JSON data to a file
// Use only promises
// After saving the data to a file, read the JSON file to solve the following problems
// Find the number of countries per region
// Find the number of countries per region per subregion
// Find the average population of a country per region


const fs=require('fs').promises;


// fetch(`https://restcountries.com/v3.1/all`)
// .then((response)=>{
//   return response.json();
// })
// .then((data)=>{
//     return fs.writeFile('data.json',JSON.stringify(data,null,2))
// })
// .then((data)=>{
//     console.log('data saved successfully');
// })
// .catch((error)=>{
//     console.error(error);
// })


// function numberOfCountries(){

//     fs.readFile('data.json','utf-8')
//     .then((data)=>{
//         const countries = JSON.parse(data);
//         const result = countries.reduce((acc,curr)=>{
//             if(acc[curr.region]){
//                   acc[curr.region] +=1;
//             }
//             else{
//                 acc[curr.region] =1;
//             }
//             return acc;
//         },{});
//         console.log(result);
//     })
//     .catch((error)=>{
//         console.error(error);
//     })
// }

// numberOfCountries();



// function countriesPerSubregion(){
//     fs.readFile('data.json','utf-8')
//     .then((data)=>{
//         const countries=JSON.parse(data);
//         const result = countries.reduce((acc,curr)=>{
//             if(acc[curr.region]){
//                 if(acc[curr.region][curr.subregion]){
//                     acc[curr.region][curr.subregion] +=1;
//                 }
//                 else{
//                     acc[curr.region][curr.subregion] =1;
//                 }
//             }
//             else{
//                 acc[curr.region]={};
//                 acc[curr.region][curr.subregion] =1;
//             }
//             return acc;
//         },{});
//         console.log(result);
//     })
//     .catch(error=>{
//         console.error(error);
//     })
// }

//countriesPerSubregion();

// function average(){
//     fs.readFile('data.json','utf-8')
//     .then((data)=>{
//     const countries=JSON.parse(data);
    
//     const averageData=countries.reduce((acc,curr)=>{
//         if(acc[curr.region]){
//             acc[curr.region].total +=curr.population;
//             acc[curr.region].count +=1;
//         }
//         else{
//             acc[curr.region]={};
//             acc[curr.region].total =curr.population;
//             acc[curr.region].count =1;
//         }
//         return acc;
//     },{})

//      const result = Object.keys(averageData).reduce((acc,region)=>{
//         acc[region]=averageData[region].total/averageData[region].count;
//         return acc;
//      },{});
    
//     const answer = Object.entries(result).sort((a,b)=>{
//       return a[1]-b[1];
//     })
    
//     console.log(answer);

//     })
//     .catch((error)=>{
//         console.error(error);
//     })
// }


// average();


// function calculateAveragePopulation() {
//     // Read data from JSON file
//     fs.readFile('data.json', 'utf-8')
//     .then((data)=>{
//       const countries=JSON.parse(data);
//       const groupedCountries = countries.reduce((acc, country) => {
//         const { region, subregion, population } = country;
      
//         if (!acc[region]) {
//           acc[region] = {};
//         }
      
//         if (!acc[region][subregion]) {
//           acc[region][subregion] = {
//             totalPopulation: 0,
//             numCountries: 0,
//           };
//         }
      
//         acc[region][subregion].totalPopulation += population;
//         acc[region][subregion].numCountries += 1;
      
//         return acc;
//       }, {});
      
//       const averagePopulations = {};

// Object.entries(groupedCountries).forEach(([region, subregionData]) => {
//   averagePopulations[region] = Object.entries(subregionData)
//     .map(([subregion, { totalPopulation, numCountries }]) => ({
//       subregion,
//       averagePopulation: totalPopulation / numCountries,
//     }))
//     .sort((a, b) => a.averagePopulation - b.averagePopulation);
// });

// console.log(averagePopulations);
//     })
       
// }

// calculateAveragePopulation();


// function calculateAveragePopulation() {
//   // Read data from JSON file
//   fs.readFile('data.json', 'utf-8')
//   .then((data)=>{
//     const countries=JSON.parse(data);
//     const groupedCountries = countries.reduce((acc, country) => {
//       const { region, subregion, population, name } = country;
    
//       if (!acc[region]) {
//         acc[region] = {};
//       }
    
//       if (!acc[region][subregion]) {
//         acc[region][subregion] = [];
//       }
    
//       acc[region][subregion].push({ name, population });
    
//       return acc;
//     }, {});
    
//     // Find the subregion with the lowest population per region
//     const lowestPopulationSubregions = {};
    
//     Object.entries(groupedCountries).forEach(([region, subregionData]) => {
//       let lowestPopulation = Infinity;
//       let lowestSubregion = null;
    
//       Object.entries(subregionData).forEach(([subregion, countryData]) => {
//         const subregionPopulation = countryData.reduce((sum, { population }) => sum + population, 0);
    
//         if (subregionPopulation < lowestPopulation) {
//           lowestPopulation = subregionPopulation;
//           lowestSubregion = subregion;
//         }
//       });
//       lowestPopulationSubregions[region] = {
//         subregion: lowestSubregion,
//         population: lowestPopulation,
//       };
//     });
    
//     console.log(lowestPopulationSubregions);
//   })
     
// }

// calculateAveragePopulation();


// function averagePerSubregion(){
//   fs.readFile('data.json','utf-8')
//   .then((data)=>{
//     const countries=JSON.parse(data);
//     const averageData = countries.reduce((acc,curr)=>{
//        if(!acc[curr.region]){
//         acc[curr.region]={};
//        }

//         if(acc[curr.region][curr.subregion]){
//           acc[curr.region][curr.subregion].total +=curr.population;
//           acc[curr.region][curr.subregion].count +=1;
//         }
//         else{
//           acc[curr.region][curr.subregion]={};
//           acc[curr.region][curr.subregion].total =curr.population;
//           acc[curr.region][curr.subregion].count=1;
//         }
      
     
//       return acc;
//     },{});
//    const result={};
//   Object.entries(averageData).forEach(([region,subregionData])=>{
//     result[region]=Object.entries(subregionData).map(([subregion,{total,count}])=>({
//       subregion,
//       averagePopulation:total/count,
//     }))
//     .sort((a,b)=>a.averagePopulation-b.averagePopulation);
//   })
//   console.log(result);
//   })
// }

// averagePerSubregion();


// function lowest(){
//   fs.readFile('data.json','utf-8')
//   .then((data)=>{
//     const countries = JSON.parse(data);
//     const resultant= countries.reduce((acc,curr)=>{
//       const name=curr.name;
//       const population = curr.population;
//       if(!acc[curr.region]){
//         acc[curr.region]={};
//       }
//       if(!acc[curr.region][curr.subregion]){
//         acc[curr.region][curr.subregion]=[];
//       }
//       acc[curr.region][curr.subregion].push({name,population});
//       return acc;
//     },{})
    
//     let result={};
//     Object.entries(resultant).forEach(([region,subregionData])=>{
//       let lowestPopulation=Infinity;
//       let lowestSubregion=null;
//       Object.entries(subregionData).forEach(([subregion,countryData])=>{
//         const subregionPopulation = countryData.reduce((acc,{population})=>acc+population,0);
//         if(subregionPopulation<lowestPopulation){
//           lowestPopulation=subregionPopulation;
//           lowestSubregion=subregion;
//         }
//       })
//       result[region]={
//         subregion:lowestSubregion,
//         population:lowestPopulation
//       }
//     })
//     console.log(result);
//   })
// }

// lowest();


// function population(){
//   fs.readFile('data.json','utf-8')
//   .then((data)=>{
//     const countries=JSON.parse(data);
//     const result = countries.reduce((acc,curr)=>{
//        const name=curr.name;
//        const population=curr.population;
//        if(!acc[curr.region]){
//         acc[curr.region]={name,population};
//        }
//        else if(curr.population<acc[curr.region].population){
//         acc[curr.region]={name,population}
        
//        }
//        return acc;
//     },{});
//     console.log(result);
//   })
// }

// population();


