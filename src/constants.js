module.exports = {
  NETWORKS: {
    mainnet: {
      messagePrefix: '\x19Litecoin Signed Message:\n',
      bech32: 'ltc',
      bip44: 3,
      bip32: {
        public: 0x01b26ef6,
        private: 0x01b26792
      },
      pubKeyHash: 0x30,
      scriptHash: 0x32,
      wif: 0xb0
    },
    testnet: {
      messagePrefix: '\x19Litecoin Signed Message:\n',
      bech32: 'tltc',
      bip44: 3,
      bip32: {
        public: 0x043587cf,
        private: 0x04358394
      },
      pubKeyHash: 0x6f,
      scriptHash: 0xc4,
      wif: 0xef
    }
  }
}
