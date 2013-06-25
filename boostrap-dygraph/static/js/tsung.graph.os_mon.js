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

gio = new Dygraph(
    document.getElementById("io_mean"),
    "csv_data/graphes-iowrite-mean.csv",
    graphOptions("", null,"")
);

