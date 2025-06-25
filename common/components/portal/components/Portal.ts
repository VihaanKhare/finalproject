// src/components/Portal/Portal.tsx
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: JSX.Element | JSX.Element[];
}

const Portal = ({ children }: PortalProps) => {
  const [portalRootElement, setPortalRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const element = document.getElementById('portal');
    if (element) {
      setPortalRootElement(element);
    }
  }, []);

  if (!portalRootElement) {
    return null;
  }

  return createPortal(children, portalRootElement);
};

export default Portal;