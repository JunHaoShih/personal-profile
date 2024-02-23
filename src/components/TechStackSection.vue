<template>
  <div
    class="tw-mx-auto tw-px-4 sm:tw-px-6 lg:px-8 tw-max-w-7xl tw-gap-10 sm:tw-gap-y-12
    tw-flex tw-flex-col tw-w-full"
  >
    <div
      class="tw-text-center te-flex tw-flex-col tw-items-center"
    >
      <h2
        class="tw-text-3xl tw-font-bold tw-tracking-tight tw-text-gray-900 dark:tw-text-white
        sm:tw-text-4xl lg:tw-text-5xl"
      >
        Tech Stack
      </h2>
    </div>
    <div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-4">
      <div
        v-for="techGroup in techGroups"
        v-bind:key="techGroup.name"
        class="tw-p-6 tw-bg-white tw-border tw-border-gray-200 tw-rounded-lg tw-shadow
        dark:tw-bg-gray-800 dark:tw-border-gray-700"
      >
        <h5
          class="tw-mb-2 tw-text-2xl tw-font-bold tw-tracking-tight tw-text-gray-900
          dark:tw-text-white"
        >
          {{ techGroup.name }}
        </h5>
        <div
          v-for="skill in techGroup.skiils"
          v-bind:key="skill.name"
          class="tw-mb-3"
        >
          <div class="tw-flex tw-flex-row tw-items-center tw-mb-1 tw-gap-4">
            <q-img
              v-if="skill.src"
              :src="skill.src"
              ratio="1"
              class="tw-w-5 tw-h-5"
            />
            <svg
              v-if="skill.svgPath"
              xmlns="http://www.w3.org/2000/svg"
              :viewBox="skill.viewBox"
              class="tw-w-5 tw-h-5"
              :fill="skill.iconColor"
            >
              <path :d="skill.svgPath" />
            </svg>
            <div class="tw-text-base tw-font-medium tw-text-blue-700 dark:tw-text-white">
              {{ skill.name}}
            </div>
            <div class="tw-grow" />
            <span class="tw-text-sm tw-font-medium tw-text-blue-700 dark:tw-text-white">
              {{ skill.percentage }}
            </span>
          </div>
          <div class="tw-w-full tw-bg-gray-200 tw-rounded-full tw-h-2.5 dark:tw-bg-gray-700">
            <div
              class="tw-bg-blue-600 tw-h-2.5 tw-rounded-full"
              :style="`width: ${skill.percentage}`">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import tsSvg from 'src/assets/typescript.svg';
import vueSvg from 'src/assets/vuejs.svg';
import csharpSvg from 'src/assets/csharp.svg';
import dotnetSvg from 'src/assets/dotnet.svg';
import nestjsSvg from 'src/assets/nestjs.svg';
import postgresqlSvg from 'src/assets/postgresql.svg';
import mysqlSvg from 'src/assets/mysql.svg';
import microsoftSvg from 'src/assets/microsoft.svg';
import oracleSvg from 'src/assets/oracle.svg';
import firebaseSvg from 'src/assets/firebase.svg';

interface SkillLevel {
  name: string,
  src?: string,
  viewBox?: string,
  svgPath?: string,
  iconColor?: string,
  percentage: string,
}

interface TechGroup {
  name: string,
  skiils: SkillLevel[],
}

