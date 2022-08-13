import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setDataInChannel } from "../store/dataStoreSlice";

const WebSocketContext = createContext();

export function useWebSocketContext() {
  return useContext(WebSocketContext);
}

export default function WebSocketContextProvider({ children }) {
  const dispatch = useDispatch();

  const [ws, setWs] = useState(null);

  useEffect(() => {
    const _ws = new WebSocket("wss://nodes.bytedex.io/ws");
    setWs(_ws);
  }, []);

  useEffect(() => {
    // console.log("ws");
    if (ws) {
      ws.onopen = (ev) => {
        // console.log(ev);
      };
    }
  }, [ws]);
  function subscribe() {
    const request = JSON.stringify({
      method: "subscribe",
      events: ["MK"],
    });
    ws.send(request);

    ws.onmessage = (ev) => {
      const { data } = JSON.parse(ev.data);
      // console.log(data);
      dispatch(setDataInChannel({ channelName: "Market", channelData: data }));
      // setState(data);
    };
  }

  return (
    <WebSocketContext.Provider value={{ subscribe }}>
      {children}
    </WebSocketContext.Provider>
  );
}
