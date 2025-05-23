const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3000;

const RPC_URL =
  "https://mainnet.helius-rpc.com/?api-key=7e3aeabd-6981-45e9-a912-4b0a077287aa";
const TOKEN_MINT = "9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump";

app.use(
  cors({
    origin: "http://82.25.93.96:4174",
  })
);

async function solanaRPC(method, params = []) {
  try {
    const response = await axios.post(RPC_URL, {
      jsonrpc: "2.0",
      id: 1,
      method,
      params,
    });
    return response.data.result;
  } catch (err) {
    console.error(`RPC ${method} failed`, err.message);
    return null;
  }
}

app.get("/api/stats", async (req, res) => {
  try {
    const [
      blockHeight,
      transactionCount,
      epochInfo,
      supplyInfo,
      performanceSamples,
      largestAccounts,
    ] = await Promise.all([
      solanaRPC("getBlockHeight"),
      solanaRPC("getTransactionCount"),
      solanaRPC("getEpochInfo"),
      solanaRPC("getTokenSupply", [TOKEN_MINT]),
      solanaRPC("getRecentPerformanceSamples", [5]),
      solanaRPC("getTokenLargestAccounts", [TOKEN_MINT]),
    ]);

    const decimals = supplyInfo.value.decimals;
    const totalSupply =
      parseInt(supplyInfo.value.amount) / Math.pow(10, decimals);

    const avgBlockTime =
      performanceSamples.reduce((acc, sample) => {
        return acc + sample.samplePeriodSecs / sample.numSlots;
      }, 0) / performanceSamples.length;

    const tps =
      performanceSamples[0].numTransactions /
      performanceSamples[0].samplePeriodSecs;
    const dailyTx = Math.round(tps * 60 * 60 * 24);
    const walletCount = largestAccounts.value.length;

    res.json({
      slot: epochInfo.absoluteSlot,
      blockHeight,
      epoch: epochInfo.epoch,
      epochProgressPercent: (
        (epochInfo.slotIndex / epochInfo.slotsInEpoch) *
        100
      ).toFixed(1),
      estimatedEpochTimeRemaining: `${Math.floor(
        ((epochInfo.slotsInEpoch - epochInfo.slotIndex) * 0.4) / 60
      )} min`,
      totalBlocks: blockHeight,
      totalTransactions: transactionCount,
      averageBlockTime: avgBlockTime.toFixed(2),
      tps: Math.floor(tps),
      estimatedDailyTransactions: dailyTx,
      walletAddresses: walletCount,
      totalSupply: totalSupply.toFixed(2),
    });
  } catch (err) {
    console.error("Error fetching stats:", err);
    res.status(500).json({ error: "Failed to fetch Fartcoin stats" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
