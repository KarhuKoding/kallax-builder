import { scrollStore } from "../../store/store";

function PageNumber() {
  const { state } = scrollStore();

  const pageNumber =
    Math.floor(
      state.sf1 +
        state.sf2 +
        state.sf3 +
        state.sf4 +
        state.sf5 +
        state.sf6 +
        state.sf7 +
        state.sf8 +
        state.sf9 +
        state.sf10 +
        state.sf11
    ) + 1;

  return (
    <div className="page_indicator">
      <h1>{pageNumber}</h1>
    </div>
  );
}

export default PageNumber;
