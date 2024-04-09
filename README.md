# 🧙‍♂️ Arcana Markets Web App

The Arcana web app provides permissionless market making vaults designed to operate seamlessly on top of decentralized exchanges within the Solana ecosystem. Leveraging the power of Solana's high-speed blockchain, Arcana Markets aims to revolutionize liquidity provision, making it more accessible, efficient, and decentralized.

Responsive                     |  Desktop
:-------------------------:|:-------------------------:
![](arcana-ui-mobile.png)  |  ![](arcana-ui-desktop.png)

## 👋 Introduction

Arcana Vaults aims to simplify and decentralize liquidity provision on Solana-based decentralized exchanges. Vaults can provide this passive liquidity by quoting similar to an AMM. By harnessing cutting-edge technology and an innovative approach, the project seeks to empower users and enhance DeFi accessibility.

## 🚀 Quickstart

To get started, follow these steps:

1. **Clone the repo:** Begin by cloning the repository using the command:

```bash
git clone git@github.com:arcana-markets/arcana-ui.git
```

2. **Install Dependencies:** Move into the directory and install the dependencies:

```bash
cd arcana-ui
npm install
```

3. **Run the app:**

```bash
npm run dev
```

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
 
### Structure

The below is an example structure for the project
 
```
├── public : publically hosted files
├── src : primary code folders and files 
│   ├── app
│   ├── components`
│   ├── hooks` 
│   ├── config` 
│   ├── contexts`
│   ├── stores`
│   ├── types` 
│   ├── utils` 
tailwind, package, configuration, and other project files

```
## Key Features

- **Token Vaults UI:** Yield-generating DeFi protocol.
- **DEX Data Analytics:** Advanced data structures for Solana decentralized exchanges.
- **Services & Tools:** Swap, trading-bots, SPL token-faucets and other utilities.


# 🏦 Token Vaults Program

The Token Vaults program is a crucial component of our ecosystem, enabling secure and efficient token storage and transactions. For detailed information, implementation details, and to contribute, please visit the Arcana Vaults repository.

<a href="https://github.com/arcana-markets/arcana-vaults">
  <img src="https://img.shields.io/badge/Arcana-Vaults-blue" alt="Arcana Vaults" style="height: 30px;"/>
</a>

### Deployed Versions

| Tag  | Network | Program ID                                  |
| ---- | ------- | ------------------------------------------- |
| v0.1 | Devnet  | `FVbmcn58GVgYAGYqtQwVWwWrTDbSFqwXfCrErGEGo1mx` |

## Running the Project

To deploy and run tests ensuring everything is set up correctly, use the following command:

```bash
anchor test
```

# 📈 Data & Infrastructure

Our ecosystem leverages cutting-edge data management and analytics to ensure seamless operations and performance enhancement. Below are the key components of our Data & Infrastructure layer:

### Arcana Data

The **Arcana Data APIs** act as a gateway to the Arcana ecosystem, enabling seamless interactions between developers, applications, and our extensive data layers. These APIs offer structured access to datasets and analytics, crucial for building robust and scalable DeFi applications.

<a href="https://github.com/arcana-markets/arcana-data">
  <img src="https://img.shields.io/badge/Arcana-Data-blue" alt="Arcana Data" style="height: 30px;"/>
</a>

### API Streams

  - `prod.arcana.markets/api/openbookv2/markets`
  - `prod.arcana.markets/api/phoenix/markets`

### Arcana Indexer

To complement our data repository, the **Arcana Data Indexer** plays a pivotal role in indexing on-chain DEX data. This ensures quick and reliable access to transaction data, enhancing our market-making strategies and operational efficiency.

<a href="https://github.com/arcana-markets/arcana-indexer">
  <img src="https://img.shields.io/badge/Arcana-Indexer-blue" alt="Arcana Indexer" style="height: 30px;"/>
</a>

# License

Arcana Vaults is licensed under the MIT License. For more information, see the LICENSE file in the project repository.
