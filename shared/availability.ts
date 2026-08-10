export interface BlockedRange {
  start: string
  endExclusive: string
}

export interface AvailabilityResponse {
  blockedRanges: BlockedRange[]
  syncedAt: string
}

export interface AvailabilityErrorResponse {
  code: 'availability_unavailable'
}

