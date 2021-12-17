import React, { useState } from 'react'
import { MultiSelect } from "react-multi-select-component";




function Segment() {

    let allSchema = [
                        {value : "first_name" ,  label : "First Name"},
                        {value : "last_name" ,  label : "Last Name"},
                        {value : "gender" ,  label : "Gender"},
                        {value : "age" ,  label : "Age"},
                        {value : "account_name" ,  label : "Account Name"},
                        {value : "city" ,  label : "City"},
                        {value : "state" ,  label : "State"}
                    ]

    const [segment_name, setSegmentName] = useState("");

    const [schema, setSchema] = useState([]);


    const sendResponse = async (e) => {
        e.preventDefault();
        await fetch("https://webhook.site/f58e7cea-ee44-4572-ad43-29e9b0886d23", {
        method: "POST",
        mode: 'cors',
        body: JSON.stringify({
          segment_name, schema
        }),
        headers: {
          "Content-type": "application/json",
        }
      })
      .then(response => response.json())
      .then(response => {
         alert(segment_name + schema)
      })
      .catch(error => {
         console.log(error)
      });
      
    }


    return (
        <>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="col-md-12">
                            <form className="form" action="" method="post" onSubmit={sendResponse}>
                                <div className="form-group">
                                    <label for="segment_name" className="text-bold"><h6>Enter the Name of the Segment</h6></label><br/>
                                    <input type="text" id="segment_name" name="segment_name" required onChange={(e) => setSegmentName(e.target.value)} className="form-control" />
                                </div>

                                <h6>To save your segment, you need to add the schemas to build the queries</h6>

                                <div className="form-group">
                                <MultiSelect
                                    options={allSchema}
                                    value={schema}
                                    onChange={setSchema}
                                    labelledBy="Add schema to segment"
                                />
                                {/* <button className="btn btn-info btn-md" > + Add new schema</button> */}
                                </div>
                                <div className="form-group">
                                    <input type="submit" name="submit" className="btn btn-info btn-md" value="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Segment;




// {
//     (schema.length!==0)
//     ?
//     (schema.map( obj =>{
//         return (<div className="container" style={{"border" : "#1affff solid"}}>
//                     {/* {schema.label} */}
//                 </div>)
//     }))
//     :
//     null
// }