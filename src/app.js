class IndecisionApp extends React.Component {
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer!';
        const options = ['this','that','them','they'];
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/>
                <AddOption/>  
            </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick(){
        alert('handlePick');
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}>what should I do? </button>
            </div>
        );
    }
}


class Options extends React.Component {
    handleRemoveAll(){
        alert('this is deleting everything');
    }
    render(){
        return (
        <div>
            {this.props.options.map(((option) => 
                <Option key={option} optionText={option}/> 
            ))
            }
            <button onClick={this.handleRemoveAll.bind(this)}>Remove All</button>
        </div>
        );
    }
}

class Option extends React.Component {
    render(){
        return(
            <div>
                {this.props.optionText}
            </div>
        );
    }
}


class AddOption extends React.Component {
    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
    
        if(option){
            alert(option);
            //appObject.options.push(option);
            //e.target.elements.option.value = '';
        }
    }
    render(){
       return ( 
       <div>
             <form onSubmit={this.handleAddOption}>
                <input type='text' name='option'/>
                <button>Add options!!</button>
            </form>
        </div>
       );
    }
}


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));