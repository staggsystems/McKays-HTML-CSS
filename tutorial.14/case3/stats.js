/*
   New Perspectives on HTML5, CSS, and JavaScript
   Tutorial 14
   Case Problem 3

   Filename: stats.js

   Global Variables:
   ================
   qbStatsCaption, rbStatsCaption, wrStatsCaption, krStatsCaption, prStatsCaption
      Caption text for quarterbacks, running backs, wide receivers,
      kick returners, and punt returners tables

   qbStatsHead, rbStatsHead, wrStatsHead, krStatsHead, prStatsHead
      Array of heading text for quarterbacks, running backs, wide receivers,
      kick returners, and punt returners tables

   qbStatsSort, rbStatsSort, wrStatsSort, krStatsSort, prStatsSort
      Column index of the default sortinng column 
      for quarterbacks, running backs, wide receivers,
      kick returners, and punt returners tables

   qbStats, rbStats, wrStats, krStats, prStats
      Multi-dimensional array of statistcs for quarterbacks, running backs, 
      wide receivers, kick returners, and punt returners tables

*/

qbStatsCaption = "Quarterbacks";
qbStatsHead =
['PLAYER','TEAM', 'COMP', 'ATT', 'PCT', 'YDS', 'AVG', 'TDS', 'INTS', 'RATE'];
qbStatsSort = 9;
qbStats = 
[
   ['David Lea', 'GB', 343, 502, 68.3, 4643, 9.2, 45, 6, 122.5], 
   ['Kevin Whyte', 'NO', 440, 622, 70.7, 5087, 8.2, 41, 13, 108.4], 
   ['Brent King', 'NE', 378, 576, 65.6, 4897, 8.5, 36, 11, 105.1], 
   ['Scott Stanley', 'DAL', 317, 485, 65.4, 3895, 8.0, 29, 9, 102.2], 
   ['Nelson Drew', 'HOU', 178, 292, 61.0, 2479, 8.5, 15, 6, 96.8], 
   ['Kevin Williams', 'DET', 385, 604, 63.7, 4518, 7.5, 36, 14, 96.6], 
   ['Peter Drake', 'PIT', 301, 473, 63.6, 3856, 8.2, 21, 14, 91.5], 
   ['Michael Ray', 'ATL', 341, 557, 61.2, 4071, 7.3, 27, 12, 90.7], 
   ['Joe Thompson', 'NYG', 335, 556, 60.3, 4587, 8.3, 26, 16, 90.3], 
   ['Andrew Gold', 'SF', 253, 415, 61.0, 2931, 7.1, 16, 5, 90.1], 
   ['Chris Reitz', 'MIA', 189, 316, 59.8, 2375, 7.5, 15, 7, 89.8], 
   ['Ian Kruse', 'SD', 347, 556, 62.4, 4314, 7.8, 24, 19, 86.6], 
   ['Winston Young', 'CHI', 182, 314, 58.0, 2319, 7.4, 13, 7, 85.7], 
   ['Carl VandenBloom', 'CAR', 295, 492, 60.0, 3893, 7.9, 20, 16, 85.0], 
   ['Ryan Short', 'PHI', 229, 384, 59.6, 2968, 7.7, 15, 13, 82.9], 
   ['Paul Statz', 'CIN', 278, 472, 58.9, 3166, 6.7, 20, 13, 81.8], 
   ['Xavier Hogart', 'ARI', 146, 253, 57.7, 1955, 7.7, 9, 8, 81.1], 
   ['Stan Whitman', 'BUF', 324, 523, 62, 3525, 6.7, 22, 19, 80.7], 
   ['Matthew Graves', 'TEN', 297, 483, 61.5, 3274, 6.8, 16, 14, 80.5], 
   ['Dennis Nelson', 'BAL', 297, 523, 56.8, 3480, 6.7, 19, 12, 79.7], 
   ['Kevin Antone', 'SEA', 250, 415, 60.2, 2869, 6.9, 13, 12, 79.5], 
   ['Trent Bowman', 'NYJ', 287, 511, 56.2, 3267, 6.4, 24, 15, 79.0], 
   ['Aaron Colley', 'OAK', 171, 285, 60.0, 2336, 8.2, 11, 15, 77.2], 
   ['Burt Emanuelson', 'KC', 160, 269, 59.5, 1713, 6.4, 10, 9, 76.6], 
   ['Forrest Anderson','DEN', 120, 250, 48, 1669, 6.7, 12, 6, 75.9] 
];



