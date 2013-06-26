  gerrors = new Dygraph(
    document.getElementById("errors_rate"),
    "csv_data/graphes-Errors-rate.csv",
      graphOptions("", null,"errors/sec", true)
  );