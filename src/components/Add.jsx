import React, { Component } from 'react';
import "./Add.css";

class Add extends Component {
    state = {  } 
    render() { 
        return (
            <form id="add">                    
                    <label> Name: <input type="text" name="new_name" 
                    value={this.props.new_name} onChange={this.props.onChangeText}
                    required></input></label>
                    <label> Email: <input type="text" name="new_email"
                             value={this.props.new_email} onChange={this.props.onChangeText}
                             pattern="\w+(\.\w+)*@(?:\w+\.)+\w+"
                             required></input></label>
                    <label> Phone: <input type="text" name="new_phone" 
                            value={this.props.new_phone} onChange={this.props.onChangeText}
                            pattern="0[0-9]{1,2}(-){0,1}[0-9]{7,8}"
                            required></input></label>
                    <input type="button" value="ADD" onClick={this.props.onAddButton}/>
                </form>
        );
    }
}
 
export default Add;