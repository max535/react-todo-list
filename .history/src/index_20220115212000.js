import React from 'react';
import ReactDOM from 'react-dom';

const loginBox = () => {
    return <span className="login">Login Box</span>;
};

const App = () => {
    return (
        <div>
            <div>Header</div>
            <loginBox />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
