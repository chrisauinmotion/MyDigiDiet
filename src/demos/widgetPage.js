import {
  MdThumbUp,
  MdThumbsUpDown,
  MdLanguage,
  MdLightbulbOutline,
  MdPlayCircleOutline,
  MdRadio,
  MdSnooze,
  MdMailOutline,
} from 'react-icons/lib/md';

export const iconWidgetsData = [
  {
    bgColor: 'primary',
    icon: MdThumbUp,
    title: 'Primary',
    subtitle: 'widget subtitle',
  },
  {
    bgColor: 'secondary',
    icon: MdThumbsUpDown,
    title: 'Secondary',
    subtitle: 'widget subtitle',
  },
  {
    bgColor: 'success',
    icon: MdLanguage,
    title: 'Success',
    subtitle: 'widget subtitle',
  },
  {
    bgColor: 'danger',
    icon: MdLightbulbOutline,
    title: 'Danger',
    subtitle: 'widget subtitle',
  },
  {
    bgColor: 'warning',
    icon: MdPlayCircleOutline,
    title: 'Warning',
    subtitle: 'widget subtitle',
  },
  {
    bgColor: 'info',
    icon: MdRadio,
    title: 'Info',
    subtitle: 'widget subtitle',
  },
  {
    bgColor: 'light',
    icon: MdSnooze,
    title: 'Light',
    subtitle: 'widget subtitle',
    inverse: false,
  },
  {
    bgColor: 'dark',
    icon: MdMailOutline,
    title: 'Dark',
    subtitle: 'widget subtitle',
  },
];

export const numberWidgetsData = [
  { color: 'primary', title: 'Most Visited Category', number: 'News', subtitle: '' },
  { color: 'secondary', title: 'Busiest Time of Day', number: '10am', subtitle: '' },
  { color: 'success', title: 'Busiest Day of the Week', number: 'Thursday', subtitle: '' },
  { color: 'info', title: 'Busiest Day This Month', number: 'June 14, 2018', subtitle: '' },
  { color: 'warning', title: 'Second Most Visited Category', number: 'Video Streaming', subtitle: '' },
  { color: 'danger', title: 'Month With Most Visits', number: 'April', subtitle: '' },
  { color: 'dark', title: 'Number of Sites Visited This Year', number: '15,689', subtitle: '' },
];
