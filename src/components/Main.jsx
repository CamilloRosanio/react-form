import { useState } from 'react';
import Articles from '../data/Articles';


function Main() {

    // Dichiaro un OBJECT di supporto contenente tutte le KEYS da usare come FILTER.
    // Dichiaro anche una variabile che sia il CONCAT dei valori delle KEYS

    const filterKeys = {
        idFilter: 'ID',
    }


    // Tramite USE-STATE imposto tutti i valori di DEFAULT iniziali delle variabili che voglio rendere reattive

    const [Feed, setFeed] = useState(Articles);

    const [idFilter, setIdFilter] = useState('ID');



    // Funzioni HANDLE

    const handleClearFilters = () => {
        setFeed(Articles);
        setIdFilter('ID');
    }


    const clearAll = () => {
        setIdFilter('');
    }


    // MODIFY TITLE
    const modifyTitle = () => {
        console.log('modify title');
    }


    // FILTERS

    const handleIdFilter = (e) => {
        setFeed(Articles);
        setIdFilter(e.target.value);
    }


    // FORM SUBMIT

    const handleFormSubmit = async (e) => {

        // Impedisce che al SUBMIT venga ricaricata l'intera pagina
        e.preventDefault();

        await setFeed(Articles);

        console.log('You searched for ID: ' + e.target.idFilter.value);

        let filteredFeed = Feed.filter(item => item.id == idFilter);

        setFeed(filteredFeed);
    }



    return (
        <>
            <main>
                <div className="container">

                    <form action="" className='inputsContainer' onSubmit={handleFormSubmit}>
                        <input type="text" className='filterInput' name='idFilter' value={idFilter} onChange={handleIdFilter} onClick={clearAll} />

                        {/* Pur non essendo esplicitato, essendo questo BUTTON dentro il FORM, al CLICK eseguirà il SUBMIT */}
                        <button className='button'>Search</button>

                        {/* Assegnando type=button questo bottone al click NON eseguirà il SUBMIT del FORM */}
                        <button type='button' onClick={handleClearFilters} className='button red'>Clear filters</button>
                    </form>

                    <ul className="feed">
                        {Feed
                            .map((feedItem) => (
                                <li key={feedItem.id} className=''>
                                    <div className='feedItem'>
                                        <h4>{'ID ' + feedItem.id}</h4>

                                        <button
                                            onClick={() => modifyTitle()}
                                            className='button gold'
                                        >
                                            Modify Title
                                        </button>

                                        <button
                                            onClick={() => setFeed(Feed.filter(item => item.id != feedItem.id))}
                                            className='button red'
                                        >
                                            Delete
                                        </button>

                                        <h3>{feedItem.title}</h3>
                                        <p>{feedItem.content}</p>
                                        <h5>{feedItem.author}</h5>
                                    </div>
                                </li>
                            ))}
                    </ul>

                </div>
            </main >
        </>
    )
}

export default Main