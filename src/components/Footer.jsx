import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center">
      <div className="container mx-auto px-6">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Abdallah Khattab. All rights reserved.
        </p>
        <p className="text-slate-600 text-xs mt-2">
          Built with React, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  );
};
