


  //initial route path goes to app component
    //index route from / to initial redirect component
    //want to have some sort of base content route, maybe like a dashboard
      //within this should have players...
      //...teams
      //...matchups and anything else you might want.

/*
export default (
  <Route path='/' component={App}>
    <IndexRedirect from='/' to='/baseball/logs' />
    <Route path='content' component={Content}>
      <Route path='players' component={Players} />
      <Route path='teams' component={Teams} />
      <Route path='matchups' component={Matchups} />
    </Route>
    <Route path='conferences' component={Content}>
      <Route path='sec' component={Sec} />     
    </Route>
    <Route path='teams' component={Content} >
      <Route path='alabama' component={Alabama} /> 
    </Route>
    <Route path='players' component={Content} >
      <Route path='player' component={Player} /> 
    </Route>
    <Route path='baseball' component={Content} >
      <Route path='lineups' component={Eligible} />
      <Route path='logs' component={Logs} />  
    </Route>
  </Route>
)

*/