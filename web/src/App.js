import React,{useEffect} from 'react';
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'
/* 
  Componente: Bloco isolado de HTML, CSS, JS, o qual não interfere no restante da aplicação;
  Propriedade: Informações que um componente PAI passa para o componente FILHO.
  Estado; Informações mantidas pelo componente (Lembrar: Imutabilidade)
    */
function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {

      },
      (err) => {
        console.log(err);
      },
      {

      }
    );
  },[]);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuario do Github</label>
            <input name="github_username" id="username_github" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
          </div>

          <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
          </div>
        </div>
     
        <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/22085525?v=4" alt="Everton Reis"/>
              <div>
                <strong>Everton Reis</strong>
                <span>ReactJs, React Native, Node.JS</span>
              </div>
            </header>
              <p>Biografia blblablalbalbalblalbalblalbalblablabl</p>
              <a href="https://github.com/evertonstm/">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/22085525?v=4" alt="Everton Reis"/>
              <div>
                <strong>Everton Reis</strong>
                <span>ReactJs, React Native, Node.JS</span>
              </div>
            </header>
              <p>Biografia blblablalbalbalblalbalblalbalblablabl</p>
              <a href="https://github.com/evertonstm/">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/22085525?v=4" alt="Everton Reis"/>
              <div>
                <strong>Everton Reis</strong>
                <span>ReactJs, React Native, Node.JS</span>
              </div>
            </header>
              <p>Biografia blblablalbalbalblalbalblalbalblablabl</p>
              <a href="https://github.com/evertonstm/">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/22085525?v=4" alt="Everton Reis"/>
              <div>
                <strong>Everton Reis</strong>
                <span>ReactJs, React Native, Node.JS</span>
              </div>
            </header>
              <p>Biografia blblablalbalbalblalbalblalbalblablabl</p>
              <a href="https://github.com/evertonstm/">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
      </div>

  );
}

export default App;
