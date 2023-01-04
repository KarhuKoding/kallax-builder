import { scrollStore } from "../../store/store";

function PageNumber() {
  const { sf1, sf2, sf3, sf4, sf5, sf6, sf7, sf8, sf9, sf10, sf11 } =
    scrollStore();

  return (
    <div className="page_indicator">
      <h1>
        {Math.floor(
          sf1 + sf2 + sf3 + sf4 + sf5 + sf6 + sf7 + sf8 + sf9 + sf10 + sf11
        ) + 1}
      </h1>
    </div>
  );
}

export default PageNumber;
