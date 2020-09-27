console.log(' 输入npm run dev 命令会先执行我这个js文件');
console.log(' 6s之后才会执行npm run dev命令');


setTimeout(function(){
    console.log(`${process.env.npm_package_repository_url}`);
},6000)