import "./rightBar.scss";

function RightBar() {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg" alt=" "/>
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Remove</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg"
                alt=""
              />
              <span>John Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Remove</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg"
                alt=""
              />
              <p>
                <span>John Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg"
                alt=""
              />
              <p>
                <span>John Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg"
                alt=""
              />
              <p>
                <span>John Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg"
                alt=""
              />
              <p>
                <span>John Doe</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg"
                alt=""
              />
              <div className="online" />
              <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg"
                alt=""
              />
              <div className="online" />
              <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg"
                alt=""
              />
              <div className="online" />
              <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg"
                alt=""
              />
              <div className="online" />
              <span>John Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
