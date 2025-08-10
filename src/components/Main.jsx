export default function Main() {
    const ingredients = ["Chicken", "Salt", "Pepper"]

    const ingredientListItems = ingredients.map(ingredient => (
        <li>{ingredient}</li>
    ))

    return (
        <main>
            <form className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. oregano" 
                    aria-label="Add ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientListItems}
            </ul>
        </main>
    )
}