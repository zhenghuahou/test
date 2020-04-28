
#!/bin/bash

hasGit=`which git` # 判断是否存在git
msg=${1:-'auto commit'} # 获取终端输入的第一个参数，若为空则为auto commit

echo "git提交注释:$1"

if [ ! $hasGit ];then
  echo 'Please download git first';
  exit 1;
else 
  result=`git branch | grep "*"` # 获取分支名
  curBranch=${result:2} # 去除多余的*
  echo "当前分支:$curBranch"
  git add .
  git commit -m "$msg"
  git push origin
fi

