import React from "react";

export default function ManageUsers(){

const users = [
{ id:1, name:"John", email:"john@test.com"},
{ id:2, name:"Anna", email:"anna@test.com"}
]

return(

<div>

<h1 className="text-2xl font-bold mb-6">
Users
</h1>

<table className="w-full bg-white shadow">

<thead className="bg-gray-100">

<tr>
<th className="p-3">Name</th>
<th className="p-3">Email</th>
</tr>

</thead>

<tbody>

{users.map(user=>(
<tr key={user.id} className="border-t">

<td className="p-3">{user.name}</td>
<td className="p-3">{user.email}</td>

</tr>
))}

</tbody>

</table>

</div>

)

}