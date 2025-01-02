import type { userReview } from '@/features/reviews/types/UserReview'
import { faker } from '@faker-js/faker'

export const createRandomUserReview = (): userReview => {
  return {
    id: faker.string.uuid(),
    image: faker.image.avatar(),
    name: faker.person.firstName(),
    date: faker.date.recent(),
    review: faker.lorem.paragraph(),
    rating: faker.number.int(5),
  }
}
