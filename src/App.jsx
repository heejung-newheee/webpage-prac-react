import './App.css';
import GlobalStyle from './components/GlobalStyle';
import Layout from './components/Layout';
import Button from './components/Button';
import Header from './components/Header';
import Input from './components/Input';
import Modal from './components/Modal';
import Select from './components/Select';

function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Layout>
                <Button />
                <Input />
                <Modal />
                <Select />
            </Layout>
        </>
    );
}

export default App;
