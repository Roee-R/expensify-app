import React from 'react';
import { Router, Route, Switch} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory';

import LoginPage from '../components/LoginPage';
import AddExpensePage from '../components/AddExpensePage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import EditExpanse from '../components/EditExpansePage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = ()=>(
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute exact path="/" component={LoginPage}/>
                <PrivateRoute exact path="/dashboard" component={ExpenseDashboardPage}/>
                <PrivateRoute path="/create" component={AddExpensePage}/>
                <PrivateRoute path="/edit/:id" component={EditExpanse}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
)    

export default AppRouter;