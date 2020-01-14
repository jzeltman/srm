import React, { useState, useEffect } from 'react';

import './file-upload.scss';

const FileUpload = ({ config }) => {
    return (
        <div id="File-Upload">
            <div id="File-Upload-Modal">
                <button onClick={config.cancelClose} id="File-Upload-Close">
                    <i className="fas fa-times"></i>
                </button>
                <form>
                    <label htmlFor="file">{config.label}</label>
                    <input type="file" accept={config.accept} name="file" onChange={e => config.submitHandler(e.target.files[0])} />
                </form>
            </div>
        </div>
    );
}

export default FileUpload;