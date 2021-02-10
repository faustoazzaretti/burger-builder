// import 'styles.css';
import classes from './Layout.css';
import React from 'react';
import Aux from '../../hoc/Auxi';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Aux>
        <Toolbar />
        <main className="Content">
            {props.children}
        </main>
    </Aux >
);

export default layout;