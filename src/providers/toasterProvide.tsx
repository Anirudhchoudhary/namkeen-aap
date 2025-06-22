/**
 * ToasterProvider - A React context provider for displaying toast notifications
 * 
 * This provider wraps the toastr library and provides a convenient React hook
 * to display success, error, warning, and info messages throughout the application.
 * 
 * Usage:
 * 1. Wrap your app with <ToasterProvider>
 * 2. Use the useToaster() hook in any component to access toast methods
 * 
 * Example:
 * const { success, error } = useToaster();
 * success('Operation completed!');
 * error('Something went wrong');
 */

import React, { createContext, useContext, ReactNode } from 'react';
import toastr from 'toastr';

// Configure toastr options
toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: true,
  progressBar: true,
  positionClass: 'toast-top-right',
  preventDuplicates: true,
  onclick: undefined,
  showDuration: 300,
  hideDuration: 1000,
  timeOut: 5000,
  extendedTimeOut: 1000,
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut'
};

export interface ToasterContextType {
  success: (message: string, title?: string) => void;
  error: (message: string, title?: string) => void;
  warning: (message: string, title?: string) => void;
  info: (message: string, title?: string) => void;
  clear: () => void;
}

const ToasterContext = createContext<ToasterContextType | undefined>(undefined);

export interface ToasterProviderProps {
  children: ReactNode;
}

export const ToasterProvider: React.FC<ToasterProviderProps> = ({ children }) => {
  const success = (message: string, title?: string) => {
    toastr.success(message, title);
  };

  const error = (message: string, title?: string) => {
    toastr.error(message, title);
  };

  const warning = (message: string, title?: string) => {
    toastr.warning(message, title);
  };

  const info = (message: string, title?: string) => {
    toastr.info(message, title);
  };

  const clear = () => {
    toastr.clear();
  };

  const contextValue: ToasterContextType = {
    success,
    error,
    warning,
    info,
    clear
  };

  return (
    <ToasterContext.Provider value={contextValue}>
      {children}
    </ToasterContext.Provider>
  );
};

export const useToaster = (): ToasterContextType => {
  const context = useContext(ToasterContext);
  if (!context) {
    throw new Error('useToaster must be used within a ToasterProvider');
  }
  return context;
};
