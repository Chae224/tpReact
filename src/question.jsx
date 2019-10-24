import React from 'react';


class Questions extends React.Component{
   state = {
       data: [],
   }
   componentDidMount() {
       const url =
         'https://opentdb.com/api.php?amount=10&category=11&type=boolean'
       fetch(url)
         .then(result => result.json())
         .then(result => {
           this.setState({
             data: result.results,
           })
         })
   }
   render() {
       const { data } = this.state
       const result = data.map((entry, index) => {
         return (
         <li key={index}>
             <Question question={entry.question} reponse={entry.correct_answer}/>
         </li>)
       })
       return <ul>{result}</ul>
   }
}
class Question extends React.Component{
 state = {
   answer: "",
   color: "white",
   isAnswered: false,
 }
 handleOnChange = (event) => {
   let newValue = event.target.value
   this.setState({answer : event.target.value})
   this.check(newValue)
   this.setState({isAnswered: true})
 }
 check = (newValue) => {
   if(newValue === this.props.reponse){
     this.setState({color : "green"})
   }
   else {
     this.setState({color : "red"})
   }
 }
 render() {
   return (
       <div style={{backgroundColor: this.state.color}}>
           <p>{this.props.question}</p>
           <select onChange={this.handleOnChange} style={{visibility: this.state.isAnswered ? "hidden" : "visible"}}>
             <option></option>
             <option value="True">vrai</option>
             <option value="False">faux</option>
           </select>
       </div>
   )
 }
}

export default Questions;