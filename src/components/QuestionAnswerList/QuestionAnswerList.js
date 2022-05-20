import QuestionAnswer from "../QuestionAnswer/QuestionAnswer";

/* Only show Questions with difficulty harder than 5 -> use filter */
function QuestionAnswerList(props) {
  return props.faqs
    .filter((faq) => faq.difficulty <= 5)
    .map((faq) => {
      return (
        <QuestionAnswer
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
        />
      );
    });
}

export default QuestionAnswerList;
