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
