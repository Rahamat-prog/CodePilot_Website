import React from 'react'
//import { useNavigate } from 'react-router-dom'
import moment from 'moment'
//import { useSelector} from 'react-redux'
import { Link } from 'react-router-dom'



const Questions = ({question}) => {

  //  var user = useSelector((state) => (state.currentUserReducer))  
  //  const navigate= useNavigate()

// condition for if someone want to show question ans ans then first login 
// const checkAuth = () => {
//    if(user === null){
//     alert("login or signup to ask a question")
//     navigate('/Auth')
//   }
//   else{
//     navigate(`/Questions/${question._id}`)
//   }
// }
  return (
    <div className='display-question-container'>

        <div className='display-votes-ans'>
            {/* show total vote to calculate the upvote - downvote */}
            <p>{question.upVote - question.downVote}</p>
            <p>votes</p>
        </div>
        <div className='display-votes-ans'>
            <p>{question.noOfAnswers}</p>
            <p>answers</p>
        </div>
        
        <div className='display-question-details'>
          <Link to={`/Questions/${question._id}`} className='question-title-link'>{question.questionTitle}</Link>
          {/* here we can give condition that if someone click o the question first login than see the question and ans */}
           {/* <button to={`/Questions/${question._id}`} onClick={checkAuth} className= 'question-title-link'>{question.questionTitle}</button>  */}
          <div className='display-tags-time'>
            <div className='display-tags'>
              {
                question.questionTags.map((tag)=> (
                  <p key={tag}>{tag}</p>
                )

                )
              }
            </div>
            <p className='display-time'>
              asked {moment(question.askedOn).fromNow()} { question.userPosted}
            </p>
          </div>
        </div>
        
        
    </div>
  )
}

export default Questions
