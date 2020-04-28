
#!/bin/bash



# result=$(git branch --contains $1)
# echo "Commit SHA1: $1"
# echo "Branch name: $result"


# result2=$(git diff --stat HEAD^..HEAD)
# echo "$result2"

# result3=$(git cherry-pick -n $1)
# echo "$result3"


#!/bin/bash
hasGit=`which git` # 判断是否存在git
msg=${1:-'auto commit'} # 获取终端输入的第一个参数，若为空则为auto commit
echo hasGit:"$hasGit"
echo msg:"$msg"


if [ ! $hasGit ];then
  echo 'Please download git first!';
  exit 1;
else 
  result=`git branch | grep "*"` # 获取分支名
  curBranch=${result:2} # 去除多余的*
  git add .
  git commit -m "$msg"
fi

