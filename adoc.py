import os, re
import fnmatch
import adoc_javascript_parser as jp
import adoc_angular_parser as ap
import adoc_docgen as dg


path = '../AngularPristineTemplate/app/'
docblocks = []
modules = []


files = [os.path.join(dirpath, f)
	for dirpath, dirnames, files in os.walk(path)
	for f in fnmatch.filter(files, '*.js')]


for fileName in files:
	# open file
	file = open(fileName, 'r')
	fileName = re.search('[\w\d]+\.[\w\d]+', fileName).group(0)
	# read all lines
	lines = file.readlines()
	# parse file for angular modules
	modules.append(fileName)
	modules.append(ap.parseFile(lines))
	# parse file for DocBlocks
	docblocks.append([fileName]+jp.parseFile(lines))
	file.close()

dg.genHtml(docblocks, modules)
