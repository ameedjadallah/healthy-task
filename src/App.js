import "./App.css";
import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "react-loader-spinner";

const Users = lazy(() => import("./pages/Users"));

function App() {
  return (
    <div className="">
      <Router>
        <Suspense
          fallback={
            <div className="routes-loader">
              <Loader type="TailSpin" color="#cacaca" height={50} width={50} />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Users />} exact />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
