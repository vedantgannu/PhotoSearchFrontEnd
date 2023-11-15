function upload(){
  var output = document.getElementById('output');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function() {
    URL.revokeObjectURL(output.src) // free memory
  }

  var imageNameExtension = document.getElementById("file-selector").val;
  console.log(imageNameExtension);
  
  

  var customLabels = document.getElementById
  var contentType = "image/jpeg";
  sdk.uploadBucketKeyPut({},{'key': imageNameExtension, 'bucket': 'vedantgannuphotos', 'x-amz-meta-customLabels':[]},
  {
    headers: {
      //'x-api-key': 'RNhYQ7lG2M4aiWEAiZwl25uEQfJ3xii39UllhR7T',
      'Content-Type': '',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'x-api-key': 'RNhYQ7lG2M4aiWEAiZwl25uEQfJ3xii39UllhR7T'
    }
  })
}