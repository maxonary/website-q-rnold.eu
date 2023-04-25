export const logger = (request, response, next) => {
  console.log(
    new Date().toISOString(),
    'Request from',
    request.ip,
    request.method,
    request.originalUrl
  )
  next()
}