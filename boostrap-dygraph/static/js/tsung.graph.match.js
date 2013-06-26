/*
 * Generate graphs for match values
 *
 */
gmatch = new Dygraph(document.getElementById("chart_match_rate"),
		     "csv_data/graphes-Match-rate.csv",
		     graphOptions("", null, "/sec", true)
		    );
