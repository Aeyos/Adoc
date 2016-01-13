import re

blocks = re.compile('\/\*\*[\s\S]*?\*\/')
comments = re.compile('(?:@([\s\S]*?)\*)')

def parseFile (lines) :
	retVal = []
	lines = ' '.join(lines)
	matches = blocks.findall(lines)
	if matches:
		for match in matches:
			match = comments.findall(match)
			if match:
				# for item in match:
				# 	print(item)
				retVal.append(match)
	return retVal

# Get block documentation
# \/\*\*[\s\S]*?\*\/
# Get sections of the documentation
# (?:(@[\s\S]*?)\*)