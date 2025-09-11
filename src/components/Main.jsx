import React from "react";
import { useReducer, useEffect } from "react";
import BookingForm from "./BookingForm";

// 初始化可用时间
// export const initializeTimes = () => {
//   return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
// };

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

/**
 * 同步初始化值（便于测试）
 * 返回一个合理的默认时段列表，测试时可以断言这个返回值
 */
export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

/**
 * Reducer 只负责把「已知的时间数组」写入 state
 * 注意：不要在 reducer 中做异步调用（fetchAPI）
 */
export const timesReducer = (state, action) => {
  switch (action.type) {
    case "SET_TIMES":
      return action.payload;
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

  // 在挂载时，用 fetchAPI 异步获取今天的可用时间并写入 state
  useEffect(() => {
    async function loadInitialTimes() {
      // 检查全局 fetchAPI 是否存在
      if (
        typeof window !== "undefined" &&
        typeof window.fetchAPI === "function"
      ) {
        try {
          const today = new Date();

          const times = await window.fetchAPI(today);
          console.log(times);

          dispatch({ type: "SET_TIMES", payload: times });
        } catch (err) {
          console.error("fetchAPI error (initial):", err);
          // 保持默认 initializeTimes 返回的值，不抛出
        }
      } else {
        // fetchAPI 未定义：可能脚本还没加载，或在测试环境中
        // 我们保持 initializeTimes 的默认值（不阻塞渲染）
        console.warn("fetchAPI not available on window; using default times");
      }
    }

    loadInitialTimes();
  }, []);

  // 对外提供一个更新函数：BookingForm 在改日期时调用它
  const updateTimesForDate = async (dateString) => {
    if (
      typeof window !== "undefined" &&
      typeof window.fetchAPI === "function"
    ) {
      try {
        const times = await window.fetchAPI(new Date(dateString));
        dispatch({ type: "SET_TIMES", payload: times });
      } catch (err) {
        console.error("fetchAPI error (update):", err);
      }
    } else {
      console.warn("fetchAPI not available; cannot update times from API");
    }
  };

  return (
    <main>
      <h2>Book a Table</h2>
      <p>Reserve your table in advance to enjoy a great dining experience.</p>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
}
