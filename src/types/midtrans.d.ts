declare global {
  interface Window {
    snap: {
      pay: (token: string, options?) => void;
    };
  }
}

export {};
