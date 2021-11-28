import React, { useState } from 'react';
import { Loader, Dimmer } from 'semantic-ui-react';

interface Props {
    inverted?: boolean,
    content?: string 
};

export default function Loading({inverted=true, content="Loading..."}: Props) {
    return (
        <Dimmer active={true} inverted={inverted} >
            <Loader content={content} />
        </Dimmer>
    )
}