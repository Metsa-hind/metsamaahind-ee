import { useState, useEffect } from 'react';

interface MathCaptchaProps {
  onCaptchaChange: (answer: string, expected: number) => void;
}

export default function MathCaptcha({ onCaptchaChange }: MathCaptchaProps) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState('');
  const [operator, setOperator] = useState('+');

  // Generate new math problem
  const generateProblem = () => {
    const newNum1 = Math.floor(Math.random() * 10) + 1;
    const newNum2 = Math.floor(Math.random() * 10) + 1;
    const ops = ['+', '-'];
    const newOperator = ops[Math.floor(Math.random() * ops.length)];
    
    setNum1(newNum1);
    setNum2(newNum2);
    setOperator(newOperator);
    setAnswer('');
    
    // Calculate expected answer
    const expected = newOperator === '+' ? newNum1 + newNum2 : newNum1 - newNum2;
    onCaptchaChange('', expected);
  };

  useEffect(() => {
    generateProblem();
  }, []);

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAnswer(value);
    
    const expected = operator === '+' ? num1 + num2 : num1 - num2;
    onCaptchaChange(value, expected);
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Tõesta, et sa ei ole robot
      </label>
      <div className="flex items-center space-x-2">
        <span className="text-lg font-mono bg-gray-100 px-3 py-2 rounded border">
          {num1} {operator} {num2} = ?
        </span>
        <input
          type="number"
          value={answer}
          onChange={handleAnswerChange}
          className="w-20 h-11 rounded-lg border border-slate-200 px-3 text-center outline-none ring-emerald-300/40 focus:ring-4"
          placeholder="?"
          required
        />
        <button
          type="button"
          onClick={generateProblem}
          className="text-sm text-emerald-600 hover:text-emerald-800 underline"
          title="Uus ülesanne"
        >
          🔄
        </button>
      </div>
    </div>
  );
}