const HEADER_ROUTES = {
  HOME: "/",
  CREATE_ITEM: "/create-item",
  MY_ASSETS: "/my-assets",
  CREATOR_DASHBOARD: "/creator-dashboard",
};

const INPUT_MAX_LENGTH = 64;

const TEXTAREA_MAX_LENGTH = 255;

const CRYPTO_CURRENCY = "ether";

const INFURA_URL = "ipfs.infura.io";
//const INFURA_URL = "dmarket.infura-ipfs.io";
//const INFURA_URL = "infura-ipfs.io";



const PROJECT_ID = "zErRQKT2IPg__bQGcm2TbNW86LFJHhym";

const IPFS_PROJECT_ID = "2Q2C5vJtC5wYD9up5PBBKmDJVsk";

const ACTION_TYPES = {
  LIST_ITEM: "list_item",
  REMOVE_ITEM: "remove_item",
  BUY: "buy",
};

const MATIC_NETWORK = {
  chainId: "0x13881",
  rpcUrls: ["https://matic-mumbai.chainstacklabs.com/"],
  chainName: "Matic Test net",
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18,
  },
  blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
};

export {
  HEADER_ROUTES,
  INPUT_MAX_LENGTH,
  TEXTAREA_MAX_LENGTH,
  CRYPTO_CURRENCY,
  ACTION_TYPES,
  MATIC_NETWORK,
  IPFS_PROJECT_ID,
  INFURA_URL,
  PROJECT_ID,
};
