import { ForbiddenException } from '@nestjs/common'

import { GetUserType, Role } from '@/infra/auth/types'

export const checkRowLevelPermission = (
  currentUser: GetUserType,
  requestedUid?: string | string[],
  roles: Role[] = ['admin'],
) => {
  if (!requestedUid) return false

  if (currentUser.roles?.some((role) => roles.includes(role))) {
    return true
  }

  const uids =
    typeof requestedUid === 'string'
      ? [requestedUid]
      : requestedUid.filter(Boolean)

  if (!uids.includes(currentUser.uid)) {
    throw new ForbiddenException()
  }
}
