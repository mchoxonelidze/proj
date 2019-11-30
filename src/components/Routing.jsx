import React from 'react';
import Cars from '../pages/Cars';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import {Route, Switch } from 'react-router-dom';
import Userspage from '../pages/Userspage';

class Routing extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/users' component={Userspage} />
                    <Route path='/cars' component={Cars} />
                    <Route component={NotFound}/>
                </Switch>

            </div>
        )
    }
}

export default Routing;