import "./QuestionAnswer.scss";

function QuestionAnswer(props) {    
    return (
        <section className="question-answer">
            <p>{props.question}</p>
            <p>{props.answer}</p>
        </section>
    );
}

export default QuestionAnswer;