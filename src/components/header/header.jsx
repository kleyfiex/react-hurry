import './header.scss';

function Header() {
    return <header>
        <div className="container">
            <h1>Harry Potter</h1>
            <h2>View all characters from the Harry Potter universe</h2>

            <div className="inputs">
            <form action="">
                <div className="name">
                    <label htmlFor="name">Имя</label>
                    <input type="text" placeholder='Гермиона' id='name'/>
                </div>
                <div className="school">
                    <label htmlFor="idSchool">Школа</label>
                    <select name="choosePerson" id="idSchool">
                        <option value="0">Выберите</option>
                        <option value="1">Грифиндор</option>
                        <option value="2">Слизерин</option>
                        <option value="3">Пуфик</option>
                    </select>
                </div>
                
            </form>
        </div>
        </div>

        
    </header>;
}

export default Header;