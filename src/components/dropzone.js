import React, {useCallback} from 'react'
import Dropzone from 'react-dropzone'
import './dropzone.css'

export default function DropImage({ states, text, customStyle={} }) {
    const [upload, setUpload] = states
    console.log(states);
    if (upload == "") {
      return (
        <Dropzone onDrop={(acceptedFiles) => setUpload(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section
              style={customStyle}
              className={"dropZone-border"}
            >
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>{text}</p>
              </div>
            </section>
          )}
        </Dropzone>
      );
    } else {
      // console.log(upload[0]);
      return (
        <div
          onClick={() => setUpload(" ")}
          style={customStyle}
          className={"dropZone-border"}
        >
          <h5>{upload[0]?.name}</h5>
        </div>
      );
    }
  }