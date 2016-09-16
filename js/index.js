$(document).ready( function() {
	
});

function reloadViz(){
    console.log("ok lets reload");
    vizdiv = document.getElementById("dataVis");
    vizdiv.innerHTML = '<iframe src="viz.html" width="100%" height="720px" id="viziframe"></iframe>';
}