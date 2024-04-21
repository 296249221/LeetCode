class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        result = ''
        dic = {
            '}': '{',
            ']': '[',
            ')': '('
        }
        for i in s:
            if i in ['(', '[', '{']:
                result += i
            else:
                if not result.endswith(dic[i]):
                    return False
                result = result[:-1]
        return not len(result)