rbStatsCaption = "Running Backs";
rbStatsHead =
['PLAYER','TEAM', 'ATT', 'YDS', 'AVG', 'YDS/GM', 'TDS', 'LNGEST', 'FUMS'];
rbStatsSort = 3;
rbStats = 
[
['Kevin Phillips', 'JAC', 318, 1437, 4.5, 95.8, 8, 43, 3],
['Dmitri Jansen', 'PHI', 273, 1309, 4.8, 87.3, 17, 60, 1],
['Ryan Quick', 'HOU', 278, 1224, 4.4, 94.2, 10, 43, 4],
['Peter Joseph', 'SF', 275, 1202, 4.4, 80.1, 8, 55, 2],
['Lewis Levison', 'BAL', 267, 1173, 4.4, 78.2, 10, 67, 2],
['Carl Iverson', 'ATL', 284, 1168, 4.1, 77.9, 9, 61, 3],
['Olander Tompkins', 'SEA', 266, 1118, 4.2, 79.9, 12, 47, 3],
['Donald Feinright', 'SD', 222, 1091, 4.9, 77.9, 6, 39, 5],
['Aaron Kaufmann', 'MIA', 216, 1086, 5, 72.4, 6, 76, 4],
['Greg Simpson', 'STL', 244, 1069, 4.4, 76.4, 5, 47, 1],
['Wilson Nelson', 'DEN', 221, 1054, 4.8, 75.3, 4, 60, 3],
['Scott Su', 'ARI', 245, 1047, 4.3, 74.8, 10, 71, 4],
['Stephen Holliday', 'CIN', 260, 1016, 3.9, 72.6, 6, 42, 5],
['Vonte Young', 'NYJ', 239, 999, 4.2, 66.6, 6, 31, 1],
['Michael Young', 'CHI', 203, 997, 4.9, 83.1, 3, 46, 1],
['Michael Thomas', 'TEN', 247, 986, 4, 65.7, 4, 48, 3],
['Randy Ball', 'MIN', 208, 970, 4.7, 80.8, 12, 54, 1],
['Joe Dumont', 'BUF', 170, 934, 5.5, 93.4, 6, 80, 2],
['Brett Davidson', 'DAL', 164, 897, 5.5, 69, 2, 91, 1],
['Darius Leland', 'OAK', 113, 614, 5.4, 87.7, 4, 70, 1]
];



wrStatsCaption = "Wide Receivers";
wrStatsHead =
['PLAYER','TEAM', 'REC', 'YDS', 'AVG', 'YDS/GM', 'LNGST', 'TDS'];
wrStatsSort = 2;
wrStats = 
[
   ['Olson Krewes', 'NE', 116, 1518, 13.1, 101.2, 99, 9],
   ['Tyler Stevenson', 'ATL', 96, 1227, 12.8, 81.8, 43, 8],
   ['Aaron Lewis', 'DET', 85, 1437, 16.9, 95.8, 73, 15],
   ['Randall Quick', 'MIN', 77, 852, 11.1, 56.8, 52, 6],
   ['Peter Colson', 'MIA', 77, 1177, 15.3, 78.5, 65, 6],
   ['Burnett Dawes', 'NYG', 76, 1358, 17.9, 90.5, 99, 8],
   ['Will Ryan', 'KC', 75, 1066, 14.2, 71.1, 52, 5],
   ['Fred Hughes', 'NO', 73, 998, 13.7, 76.8, 50, 6],
   ['Jersey Levens', 'CAR', 73, 1308, 17.9, 87.2, 77, 6],
   ['Stephen Kerry', 'BUF', 72, 964, 13.4, 64.3, 55, 6],
   ['Cal Burns', 'ARI', 71, 1262, 17.8, 84.1, 73, 8],
   ['Carlton Free', 'NYG', 71, 1116, 15.7, 79.7, 68, 6],
   ['Mayweather Davis', 'PIT', 71, 1182, 16.6, 78.8, 95, 8],
   ['Mike Dobbs', 'TEN', 70, 931, 13.3, 62.1, 57, 6],
   ['Pearson Bright', 'IND', 68, 925, 13.6, 61.7, 87, 6],
   ['Greg Hayes', 'DET', 67, 712, 10.6, 47.5, 47, 3],
   ['Talor Weeks', 'GB', 67, 949, 14.2, 73.0, 79, 9],
   ['Arno Keiffer', 'IND', 67, 887, 13.2, 59.1, 56, 4],
   ['Drew Gilliam', 'SF', 64, 788, 12.3, 56.3, 52, 2],
   ['Brent Sloccough', 'WAS', 64, 919, 14.4, 61.3, 45, 5],
   ['Nelson Davis', 'TB', 64, 740, 11.6, 49.3, 42, 3],
   ['R. A. Overton', 'PIT', 63, 1018, 16.2, 67.9, 79, 2],
   ['Ronald Anderson', 'CIN', 63, 1031, 16.4, 73.6, 58, 7],
   ['Stephen Sinko', 'CLE', 61, 709, 11.6, 47.3, 76, 2]
];


