import React, { useState } from 'react'

function Question() {
    const faqs = [
        {
          question : "What is React?",
          answer : "React is javascript"
        },
        {
          question : "What is React?",
          answer : "React is javascript"
        },
        {
          question : "What is React?",
          answer : "React is javascript"
        }
      ]
    
      const [isActive, setIsActive] = useState(null)
    
      const toggleAns = (index) => {
        setIsActive( isActive === index ? null : index)
      }
  return (
    <div className="App">
    {faqs.map((faq, index) => (
      <div key={faq.index} style={{ borderBottom: "2px solid black" }}>
        <div onClick={() => toggleAns(index)}>
          {faq.question} <span>{isActive === index ? ">" : "<"}</span>
        </div>
        <div>{isActive === index && <div>{faq.answer}</div>}</div>
      </div>
    ))}
    </div>
  )
}

export default Question

