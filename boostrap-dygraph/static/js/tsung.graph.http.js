ghttp = new Dygraph(
    document.getElementById("http_code_rate"),
    "csv_data/graphes-HTTP_CODE-rate.csv",
    graphOptions("Http code rate", null, "cocde/sec")
);