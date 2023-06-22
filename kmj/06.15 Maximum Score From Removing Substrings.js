/*1717.
You are given a string s and two integers x and y. You can perform two types of operations any number of times.

Remove substring "ab" and gain x points.
For example, when removing "ab" from "cabxbae" it becomes "cxbae".
Remove substring "ba" and gain y points.
For example, when removing "ba" from "cabxbae" it becomes "cabxe".
Return the maximum points you can gain after applying the above operations on s.
 
Example 1:

Input: s = "cdbcbbaaabab", x = 4, y = 5
Output: 19
Explanation:
- Remove the "ba"  "cdbcbbaaa[ba]b". Now, s = "cdbcbbaaab" and 5 points are added to the score.
- Remove the "ab"  "cdbcbbaa[ab]".   Now, s = "cdbcbbaa" and 4 points are added to the score.
- Remove the "ba"  "cdbcb[ba]a".     Now, s = "cdbcba" and 5 points are added to the score.
- Remove the "ba"  "cdbc[ba]".       Now, s = "cdbc" and 5 points are added to the score.
Total score = 5 + 4 + 5 + 5 = 19.

Example 2:

Input: s = "aabbaaxybbaabb", x = 5, y = 4
Output: 20  
- Remove the "ab" "aabbaaxybba[ab]b" and 5 points are added to the score.
- Remove the "ab" "aabbaaxybb[ab]" and 5 points are added to the score.
- Remove the "ab" "a[ab]baaxybb" and 5 points are added to the score.
- Remove the "ab" "[ab]aaxybb" and 5 points are added to the score.
Total score = 5 + 5 + 5 + 5 = 20.
*/

//ㅜㅜ 문제를 풀지 못했어요...ㅜㅜ