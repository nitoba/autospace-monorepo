/* eslint-disable @typescript-eslint/no-namespace */
import 'express'

export type Role = 'admin' | 'manager' | 'valet'

export type GetUserType = {
  uid: string
  roles: Role[]
}

declare global {
  namespace Express {
    interface Request {
      user?: GetUserType
    }
  }
}
