export class GameInfo {
  title!: string
  holder!: string
  deadline!: string
  holdAmount!: number
  holdSymbol!: string
}

export class ActionRecord {
  name!: string
  address!: string
  amount!: number
  symbol!: string
  timestamp!: string
}

export class HistoryRecord {
  name!: string
  action!: string
  amount!: number
  symbol!: string
  timestamp!: string
  transactionHash!: string
}

export class UserActivities {
  name!: string
  avatar!: string
  action!: string
  amount!: number
  symbol!: string
  address!: string
  timestamp!: string
  refundable!:boolean
}

export class UserDiscussion {
  name!: string
  avatar!: string
  text!: string
}

export class ClaimBid {
  amount!: number
  timestamp!: string
}
