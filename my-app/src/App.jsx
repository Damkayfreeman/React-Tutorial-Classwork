import { Fragment } from "react";
import MovieCard from "./components/MovieCard";
import Button from "./components/Button";

const movies = [
  {
    title: "My Card",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error praesentium quas soluta asperiores minima. Dolorum quasi molestiae totam nemo necessitatibus aliquam ab tempora molestias natus, sunt, tempore error? Tempora, odio.",
    rating:4.0,
    image: "https://media.istockphoto.com/id/1478374885/photo/joyful-family-watching-movie-in-cinema.jpg?s=1024x1024&w=is&k=20&c=oC9vnUhFk-a4ON_Tr9eCFKhZyShgiKzPy-xpM2C_gZ4=",

  },

   {
    title: "My Card",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error praesentium quas soluta asperiores minima. Dolorum quasi molestiae totam nemo necessitatibus aliquam ab tempora molestias natus, sunt, tempore error? Tempora, odio.",
    rating:6.0,
    image: "https://media.istockphoto.com/id/600055640/photo/young-couple-in-cinema-watching-film-and-eating-popcorn.webp?s=1024x1024&w=is&k=20&c=IzR7jf11gwQ6YldCAL9reRWClVUSjMzuNfrjVgOZFSE=",

  },

   {
    title: "My Card",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error praesentium quas soluta asperiores minima. Dolorum quasi molestiae totam nemo necessitatibus aliquam ab tempora molestias natus, sunt, tempore error? Tempora, odio.",
    rating:5.0,
    image: "https://media.istockphoto.com/id/641867354/photo/eating-and-drinking-at-cinema.webp?s=1024x1024&w=is&k=20&c=q_t0atDLjcL0erIKw29_fxFnSLF_Hu5pZlDGUZ-IjxU="
  },

   {
    title: "My Card",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error praesentium quas soluta asperiores minima. Dolorum quasi molestiae totam nemo necessitatibus aliquam ab tempora molestias natus, sunt, tempore error? Tempora, odio.",
    rating:8.0,
    image: "https://media.istockphoto.com/id/1053062408/photo/joyful-friends-at-cinema.webp?s=1024x1024&w=is&k=20&c=2XQfRO2kxAjaHrVyem9xoRNiihzjwKELaPsklZl73B0=",

  },

   {
    title: "My Card",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error praesentium quas soluta asperiores minima. Dolorum quasi molestiae totam nemo necessitatibus aliquam ab tempora molestias natus, sunt, tempore error? Tempora, odio.",
    rating:10.0,
    image: "https://media.istockphoto.com/id/1470566970/photo/cheerful-family-watching-movie-in-theater.webp?s=1024x1024&w=is&k=20&c=pF_lRlPlcWEb1sGGJYK9CK0FMTu6UgdPI93dmejSuzE=",

  },

   {
    title: "My Card",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error praesentium quas soluta asperiores minima. Dolorum quasi molestiae totam nemo necessitatibus aliquam ab tempora molestias natus, sunt, tempore error? Tempora, odio.",
    rating:4.0,
    image: "https://media.istockphoto.com/id/2060141331/photo/cheerful-people-having-fun-in-movie-theatre.webp?s=1024x1024&w=is&k=20&c=tffKDjXtkXYDzhzcp9Iuek6n-7_8yNAYuLRkqtH4hSs=",

  },


   {
    title: "My Card",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error praesentium quas soluta asperiores minima. Dolorum quasi molestiae totam nemo necessitatibus aliquam ab tempora molestias natus, sunt, tempore error? Tempora, odio.",
    rating:2.0,
    image: "https://media.istockphoto.com/id/1415788420/photo/adult-people-man-has-angry-and-annoyed-a-loud-of-kids-group.webp?s=1024x1024&w=is&k=20&c=AP3HU9j3fyJW3Cx-J1EDjSXJnAEvAAzPypmSqr84uiQ=",

  },

   {
    title: "My Card",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error praesentium quas soluta asperiores minima. Dolorum quasi molestiae totam nemo necessitatibus aliquam ab tempora molestias natus, sunt, tempore error? Tempora, odio.",
    rating:9.0,
    image: "https://media.istockphoto.com/id/2195751409/photo/happy-couple-watching-a-movie-at-the-theatre-and-smiling.webp?s=1024x1024&w=is&k=20&c=bSorEp20SdQSHOabyWNhFs5pn-q5-n-dmf2dXgq2iqU="
  },

   {
    title: "My Card",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error praesentium quas soluta asperiores minima. Dolorum quasi molestiae totam nemo necessitatibus aliquam ab tempora molestias natus, sunt, tempore error? Tempora, odio.",
    rating:5.0,
    image: "https://media.istockphoto.com/id/1055694512/photo/friends-at-cinema.webp?s=1024x1024&w=is&k=20&c=CX7kN0D1m82WGgf48UjxOdmQw9oteAZRzRMQQBa284M=",

  },

   {
    title: "My Card",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error praesentium quas soluta asperiores minima. Dolorum quasi molestiae totam nemo necessitatibus aliquam ab tempora molestias natus, sunt, tempore error? Tempora, odio.",
    rating:1.0,
    image: "https://media.istockphoto.com/id/1053537464/photo/joyful-women-at-cinema-together.webp?s=1024x1024&w=is&k=20&c=9gPAWpOv8Sgr2u82d5UqBxxTCiip19HAVYT4VgAceHA=",

  },

  {
    title: "My Card",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error praesentium quas soluta asperiores minima. Dolorum quasi molestiae totam nemo necessitatibus aliquam ab tempora molestias natus, sunt, tempore error? Tempora, odio.",
    rating:7.0,
    image: "https://media.istockphoto.com/id/1041125624/photo/young-couple-with-popcorn-holding-hands-while-watching-movie-together-in-cinema.webp?s=1024x1024&w=is&k=20&c=lOyOaXjgQewH7zos4q6ZPuyrg3Xo8Fx9v73Ixf5Dh70=",

  },

  {
    title: "My Card",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error praesentium quas soluta asperiores minima. Dolorum quasi molestiae totam nemo necessitatibus aliquam ab tempora molestias natus, sunt, tempore error? Tempora, odio.",
    rating:9.0,
    image: "https://media.istockphoto.com/id/1212585512/photo/family-in-the-cinema.webp?s=1024x1024&w=is&k=20&c=fGLnBWdDqfpmE93xJF-r1_o0PITJ885j1D8jIo0cqIU=",

  },
]


function App() {
  return (
    <>
     <div className="container mt-8">
      <h2 className="mt-4"> Movie List</h2>
      <div className="d-flex flex-wrap">
        <div className="row g-4">
          {movies.map((movie, index) => {
            return <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
              <MovieCard
              key={index}
              title={movie.title}
              description={movie.description}
              rating={movie.rating}
              image={movie.image} />
              </div>
          })}
        </div>
      </div>
     </div>

      <Button text="Click Me" color="blue" />
      <button text="Disabled Button" disabled={true} />

      


     

    </>
  );
}
export default App;
