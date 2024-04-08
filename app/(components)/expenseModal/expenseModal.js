

"use client"
import { AiOutlineEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import React, { useState } from 'react';

const ExpenseModal = ({ expense, isOpen, onClose, onSave ,onUpdateExpense }) => {
  const [formData, setFormData] = useState({
    amount: 0,
    category: '',
    note: '',
    date: '',
  });
  const category = ["Food", "Transport", "Shopping", "Bills", "Entertainment", "Online Shopping", "Others"];
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    
    e.preventDefault();
    // Adding the auto-generated ID here using Date.now()
    const newExpense = { ...formData, id: Date.now().toString() };
    onSave(newExpense);    
    setFormData({ amount: 0, category: '', note: '', date: '' });

    onClose();

  };
  const handleUpdateExpense=()=>{
    const updateExpense = { ...formData, id: expense.id, amount:formData.amount ||expense.amount, category: formData.category||expense.category,note:formData.note||expense.note,date:formData.date||expense.date};
    onUpdateExpense(updateExpense);    
    setFormData({ amount: 0, category: '', note: '', date: '' });

    onClose();
  }
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-full max-w-md mx-4 p-6 rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute text-4xl text-red-500 top-2 right-2 hover:text-gray-700"
        >
          &times;
        </button>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Add Expense</h3>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount||expense.amount}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
            
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Category</label>
            <select
              name="category"
              value={formData.category || expense.category}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            >
              
              <option value="" disabled>Select a category</option>
              {category.map((cat) => (
                <option key={cat} value={cat }>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Note</label>
            <textarea
              name="note"
              value={formData.note || expense.note}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date || expense.date}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          {expense.id!==''?<button
            onClick={handleUpdateExpense}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            update Expense
          </button>:
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Save Expense
          </button>
}
        </form>
      </div>
    </div>
  );
};
export default ExpenseModal;