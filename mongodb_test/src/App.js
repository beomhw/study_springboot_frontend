import React, {useState} from 'react';
import GlobalStyle from './css/GlobalStyle';
import Register from './components/Register';
import Contents from './components/Contents';

const App = () => {

    const [loading, setLoading] = useState(true);

    return (
        <>
            <GlobalStyle />
            <Register setLoading={setLoading} />
            <Contents loading={loading} setLoading={setLoading} />
        </>
    )
}

export default App;