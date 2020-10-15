import React, { Component, MouseEvent } from 'react';
import styled from 'styled-components';

type Props = {
    onClick(e:MouseEvent): void,
    class?: string,
    colour?: string,
}

export default class ComponentIconDelete extends Component< Props, {}> {

	static defaultProps = {
		onClick: (e:MouseEvent) => {e.stopPropagation()} 
	}
	
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
		transition: background-color 0.5s ease-in-out;
	    ${this.IconDiv}:hover & {
			transition: background-color 0.5s ease-in-out;
	        fill: ${props => this.props.colour};
	      }
	`

	render(){
		return (
    
			<this.IconDiv onClick={this.props.onClick}>
				<svg x="0px" y="0px" viewBox="0 0 24 24">
					<g>
						<this.IconPath d="M6.631,23.25c-1.161,0-2.146-0.906-2.242-2.064L3.06,5.25H1.5c-0.414,0-0.75-0.336-0.75-0.75S1.086,3.75,1.5,3.75h6V3
							c0-1.241,1.009-2.25,2.25-2.25h4.5c1.241,0,2.25,1.009,2.25,2.25v0.75h6c0.414,0,0.75,0.336,0.75,0.75s-0.336,0.75-0.75,0.75h-1.56
							l-1.328,15.937c-0.096,1.157-1.081,2.063-2.242,2.063H6.631z M5.883,21.062c0.032,0.386,0.36,0.688,0.748,0.688H17.37
							c0.387,0,0.716-0.302,0.747-0.688L19.435,5.25H4.565L5.883,21.062z M15,3.75V3c0-0.414-0.336-0.75-0.75-0.75h-4.5
							C9.336,2.25,9,2.586,9,3v0.75H15z"/>
						<this.IconPath d="M9.75,18C9.336,18,9,17.664,9,17.25v-7.5C9,9.336,9.336,9,9.75,9s0.75,0.336,0.75,0.75v7.5C10.5,17.664,10.164,18,9.75,18z
							"/>
						<this.IconPath d="M14.25,18c-0.414,0-0.75-0.336-0.75-0.75v-7.5C13.5,9.336,13.836,9,14.25,9S15,9.336,15,9.75v7.5
							C15,17.664,14.664,18,14.25,18z"/>
					</g>
				</svg>
			</this.IconDiv>
	
		)
	}

} 