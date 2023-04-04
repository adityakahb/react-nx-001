import { NavigationData } from './../contexts/nav-context';
import { useContext } from 'react';

export default function Sitenav() {
  const { isOpen, setIsOpen } = useContext(NavigationData);

  const closeNavigation = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={
          (isOpen === true ? 'sitenav-opened ' : '') + 'sitenav backdrop-blur'
        }
        aria-hidden="true"
      >
        <div className="sitenav-header px-3 d-xl-none">
          <button
            type="button"
            className="btn"
            onClick={() => {
              closeNavigation();
            }}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <ul className="list-unstyled m-0">
          <li>
            <a
              href="#"
              className="d-flex px-3 py-1 text-decoration-none align-items-center align-items-center"
            >
              <span className="material-symbols-outlined d-flex align-items-center justify-content-center sitenav-link-icon">
                empty_dashboard
              </span>
              <span className="sitenav-link-text">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="d-flex px-3 py-1 text-decoration-none align-items-center"
            >
              <span className="material-symbols-outlined d-flex align-items-center justify-content-center sitenav-link-icon">
                forum
              </span>
              <span className="sitenav-link-text">Chat</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="d-flex px-3 py-1 text-decoration-none align-items-center"
            >
              <span className="material-symbols-outlined d-flex align-items-center justify-content-center sitenav-link-icon">
                mail
              </span>
              <span className="sitenav-link-text">Messages</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="d-flex px-3 py-1 text-decoration-none align-items-center"
            >
              <span className="material-symbols-outlined d-flex align-items-center justify-content-center sitenav-link-icon">
                magnification_small
              </span>
              <span className="sitenav-link-text">Whiteboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="d-flex px-3 py-1 text-decoration-none align-items-center"
            >
              <span className="material-symbols-outlined d-flex align-items-center justify-content-center sitenav-link-icon">
                drive_folder_upload
              </span>
              <span className="sitenav-link-text">Doc Repository</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="d-flex px-3 py-1 text-decoration-none align-items-center"
            >
              <span className="material-symbols-outlined d-flex align-items-center justify-content-center sitenav-link-icon">
                chip_extraction
              </span>
              <span className="sitenav-link-text">Extraction</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="d-flex px-3 py-1 text-decoration-none align-items-center"
            >
              <span className="material-symbols-outlined d-flex align-items-center justify-content-center sitenav-link-icon">
                calendar_month
              </span>
              <span className="sitenav-link-text">Meetings</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="d-flex px-3 py-1 text-decoration-none align-items-center"
            >
              <span className="material-symbols-outlined d-flex align-items-center justify-content-center sitenav-link-icon">
                center_focus_strong
              </span>
              <span className="sitenav-link-text">View</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="d-flex px-3 py-1 text-decoration-none align-items-center"
            >
              <span className="material-symbols-outlined d-flex align-items-center justify-content-center sitenav-link-icon">
                edit_square
              </span>
              <span className="sitenav-link-text">Edit</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="d-flex px-3 py-1 text-decoration-none align-items-center"
            >
              <span className="material-symbols-outlined d-flex align-items-center justify-content-center sitenav-link-icon">
                sports_score
              </span>
              <span className="sitenav-link-text">MileStones</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
