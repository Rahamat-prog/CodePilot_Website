import React from 'react'
import Questions from './Questions'

const QuestionList = ({questionsList}) => {
  return (
    <>
            {
                questionsList.map((question) => (
                  // go to Questions page in Homemainbar 
                    <Questions question={question} key={question._id}/>
                ))
            }
    </>
  )
}

export default QuestionList
