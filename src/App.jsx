import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { websocketURL } from "./constants";
import { useWebSocketContext } from "./context/WebSocketContext";
import { selectChannels, selectMarket } from "./store/dataStoreSlice";
// import {
//   connectWS,
//   selectWS,
//   // subscribe,
//   subscribeThunk,
// } from "./store/websocketSlice";
import DataTable from "react-data-table-component";
// import { data } from "./data";
// import socket from "./websocket";

export default function App() {
  const { subscribe } = useWebSocketContext();
  const channels = useSelector(selectChannels);
  const market = useSelector(selectMarket);

  return (
    <div>
      <button
        onClick={() => {
          subscribe();
        }}
      >
        Subscribe
      </button>
      <div>{market && <DataTable columns={columns} data={market} />}</div>
    </div>
  );
}

const columns = [
  { name: "Base", selector: (row) => row.base },
  { name: "Quote", selector: (row) => row.quote },
  { name: "Price", selector: (row) => row.price },
  { name: "Change in Price", selector: (row) => row.change_in_price },
  { name: "Previous Price", selector: (row) => row.prev_price },
  { name: "Base Volume", selector: (row) => row.base_volume },
  { name: "Quote Volume", selector: (row) => row.quote_volume },
  // { name: "Low 24H", selector: (row) => row.low_24hr },
  // { name: "High 24H", selector: (row) => row.high_24hr },
  {
    name: "Low High",
    cell: (row) => (
      <div>
        <div>
          🔻
          <small>{row.low_24hr}</small>
        </div>
        <div>
          🔺
          <small>{row.high_24hr}</small>
        </div>
      </div>
    ),
  },

  { name: "Maker Fee", selector: (row) => row.maker_fee },
  { name: "Taker Fee", selector: (row) => row.taker_fee },
  { name: "Min. Trade Amount", selector: (row) => row.min_trade_amount },
  { name: "Max. Size", selector: (row) => row.max_size },
  { name: "Max. Order Value", selector: (row) => row.max_order_value },
  {
    name: "Max. Size Market Order",
    selector: (row) => row.max_size_market_order,
  },
  { name: "Is ND Wallet", selector: (row) => (row.is_nd_wallet ? "✅" : "❌") },
];
