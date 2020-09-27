#coding:utf-8
import os
import sys
import io
import ftplib

ip = '***.*.*.*'
port=21
user = '******'
pwd = '******'
vision = ''
project = ''


def printme(str):
	print '【打印函数】',str

def upload():
    cmdList = []
    cmdList.append('open ' + ip);
    cmdList.append('user ' + user + ' ' + pwd);
    cmdList.append('cd /' + project);
    cmdList.append('mkdir ' + vision);
    cmdList.append('put ' + './zip/' + project + '.zip' + ' ' + '/' + project + '/' + vision + '/' + project +'.zip');

    with io.FileIO("ftp.txt", "w") as file:
       file.write('\n'.join(cmdList))
    os.system('ftp -n < ./ftp.txt')
    os.remove('./ftp.txt')
    print ftp.dir()


printme('Argument List:' + str(sys.argv))

#下表从0开始
if len(sys.argv) >= 3:
    project = sys.argv[1]
    vision = sys.argv[2]

if not vision:
    printme('命令错误, 缺少参数')
    exit()

#创建ftp对象实例  
#通过账号和密码登录FTP服务器
#To open a connection to the FTP server, create an FTP server object using the ftplib.FTP([host [, user [, passwd]]]) method.
ftp = ftplib.FTP(ip,user,pwd)

try:
    ftp.cwd(project)
except:
    try:
        #mkdir命令
        ftp.mkd(project)
    except:
        printme('except:You have no authority to make directory: %s'%project)
finally:
    printme('上传'+project+'项目------>版本号: '+vision+'------>zip包名: '+project+'.zip')
    #上传到ftp
    upload() 
    printme('上传到ftp成功!')
    ftp.quit()
    ftp.close()

# python ftp.py 项目 版本号
# python ftp.py testc  1.0.2
