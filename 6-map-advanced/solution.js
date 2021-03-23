const tvShows = [
  {
    title: "True Detective",
    publishingYear: 2014,
    rating: 9,
    watched: false,
  },
  {
    title: "The Boys",
    publishingYear: 2019,
    rating: 8.7,
    watched: true,
  },
  {
    title: "Game of Thrones",
    publishingYear: 2011,
    rating: 9.3,
    watched: true,
  },
  {
    title: "Mr. Robot",
    publishingYear: 2015,
    rating: 8.5,
    watched: false,
  },
  {
    title: "Chernobyl",
    publishingYear: 2019,
    rating: 9.4,
    watched: true,
  },
  {
    title: "Money Heist",
    publishingYear: 2017,
    rating: 8.3,
    watched: true,
  },
  {
    title: "Dark",
    publishingYear: 2017,
    rating: 8.8,
    watched: false,
  },
];

const tvShowTitle = tvShows.map((tvShow) => {
  return tvShow.title;
});

const tvShowTitleYear = tvShows.map((tvShow) => {
  return tvShow.title + " " + tvShow.publishingYear;
});

const tvShowTitleUpper = tvShows.map((tvShow) => {
  if (tvShow.rating >= 9) {
    return tvShow.title.toUpperCase();
  } else {
    return tvShow.title;
  }
});

console.log(tvShowTitle);
console.log(tvShowTitleYear);
console.log(tvShowTitleUpper);

// Your code below
