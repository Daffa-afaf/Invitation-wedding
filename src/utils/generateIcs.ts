// Menghasilkan file .ics agar tombol "Simpan Tanggalnya" bisa langsung
// menambahkan acara ke Google Calendar / Apple Calendar / Outlook milik tamu.

interface IcsEventInput {
  title: string
  description: string
  location: string
  start: Date
  durationHours?: number
}

function toIcsDate(date: Date) {
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
}

export function downloadIcsEvent({
  title,
  description,
  location,
  start,
  durationHours = 3,
}: IcsEventInput) {
  const end = new Date(start.getTime() + durationHours * 60 * 60 * 1000)

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Wedding Invitation//ID',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:${Date.now()}@wedding-invitation`,
    `DTSTAMP:${toIcsDate(new Date())}`,
    `DTSTART:${toIcsDate(start)}`,
    `DTEND:${toIcsDate(end)}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'undangan-pernikahan.ics'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
