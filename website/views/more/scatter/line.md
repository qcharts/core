## 散点图隐藏坐标轴

:::demo

```javascript
const dataset = [
  { temperature: -2, tdp: -33, category: '平均气温与露点' },
  { temperature: -3, tdp: -31, category: '平均气温与露点' },
  { temperature: 1, tdp: -26, category: '平均气温与露点' },
  { temperature: -6, tdp: -26, category: '平均气温与露点' },
  { temperature: -4, tdp: -23, category: '平均气温与露点' },
  { temperature: -4, tdp: -23, category: '平均气温与露点' },
  { temperature: -4, tdp: -23, category: '平均气温与露点' },
  { temperature: -3, tdp: -23, category: '平均气温与露点' },
  { temperature: -3, tdp: -23, category: '平均气温与露点' },
  { temperature: -2, tdp: -22, category: '平均气温与露点' },
  { temperature: -1, tdp: -22, category: '平均气温与露点' },
  { temperature: 0, tdp: -22, category: '平均气温与露点' },
  { temperature: -3, tdp: -22, category: '平均气温与露点' },
  { temperature: -7, tdp: -21, category: '平均气温与露点' },
  { temperature: 1, tdp: -21, category: '平均气温与露点' },
  { temperature: 10, tdp: -21, category: '平均气温与露点' },
  { temperature: 4, tdp: -21, category: '平均气温与露点' },
  { temperature: -3, tdp: -20, category: '平均气温与露点' },
  { temperature: -4, tdp: -20, category: '平均气温与露点' },
  { temperature: -2, tdp: -20, category: '平均气温与露点' },
  { temperature: -2, tdp: -19, category: '平均气温与露点' },
  { temperature: 4, tdp: -19, category: '平均气温与露点' },
  { temperature: -5, tdp: -19, category: '平均气温与露点' },
  { temperature: -4, tdp: -19, category: '平均气温与露点' },
  { temperature: -1, tdp: -19, category: '平均气温与露点' },
  { temperature: -7, tdp: -19, category: '平均气温与露点' },
  { temperature: -2, tdp: -19, category: '平均气温与露点' },
  { temperature: 6, tdp: -19, category: '平均气温与露点' },
  { temperature: 0, tdp: -18, category: '平均气温与露点' },
  { temperature: -6, tdp: -18, category: '平均气温与露点' },
  { temperature: 4, tdp: -18, category: '平均气温与露点' },
  { temperature: 1, tdp: -18, category: '平均气温与露点' },
  { temperature: -2, tdp: -18, category: '平均气温与露点' },
  { temperature: -1, tdp: -17, category: '平均气温与露点' },
  { temperature: 4, tdp: -17, category: '平均气温与露点' },
  { temperature: -4, tdp: -17, category: '平均气温与露点' },
  { temperature: -2, tdp: -17, category: '平均气温与露点' },
  { temperature: 13, tdp: -17, category: '平均气温与露点' },
  { temperature: 2, tdp: -17, category: '平均气温与露点' },
  { temperature: -1, tdp: -17, category: '平均气温与露点' },
  { temperature: -2, tdp: -17, category: '平均气温与露点' },
  { temperature: 3, tdp: -17, category: '平均气温与露点' },
  { temperature: -3, tdp: -16, category: '平均气温与露点' },
  { temperature: 12, tdp: -16, category: '平均气温与露点' },
  { temperature: 4, tdp: -16, category: '平均气温与露点' },
  { temperature: -3, tdp: -16, category: '平均气温与露点' },
  { temperature: -1, tdp: -16, category: '平均气温与露点' },
  { temperature: -2, tdp: -16, category: '平均气温与露点' },
  { temperature: 4, tdp: -16, category: '平均气温与露点' },
  { temperature: -1, tdp: -16, category: '平均气温与露点' },
  { temperature: -2, tdp: -15, category: '平均气温与露点' },
  { temperature: -7, tdp: -15, category: '平均气温与露点' },
  { temperature: 4, tdp: -15, category: '平均气温与露点' },
  { temperature: -3, tdp: -14, category: '平均气温与露点' },
  { temperature: -1, tdp: -14, category: '平均气温与露点' },
  { temperature: 0, tdp: -14, category: '平均气温与露点' },
  { temperature: 1, tdp: -14, category: '平均气温与露点' },
  { temperature: 2, tdp: -14, category: '平均气温与露点' },
  { temperature: 13, tdp: -14, category: '平均气温与露点' },
  { temperature: 1, tdp: -13, category: '平均气温与露点' },
  { temperature: 1, tdp: -13, category: '平均气温与露点' },
  { temperature: 1, tdp: -13, category: '平均气温与露点' },
  { temperature: 3, tdp: -13, category: '平均气温与露点' },
  { temperature: 0, tdp: -13, category: '平均气温与露点' },
  { temperature: -3, tdp: -13, category: '平均气温与露点' },
  { temperature: 1, tdp: -13, category: '平均气温与露点' },
  { temperature: -3, tdp: -13, category: '平均气温与露点' },
  { temperature: 2, tdp: -13, category: '平均气温与露点' },
  { temperature: 13, tdp: -13, category: '平均气温与露点' },
  { temperature: -1, tdp: -13, category: '平均气温与露点' },
  { temperature: 0, tdp: -13, category: '平均气温与露点' },
  { temperature: 4, tdp: -13, category: '平均气温与露点' },
  { temperature: 2, tdp: -12, category: '平均气温与露点' },
  { temperature: -3, tdp: -12, category: '平均气温与露点' },
  { temperature: 0, tdp: -12, category: '平均气温与露点' },
  { temperature: -1, tdp: -12, category: '平均气温与露点' },
  { temperature: -1, tdp: -12, category: '平均气温与露点' },
  { temperature: 3, tdp: -12, category: '平均气温与露点' },
  { temperature: 1, tdp: -11, category: '平均气温与露点' },
  { temperature: 10, tdp: -11, category: '平均气温与露点' },
  { temperature: -2, tdp: -11, category: '平均气温与露点' },
  { temperature: 12, tdp: -11, category: '平均气温与露点' },
  { temperature: 0, tdp: -11, category: '平均气温与露点' },
  { temperature: 1, tdp: -11, category: '平均气温与露点' },
  { temperature: -2, tdp: -10, category: '平均气温与露点' },
  { temperature: 11, tdp: -10, category: '平均气温与露点' },
  { temperature: 6, tdp: -10, category: '平均气温与露点' },
  { temperature: -4, tdp: -10, category: '平均气温与露点' },
  { temperature: 14, tdp: -10, category: '平均气温与露点' },
  { temperature: 14, tdp: -10, category: '平均气温与露点' },
  { temperature: 3, tdp: -9, category: '平均气温与露点' },
  { temperature: -3, tdp: -9, category: '平均气温与露点' },
  { temperature: 10, tdp: -9, category: '平均气温与露点' },
  { temperature: 7, tdp: -9, category: '平均气温与露点' },
  { temperature: -1, tdp: -9, category: '平均气温与露点' },
  { temperature: 6, tdp: -9, category: '平均气温与露点' },
  { temperature: 0, tdp: -9, category: '平均气温与露点' },
  { temperature: 4, tdp: -9, category: '平均气温与露点' },
  { temperature: -3, tdp: -9, category: '平均气温与露点' },
  { temperature: 0, tdp: -9, category: '平均气温与露点' },
  { temperature: -2, tdp: -9, category: '平均气温与露点' },
  { temperature: 14, tdp: -8, category: '平均气温与露点' },
  { temperature: -2, tdp: -8, category: '平均气温与露点' },
  { temperature: -4, tdp: -8, category: '平均气温与露点' },
  { temperature: 8, tdp: -8, category: '平均气温与露点' },
  { temperature: -1, tdp: -8, category: '平均气温与露点' },
  { temperature: 11, tdp: -8, category: '平均气温与露点' },
  { temperature: 4, tdp: -8, category: '平均气温与露点' },
  { temperature: 9, tdp: -7, category: '平均气温与露点' },
  { temperature: 12, tdp: -7, category: '平均气温与露点' },
  { temperature: 2, tdp: -7, category: '平均气温与露点' },
  { temperature: 4, tdp: -7, category: '平均气温与露点' },
  { temperature: 5, tdp: -7, category: '平均气温与露点' },
  { temperature: -2, tdp: -7, category: '平均气温与露点' },
  { temperature: 1, tdp: -7, category: '平均气温与露点' },
  { temperature: 5, tdp: -7, category: '平均气温与露点' },
  { temperature: -3, tdp: -7, category: '平均气温与露点' },
  { temperature: -1, tdp: -7, category: '平均气温与露点' },
  { temperature: 13, tdp: -6, category: '平均气温与露点' },
  { temperature: -2, tdp: -6, category: '平均气温与露点' },
  { temperature: 3, tdp: -6, category: '平均气温与露点' },
  { temperature: -1, tdp: -6, category: '平均气温与露点' },
  { temperature: 0, tdp: -6, category: '平均气温与露点' },
  { temperature: 6, tdp: -6, category: '平均气温与露点' },
  { temperature: 7, tdp: -6, category: '平均气温与露点' },
  { temperature: 7, tdp: -6, category: '平均气温与露点' },
  { temperature: 2, tdp: -6, category: '平均气温与露点' },
  { temperature: -2, tdp: -5, category: '平均气温与露点' },
  { temperature: 16, tdp: -5, category: '平均气温与露点' },
  { temperature: 5, tdp: -5, category: '平均气温与露点' },
  { temperature: 13, tdp: -5, category: '平均气温与露点' },
  { temperature: 3, tdp: -4, category: '平均气温与露点' },
  { temperature: 2, tdp: -4, category: '平均气温与露点' },
  { temperature: 12, tdp: -4, category: '平均气温与露点' },
  { temperature: 10, tdp: -4, category: '平均气温与露点' },
  { temperature: 5, tdp: -4, category: '平均气温与露点' },
  { temperature: 4, tdp: -4, category: '平均气温与露点' },
  { temperature: 2, tdp: -4, category: '平均气温与露点' },
  { temperature: 10, tdp: -4, category: '平均气温与露点' },
  { temperature: 9, tdp: -4, category: '平均气温与露点' },
  { temperature: 7, tdp: -3, category: '平均气温与露点' },
  { temperature: 2, tdp: -3, category: '平均气温与露点' },
  { temperature: 7, tdp: -3, category: '平均气温与露点' },
  { temperature: 14, tdp: -3, category: '平均气温与露点' },
  { temperature: 17, tdp: -3, category: '平均气温与露点' },
  { temperature: 3, tdp: -2, category: '平均气温与露点' },
  { temperature: 12, tdp: -2, category: '平均气温与露点' },
  { temperature: 14, tdp: -2, category: '平均气温与露点' },
  { temperature: 18, tdp: -2, category: '平均气温与露点' },
  { temperature: 18, tdp: -2, category: '平均气温与露点' },
  { temperature: 6, tdp: -2, category: '平均气温与露点' },
  { temperature: 16, tdp: -2, category: '平均气温与露点' },
  { temperature: 13, tdp: -2, category: '平均气温与露点' },
  { temperature: 3, tdp: -1, category: '平均气温与露点' },
  { temperature: 16, tdp: -1, category: '平均气温与露点' },
  { temperature: 3, tdp: -1, category: '平均气温与露点' },
  { temperature: 4, tdp: -1, category: '平均气温与露点' },
  { temperature: 10, tdp: -1, category: '平均气温与露点' },
  { temperature: 16, tdp: -1, category: '平均气温与露点' },
  { temperature: 2, tdp: 0, category: '平均气温与露点' },
  { temperature: 14, tdp: 0, category: '平均气温与露点' },
  { temperature: 22, tdp: 0, category: '平均气温与露点' },
  { temperature: 10, tdp: 0, category: '平均气温与露点' },
  { temperature: 12, tdp: 1, category: '平均气温与露点' },
  { temperature: 12, tdp: 1, category: '平均气温与露点' },
  { temperature: 4, tdp: 1, category: '平均气温与露点' },
  { temperature: 1, tdp: 1, category: '平均气温与露点' },
  { temperature: 16, tdp: 1, category: '平均气温与露点' },
  { temperature: 8, tdp: 1, category: '平均气温与露点' },
  { temperature: 16, tdp: 1, category: '平均气温与露点' },
  { temperature: 13, tdp: 2, category: '平均气温与露点' },
  { temperature: 16, tdp: 2, category: '平均气温与露点' },
  { temperature: 9, tdp: 2, category: '平均气温与露点' },
  { temperature: 19, tdp: 2, category: '平均气温与露点' },
  { temperature: 14, tdp: 2, category: '平均气温与露点' },
  { temperature: 13, tdp: 3, category: '平均气温与露点' },
  { temperature: 11, tdp: 3, category: '平均气温与露点' },
  { temperature: 17, tdp: 3, category: '平均气温与露点' },
  { temperature: 17, tdp: 3, category: '平均气温与露点' },
  { temperature: 16, tdp: 3, category: '平均气温与露点' },
  { temperature: 14, tdp: 3, category: '平均气温与露点' },
  { temperature: 18, tdp: 3, category: '平均气温与露点' },
  { temperature: 19, tdp: 3, category: '平均气温与露点' },
  { temperature: 23, tdp: 4, category: '平均气温与露点' },
  { temperature: 24, tdp: 4, category: '平均气温与露点' },
  { temperature: 16, tdp: 4, category: '平均气温与露点' },
  { temperature: 13, tdp: 4, category: '平均气温与露点' },
  { temperature: 14, tdp: 4, category: '平均气温与露点' },
  { temperature: 22, tdp: 4, category: '平均气温与露点' },
  { temperature: 18, tdp: 4, category: '平均气温与露点' },
  { temperature: 17, tdp: 5, category: '平均气温与露点' },
  { temperature: 10, tdp: 5, category: '平均气温与露点' },
  { temperature: 20, tdp: 5, category: '平均气温与露点' },
  { temperature: 10, tdp: 5, category: '平均气温与露点' },
  { temperature: 18, tdp: 5, category: '平均气温与露点' },
  { temperature: 13, tdp: 5, category: '平均气温与露点' },
  { temperature: 17, tdp: 6, category: '平均气温与露点' },
  { temperature: 18, tdp: 6, category: '平均气温与露点' },
  { temperature: 21, tdp: 6, category: '平均气温与露点' },
  { temperature: 18, tdp: 6, category: '平均气温与露点' },
  { temperature: 21, tdp: 6, category: '平均气温与露点' },
  { temperature: 17, tdp: 7, category: '平均气温与露点' },
  { temperature: 26, tdp: 7, category: '平均气温与露点' },
  { temperature: 12, tdp: 7, category: '平均气温与露点' },
  { temperature: 16, tdp: 7, category: '平均气温与露点' },
  { temperature: 16, tdp: 7, category: '平均气温与露点' },
  { temperature: 14, tdp: 7, category: '平均气温与露点' },
  { temperature: 16, tdp: 7, category: '平均气温与露点' },
  { temperature: 17, tdp: 7, category: '平均气温与露点' },
  { temperature: 22, tdp: 8, category: '平均气温与露点' },
  { temperature: 22, tdp: 8, category: '平均气温与露点' },
  { temperature: 13, tdp: 8, category: '平均气温与露点' },
  { temperature: 12, tdp: 8, category: '平均气温与露点' },
  { temperature: 18, tdp: 8, category: '平均气温与露点' },
  { temperature: 16, tdp: 8, category: '平均气温与露点' },
  { temperature: 13, tdp: 9, category: '平均气温与露点' },
  { temperature: 21, tdp: 9, category: '平均气温与露点' },
  { temperature: 14, tdp: 9, category: '平均气温与露点' },
  { temperature: 19, tdp: 9, category: '平均气温与露点' },
  { temperature: 12, tdp: 9, category: '平均气温与露点' },
  { temperature: 16, tdp: 9, category: '平均气温与露点' },
  { temperature: 18, tdp: 9, category: '平均气温与露点' },
  { temperature: 20, tdp: 9, category: '平均气温与露点' },
  { temperature: 19, tdp: 9, category: '平均气温与露点' },
  { temperature: 19, tdp: 10, category: '平均气温与露点' },
  { temperature: 17, tdp: 10, category: '平均气温与露点' },
  { temperature: 13, tdp: 10, category: '平均气温与露点' },
  { temperature: 26, tdp: 10, category: '平均气温与露点' },
  { temperature: 14, tdp: 11, category: '平均气温与露点' },
  { temperature: 22, tdp: 11, category: '平均气温与露点' },
  { temperature: 19, tdp: 11, category: '平均气温与露点' },
  { temperature: 18, tdp: 11, category: '平均气温与露点' },
  { temperature: 21, tdp: 11, category: '平均气温与露点' },
  { temperature: 20, tdp: 11, category: '平均气温与露点' },
  { temperature: 20, tdp: 11, category: '平均气温与露点' },
  { temperature: 18, tdp: 11, category: '平均气温与露点' },
  { temperature: 30, tdp: 11, category: '平均气温与露点' },
  { temperature: 24, tdp: 11, category: '平均气温与露点' },
  { temperature: 16, tdp: 12, category: '平均气温与露点' },
  { temperature: 24, tdp: 12, category: '平均气温与露点' },
  { temperature: 18, tdp: 12, category: '平均气温与露点' },
  { temperature: 29, tdp: 12, category: '平均气温与露点' },
  { temperature: 17, tdp: 12, category: '平均气温与露点' },
  { temperature: 14, tdp: 12, category: '平均气温与露点' },
  { temperature: 13, tdp: 12, category: '平均气温与露点' },
  { temperature: 27, tdp: 13, category: '平均气温与露点' },
  { temperature: 28, tdp: 13, category: '平均气温与露点' },
  { temperature: 23, tdp: 13, category: '平均气温与露点' },
  { temperature: 16, tdp: 13, category: '平均气温与露点' },
  { temperature: 28, tdp: 13, category: '平均气温与露点' },
  { temperature: 22, tdp: 13, category: '平均气温与露点' },
  { temperature: 27, tdp: 13, category: '平均气温与露点' },
  { temperature: 22, tdp: 13, category: '平均气温与露点' },
  { temperature: 23, tdp: 13, category: '平均气温与露点' },
  { temperature: 14, tdp: 13, category: '平均气温与露点' },
  { temperature: 21, tdp: 13, category: '平均气温与露点' },
  { temperature: 23, tdp: 13, category: '平均气温与露点' },
  { temperature: 26, tdp: 13, category: '平均气温与露点' },
  { temperature: 14, tdp: 13, category: '平均气温与露点' },
  { temperature: 18, tdp: 14, category: '平均气温与露点' },
  { temperature: 23, tdp: 14, category: '平均气温与露点' },
  { temperature: 18, tdp: 14, category: '平均气温与露点' },
  { temperature: 17, tdp: 14, category: '平均气温与露点' },
  { temperature: 27, tdp: 14, category: '平均气温与露点' },
  { temperature: 28, tdp: 14, category: '平均气温与露点' },
  { temperature: 27, tdp: 14, category: '平均气温与露点' },
  { temperature: 28, tdp: 14, category: '平均气温与露点' },
  { temperature: 23, tdp: 14, category: '平均气温与露点' },
  { temperature: 24, tdp: 14, category: '平均气温与露点' },
  { temperature: 26, tdp: 14, category: '平均气温与露点' },
  { temperature: 28, tdp: 15, category: '平均气温与露点' },
  { temperature: 29, tdp: 15, category: '平均气温与露点' },
  { temperature: 22, tdp: 15, category: '平均气温与露点' },
  { temperature: 21, tdp: 15, category: '平均气温与露点' },
  { temperature: 27, tdp: 15, category: '平均气温与露点' },
  { temperature: 27, tdp: 15, category: '平均气温与露点' },
  { temperature: 24, tdp: 15, category: '平均气温与露点' },
  { temperature: 23, tdp: 15, category: '平均气温与露点' },
  { temperature: 25, tdp: 16, category: '平均气温与露点' },
  { temperature: 22, tdp: 16, category: '平均气温与露点' },
  { temperature: 28, tdp: 16, category: '平均气温与露点' },
  { temperature: 28, tdp: 16, category: '平均气温与露点' },
  { temperature: 20, tdp: 16, category: '平均气温与露点' },
  { temperature: 18, tdp: 16, category: '平均气温与露点' },
  { temperature: 27, tdp: 16, category: '平均气温与露点' },
  { temperature: 21, tdp: 16, category: '平均气温与露点' },
  { temperature: 27, tdp: 16, category: '平均气温与露点' },
  { temperature: 28, tdp: 16, category: '平均气温与露点' },
  { temperature: 23, tdp: 16, category: '平均气温与露点' },
  { temperature: 24, tdp: 16, category: '平均气温与露点' },
  { temperature: 25, tdp: 17, category: '平均气温与露点' },
  { temperature: 24, tdp: 17, category: '平均气温与露点' },
  { temperature: 24, tdp: 17, category: '平均气温与露点' },
  { temperature: 23, tdp: 17, category: '平均气温与露点' },
  { temperature: 29, tdp: 17, category: '平均气温与露点' },
  { temperature: 23, tdp: 17, category: '平均气温与露点' },
  { temperature: 23, tdp: 17, category: '平均气温与露点' },
  { temperature: 27, tdp: 17, category: '平均气温与露点' },
  { temperature: 28, tdp: 17, category: '平均气温与露点' },
  { temperature: 22, tdp: 17, category: '平均气温与露点' },
  { temperature: 22, tdp: 17, category: '平均气温与露点' },
  { temperature: 27, tdp: 17, category: '平均气温与露点' },
  { temperature: 26, tdp: 17, category: '平均气温与露点' },
  { temperature: 27, tdp: 17, category: '平均气温与露点' },
  { temperature: 25, tdp: 17, category: '平均气温与露点' },
  { temperature: 24, tdp: 17, category: '平均气温与露点' },
  { temperature: 27, tdp: 17, category: '平均气温与露点' },
  { temperature: 21, tdp: 17, category: '平均气温与露点' },
  { temperature: 22, tdp: 17, category: '平均气温与露点' },
  { temperature: 26, tdp: 17, category: '平均气温与露点' },
  { temperature: 21, tdp: 17, category: '平均气温与露点' },
  { temperature: 18, tdp: 17, category: '平均气温与露点' },
  { temperature: 23, tdp: 17, category: '平均气温与露点' },
  { temperature: 27, tdp: 18, category: '平均气温与露点' },
  { temperature: 26, tdp: 18, category: '平均气温与露点' },
  { temperature: 27, tdp: 18, category: '平均气温与露点' },
  { temperature: 25, tdp: 18, category: '平均气温与露点' },
  { temperature: 25, tdp: 18, category: '平均气温与露点' },
  { temperature: 27, tdp: 18, category: '平均气温与露点' },
  { temperature: 20, tdp: 18, category: '平均气温与露点' },
  { temperature: 23, tdp: 18, category: '平均气温与露点' },
  { temperature: 26, tdp: 18, category: '平均气温与露点' },
  { temperature: 24, tdp: 18, category: '平均气温与露点' },
  { temperature: 28, tdp: 18, category: '平均气温与露点' },
  { temperature: 22, tdp: 18, category: '平均气温与露点' },
  { temperature: 26, tdp: 18, category: '平均气温与露点' },
  { temperature: 22, tdp: 18, category: '平均气温与露点' },
  { temperature: 29, tdp: 18, category: '平均气温与露点' },
  { temperature: 27, tdp: 19, category: '平均气温与露点' },
  { temperature: 21, tdp: 19, category: '平均气温与露点' },
  { temperature: 26, tdp: 19, category: '平均气温与露点' },
  { temperature: 24, tdp: 19, category: '平均气温与露点' },
  { temperature: 26, tdp: 19, category: '平均气温与露点' },
  { temperature: 26, tdp: 19, category: '平均气温与露点' },
  { temperature: 23, tdp: 19, category: '平均气温与露点' },
  { temperature: 23, tdp: 19, category: '平均气温与露点' },
  { temperature: 24, tdp: 19, category: '平均气温与露点' },
  { temperature: 31, tdp: 19, category: '平均气温与露点' },
  { temperature: 29, tdp: 19, category: '平均气温与露点' },
  { temperature: 30, tdp: 20, category: '平均气温与露点' },
  { temperature: 24, tdp: 20, category: '平均气温与露点' },
  { temperature: 26, tdp: 20, category: '平均气温与露点' },
  { temperature: 28, tdp: 20, category: '平均气温与露点' },
  { temperature: 23, tdp: 20, category: '平均气温与露点' },
  { temperature: 22, tdp: 20, category: '平均气温与露点' },
  { temperature: 27, tdp: 21, category: '平均气温与露点' },
  { temperature: 28, tdp: 21, category: '平均气温与露点' },
  { temperature: 24, tdp: 21, category: '平均气温与露点' },
  { temperature: 23, tdp: 21, category: '平均气温与露点' },
  { temperature: 26, tdp: 21, category: '平均气温与露点' },
  { temperature: 29, tdp: 21, category: '平均气温与露点' },
  { temperature: 26, tdp: 22, category: '平均气温与露点' },
  { temperature: 27, tdp: 22, category: '平均气温与露点' },
  { temperature: 27, tdp: 22, category: '平均气温与露点' },
  { temperature: 26, tdp: 22, category: '平均气温与露点' },
  { temperature: 27, tdp: 22, category: '平均气温与露点' },
  { temperature: 29, tdp: 22, category: '平均气温与露点' },
  { temperature: 28, tdp: 22, category: '平均气温与露点' },
  { temperature: 31, tdp: 23, category: '平均气温与露点' },
  { temperature: 29, tdp: 23, category: '平均气温与露点' },
  { temperature: 28, tdp: 23, category: '平均气温与露点' },
  { temperature: 28, tdp: 23, category: '平均气温与露点' },
  { temperature: 31, tdp: 23, category: '平均气温与露点' },
  { temperature: 29, tdp: 24, category: '平均气温与露点' },
  { temperature: 30, tdp: 24, category: '平均气温与露点' }
]
let dataset2 = [...dataset]

dataset2 = dataset2.reduce((a, b) => {
  let curr = a[a.length - 1]
  if (curr && curr.tdp === b.tdp) {
    curr.temperature.push(b.temperature)
  } else {
    a.push({
      temperature: [b.temperature],
      tdp: b.tdp
    })
  }
  return a
}, [])
dataset2 = dataset2.map(d => {
  d.category = '气温平均露点'
  d.temperature = Math.round(d.temperature.reduce((a, b) => a + b) / d.temperature.length)
  return d
})
const { Chart, Scatter, Line, Legend, Tooltip, Axis } = qcharts
const chart = new Chart({
  container: '#app'
})
let clientRect = { bottom: 50 }
chart.source([...dataset, ...dataset2], {
  row: 'category',
  value: 'temperature',
  text: 'tdp'
})

const ds = chart.dataset
const d1 = ds.selectRows('平均气温与露点')
const d2 = ds.selectRows('气温平均露点')
const scatter = new Scatter({
  clientRect,
  showGuideLine: true
}).source(d1)
const line = new Line({ clientRect, layoutX: 'value' }).source(d2)
line.style('line', function(attrs, data, i) {
  return { smooth: true, lineWidth: 3, strokeColor: '#0a0' }
})
line.style('point', function(attrs) {
  return { display: 'none' }
})

const toolTip = new Tooltip({
  title: data => '温度与露点：',
  formatter: data => {
    return `温度：${data.temperature}C  露点：${data.tdp}% `
  }
})
const legend = new Legend()
const axisLeft = new Axis({ orient: 'left', name: 'letf-平均气温与露点', clientRect })
  .style('axis', false)
  .style('scale', false)
  .style('name', { translate: [-60, 0] })
const axisBottom = new Axis({ name: 'tdp值', clientRect }).style('name', { translate: [20, 20], fillColor: '#f00' })
const axisTop = new Axis({ orient: 'top', name: 'top-折线图坐标', type: 'category' }).source(d2).style('name', { translate: [-30, -30] })

chart.append([scatter, line, axisBottom, axisLeft, toolTip, legend])
```

:::
