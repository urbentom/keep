import * as React from "react";
import styled from 'styled-components';

import ComponentIconAdd from './icons/add';

interface Props {
    onAddNote?: any;
}

const NavigationContainer = styled.div`
    width: 64px;
    height: 100vh;
    border-right: solid 1px grey;
`

export default function Navigation(props:Props) {

    return (
        <NavigationContainer>
            <ComponentIconAdd />
        </NavigationContainer>
    )
} 