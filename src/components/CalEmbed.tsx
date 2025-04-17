'use client'
import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'

export default function CalFloatingButton() {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi()
      cal('floatingButton', {
        calLink: 'team/one-week-websites/cleaning-template-information',
        buttonColor: '#059669',
        buttonText: 'Learn more',
        buttonPosition: 'bottom-left',
      })
      cal('ui', {
        styles: { branding: { brandColor: '#059669' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])
}

export function CalEmbed() {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi()
      cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#059669' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])
  return (
    <Cal
      calLink="team/one-week-websites/cleaning-template-information"
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      config={{ layout: 'month_view' }}
    />
  )
}
// https://cal.com/team/one-week-websites/cleaning-template-information
