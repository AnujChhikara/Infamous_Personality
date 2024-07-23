'use client'

import { useState, useEffect } from 'react';
import { questionsData } from '@/data/questions';
export default function QuizForm() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

 
  const handleChange = (questionIndex, optionIndex) => {
    setAnswers({ ...answers, [questionIndex]: optionIndex });
  };
 

  console.log(answers)

  return (
    <form  className='flex flex-col space-y-4 '>
      <div className='flex flex-wrap gap-4' >
       {questionsData.map((question, index) => (
          <div key={index} className="p-3 border  border-zinc-600 rounded-lg shadow-lg hover:bg-zinc-800 duration-700">
            <h3 className="text-xl font-semibold mb-2">{question.question}</h3>
            <div className="space-y-1">
              {question.options.map((option, i) => (
                <label key={i} className="flex items-center text-zinc-400 space-x-2">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={i}
                    checked={answers[index] === i}
                    onChange={() => handleChange(index, i)}
                    className="form-radio text-blue-600"
                  />
                  <span className="text-md">{option}</span>
                </label>
              ))}
            </div>
          </div>
       ))}
        </div>
      <button className='w-24 rounded-xl text-center h-12 bg-white text-black font-bold  hover:opacity-60 shadow-md shadow-white duration-300' type="submit">Submit</button>
      {result && (
        <div>
          <h2>You are like {result.name}</h2>
          <p>{result.bio}</p>
        </div>
      )}
    </form>
  );
}
