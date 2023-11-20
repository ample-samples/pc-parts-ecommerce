import * as React from "react"
import Image from "next/image"
import { FaMagnifyingGlass } from "react-icons/fa6"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode
  }

const CustomInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, children, ...props }, ref) => {
    const _handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
        console.log((e.target as HTMLInputElement).value);
    }
  }
    return (
      <div className="relative top-0 left-0">
        <div
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}>
          <FaMagnifyingGlass className="self-center mr-2"/>
          <input
            onKeyDown={_handleKeyDown}
            className="w-full bg-transparent outline-none"
            type={type}
            ref={ref}
            {...props}
          />
        </div>
        {children}
      </div>
    )
  }
)
CustomInput.displayName = "Input"

export { CustomInput }
