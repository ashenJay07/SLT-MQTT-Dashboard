'use client';
import React from 'react';
import styles from '../../styles/dashboard.module.css';
import NavBar from '@/components/navbar';
import Link from 'next/link';

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <div
        style={{
          background: '#00458a',
          height: '100px',
        }}
      ></div>
      <div className={styles.dashboard}>
        <Link
          style={{ textDecoration: 'none', color: 'black' }}
          href="/dashboard/addDevice"
        >
          <div className={styles.card}>Industrial IOT</div>
        </Link>
        <Link
          style={{ textDecoration: 'none', color: 'black' }}
          href="/dashboard/fazenda"
        >
          <div className={styles.card}>Fazenda</div>
        </Link>
        <Link
          style={{ textDecoration: 'none', color: 'black' }}
          href="/dashboard/infrastructure-development"
        >
          <div className={styles.card}>Infrastructure Development</div>
        </Link>
        <Link
          style={{ textDecoration: 'none', color: 'black' }}
          href="/dashboard/alternative-power-monitoring"
        >
          <div className={styles.card}>Alternative Power Monitoring</div>
        </Link>
        <Link
          style={{ textDecoration: 'none', color: 'black' }}
          href="/dashboard/environment-cms"
        >
          <div className={styles.card}>Environment CMS</div>
        </Link>
        <Link
          style={{ textDecoration: 'none', color: 'black' }}
          href="/dashboard/elder-care"
        >
          <div className={styles.card}>Elder Care</div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
