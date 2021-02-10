// import 'styles.css';
import classes from './Layout.css';
import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false })
    }

    render() {
        return (<Aux>
            <Toolbar />
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