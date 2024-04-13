import { ChainId } from '@pancakeswap/chains'

import { StableSwapPool } from '../../types'
import { pools as bscPools } from './bsc'
import { pools as arbPools } from './arb'
import { pools as bscTestnetPools } from './bscTestnet'
import { pools as etherlinkTestnetPools } from './etherlinkTestnet'
import { pools as etherlinkPools } from './etherlink'

export type StableSwapPoolMap<TChainId extends number> = {
  [chainId in TChainId]: StableSwapPool[]
}

export const isStableSwapSupported = (chainId: number | undefined): chainId is StableSupportedChainId => {
  if (!chainId) {
    return false
  }
  return STABLE_SUPPORTED_CHAIN_IDS.includes(chainId)
}

export const STABLE_SUPPORTED_CHAIN_IDS = [
  ChainId.BSC,
  ChainId.BSC_TESTNET,
  ChainId.ARBITRUM_ONE,
  ChainId.ETHERLINK,
  ChainId.ETHERLINK_TESTNET,
] as const

export type StableSupportedChainId = (typeof STABLE_SUPPORTED_CHAIN_IDS)[number]

export const STABLE_POOL_MAP = {
  [ChainId.BSC]: bscPools,
  [ChainId.BSC_TESTNET]: bscTestnetPools,
  [ChainId.ARBITRUM_ONE]: arbPools,
  [ChainId.ETHERLINK]: etherlinkPools,
  [ChainId.ETHERLINK_TESTNET]: etherlinkTestnetPools,
} satisfies StableSwapPoolMap<StableSupportedChainId>
