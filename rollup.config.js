/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */


import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

module.exports = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/timeago.js',
        name: 'timeago',
        format: 'umd',
      },
      {
        sourcemap: true,
        file: 'dist/timeago.min.js',
        name: 'timeago',
        format: 'umd',
        plugins: [
          terser(),
        ],
      }
    ]
    ,
    plugins: [
      resolve(),
      typescript(),
      terser(),
    ],
  },
  {
    input: 'src/full.ts',
    output: [{
      file: 'dist/timeago.full.js',
      name: 'timeago',
      format: 'umd',
    }, {
      file: 'dist/timeago.full.min.js',
      name: 'timeago',
      format: 'umd',
      sourcemap: true,
      plugins: [
        terser(),
      ],
    }],
    plugins: [
      resolve(),
      typescript(),
      terser(),
    ],
  },
];
