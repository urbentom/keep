import React, { Component, MouseEvent } from 'react';
import styled from 'styled-components';
import tinycolor from 'tinycolor2';

import { Button } from '../helpers/interfaces'; 

type Props = Button;

export default class ComponentButton extends Component< Props, {}> {
	
    Button = styled.div`
        text-align: center;
        background-color: ${ props => (this.props.primary)? '#2c241c' : '' };
        border-radius: 3px;
        padding: 15px 20px;
        display: inline-block;
        margin-left: 10px;
        cursor: pointer;
        transition: background-color 0.5s ease-in-out;
        &:hover{
            transition: background-color 0.5s ease-in-out;
            background-color: ${ props => (this.props.primary)? tinycolor('#2c241c').lighten(5).toHexString() : tinycolor('#eff1f7').darken(8).toHexString() };
        }
    `

    ButtonSpan = styled.span`
        color: ${ props => (this.props.primary)? '#ffffff' : '#2c241c' };
        font-size: 1em;
        font-family: 'Raleway', sans-serif;
    `

	render(){
		return (
    
			<this.Button onClick={this.props.onClick}>
                <this.ButtonSpan>{this.props.content}</this.ButtonSpan>
            </this.Button>
	
		)
	}

} 