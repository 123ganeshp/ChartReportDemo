

const Home = () => {

    return (
        <div>
            <div>
                <h1>Home</h1>
            </div>

        <div className='backimage' 
        style={{ backgroundImage: `url("https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A347ece48-0f69-11e9-a3aa-118c761d2745?source=ig")`, height: '90vh', fontSize: '20px',backgroundSize:'cover', backgroundRepeat: 'no-repeat' }}>


                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link" href="/report">Table Data</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/barchart">Bar Chart</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/piechart">Pie Chart</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/hbarchart">Horizontal Bar Chart</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/linechart">Line Chart</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/areachart">Area Chart</a>
                    </li>
                </ul>
            </div>

        </div>
    )

}

export default Home;