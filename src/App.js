import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, {useState, useEffect} from "react";

import Search from "./components/Search/Search";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";


function App() {

    // use the state to store fetched data
    let [fetchedData, updateFetchedData] = useState([]);
    let { info, results } = fetchedData;

    let api = `https://rickandmortyapi.com/api/character/?page=1`


    // the useEffect hook is used to put a watch on api variable, if the var changes, it
    // will launch the function again
    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json());
            updateFetchedData(data);
        })();
    }, [api]);


    return (
        <div className="App">
            <h1 className="text-center mb-3">Characters</h1>
            <div className="container">
                <div className="row">
                    Filter component will be placed here
                    <div className="col-lg-8 col-12">
                        <div className="row">
                            Card component will be placed here
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
