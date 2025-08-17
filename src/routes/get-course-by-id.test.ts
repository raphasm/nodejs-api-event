import { test, expect } from 'vitest'
import request from 'supertest'
import { app } from '../app.ts'
import { makeCourse } from '../tests/factories/make-course.ts'

test('get course by id', async () => {
  await app.ready()

  const course = await makeCourse()

  const response = await request(app.server).get(`/courses/${course.id}`)

  expect(response.body).toEqual({
    course: {
      id: expect.any(String),
      title: expect.any(String),
      description: null,
    },
  })
})

test('return 404 forn non existing courses', async () => {
  await app.ready()

  const course = await makeCourse()

  const response = await request(app.server).get(
    `/courses/81b48782-a26e-4474-95a0-fa84646fe031`,
  )

  expect(response.status).toEqual(404)
})
