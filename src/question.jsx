import React from 'react';

class Question extends React.Component{
    state = {
        data: [],
        value: "" ,
    }

    componentDidMount() {
        const url =
          'https://opentdb.com/api.php?amount=10&category=15&type=boolean'
    
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
              <p>{entry.question}</p>
              <select>
                  <option value="None" select>None</option>
                  <option value={true}>True</option>
                  <option value={false}>False</option>
              </select>
          </li>)

        })
    
        return <ul>{result}</ul>
    }
}
export default Question;