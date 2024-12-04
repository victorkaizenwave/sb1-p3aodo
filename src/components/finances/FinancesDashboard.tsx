import React from 'react';
import { FinancialSummary } from './FinancialSummary';
import { TransactionsList } from './TransactionsList';
import { InvoiceSection } from './InvoiceSection';

export const FinancesDashboard: React.FC = () => {
  const summaryData = {
    outstandingBalance: 1200,
    upcomingPayments: 3500,
    nextPaymentDate: new Date('2024-03-01')
  };

  const transactions = [
    {
      id: '1',
      date: new Date('2024-02-01'),
      description: 'Social Media Campaign - January',
      amount: 2500,
      status: 'paid',
      project: 'Q1 Marketing Campaign'
    },
    {
      id: '2',
      date: new Date('2024-02-15'),
      description: 'Website Optimization',
      amount: 1800,
      status: 'pending',
      project: 'Website Redesign'
    },
    {
      id: '3',
      date: new Date('2024-03-01'),
      description: 'Content Creation - February',
      amount: 3500,
      status: 'scheduled',
      project: 'Content Strategy'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FinancialSummary
          outstandingBalance={summaryData.outstandingBalance}
          upcomingPayments={summaryData.upcomingPayments}
          nextPaymentDate={summaryData.nextPaymentDate}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TransactionsList transactions={transactions} />
        <InvoiceSection />
      </div>
    </div>
  );
};