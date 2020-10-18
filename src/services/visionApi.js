import axios from 'axios';

export function callVisionApi(imageBlobURL) {
  fetch(imageBlobURL).then(res => res.blob()).then(blob => {
    var reader = new FileReader();
    reader.readAsDataURL(blob); 
    reader.onloadend = function() {
        var base64data = reader.result;
        // Remove data attributes
        getAnnotations(base64data.substr(base64data.indexOf(',') + 1))
    }
  });
}

function getAnnotations(base64Image) {
  const url = "https://vision.googleapis.com/v1/images:annotate"
  const data = {
    "requests": [
      {
        "image": {
          "content": base64Image
        },
        "features": [
          {
            "type": "DOCUMENT_TEXT_DETECTION"
          }
        ]
      }
    ]
  }
  const config = {
    params: {
      key: process.env.REACT_APP_VISION_API_KEY
    }
  }

  axios.post(
    url,
    data,
    config
  ).then(response => {
    console.log(response);
  }).catch(error => {
    console.log(error);
  });
}