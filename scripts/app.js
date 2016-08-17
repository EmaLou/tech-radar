$(function () {
    $.getJSON('data/resi-skillsets.json', function(data) {
        ['Front-end', 'Back-end', 'OPS', 'QA', 'Mobile'].forEach(function(category) {
            generateChart(data, category);
        });
        generateBubble({children: flatten(data)});
    });
});