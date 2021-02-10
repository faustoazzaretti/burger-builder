// import 'styles.css';
import classes from './Layout.css';
import React from 'react';
import Aux from '../../hoc/Auxi';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
const layout = (props) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <main className="Content">
            {props.children}
        </main>
    </Aux >
);

export default layout;