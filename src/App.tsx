import { Filter, Search } from "lucide-react";
import { useState } from "react";
import { posts } from "./services/Post";
import PostList from "./components/PostList";

function App() {
  const [term, setTerm] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log(term);
  };

  return (
    <section className="flex flex-col lg:pr-6 gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-primary lg:text-2xl text-xl font-bold">Home</h1>
        <div className="flex items-center gap-2">
          <span className="flex items-center lg:gap-2 border-2 border-primary bg-white rounded-lg p-2">
            <button onClick={handleSearch}>
              <Search size={24} className="text-primary text-xl lg:text-2xl" />
            </button>
            <input
              placeholder="Pesquisar"
              className="focus:outline-none max-w-40"
              onChange={handleChange}
              value={term}
            />
          </span>
          <button className="bg-primary rounded-lg p-2 border-2 border-primary">
            <Filter
              size={24}
              className="fill-white stroke-white text-xl lg:text-2xl"
            />
          </button>
        </div>
      </div>
      <PostList posts={posts} />
    </section>
  );
}

export default App;
