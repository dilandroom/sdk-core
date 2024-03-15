export declare enum ChainId {
    MAINNET = 1,
    GOERLI = 5,
    SEPOLIA = 11155111,
    OPTIMISM = 10,
    OPTIMISM_GOERLI = 420,
    OPTIMISM_SEPOLIA = 11155420,
    ARBITRUM_ONE = 42161,
    ARBITRUM_GOERLI = 421613,
    ARBITRUM_SEPOLIA = 421614,
    POLYGON = 137,
    POLYGON_MUMBAI = 80001,
    CELO = 42220,
    CELO_ALFAJORES = 44787,
    GNOSIS = 100,
    MOONBEAM = 1284,
    BNB = 56,
    AVALANCHE = 43114,
    BASE_GOERLI = 84531,
    BASE = 8453,
    ZORA = 7777777,
    ZORA_SEPOLIA = 999999999,
    ROOTSTOCK = 30,
    SONGBIRD = 19,
    COSTON = 16,
    FLARE = 14,
    COSTON2 = 114
}
export declare const SUPPORTED_CHAINS: readonly [ChainId.MAINNET, ChainId.OPTIMISM, ChainId.OPTIMISM_GOERLI, ChainId.OPTIMISM_SEPOLIA, ChainId.ARBITRUM_ONE, ChainId.ARBITRUM_GOERLI, ChainId.ARBITRUM_SEPOLIA, ChainId.POLYGON, ChainId.POLYGON_MUMBAI, ChainId.GOERLI, ChainId.SEPOLIA, ChainId.CELO_ALFAJORES, ChainId.CELO, ChainId.BNB, ChainId.AVALANCHE, ChainId.BASE, ChainId.BASE_GOERLI, ChainId.ZORA, ChainId.ZORA_SEPOLIA, ChainId.ROOTSTOCK, ChainId.SONGBIRD, ChainId.COSTON, ChainId.FLARE, ChainId.COSTON2];
export declare type SupportedChainsType = typeof SUPPORTED_CHAINS[number];
export declare enum NativeCurrencyName {
    ETHER = "ETH",
    MATIC = "MATIC",
    CELO = "CELO",
    GNOSIS = "XDAI",
    MOONBEAM = "GLMR",
    BNB = "BNB",
    AVAX = "AVAX",
    ROOTSTOCK = "RBTC",
    FLARE = "FLR",
    SONGBIRD = "SGB",
    COSTON = "CSGB",
    COSTON2 = "CFLR"
}
