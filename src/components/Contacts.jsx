import React, { Component } from 'react';
import Contact from './Contact';
import Add from './Add';

class Contacts extends Component {
    state = {  
        new_name:"",
        new_email:"",
        new_phone:"",
        toggleAdd:false,

        contactList:[],
    } 

    handlDelete = (idx)=>{
        const answer = window.confirm("Do you really want to delete"+" "+this.state.contactList[idx].name)
        if(answer){

        const updatedList = [...this.state.contactList];
        updatedList.splice(idx, 1);
        this.setState({ contactList: updatedList });
        }
    }

    handleChange = (event)=>{
        event.preventDefault();
        this.setState({[event.target.name]:event.target.value});
    };

    handleAdd = ()=>{
        if(this.state.new_name=="")
            return;
            if(!(/^\w+(\.\w+)*@(?:\w+\.)+\w+$/i.test(this.state.new_email))){
            alert("invaild email address");
            return;
        }
        if(!(/^0[0-9]{1,2}(-){0,1}[0-9]{7,8}$/i.test(this.state.new_phone))){
            alert("invaild phone number");
            return;
        }
        const obj = {
            name:`${this.state.new_name}`,
            email:`${this.state.new_email}`,
            phone:`${this.state.new_phone}`
        }
        const arrExtend = this.state.contactList;
        arrExtend.push(obj)
        this.setState({contactList: arrExtend});
        this.setState({new_name:""});
        this.setState({new_email:""});
        this.setState({new_phone:""});

    }

    personAdd =()=>{
       this.setState({toggleAdd: !this.state.toggleAdd}) //פונקציה שמסירה/מוסיפה את הסרגל כלים
    }
    
    sortContacts = () => {
        const sortedList = [...this.state.contactList];
        sortedList.sort((a, b) => {
            return a.name.localeCompare(b.name); // Sort
        });
        this.setState({ contactList: sortedList });
    }

    componentWillMount(){ //GET
        localStorage.getItem("contacts") &&
        this.setState({contactList: JSON.parse(localStorage.getItem("contacts"))})  
    }
    componentWillUpdate(nextProps,nextState){ //SET
        localStorage.setItem("contacts",JSON.stringify(nextState.contactList));
    }
    
    render() { 
        return (
            <div>
                <span Style="font-size:50px; color:navy; cursor:pointer;"
                      onClick={this.personAdd}>
                     &#128104;&#8205;&#128188; {this.state.toggleAdd?(<>&#45;</>):(<>&#43;</>)}
                </span>
                {this.state.toggleAdd?( 
               <Add
                    name={this.state.new_name}
                    email={this.state.new_email}
                    phone={this.state.new_phone}
                    onAddButton={this.handleAdd}
                    onChangeText={this.handleChange}
               />):null}
               <button className ="sortB" onClick={this.sortContacts}>Sort</button>
                {
                    
                    this.state.contactList.map((person,index)=>(
                        <Contact
                            key={index}
                            idx={index}
                            name={person.name}
                            email={person.email}
                            phone={person.phone}
                            onDelete={this.handlDelete}
                        />
                    ))
                }
            </div>
        );
    }
}
 
export default Contacts;