/**
 * Groups Object holds 4 key-value pairs
 * The keys are the block letters: s,p,d,f
 * The values are the element numbers in those blocks
 *
 * The keys (or blocks) partition the table into
 * groups roughly corasponding outer shell of the elements
 *
 * General outer shell configurations
 * s block elements: ns1-2 where n=2-7
 * p block elements: ns1 np6 to ns2 np6
 * d block elements: (n-1)d1-10 ns1-2  where n=4-7.
 * f block elements: (n-2) f 0-14 (n-1) d0-1 ns2
 * https://classnotes.org.in/class11/chemistry/classification-elements-periodicity-properties/division-elements-s-p-d-f-block/
 */
module.exports = {
  groups: {
    s: [1, 2, 3, 4, 11, 12, 19, 20, 37, 38, 55, 56, 87, 88],
    p: [
      5,
      6,
      7,
      8,
      9,
      10,
      13,
      14,
      15,
      16,
      17,
      18,
      31,
      32,
      33,
      34,
      35,
      36,
      49,
      50,
      51,
      52,
      53,
      54,
      81,
      82,
      83,
      84,
      85,
      86,
      113,
      114,
      115,
      116,
      117,
      118
    ],
    d: [
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      57,
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80,
      89,
      104,
      105,
      106,
      107,
      108,
      109,
      110,
      111,
      112
    ],
    f: [
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70,
      71,
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99,
      100,
      101,
      102,
      103
    ]
  }
};
