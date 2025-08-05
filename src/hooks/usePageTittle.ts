import { useLocation } from 'react-router-dom';

const usePageTitle = () => {
  const location = useLocation();

  const getPageTitle = (pathname: string) => {
    if (pathname.includes('finance-registration'))
      return 'Finance Registration';
    if (pathname.includes('personal-profile')) return 'Dashboard';
    if (pathname.includes('dashboard')) return 'Dashboard';
    if (pathname.includes('course-evaluation')) return 'Course Evaluation';
    if (pathname.includes('fee-structure')) return 'Fee Structure';
    if (pathname.includes('transcript')) return 'Transcript';
    if (pathname.includes('clearance-request')) return 'Clearance Request';
    // Add more routes here
    return 'Dashboard';
  };

  return getPageTitle(location.pathname);
};

export default usePageTitle;
