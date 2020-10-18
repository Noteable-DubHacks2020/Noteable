import React from 'react'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import { callVisionApi } from '../../services/visionApi';


export const ImageUpload = () => {
  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
  
  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    // console.log(status, meta, file)
  }
  
  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    // console.log(files);
    // console.log(files.map(f => f.meta))
    const url = files[0].meta.previewUrl
    callVisionApi(url);
    allFiles.forEach(f => f.remove())
  }

  return (
    <div>
      <Dropzone
      styles={{
        dropzone: { width: 400, height: 200, backgroundColor: 'white' },
        dropzoneActive: { borderColor: 'green' },
      }}
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="image/*,audio/*,video/*" classNames="dropzone"
    />
    </div>
  )
}
