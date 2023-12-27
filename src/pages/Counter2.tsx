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

// Extend the FC type to include the child components as static properties
interface CounterComponent extends FC<CounterProps> {
  Count: FC;
  Label: FC<LabelProps>;
  Increase: FC<ButtonProps>;
  Decrease: FC<ButtonProps>;
}

// 2. Create parent component
const Counter: CounterComponent = ({ children }) => {
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

// 4. Add child components as properties to parent
Counter.Count = Count;
Counter.Label = Label;
Counter.Increase = IncreaseButton;
Counter.Decrease = DecreaseButton;

function CompoundCounter2() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      <Counter>
        <Counter.Label>My super flexible Counter</Counter.Label>
        <Counter.Count />
        <Counter.Decrease icon="-" />
        <Counter.Increase icon="+" />
      </Counter>
    </div>
  );
}

export default CompoundCounter2;
