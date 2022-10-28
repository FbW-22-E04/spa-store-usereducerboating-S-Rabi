import { useReducer } from "react";

function App() {
  const initialState = {
    switchOn: false,
    gear: 0,
    speed: 0,
  };

  const random = Math.random() > 0.5;

  const reducer = (state, action) => {
    switch (action.type) {
      case "switchOn":
        if (random) {
          return { ...state, switchOn: true };
        } else if (state.switchOn) {
          return { ...state, gear: 0, switchOn: false };
        }

      case "gearUp":
        if (state.switchOn && state.gear < 5) {
          return { ...state, gear: state.gear + 1 };
        } else {
          return state;
        }

      case "gearDown":
        if (state.switchOn && state.gear - 2) {
          return { ...state, gear: state.gear - 1 };
        } else {
          return state;
        }
      case "speedUp":
        if (state.switchOn && state.gear !== 0) {
          return { ...state, speed: state.speed + 10 * state.gear };
        } else {
          return state;
        }

      case "speedDown":
        if (state.switchOn && state.gear > 0 && state.speed < 0) {
          return { ...state, speed: state.speed - 10 };
        }
        if (state.switchOn && state.gear <= 0 && state.speed < 0) {
          return { ...state, speed: state.speed + 10 };
        } else {
          return state;
        }

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-400">
      <div className="bg-black w-[30rem] h-[20rem]">
        <div className="text-white text-[2rem] text-center">
          speed: {state.speed}
        </div>
        <button
          onClick={() => dispatch({ type: "switchOn" })}
          className="border-2 p-2 bg-red-300"
        >
          Start/Stop
        </button>
        <button
          onClick={() => dispatch({ type: "gearUp" })}
          className="border-2 p-2 bg-green-300"
        >
          Gear Up
        </button>
        <button
          onClick={() => dispatch({ type: "gearDown" })}
          className="border-2 p-2 bg-green-300"
        >
          Gear Down
        </button>
        <button
          onClick={() => dispatch({ type: "speedUp" })}
          className="border-2 p-2 bg-blue-300"
        >
          Speed Up
        </button>
        <button
          onClick={() => dispatch({ type: "speedDown" })}
          className="border-2 p-2 bg-blue-300"
        >
          Speed Down
        </button>
        <div className="text-white text-[2rem] text-center">
          Gear: {state.gear}
        </div>

        <div className="text-white text-[2rem] text-center">
          Switch: {state.switchOn ? "ON" : "OFF"}
        </div>
      </div>
    </div>
  );
}

export default App;
