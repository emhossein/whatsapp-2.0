const Loading = () => {
  return (
    <center style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2042px-WhatsApp.svg.png"
          style={{ marginBottom: 10 }}
          height={200}
        />
        <div className="loadingio-spinner-spinner-r16h0pn286l">
          <div className="loading">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </center>
  );
};

export default Loading;
