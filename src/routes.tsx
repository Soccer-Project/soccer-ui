import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Player from './pages/Player';

const MainRoutes = () => {
    return(
        <Switch>
            <Route path='/' exact={true} component={HomePage} />
            <Route path='/:player' exact={true} component={Player} />
        </Switch>
    )
} 

export default MainRoutes;
