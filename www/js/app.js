document.addEventListener("deviceready", init, false);

//The directory to store data
var store;

//Used for status updates
var $status;

//URL of our asset
var assetURL = "http://dentef.com/files/";

//File name of our important data file we didn't ship with the app
var fileName = "Anexo.pdf";

//var uri = encodeURI(assetURL + fileName);

function init() {
	
	$status = document.querySelector("#status");

	$status.innerHTML = "Checking for data file.";

	store = cordova.file.dataDirectory;

	//Check for the file. 
	window.resolveLocalFileSystemURL(store + fileName, appStart, downloadAsset );
	
	
}

function downloadAsset(dir) {
	alert(store);
	alert(fileName);
	alert(assetURL + fileName);
	
	var ruta = dir.toURL() + '/' + fileName;
	
	alert (ruta);
	
	
	var fileTransfer = new FileTransfer();
	console.log("About to start transfer");
		
	
	fileTransfer.download(assetURL + fileName, store, 
		function(entry) {
			console.log("Success!");
			
		
			
			appStart();
		}, 
		function(err) {
			console.log("Error");
			console.dir(err);
		});
}

//I'm only called when the file exists or has been downloaded.
function appStart() {
	$status.innerHTML = "App ready!";
}