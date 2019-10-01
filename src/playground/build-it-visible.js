const appRoot = document.getElementById('app');

let toggleOn = false;

const toggle = () => {
    toggleOn = toggleOn ? false : true ;
    renderApp();
};

const renderApp = () => {
    const visibilityTemplate = (
        <div>
            <h1>Visibility Template</h1>
            <button onClick={toggle}>{toggleOn ? 'Hide details' : 'Show me some details'}</button>
            {   
                toggleOn && ( 
                    <div>
                        <p>Some details for you</p>
                    </div> 
                    )
            }
        </div>
    );
    ReactDOM.render(visibilityTemplate,appRoot);
};

renderApp();



