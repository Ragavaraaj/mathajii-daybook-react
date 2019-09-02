import React from 'react'
import withReveal from 'react-reveal/withReveal';
import Fade from 'react-reveal/Flash'

const FadeSelector = (props) =>{
    return  withReveal(props.children,<Fade/>)
} 

export default FadeSelector;
