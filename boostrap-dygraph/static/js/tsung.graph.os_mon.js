  gcpu = new Dygraph(
    document.getElementById("cpu_mean"),
    "csv_data/graphes-cpu-mean.csv",
	graphOptions
  );
  gfreemem = new Dygraph(
    document.getElementById("freemem_mean"),
    "csv_data/graphes-freemem-mean.csv",
	graphOptions
  );

  gload = new Dygraph(
    document.getElementById("load_mean"),
    "csv_data/graphes-load-mean.csv",
	graphOptions
  );

