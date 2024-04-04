"use client"
import React from 'react';
import ExpenseModal from '../expenseModal/expenseModal';
import { useState } from 'react';
// const expenses = [
//     { id: 1, amount: 50, category: 'Food', note: 'Lunch', date: '2023-11-01' },
//     { id: 2, amount: 20, category: 'Transport', note: 'Taxi fare', date: '2023-11-02' },
//     // Add more expenses as needed
// ];

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([]);
    const [isOpen, setIsOpen] = useState(false)
    const onAddExpense = (expense) => {
        setExpenses([...expenses, expense])
    }
    const onClose = () => {
        setIsOpen(false)
    }
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Expense List</h2>
            <button
                onClick={() => setIsOpen(true)}
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
                Add Expense
            </button>
            <ExpenseModal isOpen={isOpen} onClose={onClose} onSave={onAddExpense} />

            {expenses.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                        <thead>
                            <tr className="bg-blue-500 text-white">
                                <th className="py-3 px-4 text-left font-semibold">ID</th>
                                <th className="py-3 px-4 text-left font-semibold">Amount</th>
                                <th className="py-3 px-4 text-left font-semibold">Category</th>
                                <th className="py-3 px-4 text-left font-semibold">Note</th>
                                <th className="py-3 px-4 text-left font-semibold">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expenses.map((expense) => (
                                <tr
                                    key={expense.id}
                                    className="border-b border-gray-200 hover:bg-gray-100"
                                >
                                    <td className="py-3 px-4">{expense.id}</td>
                                    <td className="py-3 px-4">PKR{expense.amount}.00</td>
                                    <td className="py-3 px-4">{expense.category}</td>
                                    <td className="py-3 px-4">{expense.note}</td>
                                    <td className="py-3 px-4">{expense.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-gray-600 mt-4">No expenses recorded.</p>
            )}
        </div>
    );
};

export default ExpenseList;
