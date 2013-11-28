/*
 * Generate graphs
 *
 */


gtrans = new Dygraph(document.getElementById("tr_mean"),
		             "csv_data/graphes-Transactions-mean.csv",
		             graphOptions("Transactions duration","tr_mean_val","msec", true)
		            );

gtransrate = new Dygraph(document.getElementById("transrate"),
			             "csv_data/graphes-Transactions-rate.csv",
			             graphOptions("Transactions rate","transrate_val","transactions/sec", false)
			            );

gperf = new Dygraph(document.getElementById("perfs_mean"),
		            "csv_data/graphes-Perfs-mean.csv",
		            graphOptions("","tr_perfs_val","msec", false) 
		           );



greqrate = new Dygraph(document.getElementById("reqrate"),
		               "csv_data/graphes-Perfs-rate.csv",
		               graphOptions("","reqrate_val","requ/sec", true)
		              );


gusersim = new Dygraph(document.getElementById("usersim"),
		               "csv_data/graphes-Users-simultaneous.csv",
		               graphOptions("", null,"users")
		              );

garrivalrate = new Dygraph(document.getElementById("arrivalrate"),
			   "csv_data/graphes-Users_Arrival-rate.csv",
			   graphOptions("", null, "users")
			  );
/* Network */
gnet = new Dygraph(document.getElementById("size_rate"),
		   "csv_data/graphes-Size-rate.csv",
		   graphOptions("", null, "kBytes", true)
		  );



