import React, { useState ,useEffect } from 'react';
import Styles from "./Clue2.module.css"
const Clue2=()=>{
    const questions = [		{			
		questionText: 'What kind of games is the thief obsessed with?',			
		answerOptions: [
			{ answerText: 'Board games', isCorrect: false },
			{ answerText: 'Video games', isCorrect: false },				
			{ answerText: 'Mind games', isCorrect: true },				
			{ answerText: 'Physical games', isCorrect: false },],
		},
		{
			questionText: 'How did the thief contact Shubham?',
			answerOptions: [
				{ answerText: 'By phone', isCorrect: false },
				{ answerText: 'By email', isCorrect: true },
				{ answerText: 'In person', isCorrect: false },
				{ answerText: 'Through a letter', isCorrect: false },
			],
		},
		{
			questionText: 'What is the opposite of the word "obsessed"?',
			answerOptions: [
				{ answerText: 'Indifferent', isCorrect: true },
				{ answerText: 'Pleased', isCorrect: false },
				{ answerText: 'Amused', isCorrect: false },
				{ answerText: 'Impressed', isCorrect: false },
			],
		},
		{
			questionText: ' Which sentence contains a subject-verb agreement error?',
			answerOptions: [
				{ answerText: 'The thief returns the belongings if the puzzles are solved.', isCorrect: false },
				{ answerText: 'Shubham and his friends goes to the beach every weekend.', isCorrect: true },
				{ answerText: ' She has been studying web development for two years. ', isCorrect: false },
				{ answerText: 'They were all excited to attend the conference next month.', isCorrect: false },
			],
		},
		{
			questionText: 'Which sentence contains a double negative?',
			answerOptions: [
				{ answerText: " I don't have none of Shubham's belongings.", isCorrect: false },
				{ answerText: "I don't have any of Shubham's belongings.", isCorrect: false },
				{ answerText: "I have none of Shubham's belongings.", isCorrect: false },
				{ answerText: "None of the above", isCorrect: true },
			],
		},
		{
			questionText: 'What is the name of the location where Shubham took a long trip before returning home?',
			answerOptions: [
				{ answerText: 'Dalmatian Coast of Croatia', isCorrect: true },
				{ answerText: 'Great Wall of China', isCorrect: false },
				{ answerText: 'Statue of Liberty', isCorrect: false },
				{ answerText: 'Eiffel Tower', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	const [starting, setStarting] = useState(true);

	const handleStartClick = () => {
		setStarting(false);
	};
	
	const win=()=>{
		alert('You got your treasure back');
	}
	const lose=()=>{
		alert('You lost your treasure....try again!!!');

	}
	


	const a=score;
	const b=6;
	const greater= a>b;
	return (
	
		<div className={Styles.app}>

			
		{starting ? (
			<div>
				<div className='heading'>
					<h2><u>Welcome to second puzzle!!!</u></h2>
				</div>
				<p>
					
				This is Shubham , an aspiring student to be web developer. 
				Yesterday  I returned from a long trip of Dalmatian Coast of Croatia. 
				While entering in my house I saw the lock is broken .
				I rushed in and found that some thief took my valuables . 
				Today I got an email saying if I can clear the puzzles the thief will return my belongings .
				I got to know that a friend of the thief is a developer at xyz company and also the thief is obsessed with mind games that tests soft skill.Now  please help me to get my retrieve my belongings.
				For the next part . I will give you six question  Now if 
					you can give answer to <b>minimum 4 out of 6</b>questions I will return your belongings.
					Now click the below button to start quiz 
					
				</p><div class='contain'>
				<button onClick={handleStartClick} text-align ='center'><b>Start the next quiz by clicking this button</b></button>
			</div></div>
		) :
			
			showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
					<br/>
					{ score >= 4 ? 'you got your treasure back!!!' :'you lost your treasure!!!!try again!!!'}
					

					
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Clues(questions) {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}

export default Clue2;