import React from 'react';
import styled from 'styled-components';

interface Props{
    class?: string,
    onClick?: any,
    iconColour?: string,
}

const IconDiv = styled.div`
    height: 32px;
	width: 32px;
	margin: auto;
	margin-top: 18px;
	padding: 3px;
	border-radius: 48px;
	transition: background-color 0.5s ease-in-out;
	background-color: #ffffff;
    &:hover {
		transition: background-color 0.5s ease-in-out;
        background-color: teal;
    }
`

const IconPath = styled.path`
	fill: teal;
	transition: background-color 0.5s ease-in-out;
	${IconDiv}:hover & {
		transition: background-color 0.5s ease-in-out;
		fill: #ffffff;
    }
`

export default function ComponentIconAdd(props:Props){
    
    return (
    
        <IconDiv>
			<svg viewBox="0 0 24 24">
				<g>
					<IconPath d="M12,17.25c-0.414,0-0.75-0.336-0.75-0.75v-3.75H7.5c-0.414,0-0.75-0.336-0.75-0.75s0.336-0.75,0.75-0.75h3.75V7.5
						c0-0.414,0.336-0.75,0.75-0.75s0.75,0.336,0.75,0.75v3.75h3.75c0.414,0,0.75,0.336,0.75,0.75s-0.336,0.75-0.75,0.75h-3.75v3.75
						C12.75,16.914,12.414,17.25,12,17.25z"/>
					<IconPath d="M12,24C5.383,24,0,18.617,0,12C0,5.383,5.383,0,12,0c6.617,0,12,5.383,12,12C24,18.617,18.617,24,12,24z M12,1.5
						C6.21,1.5,1.5,6.21,1.5,12c0,5.79,4.71,10.5,10.5,10.5c5.79,0,10.5-4.71,10.5-10.5C22.5,6.21,17.79,1.5,12,1.5z"/>
				</g>
			</svg>
		</IconDiv>

	)

} 