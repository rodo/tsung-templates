/*
 * Generate graphs
 *
 */


gsession = new Dygraph(document.getElementById("chart_session"),
		     "csv_data/graphes-Session-mean.csv",
		     graphOptions("mean", null,"msec", true)
		    );

gsessionmax = new Dygraph(document.getElementById("chart_session_max"),
		     "csv_data/graphes-Session-max_sample.csv",
		     graphOptions("max", null, "msec")
		    );

gsessionmin = new Dygraph(document.getElementById("chart_session_min"),
		     "csv_data/graphes-Session-min_sample.csv",
		     graphOptions("min", null, "msec")
		    );

gsessionstddev = new Dygraph(document.getElementById("chart_session_stddev"),
		     "csv_data/graphes-Session-stddev.csv",
		     graphOptions("standard deviation", null, "msec")
		    );

