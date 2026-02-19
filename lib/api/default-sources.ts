import type { VideoSource } from '@/lib/types';

// Default predefined video sources - Real Chinese video APIs
export const DEFAULT_SOURCES: VideoSource[] = [
  {
    id: 'default-wujin',
    name: '無盡資源',
    baseUrl: 'https://wolongziyuan.com/api.php/provide/vod',
    enabled: true,
    priority: 1,
  },
  {
    id: 'default-liangzi',
    name: '量子資源',
    baseUrl: 'https://cj.lziapi.com/api.php/provide/vod',
    enabled: true,
    priority: 2,
  },
  {
    id: 'default-subo',
    name: '速播云',
    baseUrl: 'https://subocaiji.com/api.php/provide/vod',
    enabled: true,
    priority: 3,
  },
  {
    id: 'default-wolong',
    name: '臥龍資源',
    baseUrl: 'https://collect.wolongziyuan.com/api.php/provide/vod',
    enabled: true,
    priority: 4,
  },
  {
    id: 'default-hwpan',
    name: '華為盤資源',
    baseUrl: 'https://www.hwpan.com/api.php/provide/vod',
    enabled: true,
    priority: 5,
  },
];
