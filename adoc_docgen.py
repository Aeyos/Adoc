header = '''
<!DOCTYPE hmtl>
<html>
	<head>
	<script type="text/javascript">'''
base = '''window.__adoc_types = ['Module','Function','Boolean','Null','Undefined','Number','String','Symbol','Object'];
window.__adoc_files = [];
window.__adoc_modules = [];
window.__adoc_objects = [];
'''
footer = '''
	</script>
	</head>
	<body>
	</body>
</html>'''

def genHtml (dbk, mds) :
	file = open('generated/app/js/docdata.js', 'w')
	# file.write(header)
	file.write(base)
	# writing modules
	for i,moduleGroup in enumerate(mds):
		if not i%2:
			file.write('window.__adoc_files.push(\'{}\');\n'.format(moduleGroup))
		else:
			for module in moduleGroup:
				name = module[0]
				dependencies = '\', \''.join(module[1:])
				dependencies = 'undefined' if not dependencies else '[\''+dependencies+'\']'
				file.write(
'''window.__adoc_modules.push({
	name : \''''+name+'''\',
	dependencies : '''+dependencies+'''
});
''')
	for i,docblockGroup in enumerate(dbk):
		# print(docblockGroup[0])
		currentFile = docblockGroup[0]
		del docblockGroup[0]
		for docblock in docblockGroup:
			file.write('window.__adoc_objects.push({\n')
			for i,prop in enumerate(docblock):
				# print('PROP : ',prop.split(' ')[0],'>>>>>>',' '.join(prop.split(' ')[1:]))
				file.write('\t{} : \'{}\',\n'.format(prop.replace('\n','').split(' ')[0]+'_'+str(i),' '.join(prop.replace('\n','').replace('\'','\\\'').split(' ')[1:])))
			file.write('\tfile : \''+currentFile+'\'')
			file.write('\n});\n')
	# file.write(footer)
	file.close