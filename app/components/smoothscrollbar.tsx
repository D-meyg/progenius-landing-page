"use client";

import { ReactLenis } from '@studio-freight/react-lenis'

export const SmoothScrollbar = ({ children } : { children: React.ReactNode }) => {
 

  return (
    <ReactLenis root options={{
        
    }}>
      {children}
    </ReactLenis>
  )
}