const techGroups: TechGroup[] = [
  {
    name: 'Frontend',
    skiils: [
      {
        name: 'Vue3',
        src: vueSvg,
        percentage: '60%',
      },
      {
        name: 'TypeScript',
        src: tsSvg,
        percentage: '80%',
      },
      {
        name: 'TailwindCSS',
        viewBox: '0 0 54 33',
        svgPath: 'M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z',
        iconColor: '#38bdf8',
        percentage: '60%',
      },
    ],
  },
  {
    name: 'Backend',
    skiils: [
      {
        name: 'C#',
        src: csharpSvg,
        percentage: '90%',
      },
      {
        name: '.NET',
        src: dotnetSvg,
        percentage: '90%',
      },
      {
        name: 'NestJS',
        src: nestjsSvg,
        percentage: '70%',
      },
      {
        name: 'Node.js',
        viewBox: '0 0 1024 1024',
        svgPath: 'M512 78.933333c-11.52 0-23.466667 2.986667-33.28 8.533334l-317.44 183.466666c-20.48 11.946667-33.28 34.133333-33.28 58.026667v366.08c0 23.893333 12.8 46.08 33.28 58.026667l83.2 47.786666c40.533333 19.626667 54.186667 20.053333 72.96 20.053334 59.733333 0 94.293333-36.266667 94.293333-99.413334V360.106667c0-5.12-4.266667-9.386667-9.386666-9.386667H362.666667c-5.546667 0-9.813333 4.266667-9.813334 9.386667v361.386666c0 28.16-29.013333 55.893333-75.52 32.426667L189.866667 704a11.093333 11.093333 0 0 1-4.693334-8.96V328.96c0-3.84 1.706667-7.253333 4.693334-8.96l317.44-183.04c2.56-1.706667 6.826667-1.706667 9.386666 0l317.44 183.04c2.986667 1.706667 4.693333 5.12 4.693334 8.96v366.08c0 3.413333-1.706667 6.826667-4.693334 8.96l-317.44 183.04c-2.56 1.706667-6.826667 1.706667-9.813333 0L426.666667 838.4c-3.413333-1.28-6.826667-1.706667-8.96-0.426667-22.613333 12.8-26.88 15.36-47.786667 21.76-5.12 1.706667-13.226667 4.693333 2.986667 13.653334l105.813333 62.72c10.24 5.973333 21.333333 8.96 33.28 8.96s23.04-2.986667 33.28-8.96l317.44-183.04c20.48-11.946667 33.28-34.133333 33.28-58.026667V328.96c0-23.893333-12.8-46.08-33.28-58.026667l-317.44-183.466666c-9.813333-5.546667-21.333333-8.533333-33.28-8.533334M597.333333 341.333333c-90.453333 0-144.64 37.973333-144.64 101.973334 0 68.693333 53.76 88.746667 140.8 97.28 103.68 10.24 111.786667 25.6 111.786667 46.08 0 35.413333-28.586667 50.346667-95.146667 50.346666-84.48 0-102.4-20.906667-108.8-62.72a9.642667 9.642667 0 0 0-9.386666-7.68h-40.96c-5.12 0-8.96 3.84-8.96 9.386667 0 52.906667 29.013333 116.906667 168.106666 116.906667 100.266667 0 157.866667-39.68 157.866667-108.8 0-68.693333-46.08-86.613333-143.786667-99.84-98.56-12.8-108.373333-19.626667-108.373333-42.666667 0-19.2 8.533333-44.8 81.493333-44.8 64 0 89.173333 14.08 98.986667 58.026667 0.853333 4.266667 4.693333 7.253333 8.96 7.253333h41.386667c2.133333 0 4.693333-0.853333 6.4-2.986667 1.706667-1.706667 2.986667-4.266667 2.133333-6.826666C749.226667 376.32 698.88 341.333333 597.333333 341.333333z',
        iconColor: '#8cc84b',
        percentage: '70%',
      },
    ],
  },
  {
    name: 'Database',
    skiils: [
      {
        name: 'PostgreSQL',
        src: postgresqlSvg,
        percentage: '75%',
      },
      {
        name: 'MySQL / MariaDB',
        src: mysqlSvg,
        percentage: '70%',
      },
      {
        name: 'Microsoft SQL Server',
        src: microsoftSvg,
        percentage: '70%',
      },
      {
        name: 'Oracle DB',
        src: oracleSvg,
        percentage: '70%',
      },
      {
        name: 'Firestore',
        src: firebaseSvg,
        percentage: '60%',
      },
    ],
  },
  {
    name: 'Others',
    skiils: [
      {
        name: 'Electron',
        percentage: '60%',
      },
      {
        name: 'RabbitMQ',
        percentage: '50%',
      },
      {
        name: 'ElasticSearch',
        percentage: '40%',
      },
    ],
  },
];
</script>
