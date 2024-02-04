import React, { useState } from 'react'

const RecipeMethod = ( { recipe, handleChange, listOfNewMethods, setListOfNewMethods, setRecipe, prevStep, nextStep } ) => {

    const [newMethod, setNewMethod] = useState('');

    const prevPage = (e) => {
        e.preventDefault();
        prevStep();
    };

    const nextPage = (e) => {
        e.preventDefault();
        setRecipe({ ...recipe, method: listOfNewMethods });
        nextStep();
    };

    const handleNewMethod = (e) => {
        e.preventDefault();
        setNewMethod(e.target.value);
    };

    const addMethod = (e) => {
        e.preventDefault();
        setListOfNewMethods([...listOfNewMethods, newMethod]);
        setNewMethod('');
    };

    const deleteMethod = (e, index) => {
        e.preventDefault();
        setListOfNewMethods(listOfNewMethods.filter((method, i) => i !== index));
    };

    return (
    <>
        <form className='formBody'>
            <div className='searchBarContainer'>
            <label>Add your Instructions:
            </label>
            <div className='searchBar'>
                <input name='method' value={newMethod} onChange={handleNewMethod}/>
                <button onClick={addMethod}>+</button>
            </div>
            </div>

            <div className='methodList'>
                {listOfNewMethods.map((method, index) => {
                    return <div className='methodItem' key={index}>
                        {index + 1}.{'\u00A0'}{method}
                        <button onClick={() => deleteMethod(event, index)} className='deleteBtn'><span className="material-symbols-outlined">
                        delete
                        </span></button>

                        </div>
                  
                })}

            </div>
        </form>

        <div className='buttonsDiv'>
        <button className='prevBtn' onClick={prevPage}>Prev</button>
        <button className='nextBtn' onClick={nextPage}>Next</button>
        </div>

    </>
    )
}


export default RecipeMethod