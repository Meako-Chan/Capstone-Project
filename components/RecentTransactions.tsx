import React from 'react'
import Link from 'next/link'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import TransactionsTable from './TransactionsTable'


const RecentTransactions = () => {
  return (
    <section className="recent-transactions">
      <header className="flex items-center justify-between">
        <h2 className="recent-transactions-label">
            Recent Transactions
        </h2>
        <Link href={'/transaction-history'} className="view-all-btn">
            View all
        </Link>
      </header>

      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
            <TabsTrigger value="checkings">Checkings</TabsTrigger>
            <TabsTrigger value="savings">Savings</TabsTrigger>
        </TabsList>
            <TabsContent value="checkings">View your Checkings account here.</TabsContent>
            <TabsContent value="savings">View your Savings account here</TabsContent>
        <TransactionsTable/>
      </Tabs>
    </section>
  )
}

export default RecentTransactions
