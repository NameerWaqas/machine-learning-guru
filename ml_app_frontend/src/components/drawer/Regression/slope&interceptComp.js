import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { HandleIntercept, HandleSlope, HandleBreadcrumb } from '../../../Redux/actionCreator';
import { CustomInput, FormGroup, Label } from 'reactstrap/';
import Grid from '@material-ui/core/Grid';
// import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chart from '../../plots/simplePlots/plot'
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

const mapDispatchToProps = (dispatch) => ({
    UpdateIntercept: (e) => dispatch(HandleIntercept(e)),
    UpdateSlope: (e) => dispatch(HandleSlope(e)),
    UpdateBreadcrumbState: (e) => dispatch(HandleBreadcrumb(e))
})

const mapStateToProps = (state) => ({
    mainState: state.mainState
})


function SlopeAndIntercept(props) {
    let match = useRouteMatch()
    let state = props.mainState.regression
    let xCord = []
    let yCord = []
    for (var i = 0; i <= 10; i++) {
        xCord.push(i)
        let yVal = parseInt(state.slopeIntercept.slope) * i + parseInt(state.slopeIntercept.intercept)
        yCord.push(yVal)
    }
    window.scrollTo(0,254)
    return (
        <div >
            <Grid conatiner justify='center' alignItems='center' >
                <Grid item sm={12} md={12} lg={12} xs={12}>
                    <h2 className='blogTitle'>Slope And Intercept</h2>
                    <h3>Slope:</h3>
                    <p>Slope tells us both the direction and steepness of the line drawn on graph.It is mathematically
                    calculated by dividing 'Rise(y2 - y1)' by 'Run(x2 -x 1)'.<br />Slope of curve varies from point to point
                </p>
                    <h3>Intercept:</h3>
                    <p>The point at which line cuts the y-axis is called intercept.
                </p>
                </Grid>

                {/* <ActiveLastBreadcrumb /> */}
                <Example mainState={props.mainState} UpdateBreadcrumbState={props.UpdateBreadcrumbState} />

                <Grid item sm={12} md={12} lg={12} xs={12} id='plotSection'>
                    <Switch>
                        {/* Exact Route */}
                        <Route exact path={match.path + '/'}>
                            <Chart xCord={xCord} yCord={yCord} type='line' mode='lines' title='Line chart'
                                markerColor='red' />
                        </Route>
                        <Route path={match.path + '/scatter'}>
                            <Chart xCord={xCord} yCord={yCord} type='scatter' mode='markers' title='Scatter plot'
                                markerColor='green' />
                        </Route>
                        <Route path={match.path + '/linewithscatter'}>
                            <Chart xCord={xCord} yCord={yCord} type='scatter' mode='Scatter Plot with Lines'
                                markerColor='blue' title='Scatter + Line Plot' />
                        </Route>
                    </Switch>

                </Grid>
            </Grid>
            {/* <FormGroup className> */}
            <div>
                <Label for="exampleCustomRange">Slope: {state.slopeIntercept.slope}</Label>
                <CustomInput type="range" min="0" max="10" defaultValue="0"
                    id="exampleCustomRange" name="customRange" onChange={(e) => { props.UpdateSlope(e.target.value) }} />
                <Label for="exampleCustomRange">Intercept: {state.slopeIntercept.intercept}</Label>
                <CustomInput type="range" min="0" max="10" defaultValue="0"
                    id="exampleCustomRange" name="customRange" onChange={(e) => { props.UpdateIntercept(e.target.value) }} />
                {/* </FormGroup> */}
            </div>
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(SlopeAndIntercept)

const Example = (props) => {

    let match = useRouteMatch()
    let state = props.mainState.regression.slopeIntercept.breadcrumb
    return (
        <div>
            <Grid container justify='center' alignItems='center'>
                <Grid item sm={12} lg={12} md={12} xs={12}>
                    <Nav tabs >
                        <NavItem>
                            <NavLink active={state.line} onClick={() => props.UpdateBreadcrumbState('line')} >
                                <Link color="inherit" to={match.path + '/'}>
                                    Line Chart
                                 </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" active={state.scatter} onClick={() => props.UpdateBreadcrumbState('scatter')}>
                                <Link color="inherit" to={match.path + '/scatter'}>
                                    Scatter Plot
                               </Link>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => props.UpdateBreadcrumbState('linescatter')} active={state.linescatter}>
                                <Link color="inherit" to={match.path + '/linewithscatter'}>
                                    Line + Scatter
                                 </Link>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Grid>
            </Grid>
        </div>
    );
}
// connect(mapStateToProps,mapDispatchToProps)(Example)