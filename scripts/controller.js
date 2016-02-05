function same(elem, elem_src, header) {
    $("#home").html(elem);
    $("#header").html(header);
    $("#img").attr("src", elem_src);
};

$(document).ready(function () {

    $.getJSON("data.json", function (data) {

        for (var i = 0; i < data.length; i++) {
            $("#nav").append("<a  id='nav" + (i) + "'>" + data[i].title + "</a>&nbsp;");
            // sets url
            $("#nav" + (i)).attr("href", "#" + data[i].href);
            // sets article title
            $("#nav" + (i)).attr("data-title", data[i].title); 
            // sets page content
            $("#nav" + (i)).attr("data-page", data[i].description);
            // sets image url
            $("#nav" + (i)).attr("data-src", data[i].img);
            $("#nav" + (i)).click(function () {
                same($(this).attr("data-page"), $(this).attr("data-src"), $(this).attr("data-title"));
            });
        }
               
        // sets default on page load values
        $("#home").html(data[0].description);
        $("#img").attr("src", data[0].img);
        $("#header").html(data[0].title);
    });
});