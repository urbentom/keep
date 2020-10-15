import * as React from "react";
import styled from 'styled-components';

import ComponentIconAdd from './icons/add';

interface Props {
    onAddNote?: any;
}

const NavigationContainer = styled.div`
    width: 128px;
    height: 100vh;
    border-right: solid 2px #b5bed1;
`

export default function Navigation(props:Props) {

    return (
        <NavigationContainer>
            <ComponentIconAdd colour="#2c241c" />
        </NavigationContainer>
    )
} 