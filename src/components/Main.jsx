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
    }


    // MODIFY TITLE
    const modifyTitle = () => {
        console.log('modify title');
    }


    // FILTERS

    const handleIdFilter = (e) => {
        let filterKeyName = (e.target.name);
        filterKeys[e.target.name] = e.target.value;
    }


    // FORM SUBMIT

    const handleFormSubmit = () => {

        // Impedisce che al SUBMIT venga ricaricata l'intera pagina
        event.preventDefault();

        // Aggiorno lo USE-STATE dei FILTERS tramite il mio Array di supporto contenente le KEYS
        setIdFilter(filterKeys.idFilter);
    }



    return (
        <>
            <main>
                <div className="container">

                    <form action="" className='debug' onSubmit={handleFormSubmit}>
                        <input type="text" className='debug' name='idFilter' placeholder='ID' onChange={handleIdFilter} />

                        {/* Pur non essendo esplicitato, essendo questo BUTTON dentro il FORM, al CLICK eseguirà il SUBMIT */}
                        <button>Search</button>

                        {/* Assegnando type=button questo bottone al click NON eseguirà il SUBMIT del FORM */}
                        <button type='button' onClick={handleClearFilters}>Clear filters</button>
                    </form>

                    <ul className="feed">
                        {Feed
                            .filter(item => item.id == idFilter)
                            .map((feedItem) => (
                                <li key={feedItem.id} className=''>
                                    <div className='feedItem'>
                                        <h4>{feedItem.id}</h4>

                                        <button
                                            onClick={() => modifyTitle()}
                                        >
                                            Modify Title
                                        </button>

                                        <button
                                            onClick={() => setFeed(Feed.filter(item => item.id != feedItem.id))}
                                        >
                                            Delete
                                        </button>

                                        <h3>{feedItem.title}</h3>
                                        <p>{feedItem.content}</p>
                                        <p>{feedItem.author}</p>
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