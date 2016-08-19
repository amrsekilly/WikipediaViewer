// get the homepage
// https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json

var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=";

$('#searchTerm').bind("enterKey",function(e){
  // perform the request
  var title = encodeURIComponent($('#searchTerm').val());
  var requestURL = url + title + '&callback=JSON_CALLBACK';


  function getPages(data) {
    // https://en.wikipedia.org/?curid=13834

    var pages = data.query.pages;
    console.log(pages);

    for (var page in pages) {
      if (pages.hasOwnProperty(page)) {
        var currentPage = pages[page];
        $("#results").append("<div><a target='_blank' href='https://en.wikipedia.org/?curid="+currentPage.pageid+"'><h3>"+ currentPage.title +"</h3><p>"+currentPage.extract+"</p></a></div>");
      }
    }
  }

  // get the JSON data
  $.ajax({
     dataType: "jsonp",
     url:  requestURL,
     success: getPages
  });

  // clear the search bar
  $("#searchTerm").val('');

  // reset the html for the results
  $("#results").html("");
});

$('#searchTerm').keyup(function(e){
    if(e.keyCode == 13)
    {
        $(this).trigger("enterKey");
    }
});
