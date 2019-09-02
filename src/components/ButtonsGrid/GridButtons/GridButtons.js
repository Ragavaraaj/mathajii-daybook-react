import React from 'react';
import GridButton from './GridButton'
import * as appConst from '../../../AppConst'

const GridButtons = (props) => {
    return (
        appConst.BUTTON_DATA.map((el , index) => {
            return <GridButton 
                        form={el.tag} 
                        key={index} 
                        url={props.match.url} 
                        push={props.history.push} 
                    >{el.val}</GridButton>
        })
    )
}

export default GridButtons