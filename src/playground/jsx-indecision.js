console.log('App.js is running');

// JSX - JavaScript XMLs

const appObject = {
    title : "Indecision App",
    //subtitle : "My practice app",
    options: []
};

const onFormSubmit= (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        appObject.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
}

const removeOptions = () => {
    appObject.options = [];
    renderApp();
}

const onMakeDecision = () => {
    const randomNum =  Math.floor(Math.random() * appObject.options.length);
    const option = appObject.options[randomNum];
    alert(option);
   
}

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1 id="someID">{appObject.title}</h1>
            {appObject.subtitle && <p>{appObject.subtitle}</p>}
            <p>{(appObject.options.length > 0) ? "Here are your options": "No options"}</p>
            <button disabled={appObject.options.length <= 0} onClick={onMakeDecision}>What should I do?!?</button>
            <button onClick={removeOptions}>Remove all options</button>
            <ol>
                {
                    appObject.options.map((option) => <li key={option}>{option}</li>    
                )
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'/>
                <button>Add options!!</button>
            </form>
        </div>
    );

    ReactDOM.render(template,appRoot);
};

renderApp();




