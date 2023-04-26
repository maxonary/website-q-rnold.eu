export const authenticator = (request, response, next) => {
  const { authorization } = request.headers
  if (authorization) {
    const token = authorization.split(' ')[1]
    const { userId } = jwt.verify(token, process.env.JWT_SECRET)
    request.userId = userId
    next()
  } else {
    response.status(401).json({ success: false, message: 'Not authorized' })
  }
}