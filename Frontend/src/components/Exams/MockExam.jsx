import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import SubscriptionPopup from "../Courses/SubscriptionPopup";

export default function MockExam() {

  const { id } = useParams();

  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
  const [showSubscription, setShowSubscription] = useState(false);
  const [loading, setLoading] = useState(true);

  // ✅ FETCH QUESTIONS
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await api.get(`/questions/${id}`);
        setQuestions(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [id]);

  // 👉 2 questions per page
  const currentQuestions = questions.slice(index, index + 2);

  const handleSelect = (qIndex, option) => {
    setSelectedOptions({
      ...selectedOptions,
      [qIndex]: option
    });
  };

  const toggleAnswer = (qIndex) => {
    setShowAnswers({
      ...showAnswers,
      [qIndex]: !showAnswers[qIndex]
    });
  };

  const nextQuestion = () => {
    const q1 = currentQuestions[0];
    const q2 = currentQuestions[1];

    const ans1 = selectedOptions[index];
    const ans2 = selectedOptions[index + 1];

    if (!ans1 || !ans2) {
      alert("Please answer both questions");
      return;
    }

    if (ans1 !== q1.answer || ans2 !== q2.answer) {
      alert("One or more answers are wrong!");
      return;
    }

    if (index + 2 < questions.length) {
      setIndex(index + 2);
    } else {
      alert("Mock exam finished!");
    }
  };

  const progress = questions.length
    ? ((index + 2) / questions.length) * 100
    : 0;

  // ✅ LOADING
  if (loading) {
    return <p className="text-center mt-10">Loading questions...</p>;
  }

  // ✅ EMPTY
  if (!questions.length) {
    return <p className="text-center mt-10">No questions found</p>;
  }

  // ✅ MAIN UI
  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 shadow-lg rounded-xl">

      {currentQuestions.map((q, qIndex) => {
        const realIndex = index + qIndex;

        return (
          <div key={realIndex} className="mb-8">

            <h2 className="text-xl font-bold mb-2">
              Question {realIndex + 1}
            </h2>

            <p className="mb-4">{q.question}</p>

            <div className="space-y-3">
              {q.options.map((opt, i) => {
                let style = "bg-gray-50 border hover:bg-gray-100";

                if (selectedOptions[realIndex] === opt) {
                  style = "bg-blue-100 border-blue-500";
                }

                if (showAnswers[realIndex]) {
                  if (opt === q.answer) {
                    style = "bg-green-200 border-green-600";
                  } else if (opt === selectedOptions[realIndex]) {
                    style = "bg-red-200 border-red-600";
                  }
                }

                return (
                  <div
                    key={i}
                    onClick={() => handleSelect(realIndex, opt)}
                    className={`p-3 rounded-lg cursor-pointer ${style}`}
                  >
                    {opt}
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => toggleAnswer(realIndex)}
              className="mt-3 bg-purple-600 text-white px-4 py-2 rounded-lg"
            >
              {showAnswers[realIndex] ? "Hide Answer" : "Reveal Answer"}
            </button>

            {showAnswers[realIndex] && (
              <div className="mt-2 font-semibold">
                Correct: {q.answer}
              </div>
            )}
          </div>
        );
      })}

      {/* Progress */}
      <div className="w-full bg-gray-200 h-3 rounded-full mt-6">
        <div
          className="bg-indigo-600 h-3"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Next */}
      <div className="mt-8">
        <button
          onClick={nextQuestion}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg"
        >
          Next
        </button>
      </div>

      {/* Subscription */}
      <div className="mt-10 text-center">
        <button
          onClick={() => setShowSubscription(true)}
          className="bg-orange-600 text-white px-6 py-3 rounded-lg"
        >
          Download Full Question Set
        </button>
      </div>

      {showSubscription && (
        <SubscriptionPopup close={() => setShowSubscription(false)} />
      )}

    </div>
  );
}