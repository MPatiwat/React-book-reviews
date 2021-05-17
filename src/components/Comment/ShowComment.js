import { right } from "@popperjs/core";
import React , {useState} from "react";
import firestore from "firebase/firestore"

export default function ShowComment(){

    
    // const [rate , setRate] = useState("0")
    // const ratingChanged = (newRating) => {
    //     console.log(newRating)
    //     setRate(newRating)
    //   }

    
    return(
        <>
        
        {/* <div class = "input-group mb-3">
          
          <div class = "text-left">
          <label/>Name : {name}
            <span class="input-group-text" id="basic-addon1" className ="fas fa-star text-yellow" ></span>
            <input
              type ="number" maxlength = "3"min="0" max="5" 
              className="placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow"
              placeholder = "Score : 0-5"
            />
            </div>
        </div> */}

 
      <div className="flex flex-wrap justify-center">
          {/* <div className="flex justify-center py-4 lg:pt-4 pt-8">
            <div className="mr-4 p-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                Name : 
              </span>
            </div>
          </div> */}
        
          <div className="py-6 px-3 mt-32 sm:mt-0">
            <span class="input-group-text" id="basic-addon1" className ="fas fa-star text-yellow" ></span>
            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                Score : {rate}
              </span>
          </div>
        </div>

        </>

    )
}