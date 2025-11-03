import "./Header.css";

function Header(){

  let links = ["Home", "Sobre mim", "Projetos"];

  // Arrow function() => {}

  return (
    <header className="header">
      <h1>@evandrocode</h1>
      <ul className="links">
        {
          links.map((linkDaVez) => {
            return <div>
              {
              <li><a href="#">{linkDaVez}</a></li>
            }
            </div>
          })
        }
      </ul>
    </header>
  )
}

export default Header;