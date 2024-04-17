import { Filter, Search } from "lucide-react";
import { useState } from "react";
import { Post, PostApi } from "./interfaces/Post";
import PostList from "./components/PostList";

function App() {
  const [term, setTerm] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log(term);
  };

  const posts: PostApi[] = [
    {
      id: "1",
      author: "32",
      imageUrl:
        "https://mapa-da-obra-producao.s3.amazonaws.com/wp-content/uploads/2023/02/iStock-587206190-scaled.jpg",
      content:
        "Participando de uma nova obra aqui na cidade de Indaiatuba, estou disponivel a novos trabalhos a partir do dia 12/04 Fe!",
      likes: 23,
      comments: [
        {
          name: "Mersun",
          comment: "Muito fera",
        },
      ],
    },
    {
      id: "2",
      author: "32",
      imageUrl:
        "https://mapa-da-obra-producao.s3.amazonaws.com/wp-content/uploads/2023/02/iStock-587206190-scaled.jpg",
      content:
        "Participando de uma nova obra aqui na cidade de Indaiatuba, estou disponivel a novos trabalhos a partir do dia 12/04 Fe!",
      likes: 32,
      comments: [
        {
          name: "Mersun",
          comment: "Muito fera",
        },
      ],
    },
  ];

  const completePost: Post[] = posts.map((post: PostApi) => {
    const authorInfo = {
      name: "José Alencar",
      imageUrl:
        "https://blog.parceirodaconstrucao.com.br/wp-content/uploads/2022/05/jornada-do-pedreiro-2-2-1-1.jpg",
      job: "Pedreiro",
    };

    return {
      ...post,
      authorName: authorInfo.name,
      authorImageUrl: authorInfo.imageUrl,
      authorJob: authorInfo.job,
    };
  });

  return (
    <section className="flex flex-col lg:pr-6 lg:gap-2 gap-5">
      <div className="flex items-center justify-between">
        <h1 className="text-primary lg:text-2xl text-xl font-bold">Home</h1>
        <div className="flex items-center gap-2">
          <span className="flex items-center lg:gap-2 border-2 border-primary bg-white rounded-lg p-2">
            <button onClick={handleSearch}>
              <Search size={24} className="text-primary text-xl lg:text-2xl" />
            </button>
            <input
              placeholder="Pesquisar"
              className="focus:outline-none"
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
      <PostList posts={completePost} />
    </section>
  );
}

export default App;
