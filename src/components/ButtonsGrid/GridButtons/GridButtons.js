import React from 'react';
import GridButton from './GridButton'
import * as appConst from '../../../AppConst'

const GridButtons = (props) => {
    return (
        appConst.BUTTON_DATA.map((el , index) => {
            return <GridButton form={el.tag} key={index} >{el.val}</GridButton>
        })
    )
}

export default GridButtons