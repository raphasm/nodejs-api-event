import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { courses } from '../database/schema.ts'
import { db } from '../database/client.ts'
import z from 'zod'
import { checkUserRole } from './hooks/check-role.ts'
import { checkRequestJWT } from './hooks/check-request-jwt.ts'

export const createCourseRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    '/courses',
    {
      preHandler: [checkRequestJWT, checkUserRole('manager')],
      schema: {
        tags: ['courses'],
        summary: 'Create a course',
        body: z.object({
          title: z.string().min(5, 'Título precisa ter 5 caracteres'),
        }),
        response: {
          201: z
            .object({ courseId: z.uuid() })
            .describe('Curso criado com sucesso!'),
        },
      },
    },
    async (request, reply) => {
      const courseTitle = request.body.title

      const result = await db
        .insert(courses)
        .values({ title: courseTitle })
        .returning()

      return reply.status(201).send({ courseId: result[0].id })
    },
  )
}
