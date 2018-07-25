import React from 'react'
import AppBar from 'material-ui/AppBar'

import { BrowserRouter as Router, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import BasicComponents from './BasicComponents'
import PassingParameters from './PassingParameters'
import SideBar from './SideBar'
import Counter from './Counter'


const App = () => (
  <div>
    <Router>
      <div>
        <AppBar
          title={'mój APP BAR !!!!!'}
        />

        <SideBar />

        <Route path={'/dashboard'} component={Dashboard} />
        <Route path={'/'} exact component={Dashboard} />
        <Route path={'/basic-component'} exatc component={BasicComponents} />
        <Route path={'/passing-parameters/:parameterName'} component={PassingParameters} />
        <Route path={'/counter'} component={()=> <Counter number ={5}/>} />
      </div>
    </Router>
  </div>
)



export default App
