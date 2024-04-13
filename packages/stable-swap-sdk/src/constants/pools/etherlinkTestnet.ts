import { etherlinkTestnetTokens } from '@pancakeswap/tokens'

import { StableSwapPool } from '../../types'

export const pools: StableSwapPool[] = [
  {
    lpSymbol: 'eUSD-USDC POOL',
    lpAddress: '0x09528f03C9D23500c15a852aCc537E0316392331',
    token: etherlinkTestnetTokens.eusd,
    quoteToken: etherlinkTestnetTokens.usdc,
    stableSwapAddress: '0x415136AF74e0eDeE8Ae0e20922403f2785dee581',
    infoStableSwapAddress: '0xC274c248974b27fE7c396c930761F375AC6F8284',
    stableLpFee: 0.0025,
    stableLpFeeRateOfTotalFee: 0.5,
  },
]
