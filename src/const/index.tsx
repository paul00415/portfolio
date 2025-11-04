import { type IconType } from 'react-icons/lib';
import {
  FaJava,
  FaReact,
  FaVuejs,
  FaAngular,
  FaNode,
  FaLaravel,
  FaPhp,
  FaAws,
  FaGit,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiSqlite,
  SiMysql,
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiNuxtdotjs,
} from 'react-icons/si';

export interface skillProps {
  icon: IconType;
  progress: number;
  devName: string;
}

export const Skilllist = [
  {
    icon: FaReact,
    progress: 100,
    devName: 'React',
  },
  {
    icon: FaVuejs,
    progress: 100,
    devName: 'Vue',
  },
  {
    icon: FaAngular,
    progress: 100,
    devName: 'Angular',
  },
  {
    icon: SiMysql,
    progress: 100,
    devName: 'MySql',
  },
  {
    icon: SiMongodb,
    progress: 100,
    devName: 'Mogodb',
  },
  {
    icon: SiTypescript,
    progress: 100,
    devName: 'Typescript',
  },
  {
    icon: SiJavascript,
    progress: 100,
    devName: 'Javascript',
  },
  {
    icon: FaJava,
    progress: 100,
    devName: 'Java',
  },

  {
    icon: FaNode,
    progress: 100,
    devName: 'Node',
  },
  {
    icon: FaLaravel,
    progress: 100,
    devName: 'Lalael',
  },
  {
    icon: FaPhp,
    progress: 100,
    devName: 'Php',
  },
  {
    icon: FaAws,
    progress: 100,
    devName: 'Aws',
  },
  {
    icon: FaGit,
    progress: 100,
    devName: 'Git',
  },
  {
    icon: FaDatabase,
    progress: 100,
    devName: 'Database',
  },
  {
    icon: SiSqlite,
    progress: 100,
    devName: 'Sqlite',
  },
  {
    icon: SiPostgresql,
    progress: 100,
    devName: 'Postgresql',
  },
  {
    icon: SiNuxtdotjs,
    progress: 100,
    devName: 'Nuxt.js',
  },
];
