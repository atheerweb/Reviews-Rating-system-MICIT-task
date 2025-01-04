export interface UserReview {
  id: string
  image?: string
  name: string
  date: Date
  review: string
  rating: number
}

export interface SubmitUserReview {
  rating: number
  name: string
  review: string
}
