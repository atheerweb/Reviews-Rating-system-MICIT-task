import type { UserReviewItem } from '@/features/reviews/types/userReview'
import { faker } from '@faker-js/faker'

export const createRandomUserReview = (): UserReviewItem => {
  return {
    id: faker.string.uuid(),
    image: faker.image.avatar(),
    name: faker.person.firstName(),
    date: faker.date.recent(),
    review: faker.lorem.paragraph(),
    rating: faker.number.int(5),
  }
}
