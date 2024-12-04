import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import { format } from 'date-fns';

interface ProjectSubmission {
  id: string;
  name: string;
  description: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: Date;
  feedback?: string;
}

interface ProjectSubmissionsProps {
  submissions: ProjectSubmission[];
}

export const ProjectSubmissions: React.FC<ProjectSubmissionsProps> = ({ submissions }) => {
  const getStatusIcon = (status: ProjectSubmission['status']) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'rejected':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-yellow-500" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-6">Project Submissions</h2>
      <div className="space-y-4">
        {submissions.map((submission) => (
          <motion.div
            key={submission.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-gray-200 rounded-lg p-4"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(submission.status)}
                  <h3 className="text-sm font-medium text-gray-900">{submission.name}</h3>
                </div>
                <p className="mt-1 text-sm text-gray-500">{submission.description}</p>
                {submission.feedback && (
                  <div className="mt-2 text-sm">
                    <span className="font-medium text-gray-700">Feedback: </span>
                    <span className="text-gray-600">{submission.feedback}</span>
                  </div>
                )}
              </div>
              <span className="text-xs text-gray-400">
                {format(submission.submittedAt, 'MMM d, yyyy')}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};