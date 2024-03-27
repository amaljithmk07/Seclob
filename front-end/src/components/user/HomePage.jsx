import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./HomePage.css";
import { BeatLoader } from "react-spinners";

const HomePage = () => {
  const [sidebar, setSidebar] = useState(false);
  const [load, setLoad] = useState(false); //For Loading
  const [uploaded, setUploaded] = useState([]); //For Drag and drop
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setLoad(true);
      setTimeout(() => {
        setUploaded(acceptedFiles);
        setLoad(false);
      }, 1500);
    },
  });
  console.log(uploaded);
  const removePhoto = () => {
    setUploaded([]);
  };

  //Sidebar

  const sidebarHhandle = () => {
    setSidebar((prev) => !prev);
  };
  const sidebarClose = () => {
    setSidebar((prev) => !prev);
  };

  return (
    <div className="homepage-main-body">
      {/* //sidebar */}
      <div className="homepage-side-bar">
        <div className="homepage-side-bar-logo-sec">
          <img src="menu-logo.png" alt="" className="homepage-logo" /> Base
        </div>
        <div className="homepage-menu-list-sec">
          <div className="homepage-menu-item">
            <img src="dashboard.png" alt="" className="homepage-menu-icon" />{" "}
            Dashboard
          </div>
          <div className="homepage-menu-item">
            <img src="upload.png" alt="" className="homepage-menu-icon" />{" "}
            Upload
          </div>
          <div className="homepage-menu-item">
            <img src="invoice.png" alt="" className="homepage-menu-icon" />{" "}
            Invoice
          </div>
          <div className="homepage-menu-item">
            <img src="schedule.png" alt="" className="homepage-menu-icon" />{" "}
            Schedule
          </div>
          <div className="homepage-menu-item">
            <img src="calendar.png" alt="" className="homepage-menu-icon" />{" "}
            Calendar
          </div>
          <div className="homepage-menu-item">
            <img src="notification.png" alt="" className="homepage-menu-icon" />{" "}
            Notification
          </div>
          <div className="homepage-menu-item">
            <img src="settings.png" alt="" className="homepage-menu-icon" />{" "}
            Settings
          </div>
        </div>
      </div>

      {/* //For hamburger */}
      {sidebar == true ? (
        <div className="homepage-side-bar-hamb">
          <div className="homepage-side-bar-logo-sec">
            <img src="menu-logo.png" alt="" className="homepage-logo" /> Base
            <img
              src="close.png"
              alt=""
              className="navbar-sidebar-close"
              onClick={sidebarClose}
            />
          </div>
          <div className="homepage-menu-list-sec">
            <div className="homepage-menu-item">
              <img src="dashboard.png" alt="" className="homepage-menu-icon" />{" "}
              Dashboard
            </div>
            <div className="homepage-menu-item">
              <img src="upload.png" alt="" className="homepage-menu-icon" />{" "}
              Upload
            </div>
            <div className="homepage-menu-item">
              <img src="invoice.png" alt="" className="homepage-menu-icon" />{" "}
              Invoice
            </div>
            <div className="homepage-menu-item">
              <img src="schedule.png" alt="" className="homepage-menu-icon" />{" "}
              Schedule
            </div>
            <div className="homepage-menu-item">
              <img src="calendar.png" alt="" className="homepage-menu-icon" />{" "}
              Calendar
            </div>
            <div className="homepage-menu-item">
              <img
                src="notification.png"
                alt=""
                className="homepage-menu-icon"
              />{" "}
              Notification
            </div>
            <div className="homepage-menu-item">
              <img src="settings.png" alt="" className="homepage-menu-icon" />{" "}
              Settings
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {/* ///Upload section */}

      <div className="homepage-upload-body">
        {/* //Title sec */}

        <div className="homepage-upload-title-sec">
          <div className="homepage-upload-title">Upload CSV</div>
          <div className="homepage-upload-account">
            <div className="homepage-navbar-menu-hamb">
              <img
                src="/hamburger.png"
                alt=""
                className="homepage-hamb-icon"
                onClick={sidebarHhandle}
              />
              <img src="menu-logo.png" alt="" className="homepage-logo" /> Base{" "}
            </div>
            <img
              src="notification-profile.png"
              alt=""
              className="homepage-upload-account-logo"
            />
            <img
              src="profile.png"
              alt=""
              className="homepage-upload-account-logo"
            />
          </div>
        </div>

        {/* //Upload body */}
        <div className="homepage-upload-sec">
          <div className="homepage-upload-drop-area-btn-sec">
            <div {...getRootProps()} className="homepage-upload-drop-sec">
              <input {...getInputProps()} />
              <img
                src="excel.png"
                alt=""
                className="homepage-upload-excel-logo"
              />
              <div className="homepage-upload-upload-text">
                Drop your Excel sheet here or &nbsp;
                <input id="upload" hidden />
                <label htmlFor="upload" style={{ color: "rgb(8, 0, 255)" }}>
                  browse{" "}
                </label>
              </div>
            </div>
            {uploaded.length !== 0 ? (
              <span
                style={{ color: "red", cursor: "pointer" }}
                onClick={removePhoto}
              >
                Remove
              </span>
            ) : (
              <></>
            )}
            <button className="homepage-upload-btn-sec">
              {load == true ? (
                <>
                  <BeatLoader color="#ffffff" size={7} speedMultiplier={0.7} />
                </>
              ) : (
                <>
                  <img
                    src="upload-btn.png"
                    alt=""
                    className="homepage-upload-btn-logo"
                  />
                  Upload
                </>
              )}
            </button>
          </div>
        </div>
        {/* ///Upload Lists */}

        <div className="homepage-lists-body-sec">
          Uploads
          <div className="homepage-lists">
            {/* ///Title section */}

            <div className="homepage-list-title-sec">
              <div className="homepage-list-title-sl-no">Sl No.</div>
              <div className="homepage-list-title-links">Links</div>
              <div className="homepage-list-title-prefix">Prefix</div>
              <div className="homepage-list-title-add-tags">Add Tags</div>
              <div className="homepage-list-title-selected-tags">
                {" "}
                Selected Tags
              </div>
            </div>

            {/* ///Data section */}

            <div className="homepage-list-data-sec">
              <div className="homepage-list-data-sl-no">01</div>
              <div className="homepage-list-data-links">www.google.com</div>
              <div className="homepage-list-data-prefix">prefixsample</div>
              <div className="homepage-list-data-add-tags">
                <select
                  name=""
                  id="tags"
                  className="homepage-list-data-dropdown-sec"
                >
                  <option
                    value="tag1"
                    className="homepage-list-data-dropdown-list"
                    selected
                    disabled
                  >
                    Select Tags
                  </option>
                  <option
                    value="tag1"
                    className="homepage-list-data-dropdown-list"
                  >
                    Tag1
                  </option>
                  <option
                    value="tag1"
                    className="homepage-list-data-dropdown-list"
                  >
                    Tag2
                  </option>
                  <option
                    value="tag1"
                    className="homepage-list-data-dropdown-list"
                  >
                    Tag3
                  </option>
                  <option
                    value="tag1"
                    className="homepage-list-data-dropdown-list"
                  >
                    Tag4
                  </option>
                </select>
              </div>
              <div className="homepage-list-data-selected-tags">
                <div className="tags">
                  TAG 1{" "}
                  <img src="close.png" alt="" className="tags-close-icon" />
                </div>
                <div className="tags">
                  TAG 2{" "}
                  <img src="close.png" alt="" className="tags-close-icon" />
                </div>
                <div className="tags">
                  TAG 3{" "}
                  <img src="close.png" alt="" className="tags-close-icon" />
                </div>
                <div className="tags">
                  TAG 4{" "}
                  <img src="close.png" alt="" className="tags-close-icon" />
                </div>
              </div>
            </div>
            <div className="homepage-list-data-sec">
              <div className="homepage-list-data-sl-no">02</div>
              <div className="homepage-list-data-links">www.google.com</div>
              <div className="homepage-list-data-prefix">prefixsample</div>
              <div className="homepage-list-data-add-tags">
                <select
                  name=""
                  id="tags"
                  className="homepage-list-data-dropdown-sec"
                >
                  <option
                    value="tag1"
                    className="homepage-list-data-dropdown-list"
                    selected
                    disabled
                  >
                    Select Tags
                  </option>
                  <option
                    value="tag1"
                    className="homepage-list-data-dropdown-list"
                  >
                    Tag1
                  </option>
                  <option
                    value="tag1"
                    className="homepage-list-data-dropdown-list"
                  >
                    Tag2
                  </option>
                  <option
                    value="tag1"
                    className="homepage-list-data-dropdown-list"
                  >
                    Tag3
                  </option>
                  <option
                    value="tag1"
                    className="homepage-list-data-dropdown-list"
                  >
                    Tag4
                  </option>
                </select>
              </div>
              <div className="homepage-list-data-selected-tags">
                <div className="tags">
                  TAG 1{" "}
                  <img src="close.png" alt="" className="tags-close-icon" />
                </div>
                <div className="tags">
                  TAG 2{" "}
                  <img src="close.png" alt="" className="tags-close-icon" />
                </div>
              </div>
            </div>
            <div className="homepage-list-data-sec">
              <div className="homepage-list-data-sl-no">03</div>
              <div className="homepage-list-data-links">www.google.com</div>
              <div className="homepage-list-data-prefix">prefixsample</div>
              <div className="homepage-list-data-add-tags">
                <select
                  name=""
                  id="tags"
                  className="homepage-list-data-dropdown-sec"
                >
                  <option
                    value="tag1"
                    className="homepage-list-data-dropdown-list"
                    selected
                    disabled
                  >
                    Select Tags
                  </option>
                  <option
                    value="tag1"
                    className="homepage-list-data-dropdown-list"
                  >
                    Tag1
                  </option>
                  <option
                    value="tag1"
                    className="homepage-list-data-dropdown-list"
                  >
                    Tag2
                  </option>
                  <option
                    value="tag1"
                    className="homepage-list-data-dropdown-list"
                  >
                    Tag3
                  </option>
                  <option
                    value="tag1"
                    className="homepage-list-data-dropdown-list"
                  >
                    Tag4
                  </option>
                </select>
              </div>
              <div className="homepage-list-data-selected-tags">
                <div className="tags">
                  TAG 1{" "}
                  <img src="close.png" alt="" className="tags-close-icon" />
                </div>
                <div className="tags">
                  TAG 2{" "}
                  <img src="close.png" alt="" className="tags-close-icon" />
                </div>
                <div className="tags">
                  TAG 3{" "}
                  <img src="close.png" alt="" className="tags-close-icon" />
                </div>
                <div className="tags">
                  TAG 4{" "}
                  <img src="close.png" alt="" className="tags-close-icon" />
                </div>
              </div>
            </div>
            <div className="homepage-list-data-sec">
              <div className="homepage-list-data-sl-no">04</div>
              <div className="homepage-list-data-links">www.google.com</div>
              <div className="homepage-list-data-prefix">prefixsample</div>
              <div className="homepage-list-data-add-tags">
                <select
                  name=""
                  id="tags"
                  className="homepage-list-data-dropdown-sec"
                >
                  <option
                    value="tag1"
                    className="homepage-list-data-dropdown-list"
                    selected
                    disabled
                  >
                    Select Tags
                  </option>
                  <option
                    value="tag1"
                    className="homepage-list-data-dropdown-list"
                  >
                    Tag1
                  </option>
                  <option
                    value="tag1"
                    className="homepage-list-data-dropdown-list"
                  >
                    Tag2
                  </option>
                  <option
                    value="tag1"
                    className="homepage-list-data-dropdown-list"
                  >
                    Tag3
                  </option>
                  <option
                    value="tag1"
                    className="homepage-list-data-dropdown-list"
                  >
                    Tag4
                  </option>
                </select>
              </div>
              <div className="homepage-list-data-selected-tags">
                <div className="tags">
                  TAG 1{" "}
                  <img src="close.png" alt="" className="tags-close-icon" />
                </div>
              </div>
            </div>
            <div className="homepage-list-data-sec">
              <div className="homepage-list-data-sl-no">05</div>
              <div className="homepage-list-data-links">www.google.com</div>
              <div className="homepage-list-data-prefix">prefixsample</div>
              <div className="homepage-list-data-add-tags">
                <select
                  name=""
                  id="tags"
                  className="homepage-list-data-dropdown-sec"
                >
                  <option
                    value="tag1"
                    className="homepage-list-data-dropdown-list"
                    selected
                    disabled
                  >
                    Select Tags
                  </option>
                  <option
                    value="tag1"
                    className="homepage-list-data-dropdown-list"
                  >
                    Tag1
                  </option>
                  <option
                    value="tag1"
                    className="homepage-list-data-dropdown-list"
                  >
                    Tag2
                  </option>
                  <option
                    value="tag1"
                    className="homepage-list-data-dropdown-list"
                  >
                    Tag3
                  </option>
                  <option
                    value="tag1"
                    className="homepage-list-data-dropdown-list"
                  >
                    Tag4
                  </option>
                </select>
              </div>
              <div className="homepage-list-data-selected-tags">
                <div className="tags">
                  TAG 1{" "}
                  <img src="close.png" alt="" className="tags-close-icon" />
                </div>
                <div className="tags">
                  TAG 2{" "}
                  <img src="close.png" alt="" className="tags-close-icon" />
                </div>
                <div className="tags">
                  TAG 3{" "}
                  <img src="close.png" alt="" className="tags-close-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
