// pages/index.tsx
import { useState } from 'react';
import { processNumber } from '../util/primefactorial';

export default function Home() {
  const [number, setNumber] = useState<number>(0);
  const [results, setResults] = useState<{ 
    isPrime: boolean | null; 
    factorial: number | null 
  }>({ isPrime: null, factorial: null });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const calculatedResults = processNumber(number);
    setResults(calculatedResults);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-md mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
          🔢 Prime and Factorial Checker
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-lg">
          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-700">
              Enter a number
            </label>
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
              className="w-full px-4 py-3 border-2 border-indigo-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
              min="0"
              placeholder="e.g. 5"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors duration-200 transform hover:scale-[1.01]"
          >
            Check Number
          </button>
        </form>

        {results.isPrime !== null && (
          <div className="space-y-4 animate-fade-in">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">Prime Status</h2>
              <p className={`text-lg ${results.isPrime ? 'text-emerald-600' : 'text-rose-600'}`}>
                {results.isPrime ? '🎉 Prime number!' : '❌ Not a prime number'}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">Factorial Result</h2>
              <p className="text-lg text-gray-800">
                {results.factorial !== null 
                  ? <span className="font-mono">{number}! = {results.factorial}</span>
                  : '⚠️ Factorial undefined for negative numbers'}
              </p>
            </div>
            
          </div>

          
        )}
        <h2 className="text-xl font-semibold text-indigo-600 mb-2">(Technical Assessment) </h2>
      </div>
      
    </div>
  );
}