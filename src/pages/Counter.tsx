import { useState, createContext, useContext, FC, ReactNode } from 'react';

// Define types for the context
interface CounterContextType {
  count: number;
  increase: () => void;
  decrease: () => void;
}

// 1. Create Context with a default value
const CounterContext = createContext<CounterContextType | null>(null);

// Define types for the Counter component props
interface CounterProps {
  children: ReactNode;
}

// 2. Create parent component
const Counter: FC<CounterProps> = ({ children }) => {
  const [count, setCount] = useState(0);
  const increase = () => setCount((count) => count + 1);
  const decrease = () => setCount((count) => count - 1);

  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      <span>{children}</span>
    </CounterContext.Provider>
  );
};

// 3. Create Child components
const Count: FC = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('Count must be used within a Counter');
  }
  const { count } = context;
  return <span>{count}</span>;
};

interface LabelProps {
  children: ReactNode;
}

const Label: FC<LabelProps> = ({ children }) => {
  return <span>{children}</span>;
};

interface ButtonProps {
  icon: ReactNode;
}

const IncreaseButton: FC<ButtonProps> = ({ icon }) => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('IncreaseButton must be used within a Counter');
  }
  const { increase } = context;
  return <button onClick={increase}>{icon}</button>;
};

const DecreaseButton: FC<ButtonProps> = ({ icon }) => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('DecreaseButton must be used within a Counter');
  }
  const { decrease } = context;
  return <button onClick={decrease}>{icon}</button>;
};

function CompoundCounter() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      <Counter>
        <Label>My super flexible Counter</Label>
        <Count />
        <DecreaseButton icon="-" />
        <IncreaseButton icon="+" />
      </Counter>
    </div>
  );
}

export default CompoundCounter;
