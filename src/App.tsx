import React from 'react';
import { Switch } from 'react-router-dom'
import { map } from 'lodash'
import { GlobalStyle, PageContainer } from './static/css'
import DefaultMenu from './components/app/layout'
import routes from './routes'
import Routes from './components/utils/routes'

function App() {
  return (
    <>
      <GlobalStyle/>
      <DefaultMenu>
        <PageContainer>
          <Switch>
            {map(routes, (route, index) => {
              <Routes key={index} {...route}/>
            })}
          </Switch>
        </PageContainer>
      </DefaultMenu>
    </>
  );
}

export default App;
