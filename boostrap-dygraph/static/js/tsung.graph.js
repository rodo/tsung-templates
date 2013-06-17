/*
 * Generate graphs
 *
 */

function graphOptions(title, div, ylabel) {
    if (div != null) {
	options = {
	    legend: 'always',
	    title: '<p>'+title+'</p>',
	    titleHeight: 6,
	    ylabel: ylabel,
	    labelsSeparateLines: true,
	    labelsDiv: div,
	    rollPeriod: 7,
	    showRoller: true}
    } else {
	options = {
	    legend: 'always',
	    title: '<p>'+title+'</p>',
	    titleHeight: 6,
	    ylabel: ylabel,
	    rollPeriod: 7,
	    showRoller: true}
    }
    return options;
};

function stockchange(chart, el, step) {
    chart.setVisibility(el.id - step, el.checked);
};

gtrans = new Dygraph(document.getElementById("tr_mean"),
		     "csv_data/graphes-Transactions-mean.csv",
		     graphOptions("Transactions","tr_mean_val","msec")
		    );

gperf = new Dygraph(document.getElementById("perfs_mean"),
		    "csv_data/graphes-Perfs-mean.csv",
		    graphOptions("","tr_perfs_val","msec") );

gtransrate = new Dygraph(document.getElementById("transrate"),
			 "csv_data/graphes-Transactions-rate.csv",
			 graphOptions("",null,"")
			);

greqrate = new Dygraph(document.getElementById("reqrate"),
		       "csv_data/graphes-Perfs-rate.csv",
		       graphOptions("requests","reqrate_val","requ/sec")
		      );


gusersim = new Dygraph(document.getElementById("usersim"),
		       "csv_data/graphes-Users-simultaneous.csv",
		       graphOptions("", "usersim_val","users")
		      );

garrivalrate = new Dygraph(document.getElementById("arrivalrate"),
			   "csv_data/graphes-Users_Arrival-rate.csv",
			   graphOptions("", null, "users")
			  );

gnet = new Dygraph(document.getElementById("size_rate"),
		   "csv_data/graphes-Size-rate.csv",
		   {
		       legend: "always",
		       title: "<p>title</p>",
		       ylabel: "ylabel",
		       rollPeriod: 7,
		       showRoller: true
		   }
		  );



