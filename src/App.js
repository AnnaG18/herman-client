import React, {Component} from 'react'  ;
import './App.css';
import Chat from "./Chat";

const direct_line_secret = process.env.REACT_APP_DIRECT_LINE_SECRET;

class App extends Component {
    render() {
        return (
            <div className="App">
                <main className="App-intro">

                    <Chat directLine={{secret: direct_line_secret}} user={{ id: 'user_id', name: 'Du' }}/>
                </main>
            </div>
        );
    }
}

export default App;
