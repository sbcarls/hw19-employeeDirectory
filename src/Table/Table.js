import React from "react"

export default function Table(props) {
    // console.log(props.users[0].name.first);
    return (
        <div>
            <table>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>DOB</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
                {props.users.map((user) => (
                <tr>
                    <td><img src={user.picture.thumbnail}></img></td>
                    <td>{user.name.first}</td>
                    <td>{user.dob.age}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    </tr>

            ))}

            </table>
            
        </div>
    )
}

