import QuestionAnswerList from "./components/QuestionAnswerList/QuestionAnswerList";

function App() {
  const faqs = [
    {
      id: 1,
      difficulty: 1,
      question: "How do I avoid an infinite loop?",
      answer:
        "You must include a termination condition that will be met that will trigger the loop to end.",
    },
    {
      id: 2,
      difficulty: 5,
      question: "How do I get a React project setup and running?",
      answer: "You can run npx create-react-app project-name-goes-here",
    },
    {
      id: 3,
      difficulty: 7,
      question:
        "Where does the react application get created when running create-react-app?",
      answer:
        "A new folder will be created in the directory you are currently in, with the name provided after “npx create-react-app”. (ie. npx create-react-app cool-project is similar to running mkdir cool-project)",
    },
    {
      id: 4,
      difficulty: 8,
      question: "What are props in React?",
      answer:
        "Arbitrary inputs that we can pass from parent to child components. Similar to parameters of functions.",
    },
    {
      id: 5,
      difficulty: 3,
      question: "What are props used for?",
      answer:
        "Used to pass information from one component to another, the child component can then use that information to render itself in whatever way it chooses!",
    },
    {
      id: 6,
      difficulty: 6,
      question: "What prop do I need to include when using React lists?",
      answer:
        "The key prop. The key prop must be unique, stable, and predictable.",
    },
    {
      id: 7,
      difficulty: 4,
      question:
        "Is it okay to use an array’s index value as your key prop value?",
      answer:
        "No, array index is not considered stable. If the array items were to change in any way (ie. item is removed, index of items change) then the key prop value would change!",
    },
  ];

  return (
    <main className="app">
      <h1>JavaScript/React Frequently Asked Questions</h1>
      <h2>Number of FAQs: {faqs.length}</h2>
      <QuestionAnswerList faqs={faqs} />
    </main>
  );
}

export default App;
