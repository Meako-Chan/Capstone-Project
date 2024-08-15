import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const TransactionsTable = () => {
  return (
      <Table>
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Transaction</TableHead>
        <TableHead >Amount</TableHead>
        <TableHead >Status</TableHead>
        <TableHead >Date</TableHead>
        <TableHead className="text-right">Category</TableHead>
        
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell className="font-medium">Invoice 1</TableCell>
        <TableCell>$250.00</TableCell>
        <TableCell>Success</TableCell>
        <TableCell>8/13/2024</TableCell>
        <TableCell>Debit</TableCell>
      </TableRow>
    </TableBody>
  </Table>
  )
}

export default TransactionsTable