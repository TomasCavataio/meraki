import type { AvailabilityResponse, BlockedRange } from '../../shared/availability'
import type { Language } from '../config/types'

export const languageLocales: Record<Language, string> = {
  el: 'el-GR',
  en: 'en-GB',
  es: 'es-ES',
  it: 'it-IT',
}

export function formatLocalDate(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

export function parseLocalDate(date: string) {
  const [year, month, day] = date.split('-').map(Number)
  return new Date(year ?? 0, (month ?? 1) - 1, day ?? 1, 12)
}

export function addDays(date: string, amount: number) {
  const result = parseLocalDate(date)
  result.setDate(result.getDate() + amount)
  return formatLocalDate(result)
}

export function addYears(date: string, amount: number) {
  const result = parseLocalDate(date)
  result.setFullYear(result.getFullYear() + amount)
  return formatLocalDate(result)
}

export function isBlockedNight(date: string, ranges: BlockedRange[]) {
  return ranges.some((range) => date >= range.start && date < range.endExclusive)
}

export function rangeContainsBlockedNight(arrival: string, departure: string, ranges: BlockedRange[]) {
  return ranges.some((range) => range.start < departure && range.endExclusive > arrival)
}

export function isAvailabilityResponse(value: unknown): value is AvailabilityResponse {
  if (!value || typeof value !== 'object') return false
  const candidate = value as { blockedRanges?: unknown; syncedAt?: unknown }
  if (!Array.isArray(candidate.blockedRanges) || typeof candidate.syncedAt !== 'string') return false

  return candidate.blockedRanges.every((range: unknown) => {
    if (!range || typeof range !== 'object') return false
    const item = range as { start?: unknown; endExclusive?: unknown }
    return typeof item.start === 'string' && typeof item.endExclusive === 'string' && item.start < item.endExclusive
  })
}

