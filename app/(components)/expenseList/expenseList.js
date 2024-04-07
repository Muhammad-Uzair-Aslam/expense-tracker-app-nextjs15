"use client"
import React from 'react';
import ExpenseModal from '../expenseModal/expenseModal';
import { useState } from 'react';

const ExpenseList = () => {
    const [expenses, setExpenses] = useState([]);
    const [isOpen, setIsOpen] = useState(false)
    const [total,setTotal]=useState(0)
    const [expens,setExpens]=useState({
        id:'',
        amount:'',
        category:'',
        note:'',
        date:''
    }
        
    )
    const onAddExpense = (expense) => {
        setExpenses([...expenses, expense])
                
    }
    const onClose = () => {
        setIsOpen(false)
    }
    const onDeleteHandler=(expense)=>{
        setExpenses(expenses.filter((e)=>e.id!=expense.id))
        setTotal(total-expense.amount)
    }
    const onEditHandler=(expense)=>{
        setExpens(expense)
        
        setIsOpen(true)
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
            <ExpenseModal expense={expens} isOpen={isOpen} onClose={onClose} onSave={onAddExpense} />

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
                                <th className="py-3 px-4 text-left font-semibold">Actions</th>
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
                                    <td className="py-3 px-4">{new Date(expense.date).toLocaleDateString()}</td>
                                    <td className="py-3 px-4">
                                        <button onClick={()=>onEditHandler(expense)} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Edit</button>
                                        <button className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600' onClick={()=>onDeleteHandler(expense)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    
                </div>
            ) : (
                <p className="text-gray-600 mt-4">No expenses recorded.</p>
            )}
            {total>0 && <div className='flex justify-end'>
                <p className='text-2xl font-semibold mb-4'>Total: PKR{total.toFixed(2)}</p>
                </div>}
        </div>
    );
};

export default ExpenseList;


