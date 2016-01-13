import re

moduleRegex = re.compile("angular\.module\s*\(\s*[\'\"]([\w\$][\w\d\-\_\$]*)[\'\"]\s*,\s*\[((?:\s*[\'\"][\w\$][\w\d\-\_\$]*[\'\"]\s*,?)*)\]")
moduleDependencyRegex = re.compile("\s*[\'\"]([\w\$][\w\d\-\_\$]*)[\'\"],?")
class Module:
	def __init__ (self) :
		self._name = 0
		self._description = 0
		self._requires = 0
		self._type = 0
	def valid (self):
		if(not self._name):
			return False
		else:
			return True

def parseFile (lines) :
	lines = '\n'.join(lines)
	matches = moduleRegex.findall(lines)
	returnValue = []
	for match in matches:
	# 	print(' --- {}, IS : {} --- '.format(match[0], ' '.join(moduleDependencyRegex.findall(match[1]))))
		returnValue.append([match[0]] + moduleDependencyRegex.findall(match[1]))
	return returnValue