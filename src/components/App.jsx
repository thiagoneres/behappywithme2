import React from 'react';
import Header from './Header';
import NovoUsuario from './NovoUsuario';
import Toast from './Toast/Index.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <NovoUsuario erro={msg => this.refs.toast.erro(msg)} />
                <Toast ref="toast" />
            </div>
        );
    }
}

export default App;