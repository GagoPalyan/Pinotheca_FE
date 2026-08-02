enum socketUrl {
  USER_INFO = '/user-info',
}

enum socketEvent {
  on = 'connect',
  off = 'disconnect',
  likes = 'likesUpdate',
  carts = 'cartsUpdate',
}

export { socketUrl, socketEvent };
