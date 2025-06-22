# EigenLayer Restaking API

## Overview
This API aggregates EigenLayer restaking data, providing:
- Restaker info
- Validator metadata
- Reward breakdowns

## Endpoints
| Method | Endpoint          | Description                         |
| ------ | ----------------- | ----------------------------------- |
| GET    | `/restakers`      | List of restakers and amounts       |
| GET    | `/validators`     | List of validators + metadata       |
| GET    | `/rewards/:addr`  | Reward breakdown for user address  |

## Setup
```bash
git clone <repo-url>
cd eigenlayer-restaking-api
npm install
cp .env.example .env
npm start
```

## Data Fetching
```bash
npm run fetch
```

## Data Sources
- **EigenLayer Subgraphs** from The Graph
- **On-chain data (web3.js)** *(coming soon)*
- **Rated API** *(optional)*

## Assumptions
- This version uses **test subgraph URL**. Update with actual EigenLayer subgraph when integrating fully.
"# zeru" 
