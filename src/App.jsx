import TopBar from "./topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./write/Write";
import Set from "./set/Set";
import Login from "./login/Login";
import Register from "./register/Register";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SinglePost from "./singlepost/SinglePost";

function App() {
  const user = false; // This should be replaced with actual authentication logic

  return (
    <Router>
       <div className="min-h-screen flex flex-col">
      <TopBar />
      <main className="flex-grow pt-16">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        <Route path="/write" element={user ? <Navigate to="/" /> : <Write />} />
        <Route path="/single" element={user ? <Navigate to="/" /> : <Single />} />


        
        <Route path="/singlepost" element={user ? <Navigate to="/" /> : <SinglePost />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/set" element={user ? <Navigate to="/" /> : <Set />} />
        <Route path="/write" element={user ? <Write /> : <Navigate to="/login" />} />
        <Route path="/set" element={user ? <Set /> : <Navigate to="/login" />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
      </main>
      </div>
    </Router>
  );
}

export default App;