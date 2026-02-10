function downloadFile(callback) {
  console.log("Downloading file...");

  // simulate 2 seconds download time
  setTimeout(function () {
    console.log("Download completed");

    // call the callback function
    callback();
  }, 2000);
}

// callback function
function openFile() {
  console.log("File opened");
}

// function call
downloadFile(openFile);
