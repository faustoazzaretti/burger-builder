// import 'styles.css';
import classes from './Layout.css';
import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    sideDrawerToogleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }

    render() {
        return (<Aux>
            <Toolbar drawerToogleClicked={this.sideDrawerToogleHandler} />
            <SideDrawer
                open={this.state.showSideDrawer}
                closed={this.sideDrawerCloseHandler} />
            <main className="Content">
                {this.props.children}
            </main>
        </Aux >
        )
    }
};



export default Layout;