krStatsCaption = "Kick Returners";
krStatsHead =
['PLAYER','TEAM', 'RETS', 'YDS', 'AVG', 'LNGST', 'TDS'];
krStatsSort = 3;
krStats = 
[
   ['Ken Burke', 'DAL', 1, 38, 38.0, 38, 0],
   ['David Williams', 'SEA', 1, 37, 37.0, 37, 0],
   ['Gregory Hanes', 'BAL', 1, 37, 37.0, 37, 0],
   ['Vonnie Dawkins', 'HOU', 4, 137, 34.3, 50, 0],
   ['Eric Marvin', 'MIN', 16, 520, 32.5, 104, 1],
   ['Bert Lee', 'NYJ', 32, 1022, 31.9, 107, 1],
   ['Kevin Harris', 'DAL', 5, 159, 31.8, 51, 0],
   ['Scott Brogress', 'OAK', 11, 341, 31.0, 101, 1],
   ['Harold Michaels', 'BUF', 11, 331, 30.1, 54, 0],
   ['Star White', 'DEN', 7, 210, 30.0, 67, 0],
   ['Charles Metcalfe', 'BAL', 18, 534, 29.7, 77, 0],
   ['Larson Evans', 'OAK', 11, 313, 28.5, 91, 0],
   ['Dwight Statz', 'MIA', 3, 85, 28.3, 42, 0],
   ['Dale Anthony', 'WAS', 1, 28, 28.0, 28, 0],
   ['Reggie Coarsemon', 'PIT', 24, 664, 27.7, 52, 0],
   ['Boyd Lincoln', 'GB', 34, 941, 27.7, 108, 1],
   ['Devon Roe', 'SF', 29, 800, 27.6, 102, 1],
   ['Mikael Gross', 'MIN', 14, 387, 27.6, 78, 0],
   ['Ubantu Ngarov', 'HOU', 13, 356, 27.4, 46, 0],
   ['Daryl Meredith', 'NO', 38, 1035, 27.2, 92, 0]
];



prStatsCaption = "Punt Returners";
prStatsHead =
['PLAYER','TEAM', 'RETS', 'YDS', 'AVG', 'LNGST', 'TDS'];
prStatsSort = 3;
prStats = 
[
   ['Trent Tulley', 'WAS', 49, 1121, 22.9, 47, 0],
   ['Gary Kobb', 'NO', 38, 1035, 27.2, 92, 0],
   ['Steve McKee', 'NYJ', 32, 1022, 31.9, 107, 1],
   ['Larry Justice', 'SEA', 41, 1000, 24.4, 54, 0],
   ['Cornell Green', 'CLE', 37, 951, 25.7, 63, 0],
   ['Davis Bowman', 'GB', 34, 941, 27.7, 108, 1],
   ['Gary Kramer', 'CIN', 39, 926, 23.7, 45, 0],
   ['Lee Righteous', 'MIA', 32, 801, 25.0, 77, 0],
   ['Howard Lewis', 'SF', 29, 800, 27.6, 102, 1],
   ['Don Douglas', 'DET', 29, 729, 25.1, 42, 0],
   ['Juice Landry', 'TEN', 31, 725, 23.4, 49, 0],
   ['Terrance Mercein', 'CHI', 31, 701, 22.6, 98, 1],
   ['Yale Lombardi', 'PIT', 24, 664, 27.7, 52, 0],
   ['Cal Whitley', 'ATL', 24, 563, 23.5, 37, 0],
   ['Devon Causeway', 'KC', 25, 557, 22.3, 35, 0],
   ['Kevin Clark', 'STL', 25, 554, 22.2, 32, 0],
   ['Steve Reeves', 'IND', 28, 548, 19.6, 51, 0],
   ['Fry Gillman', 'DEN', 17, 457, 26.9, 63, 0],
   ['Preston Quarters', 'NYJ', 17, 417, 24.5, 46, 0],
   ['Kendall McCaffey', 'TB', 18, 398, 22.1, 45, 0]
];
