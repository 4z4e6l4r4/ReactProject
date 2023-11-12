import React, { useState } from "react";
import { RiHeartAddLine } from "@react-icons/all-files/ri/RiHeartAddLine";

//prop ile hazırla

function MyMovieList() {
  const [MovieList, setMovieList] = useState([]);
  const [MovieName, setMovieName] = useState("");
  const [MovieDescription, setMovieDescription] = useState("");
  const [MovieDirector, setMovieDirector] = useState("");
  const [MovieMainCharacter, setMovieMainCharacter] = useState("");
  const [MovieCategory, setMovieCategory] = useState("");
  const [counter, setCounter] = useState(0);
  const [img, setImg] = useState("");
  const [CategoryList, setCategoryList] = useState([
    { id: 0, name: "Horror", count: counter },
    { id: 1, name: "Thriller", count: counter },
    { id: 2, name: "War", count: counter },
    { id: 3, name: "Historical", count: counter },
    { id: 4, name: "Politics", count: counter },
  ]);
  const [FavList, setFavList] = useState([]);
  const [FavMovieCategory, setFavMovieCategory] = useState(new Map());

  const updateMap = (item, count) => {
    const newMap = new Map(FavMovieCategory);
    newMap.set(item, count);
    setFavMovieCategory(newMap);
  };

  const favMovie = (movie, index) => {
    const MovieListItem = MovieList[index];
    console.log(FavMovieCategory);

    if (FavMovieCategory.has(index)) {
      let CurrentCount = FavMovieCategory.get(index);
      updateMap(index, CurrentCount + 1);
    } else {
      updateMap(index, 1);
    }

    const newFavList = FavList.map((movie) => {
      if (FavMovieCategory == movie.id) {
        movie.count += 1;
        return movie;
      }
      return movie;
    });

    setFavList(newFavList);
    setMovieName("");
    setCounter("");
  };

  const addMovie = () => {
    const newCategoryList = CategoryList.map((category) => {
      if (MovieCategory == category.id) {
        category.count += 1;

        return category;
      }

      return category;
    });

    setCategoryList(newCategoryList);

    setMovieList([
      ...MovieList,
      {
        MovieName,
        MovieDescription,
        MovieDirector,
        MovieMainCharacter,
      },
    ]);
    setMovieName("");
    setMovieDescription("");
    setMovieDirector("");
    setMovieMainCharacter("");

    setCounter("");
  };

  const updateMovie = (item, index) => {
    setMovieName(item.MovieName);
    setMovieDescription(item.MovieDescription);
    setMovieDirector(item.MovieDirector);
    setMovieMainCharacter(item.MovieMainCharacter);

    deleteMovie(index);
  };

  const deleteMovie = (index) => {
    const newMovieList = MovieList.filter(
      (movieItem, indexItem) => index !== indexItem
    );
    setMovieList(newMovieList);
  };

  return (
    <div className="mainPage">
      <div className="head">
        <h1>My Movie List</h1>
        <p>My Notes of Watched Movies</p>
      </div>

      <div className="body">
        <div className="listPart">
          <div className="inputs">
            <h1>Movie Information</h1>
            <br />
            <input 
              type="file"
              onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))}
            />
            <input
              type="text"
              value={MovieName}
              onChange={(e) => setMovieName(e.target.value)}
              placeholder="Movie Name"
            />
            <input
              type="text"
              value={MovieDescription}
              onChange={(e) => setMovieDescription(e.target.value)}
              placeholder="Movie Description"
            />
            <input
              type="text"
              value={MovieDirector}
              onChange={(e) => setMovieDirector(e.target.value)}
              placeholder="Movie Director"
            />
            <input
              type="text"
              value={MovieMainCharacter}
              onChange={(e) => setMovieMainCharacter(e.target.value)}
              placeholder="Movie Main Character"
            />

            <div className="selectDiv">
                
            <select
              value={MovieCategory}
              onChange={(e) => setMovieCategory(e.target.value)}
            >
              {CategoryList.map((category, index) => (
                <option value={category.id} key={index}>
                  {category.name}
                </option>
              ))}
            </select>
            <br />

            <button className="addBtn" onClick={addMovie}>
              Add Movie
            </button>
            </div>

          </div>

          <div className="navbar">
            <ul>
              <li>
                <h3>Categories</h3>
              </li>
              {CategoryList.map((category, index) => {
                if (category.count > 0) {
                  return (
                    <li key={index}>
                      {category.name}: {category.count}
                    </li>
                  );
                }
              })}
            </ul>

            <ul>
              <li>
                <h3>Favorite Movies</h3>
              </li>
              {MovieList.map((category, index) => {
                if (FavMovieCategory.has(index)) {
                  return (
                    <li key={index}>
                      {MovieList[index].MovieName}:{" "}
                      {FavMovieCategory.get(index)}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>

        <div className="list">
          <ul>
            {MovieList.map((item, index) => (
              <li key={index}>
                <img src={img} alt="images" />
                <h3>{item.MovieName}&nbsp; </h3>
                <p>{item.MovieDescription}&nbsp; </p>
                <p>{item.MovieDirector}&nbsp;</p>
                <p>{item.MovieMainCharacter}&nbsp;</p>

                <button
                  className="deleteBtn"
                  onClick={() => deleteMovie(index)}
                >
                  Delete
                </button>
                <button
                  className="updateBtn"
                  onClick={() => updateMovie(item, index)}
                >
                  Update
                </button>

                <button className="favBtn" onClick={(e) => favMovie(e, index)}>
                  {" "}
                  <RiHeartAddLine />{" "}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyMovieList;
