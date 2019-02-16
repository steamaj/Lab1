var social = [
  {
    "Youtube_username": "EminemMusic",
    "Youtube_subscribers": 36,
    "Insta_username": "eminem",
    "Insta_followers": 24.8,
    "Age": 46,
    "Gender": "Male"
  },
  {
    "Youtube_username": "JustinBieberVEVO",
    "Youtube_subscribers": 33.8,
    "Insta_username": "justinbieber",
    "Insta_followers": 102,
    "Age": 24,
    "Gender": "Male"
  },
  {
    "Youtube_username": "Ariana Grande",
    "Youtube_subscribers": 32.5,
    "Insta_username": "arianagrande",
    "Insta_followers": 145,
    "Age": 25,
    "Gender": "Female"
  },
  {
    "Youtube_username": "Taylor Swift",
    "Youtube_subscribers": 32.2,
    "Insta_username": "taylorswift",
    "Insta_followers": 114,
    "Age": 29,
    "Gender": "Female"
  },
  {
    "Youtube_username": "Katy Perry",
    "Youtube_subscribers": 32.2,
    "Insta_username": "katyperry",
    "Insta_followers": 74.1,
    "Age": 34,
    "Gender": "Female"
  },
  {
    "Youtube_username": "Marshmello",
    "Youtube_subscribers": 28.4,
    "Insta_username": "marshmellowmusic",
    "Insta_followers": 17.7,
    "Age": 26,
    "Gender": "Male"
  },
  {
    "Youtube_username": "RihannaVEVO",
    "Youtube_subscribers": 26.3,
    "Insta_username": "badgalriri",
    "Insta_followers": 66,
    "Age": 30,
    "Gender": "Female"
  },
  {
    "Youtube_username": "Bruno Mars",
    "Youtube_subscribers": 23.9,
    "Insta_username": "brunomars",
    "Insta_followers": 21.6,
    "Age": 33,
    "Gender": "Male"
  },
  {
    "Youtube_username": "Maroon 5",
    "Youtube_subscribers": 23.8,
    "Insta_username": "maron5",
    "Insta_followers": 7.1,
    "Age": 0,
    "Gender": "Male"
  },
  {
    "Youtube_username": "David Guetta",
    "Youtube_subscribers": 19.8,
    "Insta_username": "davidguetta",
    "Insta_followers": 8.4,
    "Age": 51,
    "Gender": "Male"
  },
  {
    "Youtube_username": "shakiraVEVO",
    "Youtube_subscribers": 19.4,
    "Insta_username": "shakira",
    "Insta_followers": 55.9,
    "Age": 42,
    "Gender": "Female"
  },
  {
    "Youtube_username": "LuisFonsiVEVO",
    "Youtube_subscribers": 18.4,
    "Insta_username": "luisfonsi",
    "Insta_followers": 8.2,
    "Age": 40,
    "Gender": "Male"
  },
  {
    "Youtube_username": "Beyoncé",
    "Youtube_subscribers": 17.9,
    "Insta_username": "beyonce",
    "Insta_followers": 123,
    "Age": 37,
    "Gender": "Female"
  },
  {
    "Youtube_username": "Wiz Khalifa",
    "Youtube_subscribers": 17.4,
    "Insta_username": "wizkhalifa",
    "Insta_followers": 25.3,
    "Age": 31,
    "Gender": "Male"
  },
  {
    "Youtube_username": "The Chainsmokers",
    "Youtube_subscribers": 17.4,
    "Insta_username": "thechainsmokers",
    "Insta_followers": 7.1,
    "Age": 0,
    "Gender": "Male"
  },
  {
    "Youtube_username": "Drake",
    "Youtube_subscribers": 17.4,
    "Insta_username": "champagnepapi",
    "Insta_followers": 53.6,
    "Age": 32,
    "Gender": "Male"
  },
  {
    "Youtube_username": "ImaginDragons",
    "Youtube_subscribers": 16.6,
    "Insta_username": "imaginedragons",
    "Insta_followers": 4.4,
    "Age": 0,
    "Gender": "Male"
  },
  {
    "Youtube_username": "ChrisBrownTV",
    "Youtube_subscribers": 15.5,
    "Insta_username": "chrisbrownoffical",
    "Insta_followers": 50,
    "Age": 29,
    "Gender": "Male"
  },
  {
    "Youtube_username": "MalumaVEVO",
    "Youtube_subscribers": 14.9,
    "Insta_username": "",
    "Insta_followers": 0,
    "Age": 25,
    "Gender": "Male"
  },
  {
    "Youtube_username": "sia",
    "Youtube_subscribers": 14.4,
    "Insta_username": "siamusic",
    "Insta_followers": 4.8,
    "Age": 43,
    "Gender": "Female"
  },
  {
    "Youtube_username": "Charlie Puth",
    "Youtube_subscribers": 14,
    "Insta_username": "charlieputh",
    "Insta_followers": 12,
    "Age": 27,
    "Gender": "Male"
  },
  {
    "Youtube_username": "EnriqueIglesiasVEVO",
    "Youtube_subscribers": 13.7,
    "Insta_username": "",
    "Insta_followers": 0,
    "Age": 43,
    "Gender": "Male"
  },
  {
    "Youtube_username": "Linkin Park",
    "Youtube_subscribers": 13.5,
    "Insta_username": "linkinpark",
    "Insta_followers": 5.1,
    "Age": 0,
    "Gender": "Male"
  },
  {
    "Youtube_username": "NickiMinajAtVEVO",
    "Youtube_subscribers": 13.3,
    "Insta_username": "xxx",
    "Insta_followers": 0,
    "Age": 36,
    "Gender": "Female"
  },
  {
    "Youtube_username": "CalvinHarrisVEVO",
    "Youtube_subscribers": 12.6,
    "Insta_username": "calvinharris",
    "Insta_followers": 10.2,
    "Age": 35,
    "Gender": "Male"
  }
]




//Average age 
var sum_age = 0;
for (var i = 0; i < social.length; i++) {
  sum_age += social[i].Age
}
var total_sum_age= sum_age/21;
console.log(total_sum_age)

//Average subscribers
var sum_subs = 0;
for (var i = 0; i < social.length; i++) {
  sum_subs += social[i].Youtube_subscribers
}
var total_sum_subs= sum_subs/25;
console.log(total_sum_subs)

//Average instagram
var sum_insta = 0;
for (var i = 0; i < social.length; i++) {
  sum_insta += social[i].Insta_followers
}
var total_sum_insta= sum_insta/22;
console.log(total_sum_insta)

//Chart for Averages 
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {
      var data = google.visualization.arrayToDataTable([
        ['Category', 'Average'],
        ['Age', total_sum_age],
        ['Youtube Subscribers (millions)', total_sum_subs],
        ['Instagram Followers (millions)', total_sum_insta],
      ]);

      var options = {
        title: 'Average numbers for social media music stars',
        chartArea: {width: '50%'},
        isStacked: true,
        hAxis: {
          title: 'Average Number',
          minValue: 0,
        },
        vAxis: {
          title: 'Category'
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }