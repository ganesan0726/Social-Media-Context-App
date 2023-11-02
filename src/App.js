import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import { Route, Routes} from "react-router-dom";
import EditPost from "./EditPost";
import { DataProvider } from "./Context/DataContext";

const App = () => {
  return (
    <div className="App">
      <DataProvider>
        <Header title="Social Media App" />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post">
            <Route index element={<NewPost />} />
            <Route path=":id" element={<PostPage />} />
          </Route>
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
};

export default App;

// // Fetch the Data from server using Get operation :
// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await api.get("/posts");
//       setPosts(response.data);
//     } catch (error) {
//       if (error.response) {
//         console.log(error.response.data);
//         console.log(error.response.status);
//         console.log(error.response.headers);
//       } else {
//         console.log(`Error : ${error.message}`);
//       }
//     }
//   };
//   fetchData();
// }, []);
