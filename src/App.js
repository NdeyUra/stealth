import React from "react";
import { Routes, Route } from "react-router-dom";
import News from "./news";
import NewsComment from "./newsComment";
function App() {
  return (
    <div>
      <Routes>
        {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}

        {/* Note how these two routes are ordered. The more specific
            path="/contact/:id" comes before path="/contact" so that
            route will render when viewing an individual contact */}
        <Route path="/contact/:id" element={<NewsComment />}></Route>
        {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
        <Route path="/" element={<News />}></Route>
      </Routes>
    </div>
  );
}
export default App;
