import React from "react";
import { useReducer } from "react";
import BookingPage from "../pages/BookingPage";

// 初始化可用时间
export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

// Reducer：根据日期更新可用时间
export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_DATE":
      // 这里你可以调用 API 或者写逻辑生成不同的时间
      // 暂时返回同样的时间列表
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    default:
      return state;
  }
};

export default function Main() {
  // 使用 useReducer 管理 availableTimes
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <main>
      <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
}
