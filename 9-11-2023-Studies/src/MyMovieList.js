import React, { useState } from "react";

// Kategori navbarı yap, 
//kategorilere göre filmler listelenesin 
//en az 10 input gir
//Resim Ekle

function MyMovieList() {
    const [MovieList, setMovieList] = useState([]);
    const [MovieName, setMovieName] = useState("");
    const [MovieDescription, setMovieDescription] = useState("");
    const [MovieDirector, setMovieDirector] = useState("");
    const [MovieMainCharacter, setMovieMainCharacter] = useState("");
    const [MovieMainCharacter2, setMovieMainCharacter2] = useState("");

    //Bunu dışardan alma kaç gün kaldığını sistem kendisi göstersin. 

    const addMovie = () => {
        setMovieList([...MovieList, {
            MovieName,
            MovieDescription,
            MovieDirector,
            MovieMainCharacter
        }]);
        setMovieName("");
        setMovieDescription("");
        setMovieDirector("");
        setMovieMainCharacter("");
    }

    const updateMovie = (item, index) => {
        setMovieName(item.MovieName);
        setMovieDescription(item.MovieDescription);
        setMovieDirector(item.MovieDirector);
        setMovieMainCharacter(item.MovieMainCharacter);

        deleteMovie(index);

    }

    const deleteMovie = (index) => {
        const newMovieList = MovieList.filter((movieItem, indexItem) => index !== indexItem)
        setMovieList(newMovieList);
    }

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
                    <input type="text" value={MovieName} onChange={(e) => setMovieName(e.target.value)} placeholder="Movie Name" />
                    <input type="text" value={MovieDescription} onChange={(e) => setMovieDescription(e.target.value)} placeholder="Movie Description" />
                    <input type="text" value={MovieDirector} onChange={(e) => setMovieDirector(e.target.value)} placeholder="Movie Director" />
                    <input type="text" value={MovieMainCharacter} onChange={(e) => setMovieMainCharacter(e.target.value)} placeholder="Movie Main Character" />

                    <button className="addBtn" onClick={addMovie}>Add Movie</button>
                </div>

                <div className="navbar">
                    <ul>
                        {MovieList.map((item, index) => (
                                <li key={index}>
                                        <h4>{item.MovieName}</h4>
                                </li>
                        ))

                        }
                    </ul>
                </div>

            </div>

            <div className="list">
                <ul>
                    {MovieList.map((item, index) => (
                        <li key={index}>
                            <h3>{item.MovieName}&nbsp; </h3>
                            <p>{item.MovieDescription}&nbsp; </p>
                            <p>{item.MovieDirector}&nbsp;</p>
                            <p>{item.MovieMainCharacter}&nbsp;</p>
                            <button className='deleteBtn' onClick={() => deleteMovie(index)}>Delete</button>
                            <button className='updateBtn' onClick={() => updateMovie(item, index)}>Update</button>
                        </li>
                    ))
                    }
                </ul>
            </div>

            </div>

        </div>
    );
}


export default MyMovieList;