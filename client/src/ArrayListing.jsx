import React from 'react'

const ArrayListing = () => {
  // const employees = ["Alex", "Tovino", "Basil", "George"]
  // using map function
  // employees.map((item) => {
  //    console.log("My Name Is: ", item);
  // })
  // using for loop => we cannot use loop in jsx directly
  // for(let i=0; i<employees.length; i++) {
  //     console.log("My Name is: ", employees[i]);
  // }

  const employeeInfo = [
      {name: "Alex", email: "alex123@gmail.com", contact: 12345},
      {name: "Tovino", email: "tovino653@gmail.com", contact: 32454},
      {name: "Basil", email: "basil987@gmail.com", contact: 43734},
      {name: "George", email: "george584@gmail.com", contact: 47993}
  ]

  return (
    <>
      <h2>This is Array Listing with Map function</h2>
      {/* {
          employees.map((item) =>
             <h3> {item} </h3>
        )
      } */}

     <table border={1}>
        <thead>
            <tr>
               <td>Name</td>
               <td>Email</td>
               <td>Contact</td>
            </tr>
        </thead>
      <tbody>
         {
            employeeInfo.map((emp) => 
              <tr key={emp.email}>
                 <td> {emp.name} </td>
                 <td> {emp.email} </td>
                 <td> {emp.contact} </td>
              </tr>
            )
         }
         </tbody>
     </table>

    </>
  )
}

export default ArrayListing
