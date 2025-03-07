import "./App.css";

function App() {
  return (
    <main>
      <div>
        <h1>numerus</h1>
      </div>
      <div className="text-center">
        <h2>congratulations, Eshwar</h2>
        <h3>we celebrate you for being a successful startup founder</h3>
        <h3>here is a tshirt just for you. tailored. hand-made</h3>
      </div>
      <img
        src="./tshirt.png"
        alt="tshirt"
        style={{ height: "495px", width: "375px" }}
      />
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            maxWidth: "575px",
          }}
        >
          <hr
            style={{
              backgroundColor: "black",
              height: "4px",
              border: "none",
              width: "75%",
              margin: "10px 0",
            }}
          />
          <p style={{ margin: 0 }}>finest material on earth</p>
          <h4 style={{ margin: 0 }}>100 % egyptian cotton</h4>
        </div>
      </div>
      <div style={{ width: "100%", paddingLeft: "600px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            maxWidth: "575px",
          }}
        >
          <hr
            style={{
              backgroundColor: "black",
              height: "4px",
              border: "none",
              width: "75%",
              margin: "10px 0",
            }}
          />
          <p style={{ margin: 0 }}>unparalleled craftsmanship</p>
          <h4 style={{ margin: 0 }}>french seaming from our expert tailor </h4>
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            maxWidth: "575px",
          }}
        >
          <hr
            style={{
              backgroundColor: "black",
              height: "4px",
              border: "none",
              width: "75%",
              margin: "10px 0",
            }}
          />
          <p style={{ margin: 0 }}>tailored, easy</p>
          <h4 style={{ margin: 0 }}>
            we will do the traveling to get your measurement
          </h4>
        </div>
      </div>

      <div className="text-center">
        <h3>three hundred dollars</h3>
        <p>minimum 5 orders</p>
      </div>
      <button
        style={{
          backgroundColor: "transparent",
          border: "1px solid black",
          borderRadius: "32px",
          padding: "16px 48px",
          cursor: "pointer",
          fontFamily: "Geo",
          fontSize: "36px",
        }}
      >
        be my tailor
      </button>
    </main>
  );
}

export default App;
