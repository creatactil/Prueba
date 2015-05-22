document.addEventListener("deviceready", init, false);

//The directory to store data
var store;

//Used for status updates
var $status;

//
var assetURL = "http://dentef.com/files/";

//Nombre del archivo de nuestro archivo de datos importantes que no se incluyen con la aplicación
var fileName = "re.pdf";

function init() {
	
	$status = document.querySelector("#status");

	$status.innerHTML = "Checking for data file.";

	store = cordova.file.dataDirectory;
	 	
		//var x = store + '/' + filename;
		alert (store);
		alert (filename);
		
		alert (store + filename);
		
	//Check for the file. 
	window.resolveLocalFileSystemURL(store + fileName, appStart, downloadAsset);

}

function downloadAsset() {
		
	var fileTransfer = new FileTransfer();
	console.log("About to start transfer");
	fileTransfer.download(assetURL, store + fileName, 
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
	alert ("OK");
	console.log(store + fileName);
	window.open (store + fileName, '_system', 'location = yes, closebuttoncaption = done, enableViewportScale = yes');
}