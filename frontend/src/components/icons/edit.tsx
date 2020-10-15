import React, { Component } from 'react';
import styled from 'styled-components';

interface Props{
    class?: string,
    onClick?: any,
    colour?: string,
}

export default class ComponentIconEdit extends Component< Props, {}> {

    IconDiv = styled.div`
        height: 18px;
        width: 18px;
        padding: 10px;
    	border-radius: 24px;
        transition: background-color 0.5s ease-in-out;
        margin-left: 6px;
        &:hover {
    		transition: background-color 0.5s ease-in-out;
            background-color: #2c241c;
        }
    `

    IconPath = styled.path`
    	fill: #2c241c;
    	transition: fill 0.5s ease-in-out;
        ${this.IconDiv}:hover & {
    		transition: fill 0.5s ease-in-out;
            fill: ${props => this.props.colour};
        }
    `

    render(){

        return (
    
            <this.IconDiv>
                <svg  x="0px" y="0px" viewBox="0 0 24 24">
                    <g>
                        <this.IconPath d="M0.75,24c-0.198,0-0.391-0.08-0.531-0.22c-0.187-0.187-0.262-0.463-0.195-0.72l1.82-6.94
                        c0.003-0.013,0.009-0.03,0.015-0.046c0.005-0.019,0.012-0.038,0.02-0.058C1.887,16,1.903,15.97,1.912,15.956
                        c0.002-0.005,0.011-0.021,0.02-0.036c0.026-0.042,0.054-0.079,0.084-0.113c0.008-0.01,0.017-0.019,0.025-0.028L16.529,1.294
                        c0.823-0.827,1.921-1.284,3.091-1.287c1.177,0,2.275,0.453,3.101,1.275c0.004,0.004,0.016,0.016,0.019,0.019
                        c0.826,0.846,1.273,1.955,1.26,3.125c-0.014,1.169-0.482,2.263-1.319,3.08L8.223,21.961c-0.016,0.016-0.05,0.044-0.069,0.057
                        c-0.007,0.007-0.026,0.021-0.047,0.035c-0.069,0.048-0.145,0.083-0.224,0.104l-6.942,1.819C0.879,23.991,0.815,24,0.75,24z
                         M1.801,22.199l4.864-1.274l-1.076-2.511l-2.514-1.073L1.801,22.199z M7.95,20.113L18.594,9.471l-1.501-1.5L7.05,18.012
                        L7.95,20.113z M5.988,16.953L16.032,6.911l-1.5-1.499L3.886,16.055L5.988,16.953z M19.655,8.411l1.028-1.027l-4.062-4.06
                        l-1.028,1.028L19.655,8.411z M21.742,6.321c0.483-0.526,0.75-1.199,0.758-1.913c0.009-0.769-0.282-1.495-0.819-2.045
                        c-0.004-0.004-0.015-0.016-0.017-0.018c-0.544-0.541-1.266-0.839-2.032-0.839l-0.008-0.375l0.001,0.375
                        c-0.726,0.002-1.41,0.27-1.94,0.758L21.742,6.321z"/>
                    </g>
                </svg>
            </this.IconDiv>
    
        )


    }

} 