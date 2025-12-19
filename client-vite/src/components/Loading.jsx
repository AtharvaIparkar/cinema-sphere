import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-900">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500 mx-auto"></div>

      </div>
    </div>
  );
};

export default Loading;