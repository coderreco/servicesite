'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/app/lib/utils/cn'

interface ChatBubblesProps {
  message: string
  context: 'incoming' | 'outgoing'
  show?: boolean
  id: string
  status?: 'pending' | 'typing' | 'sent'
  onClick?: () => void
  className?: string
}

export function ChatBubble({
  message,
  context,
  show = false,
  id,
  status = 'pending',
  onClick,
  className,
}: ChatBubblesProps) {
  const [messageStatus, setMessageStatus] = useState<
    'pending' | 'typing' | 'sent'
  >(status)

  useEffect(() => {
    if (show && messageStatus === 'pending') {
      setMessageStatus('typing')
      setTimeout(() => {
        setMessageStatus('sent')
      }, 2000)
    }
  }, [messageStatus, show])

  return (
    <AnimatePresence initial={false} mode="popLayout">
      {messageStatus === 'typing' && (
        <TypingIndicator key={`typing-${id}`} context={context} />
      )}
      {messageStatus === 'sent' && (
        <motion.div
          key={`chat-bubble-${id}`}
          initial={{ height: 0 }}
          animate={{
            height: 'auto',
            transition: { duration: 0.2, delayChildren: 1 },
          }}
          exit={{ height: 0 }}
          onClick={onClick}
          className="mb-1"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={cn('flex', {
              'justify-end': context === 'outgoing',
              'justify-start': context === 'incoming',
            })}
          >
            <div
              className={cn(
                'relative max-w-[70%] rounded-2xl p-3',
                {
                  'bg-[#278EFF] text-white': context === 'outgoing',
                  'bg-gray-200 text-black': context === 'incoming',
                },
                className,
              )}
            >
              <p className="text-sm">{message}</p>

              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={cn('absolute bottom-0', {
                  '-right-[5px]': context === 'outgoing',
                  '-left-[5px] scale-x-[-1]': context === 'incoming',
                })}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.0043 0H0C0 8.83656 7.16344 16 16 16H19.8916C18.509 14.8154 17.3624 13.3654 16.5262 11.7243C15.211 9.14304 15.0294 5.87415 15.0043 0Z"
                  fill={context === 'outgoing' ? '#278EFF' : '#E5E7EB'}
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function TypingIndicator({ context }: { context: 'incoming' | 'outgoing' }) {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: 'auto' }}
      exit={{ height: 0 }}
      transition={{ duration: 0.2, delayChildren: 0.2 }}
      className="mb-1"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={`flex ${context === 'outgoing' ? 'justify-end' : 'justify-start'}`}
      >
        <div
          className={`max-w-[70%] rounded-2xl px-3 py-2 ${
            context === 'outgoing'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-black'
          }`}
        >
          {/* Three dots */}
          <p className="text-sm">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-gray-500"></span>{' '}
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-gray-500 delay-75"></span>{' '}
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-gray-500 delay-150"></span>
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

type FAQ = {
  question: string
  answer: string
}

export const Chat: React.FC<{ faq: FAQ }> = ({ faq }) => {
  const [clicked, setClicked] = useState<boolean>(false)
  return (
    <div className="w-full">
      <ChatBubble
        onClick={() => setClicked(true)}
        message={faq.question}
        status="sent"
        context="outgoing"
        id="1"
        className={cn({
          'cursor-pointer': !clicked,
        })}
      />
      <ChatBubble
        message={faq.answer}
        context="incoming"
        show={clicked}
        id="2"
      />
    </div>
  )
}
