import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import EventDetails from '../EventDetails'
import Footer from '../Footer'
import RSVPSection from '../RSVPSection'

vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion')
  return {
    ...actual,
    useInView: () => true,
  }
})

describe('Wedding Date - 20 June 2026', () => {
  it('displays 20 June 2026 prominently in EventDetails', () => {
    render(<EventDetails />)
    const dateElements = screen.getAllByText('20 June 2026')
    expect(dateElements.length).toBeGreaterThanOrEqual(2)
  })

  it('displays the date in the prominent banner as Saturday 20th June 2026', () => {
    render(<EventDetails />)
    expect(screen.getByText(/Saturday, 20th June 2026/)).toBeInTheDocument()
  })

  it('displays Mark Your Calendar banner', () => {
    render(<EventDetails />)
    expect(screen.getByText('Mark Your Calendar')).toBeInTheDocument()
  })

  it('displays the date in the Footer', () => {
    render(<Footer />)
    expect(screen.getByText('20 JUNE 2026')).toBeInTheDocument()
  })

  it('displays the date in RSVP section', () => {
    render(<RSVPSection />)
    expect(screen.getByText('20 JUNE 2026')).toBeInTheDocument()
  })

  it('shows couple names in Footer', () => {
    render(<Footer />)
    expect(screen.getByText('Siddhant & Leena')).toBeInTheDocument()
  })

  it('shows Main Event badge on wedding ceremony card', () => {
    render(<EventDetails />)
    expect(screen.getByText('Main Event')).toBeInTheDocument()
  })

  it('shows all three event types', () => {
    render(<EventDetails />)
    expect(screen.getByText('Haldi Ceremony')).toBeInTheDocument()
    expect(screen.getByText('Wedding Ceremony')).toBeInTheDocument()
    expect(screen.getByText('Reception')).toBeInTheDocument()
  })

  it('shows venue info', () => {
    render(<EventDetails />)
    const venues = screen.getAllByText('Royal Palace Banquets, Mumbai')
    expect(venues.length).toBeGreaterThanOrEqual(2)
  })
})
