var greenRubyApp = angular.module('greenRubyApp', []);

greenRubyApp.controller('IssueCtrl', ['$filter','$scope',function ($filter,$scope) {
  $scope.issues = [
  {
    "id": 82,
    "date": "aug 31th 2014",
    "edito":"There was some much publications this week, it is harder and harder to make a selection. Also, I begin to have too long a list of podcasts and sometimes I can't listen to them all. Should I focus more? It would be annoying as I like eclecticism, in a certain range. Anyways, I'm happy to announce we almost have 500 subscribers by now, and more and more traffic on the website. You may laugh, but as I don't like google and their analytics/tracking, I use the good old webalizer for the Greenruby site stats. So vintage! Maybe one day I will setup a piwik though. ",
  },
  {
    "id":81,
    "date": "aug 24th 2014",
    "edito":"",
     }
  ];
  $scope.current_issue_id = $scope.issues[0]["id"];
  $scope.current_issue = $filter('filter')($scope.issues, function(d) { return d.id === $scope.current_issue_id} )[0];
  $scope.issue_filter = {};

  $scope.stories = [
    {
        "title": "Wired UK",
        "link": "http://www.wired.co.uk/",
        "description": "Great design with horizontal scrolling.",
        "category": "look",
        "issue": 82
    },
    {
        "title": "Freelancers websites",
        "link": "http://www.awwwards.com/design-inspiration/freelancer-websites-changing-the-way-you-work.html",
        "description": "Awwwards published a review of 6 websites for freelance designers this week.",
        "category": "look",
        "issue": 82
    },
    {
        "title": "Top 10 CodePens of the Week",
        "link": "http://scotch.io/bar-talk/top-10-codepens-of-the-week-3",
        "description": "Great selection if visual effects for your web UIs.",
        "category": "look",
        "issue": 82
    },
    {
        "title": "Ops School Curriculum",
        "link": "http://www.opsschool.org/en/latest/",
        "description": "Comprehensive program to become an operations engineer, community written.",
        "category": "use",
        "subject":"ops",
        "issue": 82
    },
    {
        "title": "Project GITenberg",
        "link": "https://gitenberg.github.io/",
        "description": "43,000 book in this git-powered version of project Gutenberg.",
        "category": "use",
        "subject":"tool",
        "issue": 82
    },
    {
        "title": "Fearless Rails Deployment",
        "link": "https://railsdeploymentbook.com/",
        "description": "(book) deploy your Rails applications using Chef, RVM, Nginx, Unicorn, and Vagrant.",
        "category": "use",
        "subject":"ruby",
        "issue": 82
    },
    {
        "title": "Bubble",
        "link": "http://followbubble.com/",
        "description": "Digital agency original website.",
        "category": "look",
        "issue": 81
    },
    {
        "title": "Beautiful Open",
        "link": "http://beautifulopen.com/",
        "description": "A gallery to prove that Open Source Project can have beautiful websites.",
        "category": "look",
        "issue": 81
    },
    {
        "title": "Pixel Perfect Precision Handbook  ",
        "link": "http://ustwo.com/ppp/",
        "description": "Book) A comprehensive handbook on digital design.",
        "category": "look",
        "issue": 81
    },
    {
        "title": "Omniref",
        "link": "https://www.omniref.com/",
        "description": "The Universal Ruby Reference.",
        "category": "use",
        "subject":"ruby",
        "issue": 81
    },
    {
        "title": "Biting the Bullet and Actually Learning JavaScript",
        "link": "http://www.tenleaves.com/paths/thinking-in-js",
        "description": "Steps to take for going further the js basics.",
        "category": "use",
        "subject":"js",
        "issue": 81
    },
    {
        "title": "Visual.is",
        "link": "http://visual.is/",
        "description": "Present information dynamically with dashboards, reports, and data presentations.",
        "category": "use",
        "subject":"tool",
        "issue": 81
    },
]


}])
