// get the homepage
// https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json

var url = "https://en.wikipedia.org/w/api.php?action=query&titles=";

$('#searchTerm').bind("enterKey",function(e){
  // perform the request
  var title = encodeURIComponent($('#searchTerm').val());
  var requestURL = url + title + '&prop=revisions&rvprop=content&format=json';
  console.log(requestURL);
  // clear the search bar
  $("#searchTerm").val('');
});

$('#searchTerm').keyup(function(e){
    if(e.keyCode == 13)
    {
        $(this).trigger("enterKey");
    }
});
