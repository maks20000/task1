$(document).ready(()=>{
    $(".tip_block").hover(()=>{
        $(".tip_info").removeClass("hidden");
        setTimeout(()=>{
            $(".tip_info").addClass("opacity_vis");
        },0)
    },()=>{
        $(".tip_info").removeClass("opacity_vis")
        setTimeout(()=>{
            $(".tip_info").addClass("hidden");
        },500)
    })

    $(".hover_map").hover(()=>{
        $(".main_map").removeClass("hidden");
        setTimeout(()=>{
            $(".main_map").addClass("opacity_vis");
        },0)
    },()=>{
        $(".main_map").removeClass("opacity_vis")
        setTimeout(()=>{
            $(".main_map").addClass("hidden");
        },500)
    })

    $(".popup_close").click((e)=>{
        $(".popup_container").hide();
        $(e.target).parent(".popup").hide().removeClass("opacity_vis");
    });

    $(".show-popup").click(()=>{
        $(".popup_container").css({"display":"flex"});
        $(".popup.main").show();
        setTimeout(()=>{
        $(".popup.main").addClass("opacity_vis");
        },0)
    })

    $(".popup_form").submit((e)=>{
        e.preventDefault();
        $(e.target).parent(".popup").removeClass("opacity_vis").hide();
        $(".popup.success").fadeIn("slow").addClass("opacity_vis");
    })

    var parallax = $(".parallax_block");
    $(window).scroll(()=>{
        var scrl = $(this).scrollTop();
        parallax.css({"transform":"translate(0%,"+scrl/4+"%"});
    })

    var menu = $(".main_menu_list");
    var top_block = $(".top_block_item.top_text");
    $(window).resize(()=>{
        check_width($(this).width())
    });

    $(".burger svg").click(()=>{
        $(".mobile-nav").css({"display":"flex"})
    });

    $(".nav_close").click(()=>{
        $(".mobile-nav").hide();
    });

    check_width($(window).width());

    function check_width(width) {
        if (width>992) {
            $(".main_menu") .append(menu)
        }
        if (width<=992) {
            $(".mobile-nav").append(menu)
        }
        if (width>600) {
            $(".logo").after(top_block);
        }
        if (width<=600) {
            $(".logo").append(top_block);
        }
    }
})