import React from 'react';
import { AlertCircle, Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface FinancialSummaryProps {
  outstandingBalance: number;
  upcomingPayments: number;
  nextPaymentDate: Date;
}

export const FinancialSummary: React.FC<FinancialSummaryProps> = ({
  outstandingBalance,
  upcomingPayments,
  nextPaymentDate
}) => {
  const metrics = [
    {
      title: 'Outstanding Balance',
      value: outstandingBalance,
      icon: AlertCircle,
      color: 'text-yellow-500'
    },
    {
      title: 'Upcoming Payments',
      value: upcomingPayments,
      icon: Calendar,
      color: 'text-blue-500',
      date: nextPaymentDate
    }
  ];

  return (
    <>
      {metrics.map((metric, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center">
            <div className={`${metric.color} p-3 rounded-full bg-opacity-10`}>
              <metric.icon className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">{metric.title}</p>
              <div className="flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">
                  ${metric.value.toLocaleString()}
                </p>
                {metric.date && (
                  <p className="ml-2 text-sm text-gray-500">
                    Due {format(metric.date, 'MMM d')}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};