import React from 'react'
import ResponsiveDrawer from '../../components/drawer/homepage/homeDrawer'

export default function HomeView(props){
    return(
        <ResponsiveDrawer view = {props.view}/>
    )
}