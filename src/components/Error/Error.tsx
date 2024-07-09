import { PropsWithChildren } from "react";

import "./Error.css"

interface ErrorProps extends PropsWithChildren {}

export default function Error({ children }: ErrorProps) {
  return <div data-testid="error" className="error" role="status">
    {children}
  </div>
}