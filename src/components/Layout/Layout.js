// import 'styles.css';
import classes from './Layout.css';
import React from 'react';
import Aux from '../../hoc/Auxi';

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux >
);

export default layout;