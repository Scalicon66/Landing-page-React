import '/src/index.css';

export default function Main() {
  return (
    <main>
      <section className="side-content">
        <div className="dashboard">
          <img src="/assets/dashboard.png" alt="Dashboard" />
          <h1>Dashboard</h1>
        </div>
        <div className="home">
            <img src="/assets/home.png" alt="Home" />
            <p>Home</p>
        </div>
        <div className="profile">
            <img src="/assets/profile.png" alt="Profile" />
            <p>Profile</p>
        </div>
        <div className="messages">
            <img src="/assets/message.png" alt='messages' />
            <p>Messages</p>
        </div>
            <div className="history">
            <img src="/assets/history.png" />
            <p>History</p>
        </div>
            <div className="tasks">
            <img src="/assets/task.png" />
            <p>Tasks</p>
        </div>
        <div className="communities">
            <img src="/assets/community.png" />
            <p>Communities</p>
        </div>
        <div className="setting">
            <img src="/assets/setting.png" />
            <p>Settings</p>
        </div>
        <div className="support">
            <img src="/assets/support.png" />
            <p>Support</p>
        </div>
        <div className="privacy">
            <img src="/assets/privacy.png" alt="Privacy" />
            <p>Privacy</p>
        </div>
      </section>

      <section className="main-content">
        <div className="first-header">
          <div className="search-container">
            <div className="search-icon-container">
              <img src="/assets/search.png" alt="Search" />
            </div>
            <div className="search-input-container">
              <input className="search-input" type="search" />
            </div>
          </div>
          <div className="npm-container">
            <div className="notification-container">
              <img src="/assets/notification.png" alt="Notifications" />
            </div>
            <div className="profile-photo-container">
              <img src="/assets/profile-photo.jpg" alt="Profile" />
            </div>
            <div className="name-container">
              <p>Omar Ashraf</p>
            </div>
          </div>
        </div>

        <div className="second-header">
          <div className="pg-container">
            <div className="pfp-container">
              <img src="/assets/profile-photo.jpg" alt="Profile" />
            </div>
            <div className="greet-container">
              <p>Hi, there</p>
              <h1>Omar Ashraf (@Omar)</h1>
            </div>
          </div>
          <div className="buttons">
            <div><button type="button">New</button></div>
            <div><button type="button">Upload</button></div>
            <div><button type="button">Share</button></div>
          </div>
        </div>

        <div className="titles">
          <div className="your-projects">
            <p>Your Projects</p>
          </div>
          <div className="announcements">
            <p>Announcements</p>
          </div>
        </div>

        <div className="pa">
          <div className="projects">
            {/* Repeatable project boxes */}
            {["Super Cool Project", "Less Cool Project", "Impossible App", "Easy Peasy App", "Ad Blocker", "Money Maker"].map((title, i) => (
              <div className="box-info" key={i}>
                <div className="project-content">
                  <h3>{title}</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                  <div className="bss">
                    <img src="/assets/bookmark.png" alt="Bookmark" />
                    <img src="/assets/seen.png" alt="Seen" />
                    <img src="/assets/share.png" alt="Share" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="announce">
            <div className="box-announce">
              <div className="announce1">
                <h5>Site Maintenance</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <hr />
              <div className="announce2">
                <h5>Community Share Day</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              <hr />
              <div className="announce3">
                <h5>Updated Privacy Policy</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>

            <h3>Trending</h3>
            <div className="box-announce">
              {[...Array(4)].map((_, i) => (
                <div className={`trending${i + 1}`} key={i}>
                  <div className="pf-container">
                    <img src="/assets/profile-photo.jpg" alt="Trending" />
                  </div>
                  <div className="introduce-container">
                    <h5>@Omar</h5>
                    <p>{["World Peace Builder", "Super Cool Project", "Life Changing App", "No Traffic Maker"][i]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
