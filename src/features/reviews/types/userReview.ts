import type { Entity } from '@/types/api'

export interface UserReview {
  image?: string
  name: string
  review: string
  rating: number
}


export type UserReviewItem = Entity<UserReview>
