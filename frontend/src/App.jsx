function App() {
  return (
    <>
      {/* Arka plan videosu */}
      <video
        id="video-bg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>
      <div id="video-overlay"></div>

      {/* Asıl içerik */}
      <div className="app">
        <div className="card">
          <div className="card-header">
            <h1>Attendance System</h1>
          </div>

          <div className="card-body">
            <form className="form">
              <div className="form-group">
                <label>Username</label>
                <input type="text" placeholder="username" />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="••••••••" />
              </div>

              <div className="button-row">
                <button type="button" className="btn-secondary">
                  Create new user
                </button>
                <button type="submit" className="btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="page-footer">
          Yusuf Talha Kamiloğlu & Enes Özdemir & Hakan Ege Sarıçayır
        </div>
      </div>
    </>
  );
}

export default App;