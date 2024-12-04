import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NewProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (projectData: any) => void;
}

interface FormStep {
  title: string;
  field: keyof typeof initialFormData;
  question: string;
  placeholder?: string;
  type: 'text' | 'textarea' | 'select' | 'multiselect';
  options?: { value: string; label: string }[];
}

const initialFormData = {
  type: '',
  client: '',
  team: [] as string[],
  name: '',
  description: '',
  goals: '',
  timeline: '',
};

const projectTypes = [
  { value: 'standard', label: 'Standard Project' },
  { value: 'social-media', label: 'Social Media Campaign' },
  { value: 'marketing', label: 'Marketing Plan' },
  { value: 'custom', label: 'Custom Project' }
];

const clients = [
  { value: 'bright-future', label: 'Bright Future Marketing' },
  { value: 'techcorp', label: 'TechCorp Solutions' },
  { value: 'innovate-inc', label: 'Innovate Inc.' }
];

const teamMembers = [
  { value: 'sarah', label: 'Sarah Miller - Designer' },
  { value: 'john', label: 'John Davis - Developer' },
  { value: 'emma', label: 'Emma Wilson - Content Writer' }
];

const steps: FormStep[] = [
  {
    title: 'Project Type',
    field: 'type',
    question: "What type of project would you like to create?",
    type: 'select',
    options: projectTypes
  },
  {
    title: 'Client Selection',
    field: 'client',
    question: "Which client is this project for?",
    type: 'select',
    options: clients
  },
  {
    title: 'Team Members',
    field: 'team',
    question: "Who should be involved in this project?",
    type: 'multiselect',
    options: teamMembers
  },
  {
    title: 'Project Name',
    field: 'name',
    question: "What would you like to name your project?",
    placeholder: 'e.g., Q1 Marketing Campaign',
    type: 'text'
  },
  {
    title: 'Project Description',
    field: 'description',
    question: "Tell us about your project. What's the main objective?",
    placeholder: 'Describe your project in detail...',
    type: 'textarea'
  },
  {
    title: 'Project Goals',
    field: 'goals',
    question: "What specific goals would you like to achieve?",
    placeholder: 'List your main goals and objectives...',
    type: 'textarea'
  },
  {
    title: 'Timeline',
    field: 'timeline',
    question: "When would you like this project to be completed?",
    placeholder: 'e.g., 2-3 months, Q2 2024',
    type: 'text'
  }
];

export const NewProjectModal: React.FC<NewProjectModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(initialFormData);
  const [showReview, setShowReview] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowReview(true);
    }
  };

  const handleBack = () => {
    if (showReview) {
      setShowReview(false);
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setFormData(initialFormData);
    setCurrentStep(0);
    setShowReview(false);
    onClose();
  };

  const currentStepData = steps[currentStep];

  const renderFormField = () => {
    switch (currentStepData.type) {
      case 'select':
        return (
          <select
            value={formData[currentStepData.field] as string}
            onChange={(e) =>
              setFormData({ ...formData, [currentStepData.field]: e.target.value })
            }
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          >
            <option value="">Select an option</option>
            {currentStepData.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case 'multiselect':
        return (
          <div className="mt-1 space-y-2">
            {currentStepData.options?.map((option) => (
              <label key={option.value} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={(formData[currentStepData.field] as string[]).includes(option.value)}
                  onChange={(e) => {
                    const currentTeam = formData[currentStepData.field] as string[];
                    const newTeam = e.target.checked
                      ? [...currentTeam, option.value]
                      : currentTeam.filter((value) => value !== option.value);
                    setFormData({ ...formData, [currentStepData.field]: newTeam });
                  }}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        );
      case 'textarea':
        return (
          <textarea
            value={formData[currentStepData.field] as string}
            onChange={(e) =>
              setFormData({ ...formData, [currentStepData.field]: e.target.value })
            }
            rows={4}
            placeholder={currentStepData.placeholder}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          />
        );
      default:
        return (
          <input
            type="text"
            value={formData[currentStepData.field] as string}
            onChange={(e) =>
              setFormData({ ...formData, [currentStepData.field]: e.target.value })
            }
            placeholder={currentStepData.placeholder}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
          />
        );
    }
  };

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
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {showReview ? 'Review Your Project' : currentStepData.title}
                  </h2>
                  <span className="text-sm text-gray-500">
                    {showReview ? 'Final Step' : `Step ${currentStep + 1} of ${steps.length}`}
                  </span>
                </div>
                {!showReview && (
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                    />
                  </div>
                )}
              </div>

              <AnimatePresence mode="wait">
                {showReview ? (
                  <motion.div
                    key="review"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    {steps.map((step) => (
                      <div key={step.field} className="space-y-2">
                        <h3 className="text-sm font-medium text-gray-700">{step.title}</h3>
                        <p className="text-gray-900 bg-gray-50 p-3 rounded-lg">
                          {Array.isArray(formData[step.field])
                            ? (formData[step.field] as string[])
                                .map(
                                  (value) =>
                                    step.options?.find((opt) => opt.value === value)?.label
                                )
                                .join(', ') || 'None selected'
                            : step.options
                            ? step.options.find(
                                (opt) => opt.value === formData[step.field]
                              )?.label
                            : formData[step.field] || 'Not provided'}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg text-gray-900">{currentStepData.question}</h3>
                    {renderFormField()}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={handleBack}
                  className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                    currentStep === 0 && !showReview
                      ? 'text-gray-300'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                  disabled={currentStep === 0 && !showReview}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </button>
                {showReview ? (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
                  >
                    Submit Project
                    <Check className="h-4 w-4 ml-2" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700"
                  >
                    Next
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};