import React from 'react'

function Home() {
    return (
        <div className='home--banner'>
            <div className='home--container'>
            <h1 className='home--title'>You got the travel plans, we got the travel vans.</h1>
            <p className='home--text'>Add adventure to your life by joining the #vanlife movement. 
            Rent the perfect van to make your perfect road trip.</p>
            <button className='findVan--btn'>Find your Van</button>
        </div>
        <footer>
        <p className='footer--text'>Ⓒ 2022 #VANLIFE</p>
        </footer>
        </div>
    )
}

export default Home