$(document).ready(function () {
    /* 以下设置翻页后网址不显示Page ID */
    $.mobile.changePage.defaults.changeHash = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;
    /* 以上设置翻页后网址不显示Page ID */

    $(document).on("pagecontainerchange", function () {
        var current = $(".ui-page-active").prop("id");
        // Remove active class from nav buttons
        $("[data-role='navbar'] a.ui-btn-active").removeClass("ui-btn-active");
        // Add active class to current nav button
        $("[data-role='navbar'] a").each(function () {
            var href = $(this).prop("href");
            if (href.indexOf(current, href.length - current.length) !== -1) {
                $(this).addClass("ui-btn-active");
            }
        });
    });

    /* 以下是图片幻灯代码 */
    var myImages = ["/assets/images/s1.jpg", "/assets/images/s2.jpg", "/assets/images/s3.jpg"]; //用一个数组保存所有的图片文件名。
    var myTexts = ["零陵古城柳子庙", "血鸭", "九嶷山风景"]; //用一个数组保存所有的图片文件名。

    $('#myImg').attr('src', myImages[0]);
    $('#myText').html(myTexts[0]);

    var i = 1; //用一个计数器来指向数组下标
    $("#changeImage").click(function () {
        if (i < myImages.length) {
            $('#myImg').attr('src', myImages[i]);
            $('#myText').html(myTexts[i]);
        }
        else {
            i = 0;
            $('#myImg').attr('src', myImages[i]);
            $('#myText').html(myTexts[i]);
        }

        i++;
    });
    /* 以上是图片幻灯代码 */

    /* 以下是点击小图弹窗显示大图的事件函数 */
    $(".popupImg").click(function () {
        $("#popupWinImg").attr("src", $(this).attr("src"));
        $("#myImgPopup").popup("open");
    });
    /* 以上是点击小图弹窗显示大图的事件函数 */

    /* 以下是page切换时暂停媒体文件播放 */
    $(document).on('pagebeforehide', function () {
        $("audio, video").each(function () {
            $(this)[0].pause();
        });
    });
    /* 以上是page切换时暂停媒体文件播放 */

    /* 以下是点击播放时暂停其它媒体文件播放 */
    $(document).ready(function () {
        $("audio, video").on("play", function () {
            $("audio, video").not(this).each(function () {
                $(this)[0].pause();
            });
        });
    });
    /* 以上是点击播放时暂停其它媒体文件播放 */


});
