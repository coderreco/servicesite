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
}

export function ChatBubble({
  message,
  context,
  show = false,
  id,
  status = 'pending',
  onClick,
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
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          transition={{ duration: 0.2, delayChildren: 0.2 }}
          onClick={onClick}
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
              className={`relative max-w-[70%] rounded-2xl p-3 ${
                context === 'outgoing'
                  ? 'bg-[#278EFF] text-white'
                  : 'bg-gray-200 text-black'
              }`}
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
