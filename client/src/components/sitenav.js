export default function Sitenav() {
  return (
    <>
      <nav className="sitenav bg-opacity-75 backdrop-blur" aria-hidden="true">
        <div className="sitenav-header px-3 py-1 d-xl-none">
          <button type="button" className="btn">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <ul className="list-unstyled m-0">
          <li>
            <a
              href="#"
              className="d-flex px-3 py-1 text-decoration-none align-items-center align-items-center"
            >
              <span class="material-symbols-outlined me-2 d-flex align-items-center justify-content-center">
                empty_dashboard
              </span>
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="d-flex px-3 py-1 text-decoration-none align-items-center"
            >
              <span class="material-symbols-outlined me-2 d-flex align-items-center justify-content-center">
                forum
              </span>
              Chat
            </a>
          </li>
          <li>
            <a
              href="#"
              className="d-flex px-3 py-1 text-decoration-none align-items-center"
            >
              <span class="material-symbols-outlined me-2 d-flex align-items-center justify-content-center">
                mail
              </span>
              Messages
            </a>
          </li>
          <li>
            <a
              href="#"
              className="d-flex px-3 py-1 text-decoration-none align-items-center"
            >
              <span class="material-symbols-outlined me-2 d-flex align-items-center justify-content-center">
                magnification_small
              </span>
              Whiteboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="d-flex px-3 py-1 text-decoration-none align-items-center"
            >
              <span class="material-symbols-outlined me-2 d-flex align-items-center justify-content-center">
                drive_folder_upload
              </span>
              Doc Repository
            </a>
          </li>
          <li>
            <a
              href="#"
              className="d-flex px-3 py-1 text-decoration-none align-items-center"
            >
              <span class="material-symbols-outlined me-2 d-flex align-items-center justify-content-center">
                chip_extraction
              </span>
              Extraction
            </a>
          </li>
          <li>
            <a
              href="#"
              className="d-flex px-3 py-1 text-decoration-none align-items-center"
            >
              <span class="material-symbols-outlined me-2 d-flex align-items-center justify-content-center">
                calendar_month
              </span>
              Meetings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="d-flex px-3 py-1 text-decoration-none align-items-center"
            >
              <span class="material-symbols-outlined me-2 d-flex align-items-center justify-content-center">
                center_focus_strong
              </span>
              View
            </a>
          </li>
          <li>
            <a
              href="#"
              className="d-flex px-3 py-1 text-decoration-none align-items-center"
            >
              <span class="material-symbols-outlined me-2 d-flex align-items-center justify-content-center">
                edit_square
              </span>
              Edit
            </a>
          </li>
          <li>
            <a
              href="#"
              className="d-flex px-3 py-1 text-decoration-none align-items-center"
            >
              <span class="material-symbols-outlined me-2 d-flex align-items-center justify-content-center">
                sports_score
              </span>
              MileStones
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
