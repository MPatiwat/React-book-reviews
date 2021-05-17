import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import useInput from "../../hooks/use-input";
import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";


export default function Comment(){

  const name = "Dummy"

  const { sendRequest, status } = useHttp(addComment);

  useEffect(() => {
    if (status === "completed") {
      console.log("send_Data")
    }
  }, [status]);

  const isNotEmpty = (value) => value.trim() !== "";

  const { value: enteredComment,
    valueChangeHandler: commentChangeHandler,
    isValid : enteredCommentisValid,
  } = useInput(isNotEmpty);

  const { value: enteredScore,
    valueChangeHandler: scoreChangeHandler,
    isValid : enteredScoreisValid,
  }= useInput(isNotEmpty);


  const submitHandler = (event) => {
    event.preventDefault();
    //console.log(enteredBookid,enteredgenres,enteredDescription,enteredPages)
    const commentData = {

      name: name,
      comment: enteredComment,
      score: enteredScore,

    };
    console.log(commentData.name)
    sendRequest(commentData)
  }

  let formIsValid = false

  if (enteredScore && enteredComment) {
    formIsValid = true;
    }

  const formClassName = formIsValid
    ? "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
    : "cursor-not-allowed bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150";
  
  

  if (enteredCommentisValid && enteredScoreisValid) {
    formIsValid = true;
    }
    // const [rate , setRate] = useState("0")
    // const ratingChanged = (newRating) => {
    //     console.log(newRating)
    //     setRate(newRating)
    //   }

    
    return(
        <>
        
      <form onSubmit = {submitHandler}>
      <div className="flex flex-wrap ">
          <div className="flex  py-4 lg:pt-4 pt-8">
            <div className="mr-4 p-3 text-center">
              <span className="text-xl font-bold block tracking-wide text-blueGray-600">
                Name : {name}
              </span>
            </div>
          </div>
        
          <div className="py-6 px-3 mt-32 sm:mt-0">
            <span class="input-group-text" id="basic-addon1" className ="fas fa-star text-yellow" ></span>
              <input
                value = {enteredScore}
                type ="number" maxlength = "3"min="0" max="5" 
                className="placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow"
                placeholder = "Score : 0-5"
                onChange = {scoreChangeHandler}
              />
          </div>
        </div>
        
        <div>
            <textarea
              value = {enteredComment}
              cols="50" rows="10"
              type="text"
              className = "placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Comment" 
              onChange = {commentChangeHandler}
            />
            <div className="text-left mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      className={formClassName}
                      type="submit"
                      disabled={!formIsValid}
                    >
                      Comment
                    </button>
            </div>
          </div>
          </form>
        </>

    )
    }