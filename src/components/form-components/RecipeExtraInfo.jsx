import React, { useState } from 'react'

const RecipeExtraInfo = ( { recipe, setRecipe, handleChange, prevStep, nextStep } ) => {

    const [selectedImg, setSelectedImg] = useState(null);
    const [previewUrl, setPreviewUrl] = useState("");

    const prevPage = (e) => {
        e.preventDefault();
        prevStep();
    }

    const nextPage = (e) => {
        e.preventDefault();
        nextStep();
    };

    const uploadImag = (e) => {
        e.preventDefault();

        const file = e.target.files[0];
        setSelectedImg(file);

        const url = URL.createObjectURL(file);
        setPreviewUrl(url);

        setRecipe({ ...recipe, pictureurl: url });
    };

    return (
    <>    
        <form 
            action='/api/recipe'
            className='formBody inputsForm'
            encType='multipart/form-data'
            method='POST'>

            <label>
            Upload your picture:
            <input type='file' name='picture' onChange={uploadImag} />
            </label>

            {recipe.pictureurl ? <img src={recipe.pictureurl} alt='Preview' /> : <img src={previewUrl} alt='Preview' />}

        </form>

        <div className='buttonsDiv'>
                <button className='prevBtn' onClick={prevPage}>Prev</button>
                <button className='nextBtn' onClick={nextPage}>Next</button>
        </div>
    </>

    )
}

export default RecipeExtraInfo