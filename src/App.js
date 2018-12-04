import React, { Component, Suspense } from 'react';
import CatFacts from './components/CatFacts'

const CatFactsFromFuture = React.lazy(() => import('./components/CatFactsFromFuture'))

class App extends Component {
  constructor(props) {
    super(props);

    this.buttons = ['Home', 'Cat Facts', 'Cat Facts From Future']

    this.state = {
      tab: 0
    }
  }

  render() {
    return (
      <div className="app">
        <div className="buttons">
          {
            [...Array(3).keys()].map(i =>
              <button key={i}   onClick={() => this.setState({tab: i})}>
                {this.buttons[i]}
              </button>  
            )
          }
        </div>
        {
          (() => {
            switch(this.state.tab) {
              case 1:
                return <CatFacts />
              case 2:
                return (
                  <Suspense fallback={<div>Loading...</div>}>
                    <CatFactsFromFuture />
                  </Suspense>
                )
              default:
                return <div>Home</div>
            }
          })()
        }
      </div>
    );
  }
}

export default App;
