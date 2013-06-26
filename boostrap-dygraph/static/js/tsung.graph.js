/*
 * Generate graphs
 *
 */

function graphOptions(title, div, ylabel, sselc) {

    sselc = (typeof sselc === "undefined") ? false : sselc;

    if (div != null) {
	options = {
	    title: '<p>'+title+'</p>',
	    titleHeight: 6,
	    ylabel: ylabel,
	    labelsSeparateLines: true,
	    labelsDiv: div,
	    rollPeriod: 7,
	    showRoller: false,
	    showRangeSelector: sselc,
	    includeZero: true}
    } else {
	options = {
	    title: '<p>'+title+'</p>',
	    titleHeight: 6,
	    ylabel: ylabel,
	    rollPeriod: 7,
	    showRoller: false,
	    showRangeSelector: sselc,
	    includeZero: true}
    }
    return options;
};

function stockchange(chart, el, step) {
    chart.setVisibility(el.id - step, el.checked);
};

function transchange(chart, el, step) {
    gtrans.setVisibility(el.id - step, el.checked);
    gtransrate.setVisibility(el.id - step, el.checked);
};

gtrans = new Dygraph(document.getElementById("tr_mean"),
		     "csv_data/graphes-Transactions-mean.csv",
		     graphOptions("Transactions duration","tr_mean_val","msec", true)
		    );

gtransrate = new Dygraph(document.getElementById("transrate"),
			 "csv_data/graphes-Transactions-rate.csv",
			 graphOptions("Transactions rate",null,"transactions/sec", false)
			);

gperf = new Dygraph(document.getElementById("perfs_mean"),
		    "csv_data/graphes-Perfs-mean.csv",
		    graphOptions("","tr_perfs_val","msec", false) 
		   );



greqrate = new Dygraph(document.getElementById("reqrate"),
		       "csv_data/graphes-Perfs-rate.csv",
		       graphOptions("requests","reqrate_val","requ/sec", true)
		      );


gusersim = new Dygraph(document.getElementById("usersim"),
		       "csv_data/graphes-Users-simultaneous.csv",
		       graphOptions("", "usersim_val","users")
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



