class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            options: props.options
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }
    handleDeleteOptions(){
        this.setState(()=>({options: []}));
    }

    handlePick(){
        const randomNum =  Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add option'
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists'
        }
        this.setState((prevState) => ({
            options: prevState.options.concat(option)    
        }));
    }
    render(){
        const subtitle = 'Put your life in the hands of a computer!';
        return(
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
                />
                <Options 
                handleDeleteOption={this.handleDeleteOption}
                options={this.state.options}
                handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption handleAddOption={this.handleAddOption}/>  
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
        return (
            <div>
                <h1>{props.title}</h1>
                {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        )
};

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
        return (
            <div>
                <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
                >
                what should I do?
                 </button>
            </div>
        );
};


const Options = (props) => {
        return (
        <div>
            {props.options.map(((option) => (
                <Option 
                key={option} 
                optionText={option}
                handleDeleteOption={props.handleDeleteOption}
                /> 
            )
            ))
            }
            <button onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
        );
};

const Option = (props) => {
        return(
            <div>
                {props.optionText}
                <button 
                onClick= {(e) => {
                 props.handleDeleteOption(props.optionText);
                }}
                >
                Remove
                </button>
            </div>
        );
};


class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
   
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);


    this.setState(()=> ({error}));

    }
    render(){
       return ( 
       <div>
           {this.state.error && <p>{this.state.error}</p>}
             <form onSubmit={this.handleAddOption}>
                <input type='text' name='option'/>
                <button>Add options!!</button>
            </form>
        </div>
       );
    }
}


ReactDOM.render(<IndecisionApp options={['blackfinn', 'lost dog']}/>, document.getElementById('app'));