"use client";

interface ErrorProps {
    error: Error;
    reset: () => void;
}

const Error = ({ error,reset }: ErrorProps) => {
  return (
    <div>
          <p>{error.message}</p>
          <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Error;
