import React from "react"

class Users extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users: [
                {
                    id: 1,
                    firstname: 'Vladimir',
                    lastname: 'Alekseev',
                    bio:'young men, programmer',
                    age: 20,
                    isHappy:false
                },
                {
                    id: 2,
                    firstname: 'George',
                    lastname: 'Brill',
                    bio:'young men, philologist',
                    age: 17,
                    isHappy:true
                }
            ]
        }
    }
    render(){
        if(this.state.users.length > 0)
        return(<div>
            {this.state.users.map((el) => (<div className="user" key={el.id}>
                <h3>{el.firstname} {el.lastname}</h3>
                <p>{el.bio}</p>
                <b>{el.isHappy ? "Счастлив :)" : "Не особо :("}</b>
            </div>))}
        </div>)
        else
        return(<div className="user">
           <h3>пользователей нет</h3>
        </div>)
    }
}

export default Users