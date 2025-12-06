import React from 'react';
import Intro from './components/Intro';
import StatsFeatures from './components/StatsFeatures';
import HowPrivacy from './components/HowPrivacy';
import DownloadFooter from './components/DownloadFooter';

export default function NoCtuneLanding() {
  return (
    <>
      <Intro />
      <StatsFeatures />
      <HowPrivacy />
      <DownloadFooter />
    </>
  );
}