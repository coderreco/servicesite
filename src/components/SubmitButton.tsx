"use client"
import { useFormStatus } from "react-dom"
import Spinner from "./Spinner"
import clsx from "clsx"

type SubmitButtonProps = {
  text: string,
  disabled: boolean,
}

export default function SubmitButton({text, disabled}: SubmitButtonProps) { 
  const {pending} = useFormStatus()
  return (
    <button
      type="submit"
      disabled={disabled}
      className={clsx(pending ? "bg-gray-100 cursor-wait" : "bg-emerald-600 hover:bg-emerald-500","block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-emerald-600 disabled:cursor-not-allowed transition-colors")}
    >
      {pending ? <Spinner /> : text}
      
    </button>
  )
}