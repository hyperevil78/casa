'use client';

import { PulseLoader } from 'react-spinners';

interface LoaderProps {
  text?: string;
}

export const Loader = ({ text = 'Loading' }: LoaderProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-[#131322]">
      <PulseLoader color="#d97706" size={15} />
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
        {text}...
      </p>
    </div>
  );
};