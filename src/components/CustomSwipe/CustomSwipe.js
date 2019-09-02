import React from 'react'
import { Swipeable } from 'react-swipeable'
import { connect } from 'react-redux'
import * as appConst from '../../AppConst'
import * as actionType from '../../redux-reducer/actiontype'

class CustomSwipe extends React.Component {
    
      leftSwipeHandler = () => {
            let res = appConst.prevPage(this.props.index);
            this.props.changepage(res.index);
            this.props.onChangeAccess()          
            this.props.onChangeTitle(res.data.name)
            this.props.push(res.data.link)
      }
    
      rightSwipeHandler = () => {
            let res = appConst.nextPage(this.props.index);
            this.props.changepage(res.index);
            this.props.onChangeAccess()          
            this.props.onChangeTitle(res.data.name)
            this.props.push(res.data.link)
      }
      

  render() {
    return(
        <Swipeable onSwipedLeft={this.leftSwipeHandler}  onSwipedRight={this.rightSwipeHandler} trackTouch={true} delta={10}>
           {this.props.children}
        </Swipeable>
      )
  }
}

const mapDispatchToProps = dispatch => ({
    onChangeTitle : (val) => dispatch({type : actionType.CHANGE_TITLE , change_title : val}),
    onChangeAccess : () => dispatch({type : actionType.CHANGE_ACCESSBYNAV , val : false})
})


export default connect(null,mapDispatchToProps)(CustomSwipe)