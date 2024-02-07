import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import SinglePages from "./components/pages/SinglePages/SinglePages";
import Header from "./components/views/Header/Header";
import NotFound from "./components/pages/NotFound/NotFound";
import Footer from "./components/views/Footer/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTables } from "./redux/tablesRedux";
import { fetchStatus } from "./redux/statusRedux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch])
  useEffect(() => dispatch(fetchStatus()), [dispatch])
  return (
    <main>
        <Container>
          <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/table/:tableId" element={<SinglePages/>} />
                <Route path="*" element={<NotFound/>} /> 
            </Routes>
            <Footer/>
        </Container>
    </main>
  );
}

export default App;
