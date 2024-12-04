import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Brain, ArrowRight, ArrowLeft } from 'lucide-react';

interface RequestStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const questions = [
  {
    id: 'objective',
    question: 'What is the main objective of your brand study request?',
    placeholder: 'e.g., Understanding market positioning, competitor analysis...'
  },
  {
    id: 'focus',
    question: 'Which specific aspects of your brand would you like to analyze?',
    placeholder: 'e.g., Visual identity, messaging, target audience perception...'
  },
  {
    id: 'timeline',
    question: 'When would you like to receive this analysis?',
    placeholder: 'e.g., Within 2 weeks, by end of month...'
  }
];

export const RequestStudyModal: React.FC<RequestStudyModalProps> = ({
  isOpen,
  onClose
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Here you would handle the submission
    console.log('Submitted answers:', answers);
    onClose();
    setCurrentStep(0);
    setAnswers({});
  };

  const currentQuestion = questions[currentStep];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black bg-opacity-30"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-xl rounded-xl bg-white p-6 shadow-lg"
            >
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Brain className="h-6 w-6 text-purple-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Request Brand Study
                  </h2>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h3 className="text-lg text-gray-900">{currentQuestion.question}</h3>
                  <textarea
                    value={answers[currentQuestion.id] || ''}
                    onChange={(e) =>
                      setAnswers({ ...answers, [currentQuestion.id]: e.target.value })
                    }
                    placeholder={currentQuestion.placeholder}
                    rows={4}
                    className="w-full rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex justify-between">
                <button
                  onClick={handleBack}
                  className={`flex items-center px-4 py-2 text-sm font-medium ${
                    currentStep === 0
                      ? 'text-gray-300 cursor-not-allowed'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                  disabled={currentStep === 0}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </button>
                <button
                  onClick={handleNext}
                  className="flex items-center px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-md hover:bg-purple-700"
                >
                  {currentStep === questions.length - 1 ? (
                    'Submit Request'
                  ) : (
                    <>
                      Next
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};