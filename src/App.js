import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCards from './component/ItemCards';
import Navbar from './component/Navbar';
import ItemList from './component/ItemList';
import ItemSearch from './component/ItemSearch';
import Sidebar from './component/Sidebar';
import { Route, Switch, Redirect } from 'react-router-dom';



function App() {

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <Navbar />
        </div>
        <div className="row">
          <div className="col-2 style={{textAlign:'right' , margin}}">
            <Sidebar />
          </div>
          <div className="col-10">
            <ItemSearch />
            <ItemList />
            <Switch>
              <Route
                path="/s/tehran/:category"
                component={ItemCards}
              />
              <Redirect to="/s/tehran" />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
