class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            toggleOn : false
        }
    }
    handleToggle(){
        this.setState((prevState)=>{
            return{
            toggleOn: !prevState.toggleOn
            }
        });
    }

    render(){
        return(
            <div>
                <h1>Visibility Template</h1>
                <button onClick={this.handleToggle}>{this.state.toggleOn ? 'Hide details' : 'Show me some details'}</button>
                {   
                    this.state.toggleOn && ( 
                        <div>
                            <p>Some details for you</p>
                        </div> 
                        )
                }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));

// const appRoot = document.getElementById('app');

// let toggleOn = false;

// const toggle = () => {
//     toggleOn = toggleOn ? false : true ;
//     renderApp();
// };

// const renderApp = () => {
//     const visibilityTemplate = (
//         <div>
//             <h1>Visibility Template</h1>
//             <button onClick={toggle}>{toggleOn ? 'Hide details' : 'Show me some details'}</button>
//             {   
//                 toggleOn && ( 
//                     <div>
//                         <p>Some details for you</p>
//                     </div> 
//                     )
//             }
//         </div>
//     );
//     ReactDOM.render(visibilityTemplate,appRoot);
// };

// renderApp();



