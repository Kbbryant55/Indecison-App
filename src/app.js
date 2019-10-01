class IndecisionApp extends React.Component {
    render(){
        return(
            <div>
                <Header/>
                <Action/>
                <Options />
                <AddOption/>  
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render(){
        return (
            <div>
                <button>what should I do? </button>
            </div>
        );
    }
}


class Options extends React.Component {
    render(){
        return (
        <div>
            <Option />
            <Option />
            <Option />
        </div>
        );
    }
}

class Option extends React.Component {
    render(){
        return(
            <div>
                Pick me
            </div>
        );
    }
}


class AddOption extends React.Component {
    render(){
       return ( 
       <div>
             <form>
                <input type='text' name='option'/>
                <button>Add options!!</button>
            </form>
        </div>
       );
    }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));