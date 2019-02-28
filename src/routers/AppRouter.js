import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import AddExpensePage from '../components/AddExpensePage';
import DashboardPage from '../components/ExpeneDashBoardPage';
import EditExpanse from '../components/EditExpansePage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = ()=>(
    <Router>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={DashboardPage}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit/:id" component={EditExpanse}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
)    

export default AppRouter;