import { useState, useEffect } from 'react';

export function useTypewriter(texts, { delay = 2000, typeSpeed = 50, deleteSpeed = 30 } = {}) {
  const [displayed, setDisplayed] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex % texts.length];

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < currentText.length) {
          setDisplayed(currentText.slice(0, charIndex + 1));
          setCharIndex(c => c + 1);
        } else {
          setTimeout(() => setDeleting(true), delay);
        }
      } else {
        if (charIndex > 0) {
          setDisplayed(currentText.slice(0, charIndex - 1));
          setCharIndex(c => c - 1);
        } else {
          setDeleting(false);
          setTextIndex(i => i + 1);
        }
      }
    }, deleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts, delay, typeSpeed, deleteSpeed]);

  return { text: displayed, isTyping: !deleting && charIndex < texts[textIndex % texts.length].length };
}
