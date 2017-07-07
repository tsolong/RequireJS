require.config({
    //baseUrl: 'js/',
    paths: {
        //jquery: 'lib/jquery-1.10.2.min',
        //m: 'modules/math',
        //jquery: 'http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min',
    }
});

require(['lib/jquery-1.10.2.min', 'modules/math'], function ($, math) {

 console.log(math.add(2, 2));

 //$(function () {
 console.log('页面加载完成');
 //});

 });

 console.log('123');


