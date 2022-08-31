import React from "react";
import axios from "axios";
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            booksData: [],
            isData: false
        }
    }
    bookInfo
    getBooks = async () => {
        const booksInfo = await axios.get('http://localhost:3002/bookInfo')

        this.setState({
            booksData: booksInfo.data,
            isData: true,

        })
        console.log(this.state.booksData)
    }
    componentDidMount() {
        console.log("inside component")
        this.getBooks(); // te render first thing 
    }
    render() {
        return (
            <div>
                <button onClick={this.getBooks}>click here</button>
            </div>
        )
    }
}
export default Home;