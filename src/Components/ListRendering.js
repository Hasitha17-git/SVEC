import { getDefaultNormalizer } from '@testing-library/react'
import React from 'react'

export default function ListRendering() {
// let empList=["Ankitha","Kavya","Aparna","Udasri"]
let empList=[
    {
        name:"Kavya",
        salary:30000,
        email:"kavaya@gmail.com"
    },
    {
        name:"Savya",
        salary:30000,
        email:"Savaya@gmail.com"
    },
    {
        name:"Bavya",
        salary:30000,
        email:"Bavaya@gmail.com"
    }
]
    return (
        <div>
            <h1>
                List Rendering
            </h1>
            {
            //   empList.map(element => (
            //       <h1> {element} </h1>))
              }
            {
            empList.map(
                empData=>
                <>
                   <p>{empData.name}</p>
                   <p>{empData.salary}</p>
                   <p>{empData.email}</p>
            </>
            )    
            }
        </div>
    )
}
