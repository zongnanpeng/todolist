import React,{Component} from 'react'

class Item extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(){
        const {onDelete,index} = this.props;
        onDelete(index);
        // this.props.onDelete(this.props.index);  
    }
    

    render(){
        return (
            <li onClick={this.handleClick}>{this.props.content}</li>
        )
    }
}

export default Item;