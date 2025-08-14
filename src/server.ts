import { fastify } from 'fastify'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'

import fastifySwagger from '@fastify/swagger'
import { getCoursesRoute } from './routes/get-courses.ts'
import { createCouseRoute } from './routes/create-couse.ts'
import { getCourseByIDRoute } from './routes/get-course-by-id.ts'

import scalarAPIReference from '@scalar/fastify-api-reference'

export const app = fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
}).withTypeProvider<ZodTypeProvider>()

if (process.env.NODE_ENV == 'development') {
  app.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'Api Node.js',
        version: '1.0.0',
      },
    },

    transform: jsonSchemaTransform,
  })

  app.register(scalarAPIReference, {
    routePrefix: '/docs',
    configuration: {
      theme: 'kepler',
    },
  })
}

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(getCoursesRoute)
app.register(createCouseRoute)
app.register(getCourseByIDRoute)

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!')
})
