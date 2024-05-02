import clsx from "clsx"
import React from "react"


const Spinner: React.FC = () => {
  return (
    <div
      className={clsx(
        "flex items-center justify-center h-6 w-6 mx-auto",
      )}
    >
      <div className="relative flex h-full w-full items-center justify-center">
        <div
          className={clsx(
            "animate-ring rounded-circle h-4/5 w-4/5 border-2 border-transparent border-t-emerald-600"
          )}
        />
      </div>
    </div>
  )
}

export default Spinner
