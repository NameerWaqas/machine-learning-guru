import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Handle_Auth } from '../../redux/actionCreator'
import IfAuth from './Auth/IfAuth'
import IfNotAuth from './Auth/IfNotAuth'


let mapStateToProps = (state) => ({
    mainState: state.mainState
})

let mapDispatchToProps = (dispatch) => ({
    setAuth: (bool) => dispatch(Handle_Auth(bool))
})

function Main(props) {

    // console.disableYellowBox = true
    // console.ignoredYellowBox = true

    return (
        <>
            {props.mainState.root.user.auth ?
                  <IfAuth />
                : <IfNotAuth setAuth={props.setAuth} />}
        </>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)