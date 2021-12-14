import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
import { Header, Icon } from 'semantic-ui-react';

interface Props {
    setFiles: (files: any) => void;
}

export default function PhotoWidgetDropzone({setFiles} : Props) {
    const dzStyles = {
        border: 'dashed 3px #eee',
        borderColor: '#eee',
        borderRadius: '5px',
        paddingTop: '30px',
        textAlign: 'center' as 'center',
        height: 200

    };

    const dzActive = {
        borderColor: 'green'
    }

    // useCallback returns a memoized version of the callback function and will not change unless
    // the dependency changes (optimization)
    const onDrop = useCallback(acceptedFiles => {
        // maps photo array adding preview of the picture
        setFiles(acceptedFiles.map((file: any) => Object.assign(file, {
            // gives preview of the photo uploaded
            preview: URL.createObjectURL(file)
        })))
    }, [setFiles]);


    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
    <div {...getRootProps()} style={isDragActive? {...dzStyles, ...dzActive} : dzStyles }>
        <input {...getInputProps()} />
        <Icon name='upload'  size='huge' />
        <Header content="Drop image here" />
    </div>
  )
}