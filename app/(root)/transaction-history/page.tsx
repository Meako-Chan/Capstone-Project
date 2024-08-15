import HeaderBox from '@/components/HeaderBox'
import TransactionsTable from '@/components/TransactionsTable'
import React from 'react'

const TransactionHistory = () => {
  return (
    <div className="transactions">
      <div className="transaction-header">
        <HeaderBox title="Transaction History" subtext="See your bank details and transactions."/>
        </div>

        <div className="space-y-6">
            <div className="transactions-account">
                <div className="flex flex-col gap-2">
                    <h2 className="text-18 font-bold text-white"> Checking Account</h2>
                </div>
                <div className='transactions-account-balance'>
            <p className="text-14">Current balance</p>
            <p className="text-24 text-center font-bold">$1250.68</p>
          </div>
            </div>
        </div>
        <section className="flex w-full flex-col gap-6">
            <TransactionsTable/>
        </section>
    </div>
  )
}

export default TransactionHistory
