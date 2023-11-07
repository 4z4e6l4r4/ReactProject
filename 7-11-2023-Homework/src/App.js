import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div class="main">

      <section>
        <div class="header1">
          <img src={{ logo }} alt="Logoyu görüntüleyemediniz" />
        </div>

        <div>

          <div class="header1">
            <ul class="headerMenu1">
              <li class="menuItem1">
                <a href="#"> Ana Sayfa
                </a>
              </li>
              <li class="menuItem1">
                <a href="#"> Hakkımda
                </a>
              </li>
              <li class="menuItem1">
                <a href="#">Hedeflerim
                </a>
              </li>
              <li class="menuItem1">
                <a href="#"> Pörtfoyüm
                </a>
              </li>
              <li class="menuItem1">
                <a href="#">İletişim
                </a>
              </li>
            </ul>
          </div>


        </div>


        <div>
          <div class="category">
            <div>
              <ul>
                <li><a href="#"><h3>Kategoriler</h3></a></li>
                <li><a href="#"><b>Korku</b></a></li>
                <li><a href="#">Gerilim</a></li>
                <li><a href="#">Romantik</a></li>
                <li><a href="#">Aksiyon</a></li>
                <li><a href="#">Savaş</a></li>

              </ul>
            </div>
          </div>

          <div>
            <div class="card1">

              <div class="movie">
                <div>
                  <img src={{ logo }} />
                </div>
                <div class="movie-desc">
                  <h2>Interstaller</h2>
                  <p>Nolan Yapımı</p>
                </div>

              </div>

              <div class="movie">
                <div>
                  <img src={{ logo }} />
                </div>

                <div class="movie-desc">
                  <h2>Faust</h2>
                  <p>Alman Yapımı</p>
                </div>

              </div>
            </div>

            <div class="card1">

              <div class="movie">
                <div>
                  <img src={{ logo }} />
                </div>
                <div class="movie-desc">
                  <h2>Mandalina Bahçesi</h2>
                  <p>Savaş ve insan doğası çarpıklığına dair</p>
                </div>

              </div>

              <div class="movie">
                <div>
                  <img src={{ logo }} />
                </div>
                <div class="movie-desc">
                  <h2>Who Am I</h2>
                  <p>Siber güvenlik ve ötesine</p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </section>

    </div>

  );
}

export default App;
