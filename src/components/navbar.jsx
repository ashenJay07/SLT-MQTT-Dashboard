'use client';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/navbar.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profileName, setUserName] = useState('User Name');
  const router = useRouter();

  return (
    <div className={styles.navFrame}>
      <nav
        className={`${styles.cusNavBar} navbar navbar-expand-lg fixed-top`}
        style={{ color: 'white !important' }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" href="/" as={'/'}>
            <Image
              src="/SLTMobitel_Logo.svg"
              alt="Logo"
              className={styles.logo}
              width={0}
              height={0}
              priority={true}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <Image
                src="/menu.svg"
                alt="menu_icon"
                className={styles.menu}
                width={0}
                height={0}
              />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.navOption}`}
            >
              <li className="nav-item">
                <Link
                  className="nav-link font-white active"
                  aria-current="page"
                  href="/"
                >
                  Device
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link  font-white"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Store
                </Link>
              </li>

              <li className={`nav-item ${styles.pcDash}`}>
                <Link className="nav-link font-white" href="/dashboard">
                  Tutorial
                </Link>
              </li>

              <li className={`nav-item dropdown ${styles.mobileDash}`}>
                <Link
                  className="nav-link dropdown-toggle font-white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dashboard
                </Link>
              </li>

              <li className={`${styles.navLi} nav-item`}>
                <Link className="nav-link font-white" href="#">
                  Profile
                </Link>
              </li>

              <li className={`${styles.navLi} nav-item`}>
                <Link className="nav-link font-white" href="#">
                  Sign out
                </Link>
              </li>
            </ul>

            <div className={styles.search_bar}>
              <input type="text" placeholder="Search..." />
              {/* Add search functionality if needed */}
            </div>

            <div className={`${styles.userControl} dropdown`}>
              <a
                href="#"
                className="d-flex align-items-center link-body-emphasis text-decoration-none"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/user.png"
                  alt
                  width={30}
                  height={30}
                  className="rounded-circle me-2"
                />
                <strong className="font-white px-2">{profileName}</strong>
                <div className="font-white dropdown-toggle" />
              </a>
              <ul className="dropdown-menu text-small shadow">
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
