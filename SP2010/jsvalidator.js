<!DOCTYPE HTML>
<html><head>

<script type="text/javascript">

function getParameterByName( name )
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}


$(document).ready(function() {

		var s=getParameterByName('selected');
		alert(s);
 		$('#form').html('<form id="formHtml"><br />WO: <select id="WOSelect" />');
 	
 		$().SPServices({
 			operation: "GetListItems",
 			webURL: "/",
 			async: false,
 			listName: "WODetail",
 			CAMLViewFields: "<ViewFields><FieldRef Name='Title' /></ViewFields>",
 			completefunc: function (xData, Status) {
 				$(xData.responseXML).find("[nodeName=z:row]").each(function() {
 					var WO = $(this).attr("ows_Title");
 					$('#WOSelect').append('<option value="'+WO+'">'+WO+'</option>');
 				});
 			}
 		});
 		
 		$('#WOSelect').change(function(){
 			var selval = $('#WOSelect').val();
 			document.location = "?selected="+selval;
 		});
});
</script>
</head>
<body />
</html>