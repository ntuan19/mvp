import React,{Component} from "react";
import 'semantic-ui-css/semantic.min.css'
export default class Registration extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstname: "",
            lastname:"",
            age: "",
            email: "",
            password: "",
            password_confirmation: "",
            registrationErrors:""

        };
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
        handleChange(event){
           this.setState({[event.target.name]: event.target.value});
        }
        handleSubmit(event){
            console.log("Your registration has been submitted")
            event.preventDefault();
        }
    render(){
        
        return (
            
            <form class = "ui middle aligned center aligned grid">
                   <div class = "four wide column">
                    <h2 class = "ui teal iamage header">
                        <img src = "https://cdn6.f-cdn.com/contestentries/93331/11758337/53e3cbdfd0c56_thumb900.jpg" class = "image"></img>
                       <div class = "content">Sign-up to your account</div>
                    </h2>
                    <form class = "ui large form">
                        <div class = "ui stacked segment">
                           <div class= "field" onSubmit={this.handleSubmit}>
                                   
                    <input type="text" 
                    name = "First Name" 
                    placeholder="First Name" 
                    value = {this.state.firstname} 
                    onChange ={this.handleChange} 
                    required/>
                
                    
                    <input type="text" 
                    name = "Last Name" 
                    placeholder="Last Name" 
                    value = {this.state.lastname} 
                    onChange ={this.handleChange} 
                    required/>

                    <input type="number" 
                    name = " Age " 
                    placeholder=" Age" 
                    value = {this.state.age} 
                    onChange ={this.handleChange} 
                    required/>
                   
                    
                    
                    <input type="text" 
                    name = " email " 
                    placeholder=" Email" 
                    value = {this.state.email} 
                    onChange ={this.handleChange} 
                    required/>
                                     
                    
                    <input type="text" 
                    name = " password " 
                    placeholder=" Password" 
                    value = {this.state.password} 
                    onChange ={this.handleChange} 
                    required/>
    
                    <input type="text" 
                    name = " password confirmation " 
                    placeholder=" Password confirmation" 
                    value = {this.state.password} 
                    onChange ={this.handleChange} 
                    required/>
                    <button class="ui fluid large teal submit button" type='submit'> Register</button>
                     </div>
                           </div>
                           <div class="ui message">
                        Already have an account? <a href="#">Sign In</a>
                          </div>
                    </form>
                      
                    
                    
                     
                  </div>
                
           </form>

        );  }
    };

