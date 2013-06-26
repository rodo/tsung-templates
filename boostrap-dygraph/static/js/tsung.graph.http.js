/*
 * HTTP Return code Rate
 *
 */
ghttp = new Dygraph(
    document.getElementById("http_code_rate"),
    "csv_data/graphes-HTTP_CODE_OK-rate.csv",
    graphOptions("", null, "code/sec", true)
);

ghttpko = new Dygraph(
    document.getElementById("http_code_rate_ko"),
    "csv_data/graphes-HTTP_CODE_KO-rate.csv",
    graphOptions("", null, "code/sec", true)
);
