/**
 * 所有自己定义的方法都写在这里
 */

layui.use('layer', function(){
    var layer = layui.layer;

    // layer.msg('hello');


    /** 绑定工作经历弹窗事件      我在index.html中对应div上增加了改变鼠标手势*/
    /** 两个窗口目前来看格式相同，给个通用calss：myWindow作为css类名*/
    $(".showWork").on('click', function () {
        // 获取经历信息
        let imgUrl = $(this).find('img').attr('src');
        let name = $(this).find('h3').text();
        let job = $(this).find('p').eq(0).text();
        let time = $(this).find('p').eq(1).text();
        let content = $(this).find('p').eq(2).text();

        // console.log(this)
        // console.log(imgUrl, name, job, time, content);
        layer.open({
            type: 1,
            title: job,
            content: `<div class="up-c">
                        <img src="${imgUrl}" WIDTH="170px" height="170px"/>
                        <div>
                            <fieldset class="layui-elem-field">
                                <legend><strong>经历</strong></legend>
                                <div class="layui-field-box">
                                    <p>公司名称：${name}</p>
                                    <p>任职职位：${job}</p>
                                    <p>在职时间：${time}</p>
                                </div>
                            </fieldset>
                        </div>
                      </div>
                      <div class="down-c">
                        <fieldset class="layui-elem-field">
                            <legend><strong>工作内容</strong></legend>
                            <div class="layui-field-box"><p>${content}</p></div>
                        </fieldset>
                      </div>`,
            area: ['800px', '600px'],
            // area: '30%',
            shadeClose: true,
            anim: 1,
            resize: false,
            move: false,
            skin: 'myWindow'
        });
    });

    /** 绑定项目经验弹窗事件      我在index.html中对应div上增加了改变鼠标手势*/
    $(".showPortfolio").on('click', function () {
        // 获取经历信息
        let imgUrl = $(this).find('img').attr('src');   // 主图
        let name = $(this).find('a').text();   // 名称
        let skill = $(this).find('small').text(); // 项目技术

        let time = $(this).find('span').eq(0).text();  // 周期
        let content = $(this).find('span').eq(1).text();  // 内容

        console.log(this)
        console.log(imgUrl, name, skill, time, content);
        layer.open({
            type: 1,
            title: name,
            content: `<div class="up-c">
                        <img src="${imgUrl}" WIDTH="170px" height="170px"/>
                        <div>
                            <fieldset class="layui-elem-field">
                                <legend><strong>经历</strong></legend>
                                <div class="layui-field-box">
                                    <p>项目名称：${name}</p>
                                    <p>项目周期：${time}</p>
                                </div>
                            </fieldset>
                        </div>
                      </div>
                      <div class="down-c">
                      <div>
                            <fieldset class="layui-elem-field">
                                <legend><strong>技术</strong></legend>
                                <div class="layui-field-box">
                                    <p class="skill">${skill}</p>
                                </div>
                            </fieldset>
                        </div>
                        <fieldset class="layui-elem-field">
                            <legend><strong>工作内容</strong></legend>
                            <div class="layui-field-box"><p>${content}</p></div>
                        </fieldset>
                      </div>`,
            area: ['800px', '600px'],
            // area: '30%',
            shadeClose: true,
            anim: 1,
            resize: false,
            move: false,
            skin: 'myWindow'
        });
    });
});
