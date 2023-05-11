$(function(){
  
  
  $.ajax({

        url: "./json/banner.json",

        dataType: "json",

        success : function(data){

          if(data.length>0){

            
            
              $(".img1").find("img").attr("src","img/"+data[0].url);
              $(".img2").find("img").attr("src","img/"+data[1].url);
              $(".img3").find("img").attr("src","img/"+data[2].url);

            

          }

        }

      })

    });