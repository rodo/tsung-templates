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
