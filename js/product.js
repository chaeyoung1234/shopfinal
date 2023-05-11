$(function(){
  
  
  $.ajax({

        url: "./json/product.json",

        dataType: "json",

        success : function(data){

          if(data.length>0){

            

            for(var i in data){
      
              $(".imgbox").eq(i).find("img").attr( "src", "img/"+data[i].url); 
              $(".textbox1").eq(i).find("h3").text(data[i].title);
              $(".textbox1").eq(i).find("p").text(data[i].text);
              $(".textbox1").eq(i).find(".a").text(data[i].price);
              
            }

          }

        }

      })

    });