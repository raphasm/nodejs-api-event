import { test, expect } from 'vitest'
import request from 'supertest'
import { app } from '../app.ts'
import { faker } from '@faker-js/faker'
import { makeCourse } from '../tests/factories/make-course.ts'
import { randomUUID } from 'node:crypto'
import { makeAuthenticatedUser } from '../tests/factories/make-user.ts'

test('get course by id', async () => {
  await app.ready()

  const titleId = randomUUID()

  const { token } = await makeAuthenticatedUser('manager')
  const course = await makeCourse(titleId)

  const response = await request(app.server)
    .get(`/courses?search=${titleId}`)
    .set('Authorization', token)

  console.log(response.body)

  expect(response.status).toEqual(200)

  expect(response.body).toEqual({
    total: 1,
    courses: [
      {
        id: expect.any(String),
        title: titleId,
        enrollments: 0,
      },
    ],
  })
})
